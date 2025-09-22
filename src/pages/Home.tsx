import React from 'react';
import NDTVHeader from '@/components/news/NDTVHeader';
import NDTVHeroMain from '@/components/news/NDTVHeroMain';
import NDTVNewsSections from '@/components/news/NDTVNewsSections';
import NDTVFooter from '@/components/news/NDTVFooter';
import BreakingNewsStory from '@/components/news/BreakingNewsStory';
import SecondBreakingNewsStory from '@/components/news/SecondBreakingNewsStory';
import TrendingNewsSidebar from '@/components/news/TrendingNewsSidebar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Flame, TrendingUp, Zap, Eye } from 'lucide-react';

const Home = () => {
  // Additional featured stories for NDTV-style layout
  const featuredStories = [
    {
      id: '14',
      title: 'Digital Kerala Initiative Transforms Rural Areas',
      malayalamTitle: 'ഡിജിറ്റൽ കേരള സംരംഭം ഗ്രാമപ്രദേശങ്ങളെ മാറ്റിമറിക്കുന്നു',
      excerpt: 'High-speed internet connectivity reaches remote villages, enabling digital literacy and e-governance...',
      category: 'Technology',
      author: 'Anitha Kumari',
      publishedAt: '30 minutes ago',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      views: 18750,
      comments: 92,
      isBreaking: true
    },
    {
      id: '15',
      title: 'Renewable Energy Projects Boost Kerala Economy',
      malayalamTitle: 'പുനരുപയോഗ ഊർജ പദ്ധതികൾ കേരള സമ്പദ്വ്യവസ്ഥയെ ഉത്തേജിപ്പിക്കുന്നു',
      excerpt: 'Solar and wind energy installations create thousands of jobs while reducing carbon footprint...',
      category: 'Environment',
      author: 'Dr. Rajesh Nair',
      publishedAt: '1 hour ago',
      imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop',
      views: 14230,
      comments: 67
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NDTVHeader />
      <NDTVHeroMain />
      
      {/* Breaking News and Trending Section - Fully Responsive */}
      <section className="py-6 sm:py-8 lg:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Breaking News Stories - Responsive Layout */}
            <div className="flex-1 lg:flex-[2] space-y-6 lg:space-y-8">
              <BreakingNewsStory />
              <div className="hidden sm:block">
                <SecondBreakingNewsStory />
              </div>
            </div>
            
            {/* Trending News Sidebar - Responsive */}
            <aside className="w-full lg:w-80 lg:flex-shrink-0">
              <div className="sticky top-4">
                <TrendingNewsSidebar />
              </div>
            </aside>
          </div>
        </div>
      </section>
      
      <NDTVNewsSections />
      
      {/* Additional Featured Stories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-8">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-headline-primary font-headline">
                Featured Stories
              </h2>
            </div>
            <Badge className="bg-trending text-trending-foreground">
              Editor's Pick
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredStories.map((story, index) => (
              <div key={story.id} className="bg-white rounded-xl shadow-news-card hover:shadow-gold transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {story.isBreaking && (
                    <Badge className="absolute top-4 right-4 bg-gradient-breaking text-white animate-pulse-breaking">
                      <Flame className="w-3 h-3 mr-1" />
                      BREAKING
                    </Badge>
                  )}
                  <Badge className="absolute top-4 left-4 bg-trending text-trending-foreground">
                    {story.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors font-headline">
                    {story.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 font-malayalam">
                    {story.malayalamTitle}
                  </p>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span>{story.author}</span>
                      <span>{story.publishedAt}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{story.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NDTVFooter />
    </div>
  );
};

export default Home;