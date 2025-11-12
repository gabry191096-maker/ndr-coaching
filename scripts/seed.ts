import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { blogPosts } from "../shared/schema.js";

async function seedDatabase() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  console.log("Seeding database with sample blog posts...");
  
  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql);

  const samplePosts = [
    {
      title: "Best Running Routes in Battersea and Wandsworth",
      slug: "best-running-routes-battersea-wandsworth",
      excerpt: "Discover the most scenic and effective running routes in Battersea, from Thames Path loops to Wandsworth Common circuits. Includes popular Strava routes used by local runners.",
      content: `<p>Living and training in Battersea gives you access to some of London's best running routes. Whether you are preparing for a marathon or enjoying an easy recovery run, here are the most popular routes based on local Strava data and years of coaching athletes in this area.</p>
      
      <h2>1. Battersea Park Loop (2.7km)</h2>
      <p><strong>Distance:</strong> 2.7km (1.7 miles) - approximately 2km perimeter</p>
      <p><strong>Terrain:</strong> Mostly flat, riverside paths and park trails</p>
      <p><strong>Best for:</strong> Easy runs, warm-ups, interval training, recovery runs</p>
      <p>The park's perimeter is ideal for interval training sessions. The interior paths offer varied terrain with some gentle hills - perfect for building strength while staying close to home. Features include Thames riverside views, ponds, gardens, and public facilities near the bandstand.</p>
      <p><strong>Training tip:</strong> Use the 2km perimeter for 5x2km threshold intervals with 90 seconds recovery.</p>
      
      <h2>2. Thames Path - Battersea to Westminster (6.5km loop)</h2>
      <p><strong>Distance:</strong> Varies (6.5km recommended loop)</p>
      <p><strong>Terrain:</strong> Completely flat, waterfront paths</p>
      <p><strong>Best for:</strong> Tempo runs, long steady efforts, sightseeing runs</p>
      <p>The Thames Path offers flat, scenic running with iconic views. Start at Battersea Park and head east toward Westminster, crossing back via Albert Bridge.</p>`,
      author: "Gabriele Grimaldi",
      category: "Running",
      imageUrl: null,
    },
    {
      title: "How to Pace Your Ironman 70.3 Using LT1 and LT2 Zones",
      slug: "pace-ironman-70-3-lt1-lt2",
      excerpt: "Master your Ironman 70.3 pacing strategy using lactate threshold science. Learn exactly which zones to target on the bike and run for your best race performance.",
      content: `<p>Pacing an Ironman 70.3 is the difference between a personal best and blowing up at mile 8 of the run. While many athletes rely on feel or heart rate, understanding your LT1 and LT2 zones gives you precise, science-based targets for both the bike and run.</p>

<h2>Understanding LT1 and LT2</h2>

<p>Your lactate threshold zones represent two critical physiological markers:</p>

<ul>
<li><strong>LT1 (Aerobic Threshold):</strong> The point where lactate begins to accumulate in your blood. Below this, your body easily clears lactate.</li>
<li><strong>LT2 (Anaerobic/Lactate Threshold):</strong> The point where lactate accumulation accelerates rapidly. Above this, you are borrowing time.</li>
</ul>`,
      author: "Gabriele Grimaldi",
      category: "Triathlon",
      imageUrl: null,
    },
  ];

  try {
    // Check if posts already exist
    const existing = await db.select().from(blogPosts).limit(1);
    
    if (existing.length > 0) {
      console.log("Database already seeded, skipping...");
      return;
    }

    await db.insert(blogPosts).values(samplePosts);
    console.log(`Seeded ${samplePosts.length} blog posts successfully!`);
  } catch (error) {
    console.error("Seeding failed:", error);
    throw error;
  }
}

seedDatabase().catch((error) => {
  console.error("Seed script failed:", error);
  process.exit(1);
});
