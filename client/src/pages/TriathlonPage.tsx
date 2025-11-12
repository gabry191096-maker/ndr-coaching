import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Target, TrendingUp, Clock, Heart } from "lucide-react";
import { Link } from "wouter";
import triathlonImage from "@assets/triathlon-main.jpeg";

export default function TriathlonPage() {
  const benefits = [
    {
      icon: Target,
      title: "Personalized Training Plans",
      description: "Customized swim, bike, and run workouts designed around your schedule, fitness level, and race goals."
    },
    {
      icon: TrendingUp,
      title: "Progressive Overload",
      description: "Scientifically structured training blocks that build your endurance, speed, and race-day confidence systematically."
    },
    {
      icon: Clock,
      title: "Time-Efficient Workouts",
      description: "Maximize results with focused sessions designed for busy professionals—no junk miles, just quality training."
    },
    {
      icon: Heart,
      title: "Ongoing Support",
      description: "Weekly check-ins, unlimited WhatsApp messaging, and continuous plan adjustments based on your feedback and progress."
    }
  ];

  const includes = [
    "Comprehensive swim technique analysis and drills",
    "Power-based cycling workouts with FTP optimization",
    "Run pacing strategy and interval sessions",
    "Periodized training blocks (base, build, peak, taper)",
    "Brick sessions for swim-to-bike and bike-to-run transitions",
    "Race day nutrition and hydration planning",
    "Equipment and gear optimization guidance",
    "Weekly training reviews and plan adjustments",
    "TrainingPeaks platform with structured workouts",
    "24/7 WhatsApp support and coaching feedback",
    "Race strategy and mental preparation",
    "Injury prevention and recovery protocols"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Triathlon Coaching London - Ironman & 70.3 Training Plans"
        description="Expert triathlon coaching for Ironman, 70.3, and Olympic distance events in London. Personalized swim-bike-run training for busy professionals. £149/month."
        keywords="triathlon coaching London, Ironman coach, 70.3 training, Olympic triathlon, swim bike run coach, triathlon training plan"
      />
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Triathlon Coaching for Ambitious Athletes
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Complete swim-bike-run training programs for Ironman, 70.3, and Olympic distance triathlons. Whether you're targeting your first finish line or chasing a personal best, our coaching provides the structure, support, and expertise to get you there.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Designed for time-crunched corporate athletes in London who demand results without sacrificing work-life balance. Every workout has a purpose, every training block builds toward your goal race.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking">
                    <Button size="lg" data-testid="button-book-triathlon">
                      Book Free Consultation
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" data-testid="button-contact-triathlon">
                      Ask a Question
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="aspect-video lg:aspect-square overflow-hidden rounded-lg shadow-2xl">
                <img src={triathlonImage} alt="Triathlon Training" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
                Why Choose NDR Triathlon Coaching?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Training for three sports requires smart programming, not just more volume. Our approach balances swim technique, cycling power, and running efficiency while managing fatigue across all disciplines.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <Icon className="h-10 w-10 text-primary mb-3" />
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
                  What's Included
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our triathlon coaching program provides everything you need to prepare for race day—from your first swim session to crossing the finish line. No hidden costs, no surprise fees. Just comprehensive coaching that covers all aspects of multi-sport training.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <Card className="border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="text-2xl">Triathlon Coaching</CardTitle>
                    <CardDescription>Complete swim-bike-run training</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <p className="text-5xl font-heading font-bold text-primary">
                        £149
                        <span className="text-xl text-muted-foreground font-normal">/month</span>
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        All three disciplines covered
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Weekly training plan updates
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Unlimited WhatsApp support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        TrainingPeaks access included
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Race day strategy & planning
                      </li>
                    </ul>
                    <Link href="/booking" className="block">
                      <Button size="lg" className="w-full" data-testid="button-book-triathlon-card">
                        Book Free Consultation
                      </Button>
                    </Link>
                    <p className="text-xs text-muted-foreground text-center">
                      No long-term commitment. Cancel anytime.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
              Ready to Start Your Triathlon Journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Book a free consultation to discuss your goals, experience level, and race timeline. We'll create a custom training plan that fits your life and gets you to the start line prepared and confident.
            </p>
            <Link href="/booking">
              <Button size="lg" data-testid="button-cta-triathlon">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
