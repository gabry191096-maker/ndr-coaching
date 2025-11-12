import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function BookingPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Book Free Consultation - NDR Coaching London"
        description="Schedule a free 30-minute consultation with our expert endurance coach. Discuss your goals and create a personalized training plan."
        keywords="book endurance coach, free consultation, triathlon coach booking London"
      />
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Book Your Free Consultation
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Let's discuss your goals and create a personalized training plan that fits your lifestyle. This 30-minute call is completely free with no obligations.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/gabriele-ndrcoaching/30min"
                style={{ minWidth: "320px", height: "700px" }}
                data-testid="calendly-widget"
              />
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <h2 className="text-2xl font-heading font-semibold mb-6 text-center">
                What to Expect in Your Consultation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-heading font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-heading font-semibold">Discuss Your Goals</h3>
                  <p className="text-sm text-muted-foreground">
                    Tell me about your athletic ambitions and current fitness level
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-heading font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-heading font-semibold">Review Your Schedule</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll look at your work commitments and available training time
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-heading font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-heading font-semibold">Create Your Plan</h3>
                  <p className="text-sm text-muted-foreground">
                    I'll outline a personalized approach to help you succeed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
