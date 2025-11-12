import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useEffect } from "react";

interface AuthSession {
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [, setLocation] = useLocation();
  
  const { data: session, isLoading } = useQuery<AuthSession>({
    queryKey: ["/api/auth/session"],
    retry: false,
  });

  useEffect(() => {
    if (!isLoading && (!session || !session.isAuthenticated || !session.isAdmin)) {
      setLocation("/admin/login");
    }
  }, [session, isLoading, setLocation]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!session || !session.isAuthenticated || !session.isAdmin) {
    return null;
  }

  return <>{children}</>;
}
