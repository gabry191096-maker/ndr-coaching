import theFeedLogo from "@assets/sponsor-the-feed.jpg";
import ezGainsLogo from "@assets/sponsor-ez-gains.jpg";
import nrgLogo from "@assets/sponsor-nrg.png";
import activeWestminsterLogo from "@assets/sponsor-active-westminster.png";
import everyoneActiveLogo from "@assets/sponsor-everyone-active.png";
import enableLogo from "@assets/sponsor-enable.jpg";

export default function Sponsors() {
  const sponsors = [
    { name: "The Feed", logo: theFeedLogo },
    { name: "EZ Gains", logo: ezGainsLogo },
    { name: "NRG Gains", logo: nrgLogo },
    { name: "Active Westminster", logo: activeWestminsterLogo },
    { name: "Everyone Active", logo: everyoneActiveLogo },
    { name: "Enable", logo: enableLogo }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by leading brands in sports nutrition and fitness
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 rounded-lg h-32 bg-card border border-border hover-elevate transition-all"
              data-testid={`sponsor-${sponsor.name.toLowerCase().replace(/\s/g, '-')}`}
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-20 max-w-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
