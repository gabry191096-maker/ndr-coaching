import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import coachImage from "@assets/generated_images/Coach_professional_headshot_0fd4588e.png";
import coachingImage from "@assets/generated_images/Coach_training_session_97e2b432.png";

export default function AboutPage() {
  const achievements = [
    { icon: Users, label: "100+ Athletes Coached", value: "100+" },
    { icon: Award, label: "Certified Coach", value: "BTF Level 2" },
    { icon: Target, label: "Years Experience", value: "8+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="About Gabriele Grimaldi - Endurance Coach in London"
        description="Meet Gabriele Grimaldi, BTF certified triathlon and endurance coach based in London. Helping corporate professionals achieve their athletic goals."
        keywords="Gabriele Grimaldi, triathlon coach, endurance coach London, BTF certified coach"
      />
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Meet Your Coach
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Hi, I'm Gabriele Grimaldi, founder of NDR Coaching. I'm a British Triathlon Federation certified coach specializing in helping corporate professionals achieve their endurance goals without sacrificing their careers.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Having competed in multiple Ironman events and ultramarathons while maintaining a demanding professional career, I understand the unique challenges faced by time-crunched athletes. My approach combines scientific training principles with real-world flexibility.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Based in London, I work with professionals across the UK who want to balance peak athletic performance with career success. Whether you're training for your first 5K or your next Ironman, I'm here to guide you every step of the way.
                </p>
                <Link href="/booking">
                  <Button size="lg" data-testid="button-book-consultation">
                    Book a Free Consultation
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img src={coachImage} alt="Gabriele Grimaldi" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6 pb-6">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <p className="text-3xl font-heading font-bold mb-1">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-center">
                My Coaching Philosophy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src={coachingImage} alt="Coaching session" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">Science-Based Training</h3>
                    <p className="text-muted-foreground">
                      I use lactate testing, heart rate variability monitoring, and proven periodization methods to optimize your training response and minimize injury risk.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">Flexible & Adaptive</h3>
                    <p className="text-muted-foreground">
                      Life happens. Your training plan should adapt to business trips, family commitments, and unexpected challenges—not the other way around.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">Holistic Approach</h3>
                    <p className="text-muted-foreground">
                      Training is just one piece. I help you optimize nutrition, recovery, sleep, and stress management for sustainable performance gains.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">Personal Support</h3>
                    <p className="text-muted-foreground">
                      You get direct access to me via WhatsApp for questions, adjustments, and motivation. No automated responses or generic templates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Let's have a conversation about your goals and create a personalized plan that fits your lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                    Book Free Consultation
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Send a Message
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
