import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FeaturesSection from "@/components/FeaturesSection";
import InstagramGallery from "@/components/InstagramGallery";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import triathlonImage from "@assets/generated_images/Triathlon_training_image_33627335.png";
import cyclingImage from "@assets/generated_images/Cyclist_service_image_d615bd7f.png";
import runningImage from "@assets/generated_images/Runner_service_image_56b22b8f.png";
import lactateTestingImage from "@assets/generated_images/Lactate_testing_service_image_4bce5f93.png";

export default function HomePage() {
  const services = [
    {
      title: "Triathlon Coaching",
      description: "Complete swim, bike, run training for Ironman and 70.3 events",
      benefits: [
        "Structured training plans for all three disciplines",
        "Race-specific preparation and strategy",
        "Transition optimization",
        "6-12 hours per week commitment"
      ],
      priceRange: "£149/month",
      image: triathlonImage,
      href: "/services#triathlon"
    },
    {
      title: "Cycling Coaching",
      description: "Performance cycling coaching for sportives and time trials",
      benefits: [
        "Power-based training programs",
        "Climbing and time trial focus",
        "Nutrition and pacing strategies",
        "Group ride preparation"
      ],
      priceRange: "£119/month",
      image: cyclingImage,
      href: "/services#cycling"
    },
    {
      title: "Running Coaching",
      description: "Marathon and half-marathon training for busy professionals",
      benefits: [
        "Progressive mileage building",
        "Speed and endurance sessions",
        "Injury prevention protocols",
        "Race day execution plans"
      ],
      priceRange: "£119/month",
      image: runningImage,
      href: "/services#running"
    },
    {
      title: "Lactate Testing",
      description: "Scientific performance testing to optimize your training zones",
      benefits: [
        "Accurate lactate threshold determination",
        "Personalized heart rate & power zones",
        "Performance tracking over time",
        "Data-driven training optimization"
      ],
      priceRange: "£99/session",
      image: lactateTestingImage,
      href: "/services#lactate-testing"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Endurance Coaching for Corporate Professionals in London"
        description="Professional triathlon, cycling, and running coaching in London. Expert training plans designed for busy professionals. Book your free consultation today."
        keywords="triathlon coach London, running coach London, cycling coach London, endurance training London, Ironman coach, marathon training London"
      />
      <Header />
      <main className="flex-1">
        <Hero />
        
        <section className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
                At NDR Coaching, we help ambitious professionals balance high-performance endurance sport with demanding careers
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Whether you're training for your next triathlon, marathon, or simply want to build resilience and fitness, our tailored coaching plans are built around your time, goals, and lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <FeaturesSection />
        <InstagramGallery />

        <section className="py-16 md:py-20 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Perform Without Quitting Your Job?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Book a free consultation and let's build a plan that works for your lifestyle
            </p>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" data-testid="button-cta-booking">
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
