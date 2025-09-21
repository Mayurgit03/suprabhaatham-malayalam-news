import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Clock, Eye, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrendingNewsSidebar = () => {
  const trendingStories = [
    {
      id: 'h1b-visa-fee',
      title: 'Trying To Put Toothpaste Back In Tube: Ex-Diplomat On H-1B Clarification',
      malayalamTitle: 'എച്ച്-1ബി വിസ വിശദീകരണത്തെക്കുറിച്ച് മുൻ നയതന്ത്രജ്ഞൻ',
      category: 'International',
      publishedAt: '1 hour ago',
      views: 15200,
      imageUrl: 'https://images.unsplash.com/photo-1666289158111-7576ce2ccfae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHxtdW1iYWklMjBjaXR5JTIwYnVpbGRpbmdzJTIwdXJiYW58ZW58MHwwfHx8MTc1ODQ2NjcyOXww&ixlib=rb-4.1.0&q=85',
      isHot: true
    },
    {
      id: 'firm-h1b-visas',
      title: 'Firm Got 5,189 H-1B Visas, Then Laid Off 16,000 Americans: US Defends Move',
      malayalamTitle: 'കമ്പനി 5,189 എച്ച്-1ബി വിസകൾ നേടി, പിന്നീട് 16,000 അമേരിക്കക്കാരെ പിരിച്ചുവിട്ടു',
      category: 'Business',
      publishedAt: '3 hours ago',
      views: 22100,
      imageUrl: 'https://images.unsplash.com/photo-1715678907084-6245f67e8124?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxtdW1iYWklMjBjaXR5JTIwYnVpbGRpbmdzJTIwdXJiYW58ZW58MHwwfHx8MTc1ODQ2NjcyOXww&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 'musk-h1b-visa',
      title: 'No Overhaul To Broken System: Musk\'s Flip-Flop On H-1B Visa Resurfaces',
      malayalamTitle: 'എച്ച്-1ബി വിസയിൽ മസ്കിന്റെ നിലപാട് മാറ്റം',
      category: 'Technology',
      publishedAt: '4 hours ago',
      views: 18750,
      imageUrl: 'https://images.unsplash.com/photo-1706545604042-399792bd8a04?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxtdW1iYWklMjBjaXR5JTIwYnVpbGRpbmdzJTIwdXJiYW58ZW58MHwwfHx8MTc1ODQ2NjcyOXww&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 'trump-h1b-fee',
      title: 'Trump Imposes $100,000 Fee On H-1B Visas: What It Means For Indians',
      malayalamTitle: 'എച്ച്-1ബി വിസയ്ക്ക് $100,000 ഫീസ്: ഇന്ത്യക്കാർക്ക് എന്താണ് അർത്ഥം',
      category: 'Immigration',
      publishedAt: '5 hours ago',
      views: 31200,
      imageUrl: 'https://images.unsplash.com/photo-1627636784403-a9ccdea8174d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxwb2xpY2UlMjBlbWVyZ2VuY3klMjByZXNjdWUlMjBvZmZpY2Vyc3xlbnwwfDB8fHwxNzU4NDY2NzI5fDA&ixlib=rb-4.1.0&q=85',
      isHot: true
    }
  ];

  return (
    <div className="space-y-6">
      {/* Trending Header */}
      <div className="bg-white rounded-xl shadow-news-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gradient-hero p-2 rounded-lg">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-headline-primary font-headline">
              Trending Now
            </h2>
            <p className="text-sm text-muted-foreground">
              Most viewed stories
            </p>
          </div>
        </div>

        {/* Trending Stories List */}
        <div className="space-y-4">
          {trendingStories.map((story, index) => (
            <Link key={story.id} to={`/article/${story.id}`} className="block group">
              <div className="flex space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                {/* Story Number */}
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                    index < 2 ? 'bg-gradient-breaking' : 'bg-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                </div>

                {/* Story Image */}
                <div className="relative flex-shrink-0">
                  <img
                    src={story.imageUrl}
                    alt={`${story.title} - Mumbai cityscape by Ameya Khandekar on Unsplash`}
                    className="w-20 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    width={80}
                    height={64}
                  />
                  {story.isHot && (
                    <Badge className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 py-0">
                      HOT
                    </Badge>
                  )}
                </div>

                {/* Story Content */}
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

                  <p className="text-xs text-muted-foreground font-malayalam line-clamp-1 mb-2">
                    {story.malayalamTitle}
                  </p>

                  <div className="flex items-center space-x-2">
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

        {/* View All Button */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <Link to="/trending" className="flex items-center justify-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <span className="font-semibold">View All Trending</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingNewsSidebar;