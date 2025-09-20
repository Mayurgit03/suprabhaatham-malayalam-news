import React from 'react';
import Header from '@/components/news/Header';
import NDTVHeroSection from '@/components/news/NDTVHeroSection';
import TopNewsSection from '@/components/news/TopNewsSection';
import NewsCard from '@/components/news/NewsCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Flame } from 'lucide-react';

const Home = () => {
  // Sample news data - in real app, this would come from your backend/CMS
  const breakingNews = [
    {
      id: '1',
      title: 'Kerala Government Announces New IT Policy',
      malayalamTitle: 'കേരള സർക്കാർ പുതിയ ഐടി നയം പ്രഖ്യാപിച്ചു',
      excerpt: 'Comprehensive reforms to boost technology sector growth and create employment opportunities...',
      malayalamExcerpt: 'സാങ്കേതിക മേഖലയുടെ വളർച്ച പ്രോത്സാഹിപ്പിക്കാനും തൊഴിലവസരങ്ങൾ സൃഷ്ടിക്കാനുമുള്ള സമഗ്ര പരിഷ്കാരങ്ങൾ...',
      category: 'Tech',
      author: 'Priya Nair',
      publishedAt: '1 hour ago',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      isBreaking: true,
      views: 15420,
      comments: 89,
    },
    {
      id: '2',
      title: 'Monsoon Update: Heavy Rainfall Expected',
      malayalamTitle: 'മൺസൂൺ അപ്ഡേറ്റ്: കനത്ത മഴയ്ക്ക് സാധ്യത',
      excerpt: 'Weather department issues yellow alert for coastal districts as southwest monsoon intensifies...',
      malayalamExcerpt: 'തെക്കുപടിഞ്ഞാറൻ കാറ്റ് ശക്തമാകുന്നതിനാൽ തീരദേശ ജില്ലകൾക്ക് യെല്ലോ അലേർട്ട് പ്രഖ്യാപിച്ചു...',
      category: 'Kerala',
      author: 'Suresh Kumar',
      publishedAt: '3 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop',
      views: 8750,
      comments: 45,
    }
  ];

  const latestNews = [
    {
      id: '3',
      title: 'Gulf Employment Opportunities Rise',
      malayalamTitle: 'ഗൾഫ് തൊഴിലവസരങ്ങൾ വർധിച്ചു',
      excerpt: 'New visa policies open doors for skilled workers from Kerala...',
      malayalamExcerpt: 'പുതിയ വിസ നയങ്ങൾ കേരളത്തിലെ വിദഗ്ധ തൊഴിലാളികൾക്ക് വാതിലുകൾ തുറക്കുന്നു...',
      category: 'Gulf',
      author: 'Ahmed Ali',
      publishedAt: '5 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      views: 12340,
      comments: 67,
    },
    {
      id: '4',
      title: 'Local Sports Championship Results',
      malayalamTitle: 'പ്രാദേശിക കായിക ചാമ്പ്യൻഷിപ്പ് ഫലങ്ങൾ',
      excerpt: 'Young athletes from Kerala shine in national competitions...',
      malayalamExcerpt: 'ദേശീയ മത്സരങ്ങളിൽ കേരളത്തിലെ യുവ കായികതാരങ്ങൾ മിഴിവോടെ...',
      category: 'Sports',
      author: 'Ravi Menon',
      publishedAt: '6 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
      views: 5678,
      comments: 23,
    },
    {
      id: '5',
      title: 'Business Growth in IT Sector',
      malayalamTitle: 'ഐടി മേഖലയിൽ ബിസിനസ് വളർച്ച',
      excerpt: 'Tech companies report significant expansion in Kerala market...',
      malayalamExcerpt: 'കേരള വിപണിയിൽ ടെക് കമ്പനികൾ കാര്യമായ വിപുലീകരണം റിപ്പോർട്ട് ചെയ്യുന്നു...',
      category: 'Business',
      author: 'Deepak Nair',
      publishedAt: '8 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      views: 9876,
      comments: 34,
    },
    {
      id: '6',
      title: 'Cultural Festival Celebrations',
      malayalamTitle: 'സാംസ്കാരിക ഉത്സവ ആഘോഷങ്ങൾ',
      excerpt: 'Traditional arts and crafts take center stage in statewide celebrations...',
      malayalamExcerpt: 'സംസ്ഥാനവ്യാപി ആഘോഷങ്ങളിൽ പരമ്പരാഗത കലകളും കരകൗശലങ്ങളും കേന്ദ്രവേദിയിൽ...',
      category: 'Entertainment',
      author: 'Lakshmi Devi',
      publishedAt: '12 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c2cd1d6?w=600&h=400&fit=crop',
      views: 7234,
      comments: 56,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NDTVHeroSection />
      <TopNewsSection />
      
      <main className="container mx-auto px-4 py-12">
        {/* Breaking News Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="flex items-center space-x-2">
              <Flame className="h-6 w-6 text-breaking animate-pulse-breaking" />
              <h2 className="text-3xl font-bold text-headline-primary font-headline">
                Breaking News
              </h2>
            </div>
            <Badge className="bg-breaking text-breaking-foreground animate-pulse-breaking">
              Live Updates
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {breakingNews.map((news, index) => (
              <NewsCard
                key={news.id}
                {...news}
                isFeatured={index === 0}
                isBreaking={true}
              />
            ))}
          </div>
        </section>

        {/* Latest News Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-headline-primary font-headline">
              Latest News
            </h2>
            <Button variant="outline" className="group">
              View All News
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {latestNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </section>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            Load More Articles
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </main>

      {/* Footer placeholder */}
      <footer className="bg-muted/50 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="font-malayalam">© 2024 സുപ്രഭാതം | Suprabhaatham News Portal</p>
            <p className="text-sm mt-2">All rights reserved. Built with React + Vite</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;