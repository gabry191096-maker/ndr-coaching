import ServiceCard from '../ServiceCard';
import triathlonImage from "@assets/generated_images/Triathlon_training_image_33627335.png";

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        title="Triathlon Coaching"
        description="Complete swim, bike, run training for Ironman and 70.3 events"
        benefits={[
          "Structured training plans",
          "Weekly performance reviews",
          "Race-day preparation"
        ]}
        priceRange="£200/month"
        image={triathlonImage}
        href="/services/triathlon"
      />
    </div>
  );
}
