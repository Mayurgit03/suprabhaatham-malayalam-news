import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Clock, Eye, MessageCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BreakingNewsStory = () => {
  const breakingStory = {
    id: 'breaking-mumbai-rescue',
    title: 'കാമുകന്റെ ആത്മഹത്യ; പിന്നാലെ 19-കാരിയുടെ ജീവനൊടുക്കാനുള്ള ശ്രമം; വാതിൽ തകർത്ത് രക്ഷിച്ച് പൊലിസ്',
    englishTitle: 'Police Rescue 19-Year-Old Girl After Boyfriend\'s Suicide Attempt',
    excerpt: 'മുംബൈ: കാമുകന്റെ ആത്മഹത്യയിൽ മനംനൊന്ത് ജീവനൊടുക്കാൻ ശ്രമിച്ച 19-കാരിയെ മുംബൈ പൊലിസ് നടത്തിയ സമയോചിതമായ ഇടപെടലിലൂടെ രക്ഷപ്പെടുത്തി.',
    fullContent: `മുംബൈ: കാമുകന്റെ ആത്മഹത്യയിൽ മനംനൊന്ത് ജീവനൊടുക്കാൻ ശ്രമിച്ച 19-കാരിയെ മുംബൈ പൊലിസ് നടത്തിയ സമയോചിതമായ ഇടപെടലിലൂടെ രക്ഷപ്പെടുത്തി. മുംബൈയിലെ പവായ് മേഖലയിൽ നടന്ന ഈ സംഭവത്തിൽ, പൊലിസിന്റെ വേഗത്തിലുള്ള നടപടിയാണ് യുവതിയുടെ ജീവൻ രക്ഷിച്ചത്. നിലവിൽ പെൺകുട്ടി ആശുപത്രിയിൽ ചികിത്സയിലാണ്.

ശനിയാഴ്ചയാണ് യുവതിയുടെ 19-വയസ്സുള്ള കാമുകൻ ആത്മഹത്യ ചെയ്തത്. ഇരുവരും തമ്മിലുള്ള പ്രണയബന്ധം അറിയാവുന്ന യുവാവിന്റെ കുടുംബം, ആത്മഹത്യയ്ക്ക് പിന്നിൽ യുവതിയാണെന്ന് ആരോപിച്ചു. കാമുകന്റെ മരണവും കുടുംബത്തിന്റെ കുറ്റപ്പെടുത്തലുകളും യുവതിയെ മാനസികമായി തകർത്തു. തുടർന്ന്, യുവതി സ്വന്തം വീട്ടിൽ കയറി വാതിൽ അടച്ചതായി വിവരം ലഭിച്ചതിനെ തുടർന്ന് പൊലിസ് സംഘം സ്ഥലത്തെത്തി.

പൊലിസ് എത്തുമ്പോൾ വീടിന്റെ വാതിൽ അകത്തുനിന്ന് പൂട്ടിയ നിലയിലായിരുന്നു. ഉടൻ തന്നെ, പൊലിസ് കോൺസ്റ്റബിൾമാരിലൊരാൾ വാതിൽ ചവിട്ടിത്തുറന്നു. അകത്ത് കയറിയപ്പോൾ, യുവതിയറിൽ തൂങ്ങിയ നിലയിൽ കാണപ്പെട്ടു. പൊലിസ് സംഘം വേഗം യുവതിയെ ആശുപത്രിയിലെത്തിച്ചു`,
    category: 'Breaking News',
    location: 'Mumbai',
    publishedAt: '2 hours ago',
    views: 25430,
    comments: 156,
    imageUrl: 'https://images.unsplash.com/photo-1627636784403-a9ccdea8174d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxwb2xpY2UlMjBlbWVyZ2VuY3klMjByZXNjdWUlMjBvZmZpY2Vyc3xlbnwwfDB8fHwxNzU4NDY2NzI5fDA&ixlib=rb-4.1.0&q=85',
    isBreaking: true,
    isUrgent: true
  };

  return (
    <div className="bg-white rounded-xl shadow-news-card overflow-hidden hover:shadow-gold transition-all duration-300">
      {/* Breaking News Header */}
      <div className="bg-gradient-breaking text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
            <h2 className="text-lg font-bold font-headline">BREAKING NEWS</h2>
          </div>
          <Badge className="bg-white/20 text-white text-xs animate-pulse">
            LIVE
          </Badge>
        </div>
      </div>

      <Link to={`/article/${breakingStory.id}`} className="block group">
        {/* Main Image */}
        <div className="relative">
          <img
            src={breakingStory.imageUrl}
            alt={`${breakingStory.englishTitle} - Police rescue operation by Geoffrey Moffett on Unsplash`}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={256}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Location Badge */}
          <Badge className="absolute top-4 left-4 bg-red-600 text-white">
            {breakingStory.location}
          </Badge>
          
          {/* Urgent Badge */}
          {breakingStory.isUrgent && (
            <Badge className="absolute top-4 right-4 bg-yellow-500 text-black animate-pulse">
              URGENT
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Main Headline in Malayalam */}
          <h1 className="text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors font-malayalam">
            {breakingStory.title}
          </h1>

          {/* English Translation */}
          <h2 className="text-lg font-semibold text-gray-700 mb-4 font-headline">
            {breakingStory.englishTitle}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3 font-malayalam leading-relaxed">
            {breakingStory.excerpt}
          </p>

          {/* Full Content Preview */}
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-700 line-clamp-6 font-malayalam leading-relaxed">
              {breakingStory.fullContent}
            </p>
          </div>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-gray-200 pt-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{breakingStory.publishedAt}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{breakingStory.views.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{breakingStory.comments}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BreakingNewsStory;