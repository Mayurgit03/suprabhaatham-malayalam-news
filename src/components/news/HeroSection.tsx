import React from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Sample featured news data
  const featuredNews = {
    id: '1',
    title: 'Major Policy Changes Announced for Kerala Development',
    malayalamTitle: 'കേരള വികസനത്തിനായി പ്രധാന നയ മാറ്റങ്ങൾ പ്രഖ്യാപിച്ചു',
    excerpt: 'The state government announces comprehensive reforms in education, healthcare, and infrastructure sectors...',
    malayalamExcerpt: 'വിദ്യാഭ്യാസ, ആരോഗ്യ, അടിസ്ഥാന സൗകര്യ മേഖലകളിൽ സമഗ്ര പരിഷ്കാരങ്ങൾ സംസ്ഥാന സർക്കാർ പ്രഖ്യാപിച്ചു...',
    category: 'Politics',
    author: 'Rajesh Kumar',
    publishedAt: '2 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&h=600&fit=crop',
  };

  const trendingTopics = [
    'Gulf Job Market',
    'Kerala Floods Update',
    'IT Policy 2024',
    'Education Reforms',
    'Healthcare Initiatives'
  ];

  return (
    <section className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }} 
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6 animate-slide-in">
            <div className="space-y-2">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <TrendingUp className="h-4 w-4 mr-1" />
                Featured Story
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold font-headline leading-tight">
                {featuredNews.title}
              </h1>
              <h2 className="text-xl lg:text-2xl font-semibold font-malayalam opacity-90 leading-relaxed">
                {featuredNews.malayalamTitle}
              </h2>
            </div>
            
            <p className="text-lg text-white/90 leading-relaxed font-body">
              {featuredNews.excerpt}
            </p>
            
            <p className="text-base text-white/80 font-malayalam leading-relaxed">
              {featuredNews.malayalamExcerpt}
            </p>

            <div className="flex items-center space-x-4 text-sm text-white/80">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {featuredNews.category}
              </span>
              <span>{featuredNews.author}</span>
              <span>{featuredNews.publishedAt}</span>
            </div>

            <Link to={`/article/${featuredNews.id}`}>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold group shadow-lg"
              >
                Read Full Story
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={featuredNews.imageUrl}
                alt={featuredNews.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Trending Topics */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-5 w-5 text-trending" />
              <span className="font-semibold text-white/90">Trending Now:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingTopics.map((topic, index) => (
                <Link
                  key={index}
                  to={`/search?q=${encodeURIComponent(topic)}`}
                  className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full text-sm transition-colors border border-white/20 hover:border-white/40"
                >
                  #{topic}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;