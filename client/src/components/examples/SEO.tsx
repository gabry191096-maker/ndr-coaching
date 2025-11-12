import SEO from '../SEO';

export default function SEOExample() {
  return (
    <div className="p-8">
      <SEO
        title="Endurance Coaching for Corporate Professionals in London"
        description="Professional triathlon, cycling, and running coaching in London. Expert training plans designed for busy professionals."
        keywords="triathlon coach London, running coach London, cycling coach London, endurance training"
      />
      <p className="text-muted-foreground">SEO component updates the page meta tags (check document head)</p>
    </div>
  );
}
