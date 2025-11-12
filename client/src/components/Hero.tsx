import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/46A45CF6-2489-4479-BD42-0973F8E5790C_1_105_c_1762949998386.jpeg";

export default function Hero() {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Triathlete in action"
          className="h-full w-full object-cover"
          style={{ objectPosition: 'right center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-white">
              Endurance coaching for corporate professionals
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-200">
              Unlock your athletic potential with personalised endurance coaching designed for busy professionals. Expert triathlon, cycling, and running plans built around your career.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-hero-cta">
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" data-testid="button-view-services">
                  View Services
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Trusted by 100+ London professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
