import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, SortDesc, ArrowLeft } from 'lucide-react';
import Header from '@/components/news/Header';
import NewsCard from '@/components/news/NewsCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [sortBy, setSortBy] = useState('relevance');
  const [category, setCategory] = useState('all');
  const [timeFilter, setTimeFilter] = useState('all');

  // Sample search results - in real app, fetch from backend/search service
  const searchResults = [
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
      views: 15420,
      comments: 89,
    },
    {
      id: '2',
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
      id: '3',
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
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', ml: 'എല്ലാ വിഭാഗങ്ങളും' },
    { value: 'breaking', label: 'Breaking News', ml: 'ബ്രേക്കിംഗ് ന്യൂസ്' },
    { value: 'kerala', label: 'Kerala', ml: 'കേരളം' },
    { value: 'gulf', label: 'Gulf News', ml: 'ഗൾഫ് വാർത്തകൾ' },
    { value: 'politics', label: 'Politics', ml: 'രാഷ്ട്രീയം' },
    { value: 'sports', label: 'Sports', ml: 'കായികം' },
    { value: 'business', label: 'Business', ml: 'ബിസിനസ്' },
    { value: 'tech', label: 'Technology', ml: 'സാങ്കേതികവിദ്യ' },
  ];

  const popularSearches = [
    'Kerala IT Policy',
    'Gulf Jobs',
    'Monsoon Update',
    'Education Reforms',
    'Healthcare News',
    'Sports Results'
  ];

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  const handleFilterChange = (type: string, value: string) => {
    if (type === 'sort') setSortBy(value);
    if (type === 'category') setCategory(value);
    if (type === 'time') setTimeFilter(value);
    
    // In real app, trigger new search with filters
  };

  const currentQuery = searchParams.get('q');
  const resultCount = searchResults.length;

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

        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-headline-primary mb-4 font-headline">
            Search Results
          </h1>
          {currentQuery && (
            <div className="mb-6">
              <p className="text-muted-foreground mb-2">
                Showing {resultCount} results for <strong>"{currentQuery}"</strong>
              </p>
              <Badge variant="outline" className="text-sm">
                {resultCount} articles found
              </Badge>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Search Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Search Form */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-4">Refine Search</h3>
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="Search news..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>

              {/* Category Filter */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Category
                </h3>
                <Select value={category} onValueChange={(value) => handleFilterChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort Options */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <SortDesc className="h-4 w-4 mr-2" />
                  Sort By
                </h3>
                <Select value={sortBy} onValueChange={(value) => handleFilterChange('sort', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="date">Latest First</SelectItem>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="comments">Most Discussed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Time Filter */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-4">Time Period</h3>
                <Select value={timeFilter} onValueChange={(value) => handleFilterChange('time', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This week</SelectItem>
                    <SelectItem value="month">This month</SelectItem>
                    <SelectItem value="year">This year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Popular Searches */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-4">Popular Searches</h3>
                <div className="space-y-2">
                  {popularSearches.map((search, index) => (
                    <Link
                      key={index}
                      to={`/search?q=${encodeURIComponent(search)}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {search}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Search Results */}
          <div className="lg:col-span-3">
            {currentQuery ? (
              <>
                {resultCount > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {searchResults.map((article) => (
                      <NewsCard key={article.id} {...article} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search terms or filters
                    </p>
                    <Button variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Home
                    </Button>
                  </div>
                )}

                {/* Load More Button */}
                {resultCount > 0 && (
                  <div className="text-center mt-8">
                    <Button variant="outline" size="lg">
                      Load More Results
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Search Malayalam News</h3>
                <p className="text-muted-foreground mb-6">
                  Enter keywords to find articles, breaking news, and updates
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularSearches.slice(0, 4).map((search, index) => (
                    <Link
                      key={index}
                      to={`/search?q=${encodeURIComponent(search)}`}
                      className="bg-accent text-accent-foreground px-3 py-2 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {search}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;