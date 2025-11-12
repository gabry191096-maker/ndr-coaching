import type { Express } from "express";
import { createServer, type Server } from "http";
import DOMPurify from "isomorphic-dompurify";
import { storage } from "./storage";
import { insertBlogPostSchema, insertEmailSubscriberSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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

  // Email subscriber route
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

  const httpServer = createServer(app);

  return httpServer;
}
