import { useEffect, useRef, useState } from "react";
import theFeedLogo from "@assets/image_1762949139425.png";
import ezGainsLogo from "@assets/image_1762949147572.png";
import activeWestminsterLogo from "@assets/image_1762949163488.png";
import everyoneActiveLogo from "@assets/image_1762949171497.png";
import enableLogo from "@assets/image_1762949178981.png";

export default function Sponsors() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const sponsors = [
    { name: "The Feed", logo: theFeedLogo, url: "https://thefeed.com/" },
    { name: "EZ Gains", logo: ezGainsLogo, url: "https://www.ezgains.co.uk/discount/gabrygrim" },
    { name: "Active Westminster", logo: activeWestminsterLogo, url: "https://active.westminster.gov.uk/leisure-centres/" },
    { name: "Everyone Active", logo: everyoneActiveLogo, url: "https://www.everyoneactive.com/" },
    { name: "Enable", logo: enableLogo, url: "https://enablelc.org" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-20" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Trusted by leading brands in sports nutrition and fitness
          </p>
        </div>

        <div className="bg-white rounded-xl p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-full transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`sponsor-${sponsor.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="max-h-32 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
