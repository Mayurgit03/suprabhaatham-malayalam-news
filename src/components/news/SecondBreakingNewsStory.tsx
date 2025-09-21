import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Clock, Eye, MessageCircle, Scale, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecondBreakingNewsStory = () => {
  const breakingStory = {
    id: 'kappa-exile-thrissur',
    title: 'യുവതികളെ കാപ്പ ചുമത്തി ഒരു വർഷത്തേക്ക് നാടുകടത്തി',
    englishTitle: 'Two Young Women Exiled for One Year Under KAPPA Act',
    excerpt: 'തൃശൂർ: മരണവീട്ടിൽ കയറി ആക്രമണം നടത്തിയ കേസിൽ രണ്ട് യുവതികളെ കേരള ആന്റി-സോഷ്യൽ ആക്ടിവിറ്റീസ് പ്രിവൻഷൻ ആക്ട് (കാപ്പ) പ്രകാരം ഒരു വർഷത്തേക്ക് തൃശൂരിൽ നിന്ന് നാടുകടത്തി.',
    fullContent: `തൃശൂർ: മരണവീട്ടിൽ കയറി ആക്രമണം നടത്തിയ കേസിൽ രണ്ട് യുവതികളെ കേരള ആന്റി-സോഷ്യൽ ആക്ടിവിറ്റീസ് പ്രിവൻഷൻ ആക്ട് (കാപ്പ) പ്രകാരം ഒരു വർഷത്തേക്ക് തൃശൂരിൽ നിന്ന് നാടുകടത്തി. കരയാമുട്ടം ചിക്കവയലിലെ സ്വാതി (28), വലപ്പാട് ഇയ്യാനിയിലെ ഹിമ (25) എന്നിവരെയാണ് നാടുകടത്തിയത്.

ഇവർക്കെതിരെ വലപ്പാട് പൊലിസ് സ്റ്റേഷനിൽ ഒരു കവർച്ചക്കേസ്, വീടുകയറി ആക്രമണം നടത്തിയ രണ്ട് കേസുകൾ, ഒരു അടിപിടി കേസ് എന്നിവ ഉൾപ്പെടെ നാല് ക്രിമിനൽ കേസുകൾ നിലവിലുണ്ട്.

കൂടുതൽ കുറ്റകൃത്യങ്ങളിൽ ഏർപ്പെടാതിരിക്കാൻ, 2025 ജൂൺ 16 മുതൽ ആറുമാസക്കാലത്തേക്ക് കൊടുങ്ങല്ലൂർ ഡി.വൈ.എസ്.പി ഓഫീസിൽ ഒപ്പിടണമെന്ന ഉത്തരവ് ഇവർക്ക് നേരത്തെ നൽകിയിരുന്നു. എന്നാൽ, ഈ ഉത്തരവ് ലംഘിച്ചാണ് ഇവർ മരണവീട്ടിൽ കയറി ആക്രമണം നടത്തിയത്.

തൃശൂർ റൂറൽ ജില്ലാ പൊലിസ് മേധാവി ബി. കൃഷ്ണകുമാർ ഐ.പി.എസിന്റെ ശുപാർശയെ തുടർന്ന് തൃശൂർ റേഞ്ച് ഡി.ഐ.ജി. ഹരിശങ്കർ കാപ്പ പ്രകാരമുള്ള നാടുകടത്തൽ ഉത്തരവ് പുറപ്പെടുവിച്ചു`,
    category: 'Legal',
    location: 'Thrissur',
    publishedAt: '1 hour ago',
    views: 18750,
    comments: 89,
    imageUrl: 'https://images.unsplash.com/photo-1729048228129-64569b44caa7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxwb2xpY2UlMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBvZmZpY2lhbCUyMGtlcmFsYXxlbnwwfDB8fHwxNzU4NDY3MjYwfDA&ixlib=rb-4.1.0&q=85',
    isBreaking: false,
    isLegal: true
  };

  return (
    <div className="bg-white rounded-xl shadow-news-card overflow-hidden hover:shadow-gold transition-all duration-300">
      {/* Legal News Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scale className="w-5 h-5" />
            <h2 className="text-lg font-bold font-headline">LEGAL NEWS</h2>
          </div>
          <Badge className="bg-white/20 text-white text-xs">
            KAPPA ACT
          </Badge>
        </div>
      </div>

      <Link to={`/article/${breakingStory.id}`} className="block group">
        {/* Main Image */}
        <div className="relative">
          <img
            src={breakingStory.imageUrl}
            alt={`${breakingStory.englishTitle} - Police building with official sign by Abai K on Unsplash`}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={256}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Location Badge */}
          <Badge className="absolute top-4 left-4 bg-purple-600 text-white flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {breakingStory.location}
          </Badge>
          
          {/* Legal Badge */}
          {breakingStory.isLegal && (
            <Badge className="absolute top-4 right-4 bg-yellow-600 text-white">
              LEGAL ACTION
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
          <div className="bg-purple-50 p-4 rounded-lg mb-4 border-l-4 border-purple-600">
            <p className="text-sm text-gray-700 line-clamp-8 font-malayalam leading-relaxed">
              {breakingStory.fullContent}
            </p>
          </div>

          {/* Key Details */}
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-sm mb-2 text-purple-800">Key Details:</h3>
            <ul className="text-sm text-gray-700 space-y-1 font-malayalam">
              <li>• സ്വാതി (28) - കരയാമുട്ടം ചിക്കവയൽ</li>
              <li>• ഹിമ (25) - വലപ്പാട് ഇയ്യാനി</li>
              <li>• നാല് ക്രിമിനൽ കേസുകൾ നിലവിൽ</li>
              <li>• ഒരു വർഷത്തേക്ക് നാടുകടത്തൽ</li>
            </ul>
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

export default SecondBreakingNewsStory;