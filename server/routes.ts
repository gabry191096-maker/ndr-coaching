import type { Express } from "express";
import { createServer, type Server } from "http";
import DOMPurify from "isomorphic-dompurify";
import { storage } from "./storage";
import { insertBlogPostSchema, insertEmailSubscriberSchema } from "@shared/schema";
import { requireAuth } from "./middleware/auth";
import { Resend } from "resend";

export async function registerRoutes(app: Express): Promise<Server> {
  // Rate limiting for login attempts
  const loginAttempts = new Map<string, { count: number; resetAt: number }>();
  
  // Authentication routes
  app.post("/api/auth/login", async (req, res) => {
    const { username, password } = req.body;
    const clientIp = req.ip || "unknown";
    
    // Check rate limiting (max 5 attempts per 15 minutes)
    const now = Date.now();
    const attempts = loginAttempts.get(clientIp);
    
    if (attempts && attempts.count >= 5 && attempts.resetAt > now) {
      return res.status(429).json({ 
        message: "Too many login attempts. Please try again in 15 minutes." 
      });
    }
    
    // Validate credentials
    const adminUsername = process.env.ADMIN_USERNAME || "admin";
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminPassword) {
      return res.status(500).json({ 
        message: "Server configuration error. Please contact administrator." 
      });
    }
    
    if (username === adminUsername && password === adminPassword) {
      // Successful login - clear attempts and regenerate session to prevent fixation
      loginAttempts.delete(clientIp);
      
      // Regenerate session to prevent session fixation attacks
      req.session.regenerate((err) => {
        if (err) {
          return res.status(500).json({ message: "Login failed. Please try again." });
        }
        
        req.session.isAdmin = true;
        req.session.userId = "admin";
        
        req.session.save((err) => {
          if (err) {
            return res.status(500).json({ message: "Login failed. Please try again." });
          }
          res.json({ message: "Login successful" });
        });
      });
      return;
    }
    
    // Failed login - increment attempts
    if (!attempts || attempts.resetAt < now) {
      loginAttempts.set(clientIp, { count: 1, resetAt: now + 15 * 60 * 1000 });
    } else {
      attempts.count++;
    }
    
    res.status(401).json({ message: "Invalid credentials" });
  });
  
  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.json({ message: "Logged out successfully" });
    });
  });
  
  app.get("/api/auth/session", (req, res) => {
    if (req.session.isAdmin) {
      return res.json({ isAuthenticated: true, isAdmin: true });
    }
    res.json({ isAuthenticated: false, isAdmin: false });
  });

  // Blog routes
  app.get("/api/blog", async (_req, res) => {
    const posts = await storage.getAllBlogPosts();
    res.json(posts);
  });

  app.get("/api/blog/:slug", async (req, res) => {
    const { slug } = req.params;
    const post = await storage.getBlogPostBySlug(slug);
    
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    
    res.json(post);
  });

  app.post("/api/blog", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      
      // Sanitize HTML content to prevent XSS attacks
      const sanitizedData = {
        ...validatedData,
        content: DOMPurify.sanitize(validatedData.content),
        excerpt: DOMPurify.sanitize(validatedData.excerpt),
        title: DOMPurify.sanitize(validatedData.title),
      };
      
      const post = await storage.createBlogPost(sanitizedData);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ message: "Invalid blog post data" });
    }
  });

  // Email subscriber routes
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertEmailSubscriberSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getEmailSubscriberByEmail(validatedData.email);
      if (existing) {
        return res.status(200).json({ 
          message: "You're already subscribed!", 
          discountCode: existing.discountClaimed 
        });
      }
      
      const subscriber = await storage.createEmailSubscriber(validatedData);
      res.status(201).json({ 
        message: "Thanks for subscribing!", 
        discountCode: subscriber.discountClaimed 
      });
    } catch (error) {
      res.status(400).json({ message: "Invalid email address" });
    }
  });

    // Contact form route
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email address" });
      }

      // Initialize Resend
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Sanitize message content
      const sanitizedMessage = DOMPurify.sanitize(message);

      // Send email
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: [process.env.RECIPIENT_EMAIL || "gabriele@ndrcoaching.co.uk"],
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${sanitizedMessage}</p>
        `,
      });

      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ message: "Failed to send message. Please try again." });
    }
  });

  app.get("/api/subscribers", requireAuth, async (_req, res) => {
    const subscribers = await storage.getAllEmailSubscribers();
    res.json(subscribers);
  });

  const httpServer = createServer(app);

  return httpServer;
}
