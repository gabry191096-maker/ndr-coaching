import { Calendar, MessageCircle, Target, FlaskConical } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Flexible Training Plans",
    description: "Built around meetings, travel & family commitments",
  },
  {
    icon: MessageCircle,
    title: "Professional Support",
    description: "Via TrainingPeaks & WhatsApp for instant guidance",
  },
  {
    icon: Target,
    title: "Goal-Focused Blocks",
    description: "Ironman, 70.3, marathons & cycling sportives",
  },
  {
    icon: FlaskConical,
    title: "Scientific Approach",
    description: "Accurate lactate testing and data-driven programming",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Why Corporate Athletes Choose NDR?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional coaching designed for the unique challenges of balancing high performance sport with demanding careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s/g, '-')}`}
              >
                <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
