import React, { useState } from 'react';
import { Search, Menu, Bell, Globe, Clock, TrendingUp, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';

const NDTVHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ml');

  const categories = [
    { name: 'Home', path: '/', ml: 'ഹോം' },
    { name: 'Breaking', path: '/breaking', ml: 'ബ്രേക്കിംഗ്' },
    { name: 'Kerala', path: '/kerala', ml: 'കേരളം' },
    { name: 'India', path: '/india', ml: 'ഇന്ത്യ' },
    { name: 'World', path: '/world', ml: 'ലോകം' },
    { name: 'Gulf', path: '/gulf', ml: 'ഗൾഫ്' },
    { name: 'Politics', path: '/politics', ml: 'രാഷ്ട്രീയം' },
    { name: 'Sports', path: '/sports', ml: 'കായികം' },
    { name: 'Business', path: '/business', ml: 'ബിസിനസ്' },
    { name: 'Tech', path: '/tech', ml: 'ടെക്നോളജി' },
    { name: 'Entertainment', path: '/entertainment', ml: 'വിനോദം' },
  ];

  const trendingTopics = [
    'Kerala Elections',
    'Gulf News',
    'Tech Updates',
    'Sports Live'
  ];

  return (
    <>
      {/* Top Breaking News Ticker */}
      <div className="bg-gradient-breaking text-breaking-foreground py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Bell className="h-4 w-4 animate-pulse" />
              <Badge className="bg-white/20 text-white text-xs font-bold">LIVE</Badge>
              <span className="text-sm font-bold">BREAKING:</span>
            </div>
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="text-sm">
                പാലക്കാട് ചന്ദ്രനഗറിൽ നിന്ന് കാണാതായ 13കാരനായ വിദ്യാർത്ഥിയെ തൃശൂരിൽ സുരക്ഷിതനായി കണ്ടെത്തി • Missing 13-year-old student from Palakkad found safe in Thrissur by RPF • 
                Kerala Government announces new IT policy • Heavy rainfall expected in coastal districts • 
                Gulf employment opportunities rise •
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b-4 border-primary shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top section with logo, live time, and trending */}
          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            {/* Logo Section */}
            <Logo size="lg" className="hover:scale-105 transition-transform duration-300" />

            {/* Live Time & Trending */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium">
                  {new Date().toLocaleTimeString('en-IN', { 
                    timeZone: 'Asia/Kolkata',
                    hour12: true,
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
                <Badge variant="outline" className="text-xs">IST</Badge>
              </div>
              
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-trending" />
                <span className="text-sm font-medium">Trending:</span>
                <div className="flex space-x-2">
                  {trendingTopics.slice(0, 2).map((topic, index) => (
                    <Badge key={index} variant="secondary" className="text-xs hover:bg-trending hover:text-trending-foreground cursor-pointer">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Search and Language */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder={language === 'ml' ? 'വാർത്തകൾ തിരയുക...' : 'Search news...'}
                  className="pl-10 w-80 font-malayalam border-2 border-gray-200 focus:border-primary"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'ml' ? 'en' : 'ml')}
                className="flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Globe className="h-4 w-4" />
                {language === 'ml' ? 'EN' : 'മല'}
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Menu */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block py-3`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-1 space-y-2 md:space-y-0">
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 py-2 px-4 hover:bg-red-50 rounded font-malayalam text-sm uppercase tracking-wide relative group border-b-2 border-transparent hover:border-primary"
                  >
                    {language === 'ml' && category.ml ? category.ml : category.name}
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </Link>
                ))}
              </div>
              
              {/* Live TV Button */}
              <Button className="bg-gradient-breaking hover:shadow-breaking transition-all duration-300 mt-4 md:mt-0">
                <Play className="h-4 w-4 mr-2" />
                LIVE TV
              </Button>
            </div>
          </nav>

          {/* Mobile search */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={language === 'ml' ? 'വാർത്തകൾ തിരയുക...' : 'Search news...'}
                className="pl-10 font-malayalam border-2 border-gray-200 focus:border-primary"
              />
            </div>
            <div className="flex justify-between items-center mt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'ml' ? 'en' : 'ml')}
                className="flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                {language === 'ml' ? 'EN' : 'മല'}
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NDTVHeader;