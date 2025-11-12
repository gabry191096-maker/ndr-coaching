import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import gallery1 from "@assets/gallery-1.jpg";
import gallery2 from "@assets/gallery-2.jpg";
import gallery3 from "@assets/gallery-3.jpg";
import gallery4 from "@assets/gallery-4.jpg";
import gallery5 from "@assets/gallery-5.jpg";
import gallery6 from "@assets/gallery-6.jpg";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
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
