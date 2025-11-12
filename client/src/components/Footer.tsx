import { Link } from "wouter";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">NDR Coaching</h3>
            <p className="text-sm text-muted-foreground">
              Professional endurance coaching for corporate athletes in London.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <span className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-home">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-services">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-about">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-contact">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#triathlon">
                  <span className="text-muted-foreground hover:text-primary transition-colors">Triathlon Coaching</span>
                </Link>
              </li>
              <li>
                <Link href="/services#cycling">
                  <span className="text-muted-foreground hover:text-primary transition-colors">Cycling Coaching</span>
                </Link>
              </li>
              <li>
                <Link href="/services#running">
                  <span className="text-muted-foreground hover:text-primary transition-colors">Running Coaching</span>
                </Link>
              </li>
              <li>
                <Link href="/lactate-testing">
                  <span className="text-muted-foreground hover:text-primary transition-colors">Lactate Testing</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact & Social</h4>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">London, United Kingdom</p>
              <a href="mailto:gabriele@ndrcoaching.co.uk" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                gabriele@ndrcoaching.co.uk
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://instagram.com/gabrygrim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriele-grimaldi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.youtube.com/@ndrcoaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-youtube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NDR Coaching. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Terms & Services</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
