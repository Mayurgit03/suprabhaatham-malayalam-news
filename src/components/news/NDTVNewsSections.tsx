import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Eye, MessageCircle, ArrowRight, Play, Globe, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const NDTVNewsSections = () => {
  const sections = [
    {
      title: 'Kerala News',
      malayalamTitle: 'കേരള വാർത്തകൾ',
      color: 'bg-red-600',
      icon: <Globe className="w-5 h-5" />,
      stories: [
        {
          id: '5',
          title: 'State Budget 2024: Focus on Digital Infrastructure',
          malayalamTitle: 'സംസ്ഥാന ബജറ്റ് 2024: ഡിജിറ്റൽ ഇൻഫ്രാസ്ട്രക്ചറിൽ ശ്രദ്ധ',
          excerpt: 'Kerala allocates ₹5,000 crores for digital transformation projects...',
          imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
          publishedAt: '2 hours ago',
          views: 8420,
          comments: 45,
          isVideo: false
        },
        {
          id: '6',
          title: 'Kochi Metro Extension Project Gets Green Signal',
          malayalamTitle: 'കൊച്ചി മെട്രോ വിപുലീകരണ പദ്ധതിക്ക് അനുമതി',
          excerpt: 'Phase 2 of Kochi Metro to connect major IT hubs and residential areas...',
          imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop',
          publishedAt: '4 hours ago',
          views: 6750,
          comments: 32,
          isVideo: true
        }
      ]
    },
    {
      title: 'Gulf News',
      malayalamTitle: 'ഗൾഫ് വാർത്തകൾ',
      color: 'bg-orange-600',
      icon: <TrendingUp className="w-5 h-5" />,
      stories: [
        {
          id: '7',
          title: 'UAE Announces New Visa Categories for Skilled Workers',
          malayalamTitle: 'യുഎഇ വിദഗ്ധ തൊഴിലാളികൾക്കായി പുതിയ വിസ വിഭാഗങ്ങൾ പ്രഖ്യാപിച്ചു',
          excerpt: 'Golden visa program extended to include more professional categories...',
          imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop',
          publishedAt: '1 hour ago',
          views: 12340,
          comments: 78,
          isVideo: false
        },
        {
          id: '8',
          title: 'Saudi Arabia Opens New Job Opportunities',
          malayalamTitle: 'സൗദി അറേബ്യ പുതിയ തൊഴിലവസരങ്ങൾ തുറക്കുന്നു',
          excerpt: 'Vision 2030 creates thousands of opportunities for expatriate workers...',
          imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
          publishedAt: '3 hours ago',
          views: 9870,
          comments: 56,
          isVideo: true
        }
      ]
    },
    {
      title: 'Sports',
      malayalamTitle: 'കായികം',
      color: 'bg-green-600',
      icon: <Zap className="w-5 h-5" />,
      stories: [
        {
          id: '9',
          title: 'Kerala Blasters FC Signs International Players',
          malayalamTitle: 'കേരള ബ്ലാസ്റ്റേഴ്സ് എഫ്സി അന്താരാഷ്ട്ര കളിക്കാരെ ഒപ്പുവച്ചു',
          excerpt: 'New signings expected to strengthen the team for upcoming ISL season...',
          imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop',
          publishedAt: '5 hours ago',
          views: 15420,
          comments: 89,
          isVideo: true
        },
        {
          id: '10',
          title: 'National Games 2024: Kerala Preparations in Full Swing',
          malayalamTitle: 'ദേശീയ ഗെയിംസ് 2024: കേരളത്തിന്റെ തയ്യാറെടുപ്പുകൾ ഊർജിതം',
          excerpt: 'State-of-the-art facilities being developed across multiple venues...',
          imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
          publishedAt: '6 hours ago',
          views: 7890,
          comments: 34,
          isVideo: false
        }
      ]
    }
  ];

  const businessNews = [
    {
      id: '11',
      title: 'Startup Kerala Initiative Attracts Global Investors',
      malayalamTitle: 'സ്റ്റാർട്ടപ്പ് കേരള സംരംഭം ആഗോള നിക്ഷേപകരെ ആകർഷിക്കുന്നു',
      category: 'Business',
      publishedAt: '2 hours ago',
      views: 5670,
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
    },
    {
      id: '12',
      title: 'Tech Parks Expansion Creates 50,000 New Jobs',
      malayalamTitle: 'ടെക് പാർക്കുകളുടെ വിപുലീകരണം 50,000 പുതിയ തൊഴിലവസരങ്ങൾ സൃഷ്ടിക്കുന്നു',
      category: 'Technology',
      publishedAt: '4 hours ago',
      views: 8920,
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop'
    },
    {
      id: '13',
      title: 'Tourism Sector Recovery Exceeds Expectations',
      malayalamTitle: 'ടൂറിസം മേഖലയുടെ വീണ്ടെടുക്കൽ പ്രതീക്ഷകൾ കവിയുന്നു',
      category: 'Tourism',
      publishedAt: '6 hours ago',
      views: 4560,
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main News Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl shadow-news-card overflow-hidden hover:shadow-gold transition-all duration-300">
              {/* Section Header */}
              <div className={`${section.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {section.icon}
                    <h2 className="text-xl font-bold font-headline">{section.title}</h2>
                  </div>
                  <Badge className="bg-white/20 text-white text-xs">
                    {section.malayalamTitle}
                  </Badge>
                </div>
              </div>

              {/* Stories */}
              <div className="p-6 space-y-6">
                {section.stories.map((story, storyIndex) => (
                  <Link key={story.id} to={`/article/${story.id}`} className="block group">
                    <div className={`${storyIndex === 0 ? 'pb-6 border-b border-gray-200' : ''}`}>
                      <div className="relative mb-3">
                        <img
                          src={story.imageUrl}
                          alt={story.title}
                          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        {story.isVideo && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                              <Play className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        )}
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-black/70 text-white text-xs">
                            {story.isVideo ? 'VIDEO' : 'ARTICLE'}
                          </Badge>
                        </div>
                      </div>

                      <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors font-headline">
                        {story.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-2 font-malayalam">
                        {story.malayalamTitle}
                      </p>

                      {storyIndex === 0 && (
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {story.excerpt}
                        </p>
                      )}

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{story.publishedAt}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{story.views.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{story.comments}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}

                {/* View More Button */}
                <Button variant="outline" className="w-full group border-2 hover:border-primary hover:text-primary">
                  View More {section.title}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Business & Technology Section */}
        <div className="bg-white rounded-xl shadow-news-card p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-headline-primary font-headline">
                  Business & Technology
                </h2>
                <p className="text-sm text-muted-foreground font-malayalam">
                  ബിസിനസ് & സാങ്കേതികവിദ്യ
                </p>
              </div>
            </div>
            <Button variant="outline" className="hidden md:flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessNews.map((story) => (
              <Link key={story.id} to={`/article/${story.id}`} className="group">
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="relative mb-4">
                    <img
                      src={story.imageUrl}
                      alt={story.title}
                      className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-trending text-trending-foreground text-xs">
                      {story.category}
                    </Badge>
                  </div>

                  <h3 className="font-semibold text-base leading-tight mb-2 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3 font-malayalam line-clamp-2">
                    {story.malayalamTitle}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{story.publishedAt}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{story.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NDTVNewsSections;