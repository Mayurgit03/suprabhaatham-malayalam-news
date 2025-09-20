import React, { useState } from 'react';
import { Search, Menu, Bell, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ml');

  const categories = [
    { name: 'Home', path: '/', ml: 'ഹോം' },
    { name: 'Breaking', path: '/breaking', ml: 'ബ്രേക്കിംഗ്' },
    { name: 'Kerala', path: '/kerala', ml: 'കേരളം' },
    { name: 'Gulf', path: '/gulf', ml: 'ഗൾഫ്' },
    { name: 'Politics', path: '/politics', ml: 'രാഷ്ട്രീയം' },
    { name: 'Sports', path: '/sports', ml: 'കായികം' },
    { name: 'Business', path: '/business', ml: 'ബിസിനസ്' },
    { name: 'Tech', path: '/tech', ml: 'ടെക്നോളജി' },
  ];

  return (
    <>
      {/* Top Breaking News Bar */}
      <div className="bg-gradient-breaking text-breaking-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 animate-pulse-breaking">
            <Bell className="h-4 w-4" />
            <span className="text-sm font-semibold">BREAKING:</span>
            <span className="text-sm animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%]">
              Latest news updates will appear here...
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg backdrop-blur-md bg-primary/95 animate-slide-in">
        <div className="container mx-auto px-4">
          {/* Top section with logo and navigation */}
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-white/10 p-2 rounded group-hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <span className="text-xl font-bold font-malayalam group-hover:animate-pulse">
                  സുപ്രഭാതം
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold font-headline">
                  SUPRABHAATHAM
                </h1>
                <p className="text-xs opacity-80">
                  {language === 'ml' ? 'മലയാളം വാർത്താ പത്രം' : 'MALAYALAM NEWS'}
                </p>
              </div>
            </Link>

            {/* Search and Language Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder={language === 'ml' ? 'വാർത്തകൾ തിരയുക...' : 'Search news...'}
                  className="pl-10 w-80 font-malayalam bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'ml' ? 'en' : 'ml')}
                className="flex items-center gap-2 text-white hover:bg-white/10"
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

          {/* Navigation */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block border-t border-white/20 pt-3`}>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
              {categories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className="text-white/90 hover:text-white font-medium transition-all duration-300 py-1 px-2 hover:bg-white/10 rounded font-malayalam text-sm uppercase tracking-wide hover:scale-105 hover:shadow-md relative group"
                >
                  {language === 'ml' && category.ml ? category.ml : category.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile search */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder={language === 'ml' ? 'വാർത്തകൾ തിരയുക...' : 'Search news...'}
                className="pl-10 font-malayalam"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;