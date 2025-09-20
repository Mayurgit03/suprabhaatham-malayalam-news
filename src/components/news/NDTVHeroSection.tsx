import React from 'react';
import { Clock, User, ArrowRight, Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NDTVHeroSection = () => {
  // Main featured story
  const featuredStory = {
    id: '1',
    title: '"Likely To Have Humanitarian Consequences": India On US Hiking H-1B Visa Fee',
    malayalamTitle: 'എച്ച്-1ബി വിസാ ഫീസ് വർധനയിൽ ഇന്ത്യയുടെ ആശങ്ക: "മാനുഷിക പ്രത്യാഘാതങ്ങൾ ഉണ്ടാകാൻ സാധ്യത"',
    category: 'World',
    author: 'NDTV News Desk',
    publishedAt: '2 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&h=600&fit=crop',
    isBreaking: true
  };

  // Sidebar stories
  const sidebarStories = [
    {
      id: '2',
      title: 'Hamas Releases "Farewell" Photo Of Hostages, Blames Israel\'s Gaza Invasion',
      malayalamTitle: 'ഗാസാ അധിനിവേശത്തിന് ഇസ്രയേലിനെ കുറ്റപ്പെടുത്തി ഹമാസ് ബന്ദികളുടെ "വിടപറയൽ" ഫോട്ടോ പുറത്തുവിട്ടു',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      category: 'World'
    },
    {
      id: '3',
      title: 'Trump Imposes $100,000 Fee On H-1B Visas: What It Means For Indians',
      malayalamTitle: 'എച്ച്-1ബി വിസയ്ക്ക് 1 ലക്ഷം ഡോളർ ഫീസ് ട്രംപ് ചുമത്തി: ഇന്ത്യക്കാർക്ക് എന്താണ് അർത്ഥം',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
      category: 'World'
    },
    {
      id: '4',
      title: '"Return To US Within 24 Hours, Don\'t Leave": Meta, Microsoft To H-1B Holders',
      malayalamTitle: '"24 മണിക്കൂറിനുള്ളിൽ യുഎസിലേക്ക് മടങ്ങുക, പോകരുത്": എച്ച്-1ബി ഉടമകളോട് മെറ്റ, മൈക്രോസോഫ്റ്റ്',
      imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
      category: 'Tech'
    },
    {
      id: '5',
      title: 'Pak Minister On Whether Saudi Will Get Involved If There Is War With India',
      malayalamTitle: 'ഇന്ത്യയുമായി യുദ്ധമുണ്ടായാൽ സൗദി ഇടപെടുമോ എന്ന് പാക് മന്ത്രി പറഞ്ഞത്',
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop',
      category: 'Politics'
    }
  ];

  return (
    <section className="bg-background py-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Story - Takes 2 columns */}
          <div className="lg:col-span-2 animate-scale-in">
            <Link to={`/article/${featuredStory.id}`} className="group block">
              <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src={featuredStory.imageUrl}
                  alt={featuredStory.title}
                  className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Breaking Badge */}
                {featuredStory.isBreaking && (
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-breaking text-breaking-foreground animate-pulse-breaking text-sm px-3 py-1">
                      <Flame className="h-4 w-4 mr-1" />
                      BREAKING
                    </Badge>
                  </div>
                )}
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="space-y-4">
                    {/* Category */}
                    <Badge className="bg-primary text-primary-foreground">
                      {featuredStory.category}
                    </Badge>
                    
                    {/* Title */}
                    <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight font-headline group-hover:text-blue-100 transition-colors">
                      {featuredStory.title}
                    </h1>
                    
                    {/* Malayalam Title */}
                    <h2 className="text-lg lg:text-xl text-white/90 font-malayalam leading-relaxed">
                      {featuredStory.malayalamTitle}
                    </h2>
                    
                    {/* Meta */}
                    <div className="flex items-center space-x-4 text-white/80 text-sm">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredStory.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredStory.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar Stories - Takes 1 column */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-xl font-bold text-headline-primary border-b-2 border-primary pb-2 hover:border-breaking transition-colors duration-300">
              Top Stories
            </h3>
            
            <div className="space-y-6">
              {sidebarStories.map((story, index) => (
                <Link
                  key={story.id}
                  to={`/article/${story.id}`}
                  className="group block hover:bg-accent/50 p-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <div className="flex space-x-4">
                    {/* Story Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={story.imageUrl}
                        alt={story.title}
                        className="w-24 h-20 object-cover rounded group-hover:scale-110 transition-all duration-500 group-hover:brightness-110"
                      />
                    </div>
                    
                    {/* Story Content */}
                    <div className="flex-1 min-w-0">
                      <div className="space-y-2">
                        <Badge variant="outline" className="text-xs">
                          {story.category}
                        </Badge>
                        
                        <h4 className="text-sm font-semibold text-headline-primary line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                          {story.title}
                        </h4>
                        
                        <p className="text-xs text-muted-foreground font-malayalam line-clamp-2 leading-relaxed">
                          {story.malayalamTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="pt-4 border-t border-border">
              <Button variant="outline" className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:animate-glow">
                View All World News
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-all duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NDTVHeroSection;