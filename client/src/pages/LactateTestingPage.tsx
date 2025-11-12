import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, FlaskConical, TrendingUp, Target, Clock } from "lucide-react";
import { Link } from "wouter";
import lactateTestingImage from "@assets/gallery-6.jpg";

export default function LactateTestingPage() {
  const benefits = [
    {
      icon: Target,
      title: "Accurate Threshold Testing",
      description: "Precise lactate threshold determination using professional-grade equipment and proven protocols"
    },
    {
      icon: TrendingUp,
      title: "Optimized Training Zones",
      description: "Personalized heart rate and power zones based on your unique physiology for maximum training efficiency"
    },
    {
      icon: FlaskConical,
      title: "Scientific Analysis",
      description: "Comprehensive performance report with detailed analysis and actionable recommendations"
    },
    {
      icon: Clock,
      title: "Progress Tracking",
      description: "Track your improvements over time and adjust training zones as your fitness develops"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We discuss your training history, goals, and current fitness level to tailor the testing protocol"
    },
    {
      step: "2",
      title: "Incremental Testing",
      description: "Structured incremental test on bike or treadmill with lactate samples taken at each stage"
    },
    {
      step: "3",
      title: "Data Analysis",
      description: "Professional analysis of your lactate curve to determine precise threshold and training zones"
    },
    {
      step: "4",
      title: "Detailed Report",
      description: "Comprehensive report with your zones, recommendations, and how to apply them to training"
    }
  ];

  const faqs = [
    {
      question: "What is lactate testing and why is it important?",
      answer: "Lactate testing measures the point at which lactate accumulates in your blood faster than your body can clear it. This lactate threshold is crucial for setting accurate training zones. Training at the right intensity ensures you're working hard enough to improve, but not so hard that you can't recover properly. It's the gold standard for endurance athletes."
    },
    {
      question: "How long does a lactate test take?",
      answer: "The complete testing session typically takes 60-90 minutes, including warm-up, the incremental test itself (usually 20-30 minutes), cool-down, and initial discussion of results. You'll receive a detailed written report within 48 hours."
    },
    {
      question: "Do I need to be fit to do lactate testing?",
      answer: "No! Lactate testing is valuable for athletes of all levels, from beginners to elite competitors. The test is incremental and controlled, starting easy and gradually increasing in intensity. You can stop at any point, and the protocol is adjusted to your current fitness level."
    },
    {
      question: "How often should I get tested?",
      answer: "For most athletes, testing every 3-6 months is ideal to track progress and adjust training zones. If you're new to structured training, an initial test followed by a retest after 12 weeks can show dramatic improvements and help refine your program."
    },
    {
      question: "What's the difference between lactate testing and FTP testing?",
      answer: "FTP (Functional Threshold Power) testing is typically a 20-minute or 60-minute all-out effort. While useful, it's an estimation. Lactate testing directly measures your physiological response at different intensities, providing more accurate and personalized training zones. It's also less demanding and can be done more frequently."
    },
    {
      question: "Can I get lactate testing for running and cycling?",
      answer: "Yes! We offer lactate testing for both running (on treadmill) and cycling (on your own bike with a turbo trainer, or on our stationary bike). The principles are the same, but the zones will be sport-specific."
    },
    {
      question: "What should I bring to the test?",
      answer: "For cycling: your bike, turbo trainer (or use ours), cycling shoes, and a heart rate monitor if you have one. For running: running shoes and comfortable running gear. Bring water, and avoid heavy meals 2-3 hours before testing. Come well-rested and avoid hard training the day before."
    },
    {
      question: "Is lactate testing included in coaching packages?",
      answer: "Lactate testing can be added to any coaching package. Some of our premium coaching plans include one or two tests per year. We recommend it as an excellent starting point for any new coaching relationship to establish accurate baseline zones."
    }
  ];

  const pricing = {
    single: {
      price: "£150",
      title: "Single Session",
      features: [
        "60-90 minute testing session",
        "Professional lactate analysis",
        "Detailed performance report",
        "Personalized training zones (running or cycling)",
        "Zone application guidance"
      ]
    },
    package: {
      price: "£405",
      title: "3-Session Package",
      features: [
        "Three testing sessions",
        "Progress tracking over time",
        "Zone adjustments as fitness improves",
        "Priority booking",
        "10% savings vs single sessions"
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Lactate Threshold Testing London - Performance Testing for Athletes"
        description="Professional lactate threshold testing in London for cyclists, runners, and triathletes. Accurate training zones, heart rate testing, and performance optimization. £150 per session."
        keywords="lactate testing London, lactate threshold test, performance testing London, VO2 max testing, heart rate zones, cycling performance test, running performance test, sports science testing London"
      />
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Lactate Threshold Testing in London
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Professional lactate testing for endurance athletes. Get accurate, science-based training zones to maximize your performance and training efficiency.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Used by elite athletes and recommended by coaches worldwide, lactate threshold testing is the gold standard for determining optimal training intensity. Stop guessing—train with precision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking">
                    <Button size="lg" data-testid="button-book-lactate-hero">
                      Book Your Test - £150
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" data-testid="button-contact-lactate">
                      Ask Questions
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img src={lactateTestingImage} alt="Professional Lactate Testing in London" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
                Why Lactate Testing?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Training without knowing your zones is like driving blindfolded. Lactate testing removes the guesswork and ensures every training session has maximum impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our professional lactate testing protocol is comprehensive yet straightforward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3 text-xl font-heading font-bold">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
                Pricing & Packages
              </h2>
              <p className="text-lg text-muted-foreground">
                Flexible options for single tests or regular progress tracking
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{pricing.single.title}</CardTitle>
                  <p className="text-4xl font-heading font-bold text-primary mt-4">
                    {pricing.single.price}
                    <span className="text-lg text-muted-foreground font-normal"> /session</span>
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pricing.single.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking" className="block mt-6">
                    <Button className="w-full" size="lg" data-testid="button-book-single">
                      Book Single Session
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl">{pricing.package.title}</CardTitle>
                  <p className="text-4xl font-heading font-bold text-primary mt-4">
                    {pricing.package.price}
                    <span className="text-lg text-muted-foreground font-normal"> (save £27)</span>
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pricing.package.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="block mt-6">
                    <Button className="w-full" size="lg" data-testid="button-book-package">
                      Contact for Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Train Smarter?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your lactate test today and discover your optimal training zones. Available for runners, cyclists, and triathletes in London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" data-testid="button-cta-book">
                  Book Your Test - £150
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" data-testid="button-cta-contact">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
