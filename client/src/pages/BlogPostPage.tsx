import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import DOMPurify from "isomorphic-dompurify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, User } from "lucide-react";
import { type BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${slug}`],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="h-8 bg-muted rounded animate-pulse mb-4 w-32" />
            <div className="h-12 bg-muted rounded animate-pulse mb-6" />
            <div className="h-96 bg-muted rounded animate-pulse mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${post.title} - NDR Coaching Blog`}
        description={post.excerpt}
        keywords={`${post.category}, triathlon training, running coaching, cycling tips, NDR Coaching`}
        path={`/blog/${post.slug}`}
      />
      <Header />
      <main className="flex-1">
        <article className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Link href="/blog">
              <Button variant="ghost" className="mb-8" data-testid="button-back-to-blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <div className="mb-8">
              <Badge variant="secondary" className="mb-4" data-testid={`badge-category-${post.slug}`}>
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-post-title">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2" data-testid="text-post-author">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2" data-testid="text-post-date">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString('en-GB', { 
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>

            {post.imageUrl && (
              <div className="mb-12 rounded-lg overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-auto"
                  data-testid="img-post-featured"
                />
              </div>
            )}

            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-primary prose-a:text-primary hover:prose-a:text-primary/80"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content, {
                ADD_TAGS: ['iframe'],
                ADD_ATTR: ['allowtransparency', 'frameborder', 'scrolling', 'height', 'width', 'src', 'target', 'rel', 'style'],
                ALLOWED_URI_REGEXP: /^(?:(?:https?:\/\/)?(?:www\.)?strava\.com|\/)/
              }) }}
              data-testid="text-post-content"
            />

            <div className="mt-12 pt-8 border-t">
              <Link href="/booking">
                <Button size="lg" data-testid="button-book-consultation">
                  Ready to Start Training? Book a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
