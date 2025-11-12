import { type User, type InsertUser, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    
    // Add sample blog posts
    this.seedBlogPosts();
  }

  private seedBlogPosts() {
    const samplePosts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "Best Running Routes in Battersea and Wandsworth",
        slug: "best-running-routes-battersea-wandsworth",
        excerpt: "Discover the most scenic and effective running routes in Battersea, from Thames Path loops to Wandsworth Common circuits. Perfect for marathon training and easy runs.",
        content: `<p>Living and training in Battersea gives you access to some of London's best running routes. Whether you're preparing for a marathon or enjoying an easy recovery run, here are my top picks for local routes.</p>
        
        <h2>Thames Path Loop (5-10km)</h2>
        <p>The Thames Path offers flat, scenic running with iconic views. Start at Battersea Park and head east toward Westminster, or west toward Putney. The flat terrain makes it perfect for tempo runs and long steady efforts.</p>
        
        <h2>Battersea Park Circuits</h2>
        <p>The park's perimeter is approximately 2km, making it ideal for interval training. The interior paths offer varied terrain with some gentle hills - perfect for building strength while staying close to home.</p>
        
        <h2>Wandsworth Common Loop (4.5km)</h2>
        <p>This quiet common provides a peaceful escape from busy streets. The soft paths are easier on your joints, making it excellent for recovery runs or building base mileage.</p>
        
        <h2>Training Tips</h2>
        <ul>
          <li>Early morning runs (6-7am) avoid crowds and summer heat</li>
          <li>Weekend long runs: Thames Path west toward Richmond offers 10-20km options</li>
          <li>Hill repeats: Use the bridges (Albert, Chelsea) for strength work</li>
        </ul>
        
        <p>Need a personalized training plan that incorporates these routes? <a href="/booking">Book a free consultation</a> to discuss your goals.</p>`,
        author: "Gabriele Grimaldi",
        category: "Running",
        publishedAt: new Date("2024-11-01"),
        imageUrl: null,
      },
      {
        id: randomUUID(),
        title: "How to Train for Your First Triathlon While Working Full-Time",
        slug: "first-triathlon-training-full-time-job",
        excerpt: "Balancing triathlon training with a demanding career is challenging but achievable. Learn the key strategies for fitting swim, bike, and run sessions into a busy schedule.",
        content: `<p>Training for your first triathlon while managing a full-time job requires smart planning and realistic expectations. Here's how to make it work.</p>
        
        <h2>Start with Sprint Distance</h2>
        <p>For your first triathlon, target a sprint distance (750m swim, 20km bike, 5km run). This is challenging but achievable with 6-8 hours of weekly training - manageable alongside work commitments.</p>
        
        <h2>The 6-Day Training Week</h2>
        <p>Structure your week with one rest day and shorter weekday sessions:</p>
        <ul>
          <li><strong>Monday:</strong> 30min easy swim (before or after work)</li>
          <li><strong>Tuesday:</strong> 45min bike trainer or outdoor ride</li>
          <li><strong>Wednesday:</strong> 30min run (tempo or intervals)</li>
          <li><strong>Thursday:</strong> 45min swim (technique work)</li>
          <li><strong>Friday:</strong> Rest or easy 20min run</li>
          <li><strong>Saturday:</strong> 90min bike + 15min transition run</li>
          <li><strong>Sunday:</strong> 60min run (long steady)</li>
        </ul>
        
        <h2>Time-Saving Strategies</h2>
        <ul>
          <li>Early morning sessions (6am) before work - no commute delays</li>
          <li>Lunchtime swims at work gyms</li>
          <li>Indoor bike trainer for time-efficient cycling</li>
          <li>Brick sessions (bike + run) maximize training in less time</li>
        </ul>
        
        <h2>The Reality Check</h2>
        <p>You won't have time for 15-hour training weeks like full-time athletes. That's fine. Consistency beats volume. Six months of steady 6-8 hour weeks will get you to the finish line strong.</p>
        
        <p>Want a personalized plan that fits your work schedule? <a href="/booking">Book a free consultation</a> and we'll design your perfect training week.</p>`,
        author: "Gabriele Grimaldi",
        category: "Triathlon",
        publishedAt: new Date("2024-10-28"),
        imageUrl: null,
      },
      {
        id: randomUUID(),
        title: "Understanding FTP: Why Cycling Power Zones Matter",
        slug: "understanding-ftp-cycling-power-zones",
        excerpt: "Functional Threshold Power (FTP) is the foundation of effective cycling training. Learn what FTP means, how to test it, and why training with power will transform your performance.",
        content: `<p>If you're serious about improving your cycling, understanding FTP and power zones is essential. Here's everything you need to know.</p>
        
        <h2>What is FTP?</h2>
        <p>Functional Threshold Power (FTP) is the highest average power you can sustain for approximately one hour. It's measured in watts and represents your physiological lactate threshold on the bike.</p>
        
        <h2>Why FTP Matters</h2>
        <p>Training with power is more precise than heart rate because:</p>
        <ul>
          <li>Power responds instantly (heart rate lags)</li>
          <li>Power isn't affected by caffeine, sleep, or stress</li>
          <li>You can precisely target specific training adaptations</li>
          <li>You can pace efforts consistently on race day</li>
        </ul>
        
        <h2>The Five Power Zones</h2>
        <p>Once you know your FTP, you can calculate training zones:</p>
        <ul>
          <li><strong>Zone 1 (Active Recovery):</strong> <55% FTP - Easy spinning</li>
          <li><strong>Zone 2 (Endurance):</strong> 56-75% FTP - Long steady rides</li>
          <li><strong>Zone 3 (Tempo):</strong> 76-90% FTP - "Comfortably uncomfortable"</li>
          <li><strong>Zone 4 (Threshold):</strong> 91-105% FTP - The "sweet spot"</li>
          <li><strong>Zone 5 (VO2 Max):</strong> >106% FTP - Short, hard intervals</li>
        </ul>
        
        <h2>How to Test Your FTP</h2>
        <p>The most common protocol is a 20-minute all-out test. Your FTP is approximately 95% of your 20-minute average power. However, this requires proper pacing and mental toughness.</p>
        
        <p>Better option: Professional lactate testing provides more accurate results and identifies your exact training zones. <a href="/lactate-testing">Learn about our lactate testing service</a>.</p>
        
        <h2>Training Your FTP</h2>
        <p>To raise FTP, focus on:</p>
        <ul>
          <li>Sweet spot intervals (88-94% FTP)</li>
          <li>Threshold intervals (95-105% FTP)</li>
          <li>Long endurance rides (building aerobic base)</li>
          <li>VO2 max intervals (short efforts at 120% FTP)</li>
        </ul>
        
        <p>Ready to train smarter with power? <a href="/booking">Book a consultation</a> to get your personalized FTP-based training plan.</p>`,
        author: "Gabriele Grimaldi",
        category: "Cycling",
        publishedAt: new Date("2024-10-15"),
        imageUrl: null,
      },
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug,
    );
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = { 
      ...insertPost, 
      id,
      publishedAt: new Date()
    };
    this.blogPosts.set(id, post);
    return post;
  }
}

export const storage = new MemStorage();
