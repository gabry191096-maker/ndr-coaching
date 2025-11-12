import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  path?: string;
}

export default function SEO({ title, description, keywords, ogImage, path }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | NDR Coaching`;
    const baseUrl = "https://ndrcoaching.co.uk";
    const currentPath = path || window.location.pathname;
    const canonicalUrl = `${baseUrl}${currentPath}`;
    const defaultImage = `${baseUrl}/og-image.png`;
    const imageUrl = ogImage || defaultImage;
    
    document.title = fullTitle;
    
    const updateOrCreateMeta = (selector: string, attribute: string, content: string, isProperty = false) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(isProperty ? "property" : "name", attribute);
        element.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        if (isProperty) {
          meta.setAttribute("property", attribute);
        } else {
          meta.setAttribute("name", attribute);
        }
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    const updateOrCreateLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (link) {
        link.setAttribute("href", href);
      } else {
        const newLink = document.createElement("link");
        newLink.setAttribute("rel", rel);
        newLink.setAttribute("href", href);
        document.head.appendChild(newLink);
      }
    };

    updateOrCreateMeta('meta[name="description"]', "description", description);
    
    if (keywords) {
      updateOrCreateMeta('meta[name="keywords"]', "keywords", keywords);
    }

    updateOrCreateMeta('meta[property="og:title"]', "og:title", fullTitle, true);
    updateOrCreateMeta('meta[property="og:description"]', "og:description", description, true);
    updateOrCreateMeta('meta[property="og:url"]', "og:url", canonicalUrl, true);
    updateOrCreateMeta('meta[property="og:image"]', "og:image", imageUrl, true);
    
    updateOrCreateMeta('meta[name="twitter:title"]', "twitter:title", fullTitle);
    updateOrCreateMeta('meta[name="twitter:description"]', "twitter:description", description);
    updateOrCreateMeta('meta[name="twitter:url"]', "twitter:url", canonicalUrl);
    updateOrCreateMeta('meta[name="twitter:image"]', "twitter:image", imageUrl);

    updateOrCreateLink("canonical", canonicalUrl);
  }, [title, description, keywords, ogImage, path]);

  return null;
}
