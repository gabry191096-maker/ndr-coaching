import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { 
  type User, 
  type InsertUser, 
  type BlogPost, 
  type InsertBlogPost, 
  type EmailSubscriber, 
  type InsertEmailSubscriber,
  users,
  blogPosts,
  emailSubscribers
} from "@shared/schema";
import { type IStorage } from "./storage";

export class DbStorage implements IStorage {
  private db;

  constructor(databaseUrl: string) {
    const sql = neon(databaseUrl);
    this.db = drizzle(sql);
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    const result = await this.db.select().from(blogPosts).orderBy(blogPosts.publishedAt);
    return result.reverse();
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const result = await this.db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return result[0];
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const result = await this.db.insert(blogPosts).values(insertPost).returning();
    return result[0];
  }

  async createEmailSubscriber(insertSubscriber: InsertEmailSubscriber): Promise<EmailSubscriber> {
    const result = await this.db.insert(emailSubscribers).values(insertSubscriber).returning();
    return result[0];
  }

  async getEmailSubscriberByEmail(email: string): Promise<EmailSubscriber | undefined> {
    const result = await this.db.select().from(emailSubscribers).where(eq(emailSubscribers.email, email));
    return result[0];
  }

  async getAllEmailSubscribers(): Promise<EmailSubscriber[]> {
    const result = await this.db.select().from(emailSubscribers).orderBy(emailSubscribers.subscribedAt);
    return result.reverse();
  }
}
