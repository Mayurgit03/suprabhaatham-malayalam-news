import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Filter } from 'lucide-react';
import Header from '@/components/news/Header';
import NewsCard from '@/components/news/NewsCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Category = () => {
  const { category } = useParams();
  
  const categoryData = {
    kerala: {
      title: 'Kerala News',
      malayalamTitle: 'കേരള വാർത്തകൾ',  
      description: 'Latest news and updates from God\'s Own Country',
      malayalamDescription: 'ദൈവത്തിന്റെ സ്വന്തം നാട്ടിൽ നിന്നുള്ള ഏറ്റവും പുതിയ വാർത്തകളും അപ്ഡേറ്റുകളും',
      color: 'bg-primary',
    },
    gulf: {
      title: 'Gulf News',
      malayalamTitle: 'ഗൾഫ് വാർത്തകൾ',
      description: 'Updates from the Middle East and Gulf region',
      malayalamDescription: 'മിഡിൽ ഈസ്റ്റിൽ നിന്നും ഗൾഫ് മേഖലയിൽ നിന്നുമുള്ള അപ്ഡേറ്റുകൾ',
      color: 'bg-category-gulf',
    },
    politics: {
      title: 'Politics',
      malayalamTitle: 'രാഷ്ട്രീയം',
      description: 'Political developments and government policies',
      malayalamDescription: 'രാഷ്ട്രീയ സംഭവവികാസങ്ങളും സർക്കാർ നയങ്ങളും',
      color: 'bg-category-politics',
    },
    sports: {
      title: 'Sports',
      malayalamTitle: 'കായികം',
      description: 'Sports news, match results, and player updates',
      malayalamDescription: 'കായിക വാർത്തകൾ, മത്സര ഫലങ്ങൾ, കളിക്കാരുടെ അപ്ഡേറ്റുകൾ',
      color: 'bg-category-sports',
    },
    business: {
      title: 'Business',
      malayalamTitle: 'ബിസിനസ്',
      description: 'Business news, market updates, and economic trends',
      malayalamDescription: 'ബിസിനസ് വാർത്തകൾ, മാർക്കറ്റ് അപ്ഡേറ്റുകൾ, സാമ്പത്തിക പ്രവണതകൾ',
      color: 'bg-category-business',
    },
    tech: {
      title: 'Technology',
      malayalamTitle: 'സാങ്കേതികവിദ്യ',
      description: 'Technology news, innovations, and digital trends',
      malayalamDescription: 'സാങ്കേതിക വാർത്തകൾ, നവീകരണങ്ങൾ, ഡിജിറ്റൽ പ്രവണതകൾ',
      color: 'bg-category-tech',
    },
  };

  // Sample category news data
  const categoryNews = [
    {
      id: '1',
      title: 'Major Infrastructure Development Announced',
      malayalamTitle: 'പ്രധാന അടിസ്ഥാന സൗകര്യ വികസനം പ്രഖ്യാപിച്ചു',
      excerpt: 'State government unveils ambitious plans for modernizing transportation and communication networks...',
      malayalamExcerpt: 'ഗതാഗത, ആശയവിനിമയ ശൃംഖലകൾ ആധുനികവത്കരിക്കാനുള്ള അതിമോഹമായ പദ്ധതികൾ സംസ്ഥാന സർക്കാർ അനാവരണം ചെയ്തു...',
      category: category || 'Kerala',
      author: 'Ravi Kumar',
      publishedAt: '2 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1590735213920-68192a487bc3?w=600&h=400&fit=crop',
      views: 18750,
      comments: 125,
    },
    {
      id: '2',
      title: 'Educational Reforms Get Approval',
      malayalamTitle: 'വിദ്യാഭ്യാസ പരിഷ്കാരങ്ങൾക്ക് അംഗീകാരം',
      excerpt: 'New curriculum framework designed to enhance practical learning and skill development...',
      malayalamExcerpt: 'പ്രായോഗിക പഠനവും നൈപുണ്യ വികസനവും വർധിപ്പിക്കാൻ രൂപകൽപ്പന ചെയ്ത പുതിയ പാഠ്യപദ്ധതി ചട്ടക്കൂട്...',
      category: category || 'Kerala',
      author: 'Priya Nair',
      publishedAt: '4 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      views: 12340,
      comments: 87,
    },
    {
      id: '3',
      title: 'Tourism Sector Shows Strong Recovery',
      malayalamTitle: 'ടൂറിസം മേഖല ശക്തമായ വീണ്ടെടുക്കൽ കാണിക്കുന്നു',
      excerpt: 'Visitor numbers reach pre-pandemic levels as Kerala welcomes international tourists...',
      malayalamExcerpt: 'കേരളം അന്താരാഷ്ട്ര വിനോദസഞ്ചാരികളെ സ്വാഗതം ചെയ്യുന്നതിനാൽ സന്ദർശക സംഖ്യ മഹാമാരിക്ക് മുമ്പുള്ള നിലവാരത്തിലെത്തി...',
      category: category || 'Kerala',
      author: 'Ahmed Hassan',
      publishedAt: '6 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
      views: 9876,
      comments: 54,
    },
    {
      id: '4',
      title: 'Healthcare Initiatives Receive Funding',
      malayalamTitle: 'ആരോഗ്യ സംരംഭങ്ങൾക്ക് ധനസഹായം ലഭിച്ചു',
      excerpt: 'New medical facilities and telemedicine programs to benefit rural communities...',
      malayalamExcerpt: 'ഗ്രാമീണ കമ്മ്യൂണിറ്റികൾക്ക് പ്രയോജനപ്പെടുന്ന പുതിയ മെഡിക്കൽ സൗകര്യങ്ങളും ടെലിമെഡിസിൻ പ്രോഗ്രാമുകളും...',
      category: category || 'Kerala',
      author: 'Dr. Lakshmi Menon',
      publishedAt: '8 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      views: 7234,
      comments: 43,
    },
  ];

  const currentCategory = categoryData[category as keyof typeof categoryData] || categoryData.kerala;
  const trendingTopics = ['Budget 2024', 'Monsoon Update', 'Employment Schemes', 'Digital Kerala', 'Green Energy'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Category Header */}
        <section className={`${currentCategory.color} text-white rounded-2xl p-8 mb-12 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <Badge className="bg-white/20 text-white border-white/30">
                Category
              </Badge>
              <span className="text-sm opacity-80">
                {categoryNews.length} articles
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-headline">
              {currentCategory.title}
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 font-malayalam opacity-90">
              {currentCategory.malayalamTitle}
            </h2>
            
            <p className="text-lg opacity-90 max-w-3xl font-body">
              {currentCategory.description}
            </p>
            
            <p className="text-base opacity-80 max-w-3xl mt-2 font-malayalam">
              {currentCategory.malayalamDescription}
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Latest {currentCategory.title}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  Most Recent
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  Most Popular
                </Button>
              </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {categoryNews.map((article, index) => (
                <NewsCard 
                  key={article.id} 
                  {...article} 
                  isFeatured={index === 0}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button size="lg" variant="outline">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Trending Topics */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-trending" />
                  Trending in {currentCategory.title}
                </h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <Link
                      key={index}
                      to={`/search?q=${encodeURIComponent(topic)}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border last:border-b-0"
                    >
                      #{topic}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Categories */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Other Categories</h3>
                <div className="space-y-2">
                  {Object.entries(categoryData).map(([key, cat]) => (
                    <Link
                      key={key}
                      to={`/category/${key}`}
                      className={`block text-sm transition-colors py-2 px-3 rounded ${
                        key === category 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground hover:text-primary hover:bg-accent'
                      }`}
                    >
                      {cat.title} ({cat.malayalamTitle})
                    </Link>
                  ))}
                </div>
              </div>

              {/* Subscribe to Category */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get notifications for new {currentCategory.title.toLowerCase()} articles
                </p>
                <Button className="w-full" disabled>
                  Subscribe to Updates
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Connect to Supabase to enable subscriptions
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Category;
