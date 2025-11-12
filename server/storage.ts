import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type EmailSubscriber, type InsertEmailSubscriber } from "@shared/schema";
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
  
  createEmailSubscriber(subscriber: InsertEmailSubscriber): Promise<EmailSubscriber>;
  getEmailSubscriberByEmail(email: string): Promise<EmailSubscriber | undefined>;
  getAllEmailSubscribers(): Promise<EmailSubscriber[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private emailSubscribers: Map<string, EmailSubscriber>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.emailSubscribers = new Map();
    
    // Add sample blog posts
    this.seedBlogPosts();
  }

  private seedBlogPosts() {
    const samplePosts: BlogPost[] = [
      {
        id: randomUUID(),
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
        
        <div class="my-6 p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-foreground">View Route on Strava</h3>
            <svg class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>
          </div>
          <p class="text-sm text-muted-foreground mb-4">Battersea Park Loop - 2.7km circuit with flat terrain, perfect for intervals and warm-ups.</p>
          <a href="https://www.strava.com/routes/127024" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-md hover:bg-primary/90 transition-colors font-medium" style="color: white !important;">
            View Interactive Map
            <svg class="h-4 w-4" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>

        <h2>2. Thames Path - Battersea to Westminster (6.5km loop)</h2>
        <p><strong>Distance:</strong> Varies (6.5km recommended loop)</p>
        <p><strong>Terrain:</strong> Completely flat, waterfront paths</p>
        <p><strong>Best for:</strong> Tempo runs, long steady efforts, sightseeing runs</p>
        <p>The Thames Path offers flat, scenic running with iconic views. Start at Battersea Park and head east toward Westminster, crossing back via Albert Bridge. The south bank is more runner-friendly with wider pedestrian paths and fewer diversions. Pass Battersea Power Station, the London Peace Pagoda, and Houses of Parliament.</p>
        <p><strong>Popular Strava route:</strong> This is one of the most tracked routes in London. Early morning (6-7am) avoids the heaviest foot traffic.</p>
        
        <div class="my-6 p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-foreground">View Route on Strava</h3>
            <svg class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>
          </div>
          <p class="text-sm text-muted-foreground mb-4">Thames Path - 5.9 mile riverside route with iconic London landmarks and completely flat terrain.</p>
          <a href="https://www.strava.com/routes/119101" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-md hover:bg-primary/90 transition-colors font-medium" style="color: white !important;">
            View Interactive Map
            <svg class="h-4 w-4" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>

        <h2>3. Wandsworth Common Loop (4.3km)</h2>
        <p><strong>Distance:</strong> 4.3km (2.7 miles)</p>
        <p><strong>Terrain:</strong> Flat, wide paths, mostly paved surfaces</p>
        <p><strong>Best for:</strong> Recovery runs, easy-paced runs, beginner-friendly</p>
        <p>This quiet common provides a peaceful escape from busy streets. The soft paths are easier on your joints, making it excellent for recovery runs or building base mileage. The relatively flat circular route around the common is perfect for consistent pacing.</p>
        <p><strong>Find on Strava:</strong> Search "Wandsworth Common Loop" - highly popular with local runners.</p>
        
        <div class="my-6 p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-foreground">View Route on Strava</h3>
            <svg class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>
          </div>
          <p class="text-sm text-muted-foreground mb-4">Wandsworth Common Loop - 4.3km peaceful circuit with soft paths, ideal for recovery runs.</p>
          <a href="https://www.strava.com/routes/297452" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-md hover:bg-primary/90 transition-colors font-medium" style="color: white !important;">
            View Interactive Map
            <svg class="h-4 w-4" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>

        <h2>4. Battersea Park to Wandsworth Common (13.5km)</h2>
        <p><strong>Distance:</strong> 13.5km (8.4 miles)</p>
        <p><strong>Time:</strong> Approximately 1 hour 35 minutes at easy pace</p>
        <p><strong>Best for:</strong> Long runs, half-marathon training</p>
        <p>Connect multiple green spaces across Wandsworth Borough. This route cuts through Battersea Park, then Wandsworth Common, offering a mix of park paths and neighborhood trails. Perfect for building endurance while staying off busy roads.</p>
        <p><strong>Training tip:</strong> Ideal for Sunday long runs during marathon build-up phases.</p>

        <h2>5. 10K Loop - Battersea Park, Wandsworth, Fulham, Chelsea (10km)</h2>
        <p><strong>Distance:</strong> 10km (6.2 miles)</p>
        <p><strong>Time:</strong> 45 minutes to 1 hour</p>
        <p><strong>Best for:</strong> 10k race pace training, Thames-side loops, varied distance options</p>
        <p>Run through Battersea Park, Wandsworth, Fulham and Chelsea. This popular loop connects multiple riverside areas and green spaces. Year-round route with excellent facilities.</p>
        
        <div class="my-6 p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-foreground">View Route on Strava</h3>
            <svg class="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>
          </div>
          <p class="text-sm text-muted-foreground mb-4">10K Loop - Connects Battersea Park, Wandsworth, Fulham, and Chelsea for varied riverside running.</p>
          <a href="https://www.strava.com/routes/943844" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-md hover:bg-primary/90 transition-colors font-medium" style="color: white !important;">
            View Interactive Map
            <svg class="h-4 w-4" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>

        <h2>Popular Strava Route: Clapham-Balham-Tooting-Wandsworth 10K</h2>
        <p><strong>Distance:</strong> 10km (6 miles)</p>
        <p><strong>Terrain:</strong> Flat surface, avoids high-traffic roads</p>
        <p><strong>Best for:</strong> 10k race pace efforts, tempo runs</p>
        <p>This loop is used by GB elite runners and local running clubs. Can start from multiple locations (Clapham, Balham, Tooting, or Wandsworth). Uses quieter roads like Cavendish Road instead of Balham High Road for safer running.</p>

        <h2>Training Tips for These Routes</h2>
        <ul>
          <li><strong>Early morning runs (6-7am)</strong> avoid crowds and summer heat, especially on Thames Path</li>
          <li><strong>Weekend long runs:</strong> Thames Path west toward Richmond offers 10-20km options</li>
          <li><strong>Interval training:</strong> Battersea Park perimeter is perfect for 5x2km or 10x1km sessions</li>
          <li><strong>Recovery runs:</strong> Wandsworth Common's soft paths are ideal for easy days</li>
        </ul>

        <h2>Finding These Routes on Strava</h2>
        <p>All of these routes are available on Strava. Use the Strava app's "Routes" feature or search by name. You can also check the Strava heatmap to see the most popular running paths in real-time based on millions of local activities.</p>
        <p>Look for routes tagged with "Battersea," "Wandsworth," or "Thames Path" in the Strava route library.</p>

        <p>Need a personalized training plan that incorporates these routes and prepares you for your goal race? <a href="/booking">Book a free consultation</a> to discuss your goals and get a science-based training program.</p>`,
        author: "Gabriele Grimaldi",
        category: "Running",
        publishedAt: new Date("2025-11-12"),
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
        publishedAt: new Date("2025-11-12"),
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
      publishedAt: new Date(),
      imageUrl: insertPost.imageUrl ?? null
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async createEmailSubscriber(insertSubscriber: InsertEmailSubscriber): Promise<EmailSubscriber> {
    const id = randomUUID();
    const subscriber: EmailSubscriber = {
      ...insertSubscriber,
      id,
      subscribedAt: new Date(),
      discountClaimed: insertSubscriber.discountClaimed ?? "15OFF"
    };
    this.emailSubscribers.set(subscriber.email, subscriber);
    return subscriber;
  }

  async getEmailSubscriberByEmail(email: string): Promise<EmailSubscriber | undefined> {
    return this.emailSubscribers.get(email);
  }

  async getAllEmailSubscribers(): Promise<EmailSubscriber[]> {
    return Array.from(this.emailSubscribers.values()).sort(
      (a, b) => new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime()
    );
  }
}

export const storage = new MemStorage();
