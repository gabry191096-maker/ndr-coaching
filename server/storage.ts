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
      {
        id: randomUUID(),
        title: "How to Pace Your Ironman 70.3 Using LT1 and LT2 Zones",
        slug: "pace-ironman-70-3-lt1-lt2",
        excerpt: "Master your Ironman 70.3 pacing strategy using lactate threshold science. Learn exactly which zones to target on the bike and run for your best race performance. Includes free pacing calculator.",
        content: `<p>Pacing an Ironman 70.3 is the difference between a personal best and blowing up at mile 8 of the run. While many athletes rely on feel or heart rate, understanding your LT1 and LT2 zones gives you precise, science-based targets for both the bike and run.</p>

<div class="p-4 bg-primary/10 border border-primary/20 rounded-lg my-6">
<p class="text-primary font-semibold mb-2">🧮 Try Our Free Pacing Calculator</p>
<p class="mb-3">Want to calculate your exact race paces right now? Use our <a href="/pacing-calculator" class="text-primary underline font-medium">free Triathlon Pacing Calculator</a> to get personalized targets for Sprint, Olympic, 70.3, and Ironman distances based on your LT1 and LT2 zones.</p>
</div>

<h2>Understanding LT1 and LT2</h2>

<p>Your lactate threshold zones represent two critical physiological markers:</p>

<ul>
<li><strong>LT1 (Aerobic Threshold):</strong> The point where lactate begins to accumulate in your blood. Below this, your body easily clears lactate. You can sustain efforts at or below LT1 for many hours.</li>
<li><strong>LT2 (Anaerobic/Lactate Threshold):</strong> The point where lactate accumulation accelerates rapidly. Above this, you are borrowing time - sustainable for 20-60 minutes depending on fitness, but not for 4-6 hours.</li>
</ul>

<p>For a 70.3, which takes most age-groupers 4.5-6.5 hours to complete, your pacing must respect these physiological boundaries.</p>

<h2>Pacing the Bike Leg (90km)</h2>

<p>The bike leg determines your run success. Here is your power-based strategy:</p>

<h3>Target Zone: 80-85% of LT2 Power</h3>

<p>This puts you comfortably between LT1 and LT2 - in the sweet spot where you are working hard but preserving glycogen and staying aerobic.</p>

<p><strong>Example:</strong> If your LT2 is 250 watts, target 200-212 watts for the bike leg.</p>

<h3>Course-Specific Adjustments</h3>

<ul>
<li><strong>Flat courses:</strong> Hold steady at 82-85% of LT2</li>
<li><strong>Rolling hills:</strong> Allow power to rise to 90% of LT2 on climbs, recover to 75% on descents, average 80-85%</li>
<li><strong>First 20km:</strong> Start conservative at 75-80% to allow your body to settle into race rhythm</li>
<li><strong>Final 20km:</strong> If feeling strong, gradually increase to 85-88% of LT2</li>
</ul>

<h3>Why This Works</h3>

<p>At 80-85% of LT2, you are primarily burning fat and preserving muscle glycogen. Your lactate clearance matches production. You will dismount the bike with fresh legs and full glycogen stores for the run.</p>

<h2>Pacing the Run Leg (21.1km)</h2>

<p>The run is where races are won or lost. Your bike pacing determines whether you run or survive.</p>

<h3>Target Zone: LT1 to LT1 + 10%</h3>

<p>This is slightly below your standalone half marathon pace, but it is what your fatigued body can sustain aerobically after 90km on the bike.</p>

<p><strong>Example:</strong> If your LT1 run pace is 5:00/km, target 4:50-5:00/km for the 70.3 run.</p>

<h3>Run Strategy Breakdown</h3>

<ul>
<li><strong>First 5km:</strong> Run at LT1 or slightly below (5:05/km in our example). Your legs need time to transition from cycling. Resist the temptation to chase people who started too fast.</li>
<li><strong>Middle 10km:</strong> Settle into your LT1 pace (5:00/km). This should feel comfortably hard - you are working but controlled, breathing rhythmically.</li>
<li><strong>Final 6km:</strong> If you have paced correctly, you can now push toward LT2. Gradually increase effort, reaching 90-95% of LT2 for the final 2-3km.</li>
</ul>

<h3>Heart Rate Reality Check</h3>

<p>Heart rate on the run will be 5-10 bpm higher than standalone runs due to cardiac drift and accumulated fatigue. Do not panic. If you are at LT1 pace and heart rate reads 10 bpm high, trust the pace - your zones have shifted due to fatigue and heat.</p>

<h2>The Science Behind This Strategy</h2>

<p>A 2018 study of Ironman 70.3 finishers found that athletes who maintained 82-86% of threshold power on the bike ran 8-12% faster than those who exceeded 90%. The difference? Glycogen preservation and lactate management.</p>

<p>When you ride above LT2, you deplete glycogen and accumulate lactate faster than your body clears it. By the run, your muscles are swimming in metabolic waste and your glycogen tanks are empty. Result: the death march.</p>

<h2>Practical Race Day Tips</h2>

<ul>
<li><strong>First 30 minutes of bike:</strong> Ignore your power meter. Let your body warm up. Check average power at 30 minutes and adjust.</li>
<li><strong>Aid stations:</strong> Soft-pedal or walk through them. These 30-second breaks do not hurt your time but help manage heart rate and digestion.</li>
<li><strong>Mental game:</strong> Watching faster athletes pass you on the bike is hard. Remember: you are racing the clock, not them. Many will walk the run.</li>
<li><strong>Nutrition:</strong> At LT1-LT2 intensity, your gut can process 60-90g carbs/hour. Above LT2, digestion shuts down.</li>
</ul>

<h2>Calculate Your Personalized Race Paces</h2>

<p>Ready to calculate your exact pacing targets? Use our <a href="/pacing-calculator" class="text-primary underline font-semibold">free Triathlon Pacing Calculator</a> to instantly get your optimal running pace and cycling power for any race distance - Sprint, Olympic, 70.3, or full Ironman.</p>

<p>Simply enter your LT1 and LT2 values, select your race distance, and get science-based pacing recommendations in seconds.</p>

<h2>How to Find Your LT1 and LT2</h2>

<p>You can estimate these zones through field tests (20-minute FTP test, 30-minute run test), but for precision racing, professional lactate testing is the gold standard.</p>

<p>Lactate testing measures blood lactate at different intensities, identifying your exact LT1 and LT2 in both watts (cycling) and pace (running). This removes guesswork and gives you confidence on race day.</p>

<p><a href="/lactate-testing">Learn about our lactate testing service</a> - we provide complete cycling and running profiles with personalized zone recommendations.</p>

<h2>Putting It All Together</h2>

<p>Let us say your zones are:</p>
<ul>
<li>Cycling LT2: 240 watts</li>
<li>Running LT1: 5:15/km, LT2: 4:35/km</li>
</ul>

<p><strong>Your 70.3 Plan:</strong></p>
<ul>
<li><strong>Swim:</strong> Controlled effort, exit fresh</li>
<li><strong>Bike:</strong> Target 192-204 watts (80-85% of LT2), average ~198 watts</li>
<li><strong>Run first 5km:</strong> 5:20/km pace</li>
<li><strong>Run middle 10km:</strong> 5:15/km pace (at LT1)</li>
<li><strong>Run final 6km:</strong> Push to 4:50-5:00/km</li>
</ul>

<p>This strategy guarantees you will finish strong, negative-split the run, and perform at your physiological potential.</p>

<h2>Ready to Nail Your 70.3?</h2>

<p>Understanding your zones is step one. Building a periodized training plan that develops your LT1 and LT2 while practicing race-specific pacing is step two.</p>

<p><a href="/booking">Book a free consultation</a> to discuss your 70.3 goals and create a science-based training plan that gets you to the start line fit and confident.</p>`,
        author: "Gabriele Grimaldi",
        category: "Triathlon",
        publishedAt: new Date("2024-11-12"),
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
