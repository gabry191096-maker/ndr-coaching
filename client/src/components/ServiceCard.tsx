import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  priceRange: string;
  image: string;
  href: string;
}

export default function ServiceCard({ title, description, benefits, priceRange, image, href }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="space-y-2">
        <h3 className="text-2xl font-heading font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 pt-6">
        <div className="w-full">
          <p className="text-sm text-muted-foreground">Starting from</p>
          <p className="text-2xl font-heading font-bold text-primary">{priceRange}</p>
        </div>
        <div className="flex gap-2 w-full">
          <Link href={href} className="flex-1">
            <Button variant="outline" className="w-full" data-testid={`button-learn-${title.toLowerCase().replace(/\s/g, '-')}`}>
              Learn More
            </Button>
          </Link>
          <Link href="/booking" className="flex-1">
            <Button className="w-full" data-testid={`button-book-${title.toLowerCase().replace(/\s/g, '-')}`}>
              Book Now
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
