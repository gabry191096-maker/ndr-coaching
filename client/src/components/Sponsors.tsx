export default function Sponsors() {
  const sponsors = [
    { name: "The Feed", logo: "https://www.thefeed.co.uk/", darkBg: true },
    { name: "EZ Gains", logo: "", greenCircle: true },
    { name: "NRG Gains", logo: "", darkBg: true },
    { name: "Active Westminster", logo: "", colorful: true },
    { name: "Everyone Active", logo: "" },
    { name: "Enable", logo: "" }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by leading brands in sports nutrition and fitness
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {/* The Feed */}
          <div className="flex items-center justify-center p-6 bg-[#1a3d4d] rounded-lg h-24">
            <span className="text-white text-2xl font-bold">The Feed.</span>
          </div>

          {/* EZ Gains */}
          <div className="flex items-center justify-center p-6 rounded-lg h-24">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full border-4 border-[#4a7c59] relative">
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#4a7c59] rounded-full"></div>
              </div>
              <span className="text-[#4a7c59] text-2xl font-bold">EZ</span>
            </div>
          </div>

          {/* NRG Gains */}
          <div className="flex items-center justify-center p-6 bg-black rounded-lg h-24">
            <span className="text-[#8b7355] text-2xl font-bold tracking-wider">NRG<br/><span className="text-sm">GAINS</span></span>
          </div>

          {/* Active Westminster */}
          <div className="flex items-center justify-center p-6 rounded-lg h-24">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">
                <span className="text-red-400">A</span>
                <span className="text-yellow-300">C</span>
                <span className="text-blue-400">T</span>
                <span className="text-green-400">I</span>
                <span className="text-pink-400">V</span>
                <span className="text-purple-400">E</span>
              </div>
              <div className="text-sm font-medium text-blue-600">WESTMINSTER</div>
            </div>
          </div>

          {/* Everyone Active */}
          <div className="flex items-center justify-center p-6 rounded-lg h-24">
            <div className="text-center">
              <div className="relative">
                <span className="text-2xl font-bold text-foreground">everyone</span>
                <div className="absolute -top-1 -right-3 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <div className="text-sm font-bold tracking-wider">ACTIVE</div>
            </div>
          </div>

          {/* Enable */}
          <div className="flex items-center justify-center p-6 rounded-lg h-24">
            <div className="text-center">
              <span className="text-3xl font-bold text-[#2d1b4e]">enable.</span>
              <div className="text-[8px] leading-tight mt-1 text-muted-foreground">
                For happy, healthier communities.<br/>
                Not for profit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
