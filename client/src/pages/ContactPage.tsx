import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact NDR Coaching - London Endurance Coaching"
        description="Get in touch with NDR Coaching for triathlon, cycling, and running coaching in London. Email, WhatsApp, or contact form available."
        keywords="contact endurance coach London, NDR Coaching contact, triathlon coach inquiry"
      />
      <Header />
      <main className="flex-1">
        <div className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about our coaching services? We're here to help. Reach out through any of the channels below or fill out the contact form.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
