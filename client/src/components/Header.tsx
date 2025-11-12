import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Instagram, Linkedin, Youtube, ChevronDown } from "lucide-react";
import logo from "@assets/ndr-logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const coachingServices = [
    { name: "Triathlon", href: "/triathlon" },
    { name: "Cycling", href: "/cycling" },
    { name: "Running", href: "/running" },
  ];

  const testingServices = [
    { name: "Lactate Testing", href: "/lactate-testing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" data-testid="link-home">
            <img src={logo} alt="NDR Coaching" className="h-10 w-auto" />
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

        <div className="hidden lg:flex lg:gap-x-6 lg:items-center">
          <Link href="/" data-testid="link-home">
            <span
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Coaching</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    {coachingServices.map((service) => (
                      <li key={service.name}>
                        <NavigationMenuLink asChild>
                          <Link href={service.href}>
                            <span className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              {service.name}
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Testing</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    {testingServices.map((service) => (
                      <li key={service.name}>
                        <NavigationMenuLink asChild>
                          <Link href={service.href}>
                            <span className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              {service.name}
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/blog" data-testid="link-blog">
            <span
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.startsWith("/blog") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Blog
            </span>
          </Link>

          <Link href="/about" data-testid="link-about">
            <span
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === "/about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </span>
          </Link>

          <Link href="/contact" data-testid="link-contact">
            <span
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === "/contact" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </span>
          </Link>

          <a 
            href="https://www.ezgains.co.uk/discount/gabrygrim" 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="link-ezgains"
          >
            <span className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
              EZ Gains
            </span>
          </a>
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
            <Link href="/">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent ${
                  location === "/" ? "bg-accent text-accent-foreground" : ""
                }`}
                data-testid="mobile-link-home"
              >
                Home
              </button>
            </Link>

            <div className="pt-2">
              <p className="px-3 text-sm font-semibold text-muted-foreground mb-2">Coaching</p>
              {coachingServices.map((service) => (
                <Link key={service.name} href={service.href}>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-left rounded-md px-3 py-2 text-base transition-colors hover:bg-accent pl-6"
                    data-testid={`mobile-link-${service.name.toLowerCase()}`}
                  >
                    {service.name}
                  </button>
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <p className="px-3 text-sm font-semibold text-muted-foreground mb-2">Testing</p>
              {testingServices.map((service) => (
                <Link key={service.name} href={service.href}>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-left rounded-md px-3 py-2 text-base transition-colors hover:bg-accent pl-6"
                    data-testid={`mobile-link-${service.name.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {service.name}
                  </button>
                </Link>
              ))}
            </div>

            <Link href="/blog">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent ${
                  location.startsWith("/blog") ? "bg-accent text-accent-foreground" : ""
                }`}
                data-testid="mobile-link-blog"
              >
                Blog
              </button>
            </Link>

            <Link href="/about">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent ${
                  location === "/about" ? "bg-accent text-accent-foreground" : ""
                }`}
                data-testid="mobile-link-about"
              >
                About
              </button>
            </Link>

            <Link href="/contact">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent ${
                  location === "/contact" ? "bg-accent text-accent-foreground" : ""
                }`}
                data-testid="mobile-link-contact"
              >
                Contact
              </button>
            </Link>

            <a 
              href="https://www.ezgains.co.uk/discount/gabrygrim" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent"
                data-testid="mobile-link-ezgains"
              >
                EZ Gains
              </button>
            </a>

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
