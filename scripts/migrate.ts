import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

async function runMigrations() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  console.log("Running database migrations...");
  
  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql);

  await migrate(db, { migrationsFolder: "./migrations" });

  console.log("Migrations completed successfully!");
}

runMigrations().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
