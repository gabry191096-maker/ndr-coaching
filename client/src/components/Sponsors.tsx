import theFeedLogo from "@assets/image_1762949139425.png";
import ezGainsLogo from "@assets/image_1762949147572.png";
import activeWestminsterLogo from "@assets/image_1762949163488.png";
import everyoneActiveLogo from "@assets/image_1762949171497.png";
import enableLogo from "@assets/image_1762949178981.png";

export default function Sponsors() {
  const sponsors = [
    { name: "The Feed", logo: theFeedLogo },
    { name: "EZ Gains", logo: ezGainsLogo },
    { name: "Active Westminster", logo: activeWestminsterLogo },
    { name: "Everyone Active", logo: everyoneActiveLogo },
    { name: "Enable", logo: enableLogo }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by leading brands in sports nutrition and fitness
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center w-full"
              data-testid={`sponsor-${sponsor.name.toLowerCase().replace(/\s/g, '-')}`}
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
