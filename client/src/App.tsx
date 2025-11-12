import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import LeadGeneratorPopup from "@/components/LeadGeneratorPopup";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import BookingPage from "@/pages/BookingPage";
import ContactPage from "@/pages/ContactPage";
import LactateTestingPage from "@/pages/LactateTestingPage";
import TriathlonPage from "@/pages/TriathlonPage";
import CyclingPage from "@/pages/CyclingPage";
import RunningPage from "@/pages/RunningPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import PacingCalculatorPage from "@/pages/PacingCalculatorPage";
import AdminSubscribersPage from "@/pages/AdminSubscribersPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/triathlon" component={TriathlonPage} />
      <Route path="/cycling" component={CyclingPage} />
      <Route path="/running" component={RunningPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPostPage} />
      <Route path="/booking" component={BookingPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/pacing-calculator" component={PacingCalculatorPage} />
      <Route path="/lactate-testing" component={LactateTestingPage} />
      <Route path="/admin/subscribers" component={AdminSubscribersPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <LeadGeneratorPopup />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
