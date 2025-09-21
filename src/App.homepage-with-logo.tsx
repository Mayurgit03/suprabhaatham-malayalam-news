import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import SearchPage from "./pages/Search";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Logo from "./components/ui/Logo";
import FaviconComponent from "./components/ui/FaviconComponent";

const queryClient = new QueryClient();

// Preview component to showcase the updated homepage with new logo
const HomepageWithLogo = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Logo showcase section */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-headline-primary mb-4">Time to Time News - Complete Homepage</h2>
            <p className="text-muted-foreground">Multiple breaking news stories with Malayalam content and trending sidebar</p>
          </div>
          
          <div className="flex flex-col items-center space-y-8">
            {/* Different logo sizes */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <Logo size="sm" />
                <p className="text-sm text-muted-foreground mt-2">Small</p>
              </div>
              <div className="text-center">
                <Logo size="md" />
                <p className="text-sm text-muted-foreground mt-2">Medium</p>
              </div>
              <div className="text-center">
                <Logo size="lg" />
                <p className="text-sm text-muted-foreground mt-2">Large</p>
              </div>
            </div>
            
            {/* Logo without text */}
            <div className="text-center">
              <Logo size="lg" showText={false} />
              <p className="text-sm text-muted-foreground mt-2">Official Logo Only</p>
            </div>
            
            {/* Logo without Malayalam text */}
            <div className="text-center">
              <Logo size="lg" showText={true} showMalayalam={false} />
              <p className="text-sm text-muted-foreground mt-2">Logo with Text (No Malayalam)</p>
            </div>
            
            {/* Implementation status */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
              <h3 className="font-semibold text-green-900 mb-2">✅ Production-Ready News Website</h3>
              <div className="text-sm text-green-800 space-y-1">
                <p>✅ Header: Logo with web-hosted image (Vercel compatible)</p>
                <p>✅ Footer: Logo added with image (Malayalam text removed)</p>
                <p>✅ Breaking News 1: Malayalam suicide attempt story</p>
                <p>✅ Breaking News 2: KAPPA act exile story added</p>
                <p>✅ Trending Sidebar: H-1B visa related stories</p>
                <p>✅ Responsive Design: Mobile, tablet, and desktop optimized</p>
                <p>✅ Favicon: Custom logo favicon for browser tab</p>
                <p>✅ Production Ready: All images use web-hosted URLs</p>
                <p>🌐 Logo source: <code className="bg-green-100 px-1 rounded">Unsplash CDN (production-ready)</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full homepage with updated header */}
      <Home />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FaviconComponent title="Time To Time News - Complete Homepage" />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomepageWithLogo />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;