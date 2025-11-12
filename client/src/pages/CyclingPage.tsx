import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, Mountain, Activity, Timer } from "lucide-react";
import { Link } from "wouter";
import cyclingImage from "@assets/cycling-main.jpeg";

export default function CyclingPage() {
  const benefits = [
    {
      icon: Zap,
      title: "Power-Based Training",
      description: "FTP-focused workouts using structured intervals to maximize your wattage output and cycling efficiency."
    },
    {
      icon: Mountain,
      title: "Hill Climbing Mastery",
      description: "Specific climbing techniques and training protocols to conquer challenging gradients with confidence."
    },
    {
      icon: Activity,
      title: "Performance Analytics",
      description: "Data-driven approach using power zones, heart rate, and cadence to optimize every ride."
    },
    {
      icon: Timer,
      title: "Race-Specific Prep",
      description: "Targeted training for sportives, gran fondos, time trials, or criteriums based on your event goals."
    }
  ];

  const includes = [
    "FTP testing protocols and threshold determination",
    "Structured interval workouts (VO2 max, sweet spot, threshold)",
    "Endurance base building and tempo sessions",
    "Hill climbing technique and power-to-weight optimization",
    "Time trial positioning and aerodynamics guidance",
    "Cadence and pedaling efficiency drills",
    "Bike fit recommendations and position analysis",
    "Weekly training plan via TrainingPeaks",
    "Regular performance reviews and FTP retesting",
    "Nutrition and fueling strategies for long rides",
    "24/7 WhatsApp coaching support",
    "Equipment and gear optimization advice"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Cycling Coaching London - Power-Based Training for Sportives & Gran Fondos"
        description="Expert cycling coaching in London. FTP-focused training for sportives, gran fondos, and time trials. Personalized power-based plans. £119/month."
        keywords="cycling coaching London, FTP training, sportive coaching, gran fondo training, time trial coach, power meter training"
      />
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Performance Cycling Coaching
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Power-based cycling training designed for sportives, gran fondos, time trials, and competitive road cycling. Build your FTP, increase sustainable power output, and dominate the climbs with science-backed training protocols.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Perfect for ambitious cyclists in London who want structured training that delivers measurable improvements. Whether you're preparing for RideLondon, tackling alpine sportives, or chasing local KOMs, our coaching maximizes your watts per hour invested.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking">
                    <Button size="lg" data-testid="button-book-cycling">
                      Book Free Consultation
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" data-testid="button-contact-cycling">
                      Ask a Question
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="aspect-video lg:aspect-square overflow-hidden rounded-lg shadow-2xl order-1 lg:order-2">
                <img src={cyclingImage} alt="Cycling Training" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
                Why Choose NDR Cycling Coaching?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Effective cycling training isn't about riding more—it's about riding smarter. Our power-based approach ensures every interval, every climb, and every recovery ride serves a specific purpose in building your cycling performance.
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
                  Our cycling coaching program provides comprehensive power-based training tailored to your goals—whether that's completing your first century ride, crushing a gran fondo, or improving your time trial performance. All the tools and support you need to unlock your cycling potential.
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
                    <CardTitle className="text-2xl">Cycling Coaching</CardTitle>
                    <CardDescription>Power-based training for serious cyclists</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <p className="text-5xl font-heading font-bold text-primary">
                        £119
                        <span className="text-xl text-muted-foreground font-normal">/month</span>
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        FTP-based training zones
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Structured interval workouts
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
                        Race/event strategy planning
                      </li>
                    </ul>
                    <Link href="/booking" className="block">
                      <Button size="lg" className="w-full" data-testid="button-book-cycling-card">
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
              Ready to Increase Your FTP?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Book a free consultation to discuss your cycling goals and current fitness level. We'll create a personalized power-based training plan designed to boost your performance and help you achieve your cycling ambitions.
            </p>
            <Link href="/booking">
              <Button size="lg" data-testid="button-cta-cycling">
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
