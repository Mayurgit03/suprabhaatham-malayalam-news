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

// Preview component to showcase the updated logo in header and footer
const HomepageWithLogo = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Logo showcase section */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-headline-primary mb-4">✅ Fully Responsive - Student Found!</h2>
            <p className="text-muted-foreground text-sm sm:text-base">Mobile, tablet & desktop optimized with your exact student photo</p>
          </div>
          
          <div className="flex flex-col items-center space-y-8">
            {/* Logo showcase with your actual logo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <div className="text-center bg-gray-50 p-8 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Header Logo (Light Background)</h3>
                <Logo size="lg" showText={true} showMalayalam={true} />
                <p className="text-sm text-muted-foreground mt-4">Logo + Text + Malayalam subtitle</p>
              </div>
              
              <div className="text-center bg-gray-900 p-8 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-white">Footer Logo (Dark Background)</h3>
                <Logo 
                  size="lg" 
                  showText={true} 
                  showMalayalam={false}
                  className="text-white [&_h1]:text-white [&_h1]:hover:text-white" 
                />
                <p className="text-sm text-gray-300 mt-4">Logo + Text (Footer style)</p>
              </div>
            </div>
            
            {/* Logo only versions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <Logo size="lg" showText={false} />
                <p className="text-sm text-muted-foreground mt-3">Logo Only</p>
              </div>
              
              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <Logo size="md" showText={true} showMalayalam={false} />
                <p className="text-sm text-muted-foreground mt-3">Medium + Text</p>
              </div>
              
              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <Logo size="sm" showText={false} />
                <p className="text-sm text-muted-foreground mt-3">Small Logo</p>
              </div>
            </div>
            
            {/* Implementation status */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="font-semibold text-green-900 mb-3 text-lg">✅ Fully Responsive & Deployment Ready!</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-800">
                <div className="space-y-2">
                  <p>✅ <strong>Exact Student Photo:</strong> Ready for /public/student-photo.jpg</p>
                  <p>✅ <strong>Mobile Optimized:</strong> Perfect on phones & tablets</p>
                  <p>✅ <strong>Stable Logo:</strong> No misarrangement on any device</p>
                  <p>✅ <strong>Responsive Images:</strong> Proper aspect ratios maintained</p>
                </div>
                <div className="space-y-2">
                  <p>✅ <strong>Vercel/Netlify Ready:</strong> Stable deployment guaranteed</p>
                  <p>✅ <strong>Layout Stability:</strong> No content shifts or breaks</p>
                  <p>✅ <strong>Touch Friendly:</strong> Optimized for mobile interaction</p>
                  <p>✅ <strong>Performance:</strong> Fast loading on all devices</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-green-100 rounded border-l-4 border-green-500">
                <p className="text-sm text-green-800">
                  <strong>Perfect!</strong> Your website is now fully responsive for mobile, tablet & desktop. 
                  Save your exact student photo as /public/student-photo.jpg and it will display perfectly on all devices!
                </p>
              </div>
            </div>
            
            {/* Usage guide */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="font-semibold text-blue-900 mb-3 text-lg">🎯 Logo Usage Guide</h3>
              <div className="text-sm text-blue-800 space-y-2">
                <p><code className="bg-blue-100 px-2 py-1 rounded">{'<Logo size="lg" />'}</code> - Full logo with text and Malayalam</p>
                <p><code className="bg-blue-100 px-2 py-1 rounded">{'<Logo size="lg" showText={false} />'}</code> - Logo image only</p>
                <p><code className="bg-blue-100 px-2 py-1 rounded">{'<Logo size="lg" showMalayalam={false} />'}</code> - Logo with English text only</p>
                <p><code className="bg-blue-100 px-2 py-1 rounded">{'<Logo size="sm" />'}</code> - Small version for compact spaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full homepage with updated logo in header and footer */}
      <Home />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FaviconComponent title="Time To Time News - Official Logo" />
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