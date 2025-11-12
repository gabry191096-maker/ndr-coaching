import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { type BlogPost } from "@shared/schema";

export default function BlogPage() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Training Tips & Insights - NDR Coaching Blog | Battersea, London"
        description="Expert endurance training tips, London running routes, triathlon advice, and cycling insights from NDR Coaching. Based in Battersea, serving athletes across London."
        keywords="triathlon training tips, running advice London, cycling tips, marathon training blog, endurance coaching advice, London running routes"
        path="/blog"
      />
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" data-testid="text-blog-title">
                Training Tips & Insights
              </h1>
              <p className="mt-6 text-lg text-muted-foreground" data-testid="text-blog-description">
                Expert advice on triathlon, cycling, and running training from NDR Coaching
              </p>
            </div>

            {isLoading ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden hover-elevate">
                    <div className="h-48 bg-muted animate-pulse" />
                    <CardHeader>
                      <div className="h-6 bg-muted rounded animate-pulse mb-2" />
                      <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
                    </CardHeader>
                    <CardContent>
                      <div className="h-4 bg-muted rounded animate-pulse mb-2" />
                      <div className="h-4 bg-muted rounded animate-pulse" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="h-full overflow-hidden hover-elevate cursor-pointer transition-all" data-testid={`card-blog-${post.slug}`}>
                      {post.imageUrl && (
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={post.imageUrl} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" data-testid={`badge-category-${post.slug}`}>{post.category}</Badge>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.publishedAt).toLocaleDateString('en-GB', { 
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        <CardTitle className="line-clamp-2" data-testid={`text-title-${post.slug}`}>
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3 mb-4" data-testid={`text-excerpt-${post.slug}`}>
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                          Read More <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No blog posts yet. Check back soon for training tips and insights!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
