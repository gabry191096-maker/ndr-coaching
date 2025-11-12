import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import triathlonImage from "@assets/generated_images/Triathlon_training_image_33627335.png";
import cyclingImage from "@assets/generated_images/Cyclist_service_image_d615bd7f.png";
import runningImage from "@assets/generated_images/Runner_service_image_56b22b8f.png";

export default function ServicesPage() {
  const faqs = [
    {
      question: "How much time do I need to commit per week?",
      answer: "Our programs are designed for time-crunched professionals, requiring as little as 6-12 hours per week depending on your goals and current fitness level."
    },
    {
      question: "Do I need previous endurance sports experience?",
      answer: "Not at all! We work with athletes of all levels, from complete beginners to experienced competitors. Your training plan will be tailored to your current fitness and goals."
    },
    {
      question: "How does the coaching work?",
      answer: "You'll receive a personalized training plan through TrainingPeaks, weekly check-ins, ongoing support via WhatsApp, and regular performance reviews to adjust your program as needed."
    },
    {
      question: "What if I need to travel for work?",
      answer: "Our plans are flexible and adapt to your schedule. We'll modify your training around business trips, busy weeks, and family commitments."
    },
    {
      question: "Can I switch between services?",
      answer: "Yes! Many of our athletes train for different events throughout the year. We can adjust your focus as your goals change."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Triathlon, Cycling & Running Coaching Services in London"
        description="Personalized endurance coaching for triathlons, cycling sportives, and marathons. Science-backed training plans for busy London professionals."
        keywords="triathlon coaching London, Ironman coach, cycling coach, marathon training, endurance sports coaching"
      />
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Personalised Triathlon & Endurance Coaching
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer custom training programs for triathlon, cycling, and running—designed to fit around your busy work life. No generic plans—just science-backed coaching that adapts to your weekly schedule, travel, and stress levels.
              </p>
            </div>

            <div id="triathlon" className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src={triathlonImage} alt="Triathlon Training" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">Triathlon Coaching</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Complete swim, bike, run training for Ironman, 70.3, and Olympic distance events. Get structured workouts across all three disciplines with expert guidance.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {["Periodized training blocks", "Swim technique sessions", "Bike power & run pacing", "Transition practice", "Race day strategy", "Weekly reviews", "WhatsApp support"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-3xl font-heading font-bold text-primary mb-6">£149<span className="text-lg text-muted-foreground font-normal">/month</span></p>
                  <div className="flex gap-4">
                    <Link href="/booking">
                      <Button size="lg" data-testid="button-book-triathlon">Book Consultation</Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" data-testid="button-contact-triathlon">Ask a Question</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div id="cycling" className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">Cycling Coaching</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Performance cycling coaching for sportives, gran fondos, and time trials. Power-based training to maximize your FTP and race performance.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {["FTP testing & zones", "Structured intervals", "Hill climbing technique", "Time trial positioning", "Nutrition planning"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-3xl font-heading font-bold text-primary mb-6">£119<span className="text-lg text-muted-foreground font-normal">/month</span></p>
                  <div className="flex gap-4">
                    <Link href="/booking">
                      <Button size="lg" data-testid="button-book-cycling">Book Consultation</Button>
                    </Link>
                  </div>
                </div>
                <div className="aspect-video overflow-hidden rounded-lg order-1 lg:order-2">
                  <img src={cyclingImage} alt="Cycling Training" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div id="running" className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src={runningImage} alt="Running Training" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">Running Coaching</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Marathon and half-marathon training for busy professionals. Build endurance, speed, and confidence with proven training methods.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {["Progressive mileage", "Tempo & interval training", "Long run strategies", "Recovery protocols", "Race pacing plans"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-3xl font-heading font-bold text-primary mb-6">£119<span className="text-lg text-muted-foreground font-normal">/month</span></p>
                  <div className="flex gap-4">
                    <Link href="/booking">
                      <Button size="lg" data-testid="button-book-running">Book Consultation</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
