import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { useEffect } from "react";

export default function InstagramGallery() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/gabrygrim/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: 'calc(100% - 2px)'
              }}
            >
            </blockquote>
          </div>
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
