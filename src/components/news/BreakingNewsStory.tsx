import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Clock, Eye, MessageCircle, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResponsiveImage from '@/components/ui/ResponsiveImage';

const BreakingNewsStory = () => {
  const breakingStory = {
    id: 'student-found-palakkad',
    title: 'കാണാതായ വിദ്യാർത്ഥിയെ കണ്ടെത്തി',
    englishTitle: 'Missing 13-Year-Old Student Found Safe in Thrissur',
    excerpt: 'പാലക്കാട്: ചന്ദ്രനഗറിൽ നിന്നും കാണാതായ 13 കാരനായ വിദ്യാര്‍ത്ഥിയെ കണ്ടെത്തി. ട്രെയിനില്‍ യാത്ര ചെയ്യുകയായിരുന്ന കുട്ടിയെ തൃശൂരിൽ നിന്നാണ് കണ്ടെത്തിയത്.',
    fullContent: `പാലക്കാട്: ചന്ദ്രനഗറിൽ നിന്നും കാണാതായ 13 കാരനായ വിദ്യാര്‍ത്ഥിയെ കണ്ടെത്തി. ട്രെയിനില്‍ യാത്ര ചെയ്യുകയായിരുന്ന കുട്ടിയെ തൃശൂരിൽ നിന്നാണ് കണ്ടെത്തിയത്. ആര്‍പിഎഫ് ആണ് കണ്ടെത്തിയത്. കുട്ടിയെ ഉടൻ പാലക്കാട് എത്തിക്കും.

പാലക്കാട്‌ ചന്ദ്രനഗര്‍ സ്വദേശിയായ വിദ്യാർത്ഥിയെ രണ്ട് ദിവസം മുമ്പാണ് കാണാതായത്. രാവിലെ സ്കൂളിലേക്ക് എന്ന് പറഞ്ഞിറങ്ങിയ കുട്ടിയെ പിന്നീട് കാണാതാവുകയായിരുന്നു.

കുട്ടിയെ കണ്ടെത്തുന്നതിന് വേണ്ടി വ്യാപകമായി തിരച്ചിലാണ് പോലീസ് നടത്തിയത്. കുട്ടിയുടെ ഫോട്ടോയും ബന്ധപ്പെടേണ്ട ഫോൺ നമ്പറുകളും പോലീസ് പങ്കുവെച്ചിരുന്നു. ഇതിനെ തുടർന്ന് നിരവധി ഫോൺകോളുകളാണ് പോലീസിന് ലഭിച്ചത്.

കുട്ടിയെ ബാംഗ്ലൂരിൽ കണ്ടതായി വിവരത്തിന്റെ അടിസ്ഥാനത്തിൽ പോലീസ് ബാംഗ്ലൂർ വരെയെത്തി പരിശോധന നടത്തിയിരുന്നു. ഇതിനിടയിലാണ് ഇന്ന് റെയിൽവേ പോലീസ് ഫോഴ്സ് കുട്ടിയെ തൃശ്ശൂരിൽ നിന്ന് കണ്ടെത്തി വിവരം പോലീസിനെ അറിയിക്കുന്നത്.`,
    category: 'Breaking News',
    location: 'Palakkad',
    publishedAt: '30 minutes ago',
    views: 32150,
    comments: 248,
    // Use your exact student photo path - save your image as /public/student-photo.jpg
    imageUrl: '/student-photo.jpg',
    isBreaking: true,
    isUrgent: true,
    isGoodNews: true
  };

  return (
    <article className="bg-white rounded-xl shadow-news-card overflow-hidden hover:shadow-gold transition-all duration-300 w-full max-w-4xl mx-auto">
      {/* Breaking News Header - Responsive */}
      <header className="bg-gradient-to-r from-green-600 to-green-800 text-white p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <h2 className="text-sm sm:text-lg font-bold font-headline">BREAKING NEWS</h2>
          </div>
          <Badge className="bg-white/20 text-white text-xs animate-pulse px-2 py-1">
            FOUND SAFE
          </Badge>
        </div>
      </header>

      <Link to={`/article/${breakingStory.id}`} className="block group">
        {/* Main Image - Fully Responsive */}
        <div className="relative w-full">
          <div className="aspect-video sm:aspect-[4/3] lg:aspect-video relative overflow-hidden">
            <ResponsiveImage
              src={breakingStory.imageUrl}
              alt="13-year-old student who was found safe - exact photo provided"
              className="w-full h-full"
              width={800}
              height={450}
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Location Badge - Responsive positioning */}
            <Badge className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-green-600 text-white flex items-center gap-1 text-xs sm:text-sm">
              <MapPin className="w-3 h-3" />
              {breakingStory.location}
            </Badge>
            
            {/* Good News Badge - Responsive positioning */}
            {breakingStory.isGoodNews && (
              <Badge className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-blue-500 text-white animate-pulse text-xs sm:text-sm">
                SAFE & SOUND
              </Badge>
            )}
          </div>
        </div>

        {/* Content - Responsive padding and typography */}
        <div className="p-4 sm:p-6">
          {/* Main Headline in Malayalam - Responsive text sizing */}
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors font-malayalam text-green-800 line-clamp-3">
            {breakingStory.title}
          </h1>

          {/* English Translation - Responsive text sizing */}
          <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4 font-headline line-clamp-2">
            {breakingStory.englishTitle}
          </h2>

          {/* Excerpt - Responsive text and spacing */}
          <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 font-malayalam leading-relaxed">
            {breakingStory.excerpt}
          </p>

          {/* Full Content Preview - Responsive container */}
          <div className="bg-green-50 p-3 sm:p-4 rounded-lg mb-4 border-l-4 border-green-600">
            <p className="text-xs sm:text-sm text-gray-700 line-clamp-6 sm:line-clamp-8 font-malayalam leading-relaxed">
              {breakingStory.fullContent}
            </p>
          </div>

          {/* Key Details - Responsive layout */}
          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-xs sm:text-sm mb-2 text-blue-800">Key Updates:</h3>
            <ul className="text-xs sm:text-sm text-gray-700 space-y-1 font-malayalam">
              <li>• 13 വയസ്സുള്ള വിദ്യാർത്ഥി സുരക്ഷിതനായി കണ്ടെത്തി</li>
              <li>• തൃശൂരിൽ ട്രെയിനിൽ യാത്ര ചെയ്യുന്നതായി കണ്ടെത്തി</li>
              <li>• റെയിൽവേ പോലീസ് ഫോഴ്സ് (RPF) കണ്ടെത്തി</li>
              <li>• ഉടൻ പാലക്കാട് എത്തിക്കും</li>
              <li>• രണ്ട് ദിവസത്തെ തിരച്ചിൽ വിജയകരമായി</li>
            </ul>
          </div>

          {/* Meta Information - Responsive layout */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-muted-foreground border-t border-gray-200 pt-3 sm:pt-4 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{breakingStory.publishedAt}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{breakingStory.views.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{breakingStory.comments}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BreakingNewsStory;