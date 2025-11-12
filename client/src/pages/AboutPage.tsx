import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import coachImage from "@assets/gabriele-grimaldi.png";
import coachingImage from "@assets/about-main.jpeg";
import achievementsImage from "@assets/4B5B17DE-7E18-4CE4-8CB4-7B3D579377EC_4_5005_c_1762950420755.jpeg";

export default function AboutPage() {
  const achievements = [
    { icon: Award, label: "Ironman Serbia 2024", value: "2nd Place" },
    { icon: Award, label: "Challenge London 2023", value: "2nd Place" },
    { icon: Target, label: "Years Experience", value: "10+" },
    { icon: TrendingUp, label: "Professional Athlete", value: "ITU Circuit" }
  ];

  const competitionResults = [
    "2nd Place at Ironman Serbia 2024",
    "2nd Place at Challenge London 2023",
    "Winner of Cholmondoley Castle Tri 2021 and 2024",
    "Participation at Elite International races in the ITU circuit",
    "Various national podiums in Sprint and Olympic Distance events"
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
                  About Gabriele
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  I'm Gabriele Grimaldi, a Professional Triathlete and an IT Senior Sales Executive.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Over the past 10 years, I've developed strategies to balance demanding studies, corporate responsibilities, and intense endurance training.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  My coaching philosophy is the product of years of trial and error, refining techniques to optimize performance in work, life, and sport.
                </p>
                <Link href="/booking">
                  <Button size="lg" data-testid="button-book-consultation">
                    Book a Free Consultation
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src={coachingImage} alt="Gabriele in action" className="w-full h-full object-cover" />
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
                Competition Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                  <img src={achievementsImage} alt="Gabriele achievements" className="w-full h-full object-contain" />
                </div>
                <div>
                  <ul className="space-y-4">
                    {competitionResults.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-lg">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-center">
                My Coaching Philosophy
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
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
