import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Eye, MessageCircle, Share2, Play, Flame, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const NDTVHeroMain = () => {
  const mainStory = {
    id: '1',
    title: 'കാണാതായ വിദ്യാർത്ഥിയെ കണ്ടെത്തി',
    malayalamTitle: 'Missing Student Found Safe in Thrissur',
    excerpt: 'പാലക്കാട്: ചന്ദ്രനഗറിൽ നിന്നും കാണാതായ 13 കാരനായ വിദ്യാര്ത്ഥിയെ കണ്ടെത്തി. ട്രെയിനില് യാത്ര ചെയ്യുകയായിരുന്ന കുട്ടിയെ തൃശൂരിൽ നിന്നാണ് കണ്ടെത്തിയത്. ആര്പിഎഫ് ആണ് കണ്ടെത്തിയത്. കുട്ടിയെ ഉടൻ പാലക്കാട് എത്തിക്കും.',
    malayalamExcerpt: 'പാലക്കാട് ചന്ദ്രനഗര് സ്വദേശിയായ വിദ്യാർത്ഥിയെ രണ്ട് ദിവസം മുമ്പാണ് കാണാതായത്. രാവിലെ സ്കൂളിലേക്ക് എന്ന് പറഞ്ഞിറങ്ങിയ കുട്ടിയെ പിന്നീട് കാണാതാവുകയായിരുന്നു. കുട്ടിയെ കണ്ടെത്തുന്നതിന് വേണ്ടി വ്യാപകമായി തിരച്ചിലാണ് പോലീസ് നടത്തിയത്.',
    category: 'Kerala',
    author: 'സുപ്രഭാതം ന്യൂസ് ടീം',
    publishedAt: '30 minutes ago',
    imageUrl: 'https://images.unsplash.com/photo-1627636784403-a9ccdea8174d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxwb2xpY2UlMjBlbWVyZ2VuY3klMjByZXNjdWUlMjBvZmZpY2Vyc3xlbnwwfDB8fHwxNzU4NDY2NzI5fDA&ixlib=rb-4.1.0&q=85',
    isBreaking: true,
    views: 15420,
    comments: 89,
    isLive: true
  };

  const sideStories = [
    {
      id: '2',
      title: 'പാലക്കാട്: കുട്ടിയെ ഉടൻ എത്തിക്കും',
      malayalamTitle: 'Palakkad: Child to be brought back immediately',
      category: 'Kerala',
      publishedAt: '45 minutes ago',
      imageUrl: 'https://images.unsplash.com/photo-1627636784403-a9ccdea8174d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxwb2xpY2UlMjBlbWVyZ2VuY3klMjByZXNjdWUlMjBvZmZpY2Vyc3xlbnwwfDB8fHwxNzU4NDY2NzI5fDA&ixlib=rb-4.1.0&q=85',
      views: 8750,
      isBreaking: true
    },
    {
      id: '3',
      title: 'Gulf Employment: New Visa Policies Open Doors',
      malayalamTitle: 'ഗൾഫ് തൊഴിൽ: പുതിയ വിസ നയങ്ങൾ വാതിലുകൾ തുറക്കുന്നു',
      category: 'Gulf',
      publishedAt: '3 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      views: 8750
    },
    {
      id: '4',
      title: 'Kerala Sports: Young Athletes Shine in Nationals',
      malayalamTitle: 'കേരള കായികം: ദേശീയ മത്സരങ്ങളിൽ യുവതാരങ്ങൾ മിഴിവോടെ',
      category: 'Sports',
      publishedAt: '4 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=250&fit=crop',
      views: 6890
    }
  ];

  const trendingStories = [
    { title: 'Business Growth in IT Sector Reaches New Heights', views: '15.2K' },
    { title: 'Cultural Festival Celebrations Begin Statewide', views: '12.8K' },
    { title: 'Education Reforms: New Digital Learning Initiative', views: '11.5K' },
    { title: 'Healthcare Advances: Telemedicine Expansion', views: '9.7K' }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story */}
          <div className="lg:col-span-2">
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-hero hover:shadow-gold transition-all duration-500">
                <img
                  src={mainStory.imageUrl}
                  alt={mainStory.title}
                  className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Live Badge */}
                {mainStory.isLive && (
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <Badge className="bg-red-600 text-white animate-pulse flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      LIVE
                    </Badge>
                  </div>
                )}
                
                {/* Breaking Badge */}
                {mainStory.isBreaking && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-breaking text-white animate-pulse-breaking flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      BREAKING
                    </Badge>
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-2 border-white/50 rounded-full p-4">
                    <Play className="w-8 h-8" />
                  </Button>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge className="bg-trending text-trending-foreground font-semibold">
                      {mainStory.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm opacity-90">
                      <Clock className="w-4 h-4" />
                      <span>{mainStory.publishedAt}</span>
                    </div>
                  </div>
                  
                  <h1 className="text-2xl lg:text-4xl font-bold mb-3 leading-tight font-headline">
                    {mainStory.title}
                  </h1>
                  
                  <p className="text-lg opacity-90 mb-4 line-clamp-2 font-malayalam">
                    {mainStory.malayalamTitle}
                  </p>
                  
                  <p className="text-base opacity-80 mb-4 line-clamp-3 hidden lg:block">
                    {mainStory.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{mainStory.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{mainStory.comments}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Stories */}
          <div className="space-y-6">
            {/* Side Stories List */}
            <div className="bg-white rounded-xl shadow-news-card p-6">
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-headline-primary font-headline">
                  Top Stories
                </h2>
              </div>
              
              <div className="space-y-4">
                {sideStories.map((story, index) => (
                  <Link key={story.id} to={`/article/${story.id}`} className="block group">
                    <div className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="relative flex-shrink-0">
                        <img
                          src={story.imageUrl}
                          alt={story.title}
                          className="w-20 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        {story.isBreaking && (
                          <Badge className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 py-0">
                            NEW
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {story.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{story.publishedAt}</span>
                        </div>
                        
                        <h3 className="font-semibold text-sm leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                          {story.title}
                        </h3>
                        
                        <p className="text-xs text-muted-foreground font-malayalam line-clamp-1">
                          {story.malayalamTitle}
                        </p>
                        
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Eye className="w-3 h-3" />
                            <span>{story.views.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-gradient-to-br from-trending/10 to-primary/10 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="w-5 h-5 text-trending" />
                <h3 className="text-lg font-bold text-headline-primary font-headline">
                  Trending Now
                </h3>
              </div>
              
              <div className="space-y-3">
                {trendingStories.map((story, index) => (
                  <div key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors cursor-pointer">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-hero rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-tight hover:text-primary transition-colors">
                        {story.title}
                      </p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Eye className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{story.views} views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NDTVHeroMain;