import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import ProtectedRoute from "@/components/ProtectedRoute";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Calendar, Gift, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { type EmailSubscriber } from "@shared/schema";

function AdminSubscribersContent() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const { data: subscribers, isLoading } = useQuery<EmailSubscriber[]>({
    queryKey: ["/api/subscribers"],
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest("POST", "/api/auth/logout");
    },
    onSuccess: () => {
      toast({
        title: "Logged Out",
        description: "You have been logged out successfully.",
      });
      setLocation("/admin/login");
    },
  });

  const exportToCSV = () => {
    if (!subscribers || subscribers.length === 0) {
      return;
    }

    const headers = ["Email", "Subscribed Date", "Discount Code"];
    const csvContent = [
      headers.join(","),
      ...subscribers.map(sub => 
        [
          sub.email,
          new Date(sub.subscribedAt).toLocaleDateString('en-GB'),
          sub.discountClaimed
        ].join(",")
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `ndr-coaching-subscribers-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Email Subscribers - Admin Dashboard | NDR Coaching"
        description="Admin dashboard for managing email subscribers"
        path="/admin/subscribers"
      />
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center justify-between mb-8 gap-4">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" data-testid="text-admin-title">
                    Email Subscribers
                  </h1>
                  <p className="mt-4 text-lg text-muted-foreground" data-testid="text-subscriber-count">
                    {isLoading ? "Loading..." : `${subscribers?.length || 0} total subscribers`}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {subscribers && subscribers.length > 0 && (
                    <Button 
                      onClick={exportToCSV}
                      data-testid="button-export-csv"
                      className="gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Export CSV
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => logoutMutation.mutate()}
                    data-testid="button-logout"
                    className="gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </div>

              {isLoading ? (
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center gap-4 p-4 border rounded-md">
                          <div className="h-10 w-10 bg-muted rounded-full animate-pulse" />
                          <div className="flex-1">
                            <div className="h-4 bg-muted rounded animate-pulse mb-2 w-3/4" />
                            <div className="h-3 bg-muted rounded animate-pulse w-1/2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : subscribers && subscribers.length > 0 ? (
                <div className="space-y-4">
                  {subscribers.map((subscriber) => (
                    <Card key={subscriber.id} className="overflow-hidden hover-elevate" data-testid={`card-subscriber-${subscriber.email}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="flex items-center gap-2 text-xl">
                              <Mail className="h-5 w-5 text-primary" />
                              <span data-testid={`text-email-${subscriber.email}`}>{subscriber.email}</span>
                            </CardTitle>
                            <CardDescription className="mt-2 flex flex-wrap gap-4">
                              <span className="flex items-center gap-1" data-testid={`text-date-${subscriber.email}`}>
                                <Calendar className="h-4 w-4" />
                                {new Date(subscriber.subscribedAt).toLocaleDateString('en-GB', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Gift className="h-4 w-4" />
                                <Badge variant="secondary" data-testid={`badge-discount-${subscriber.email}`}>
                                  {subscriber.discountClaimed}
                                </Badge>
                              </span>
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-12">
                    <div className="text-center">
                      <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg text-muted-foreground" data-testid="text-no-subscribers">
                        No email subscribers yet. The popup will start collecting emails from visitors.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function AdminSubscribersPage() {
  return (
    <ProtectedRoute>
      <AdminSubscribersContent />
    </ProtectedRoute>
  );
}
