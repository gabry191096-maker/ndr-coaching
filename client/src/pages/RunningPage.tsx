import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FootprintsIcon, Gauge, Shield, Award } from "lucide-react";
import { Link } from "wouter";
import runningImage from "@assets/running-main.jpg";

export default function RunningPage() {
  const benefits = [
    {
      icon: FootprintsIcon,
      title: "Progressive Mileage",
      description: "Carefully structured volume increases that build endurance safely while minimizing injury risk."
    },
    {
      icon: Gauge,
      title: "Pace & Speed Work",
      description: "Targeted tempo runs, intervals, and threshold sessions to improve your race pace and running economy."
    },
    {
      icon: Shield,
      title: "Injury Prevention",
      description: "Smart programming with recovery protocols, strength guidance, and load management to keep you running."
    },
    {
      icon: Award,
      title: "Race Strategy",
      description: "Detailed pacing plans, fueling strategies, and mental preparation for marathon and half-marathon success."
    }
  ];

  const includes = [
    "Progressive weekly mileage building",
    "Tempo runs and lactate threshold sessions",
    "VO2 max intervals and speed work",
    "Long run strategies and nutrition practice",
    "Recovery run protocols and easy pace guidance",
    "Race-specific pace training and simulation runs",
    "Strength and mobility recommendations",
    "Running form and technique analysis",
    "Weekly training plan via TrainingPeaks",
    "Injury prevention and management advice",
    "24/7 WhatsApp coaching support",
    "Race day pacing and strategy planning"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Running Coaching London - Marathon & Half Marathon Training Plans"
        description="Expert running coaching for marathons and half marathons in London. Personalized training plans for busy professionals. Science-backed methods. £119/month."
        keywords="running coaching London, marathon coach, half marathon training, running training plan, London marathon coach"
      />
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Marathon & Half Marathon Coaching
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Structured running training for marathons, half marathons, and everything in between. Build your endurance, improve your speed, and cross the finish line with confidence through proven training methods designed for busy professionals.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Ideal for London-based runners balancing demanding careers with athletic ambitions. Whether you're targeting the London Marathon, chasing a personal best, or running your first half marathon, our coaching provides the structure and support to achieve your running goals without overtraining.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking">
                    <Button size="lg" data-testid="button-book-running">
                      Book Free Consultation
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" data-testid="button-contact-running">
                      Ask a Question
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="aspect-video lg:aspect-square overflow-hidden rounded-lg shadow-2xl">
                <img src={runningImage} alt="Running Training" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
                Why Choose NDR Running Coaching?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Marathon training requires more than just piling on miles. Our evidence-based approach balances endurance building, speed development, and recovery to help you arrive at the start line prepared and injury-free.
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
                  Our running coaching program provides everything you need for successful marathon and half marathon training. From your first easy run to race day execution, we'll guide you through every phase of preparation with personalized coaching and continuous support.
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
                    <CardTitle className="text-2xl">Running Coaching</CardTitle>
                    <CardDescription>Marathon & half marathon training</CardDescription>
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
                        Personalized training zones
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Progressive mileage building
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
                        Race day pacing strategy
                      </li>
                    </ul>
                    <Link href="/booking" className="block">
                      <Button size="lg" className="w-full" data-testid="button-book-running-card">
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
              Ready to Achieve Your Running Goals?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Book a free consultation to discuss your race goals, current fitness level, and training schedule. We'll create a customized plan that builds your endurance, improves your speed, and gets you to the finish line strong.
            </p>
            <Link href="/booking">
              <Button size="lg" data-testid="button-cta-running">
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
