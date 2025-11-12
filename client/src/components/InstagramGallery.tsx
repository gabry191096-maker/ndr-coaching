import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&h=400&fit=crop",
];

export default function InstagramGallery() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Follow on Instagram
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our community of endurance athletes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com/gabrygrim"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded-md hover-elevate transition-all duration-300"
              data-testid={`instagram-image-${index}`}
            >
              <img
                src={image}
                alt={`Training moment ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg" data-testid="button-follow-instagram">
            <a href="https://instagram.com/gabrygrim" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Follow @gabrygrim
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
