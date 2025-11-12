import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" data-testid="link-home">
            <span className="text-2xl font-heading font-bold text-primary">NDR Coaching</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} data-testid={`link-${item.name.toLowerCase()}`}>
              <span
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="ghost"
              asChild
              data-testid="button-instagram"
            >
              <a href="https://instagram.com/gabrygrim" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
              data-testid="button-linkedin"
            >
              <a href="https://www.linkedin.com/in/gabriele-grimaldi/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
              data-testid="button-youtube"
            >
              <a href="https://www.youtube.com/@ndrcoaching" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <Link href="/booking">
            <Button data-testid="button-book-consultation">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="space-y-1 px-4 pb-4 pt-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent ${
                    location === item.href ? "bg-accent text-accent-foreground" : ""
                  }`}
                  data-testid={`mobile-link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </button>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <div className="flex gap-2 px-3">
                <Button size="icon" variant="ghost" asChild>
                  <a href="https://instagram.com/gabrygrim" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <a href="https://www.linkedin.com/in/gabriele-grimaldi/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <a href="https://www.youtube.com/@ndrcoaching" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <Link href="/booking">
                <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
