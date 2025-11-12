import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Gift } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface SubscribeResponse {
  message: string;
  discountCode: string;
}

export default function LeadGeneratorPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already seen or dismissed the popup
    const hasSeenPopup = localStorage.getItem("ndr_popup_seen");
    const hasSubscribed = localStorage.getItem("ndr_subscribed");

    if (!hasSeenPopup && !hasSubscribed) {
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("ndr_popup_seen", "true");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/subscribe", { email });
      return await response.json() as SubscribeResponse;
    },
    onSuccess: (data) => {
      setDiscountCode(data.discountCode);
      setShowSuccess(true);
      localStorage.setItem("ndr_subscribed", "true");
      toast({
        title: "Welcome to NDR Coaching!",
        description: `Your discount code: ${data.discountCode}`,
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      subscribeMutation.mutate(email);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (showSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md" data-testid="dialog-success">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
            data-testid="button-close-success"
          >
            <X className="h-4 w-4" />
          </button>
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Gift className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle className="text-center text-2xl">You're All Set!</DialogTitle>
            <DialogDescription className="text-center">
              Check your inbox for your welcome email with your exclusive discount code.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 rounded-lg bg-primary/10 p-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Your Discount Code:</p>
            <p className="text-3xl font-bold text-primary tracking-wider" data-testid="text-discount-code">
              {discountCode}
            </p>
            <p className="text-xs text-muted-foreground mt-2">15% off your first coaching package</p>
          </div>
          <div className="mt-4">
            <Button onClick={handleClose} className="w-full" data-testid="button-start-training">
              Start Your Journey
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md" data-testid="dialog-lead-generator">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
          data-testid="button-close-popup"
        >
          <X className="h-4 w-4" />
        </button>
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Gift className="h-8 w-8 text-primary" />
          </div>
          <DialogTitle className="text-center text-2xl">Get 15% Off Your First Coaching Package</DialogTitle>
          <DialogDescription className="text-center">
            Join hundreds of London athletes achieving their endurance goals. Subscribe now to unlock your exclusive discount.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="popup-email">Email Address</Label>
            <Input
              id="popup-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-popup-email"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={subscribeMutation.isPending}
            data-testid="button-claim-discount"
          >
            {subscribeMutation.isPending ? "Subscribing..." : "Claim My 15% Discount"}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
