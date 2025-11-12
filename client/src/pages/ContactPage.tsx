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

                              <div className="mt-12 space-y-6">
                                                  <div className="flex items-center justify-center space-x-4">
                                                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                                              </svg>
                                                                        <a href="mailto:gabriele@ndrcoaching.co.uk" className="text-xl text-white hover:text-primary transition-colors">
                                                                                                gabriele@ndrcoaching.co.uk
                                                                                              </a>
                                                                      </div>

                                                  <div className="flex items-center justify-center space-x-4">
                                                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                                                              </svg>
                    <a href="tel:+447444035852" className="text-xl text-white hover:text-primary transition-colors">                                                                                                +44 7123 456789
                      +44 7444 035852
                    </a>
                                                                    </div></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
