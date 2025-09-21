import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Smartphone,
  Tv,
  Radio,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';

const NDTVFooter = () => {
  const quickLinks = [
    { name: 'Home', path: '/', ml: 'ഹോം' },
    { name: 'Breaking News', path: '/breaking', ml: 'ബ്രേക്കിംഗ് ന്യൂസ്' },
    { name: 'Kerala', path: '/kerala', ml: 'കേരളം' },
    { name: 'Gulf', path: '/gulf', ml: 'ഗൾഫ്' },
    { name: 'Sports', path: '/sports', ml: 'കായികം' },
    { name: 'Business', path: '/business', ml: 'ബിസിനസ്' }
  ];

  const categories = [
    { name: 'Politics', path: '/politics', ml: 'രാഷ്ട്രീയം' },
    { name: 'Technology', path: '/tech', ml: 'സാങ്കേതികവിദ്യ' },
    { name: 'Entertainment', path: '/entertainment', ml: 'വിനോദം' },
    { name: 'Health', path: '/health', ml: 'ആരോഗ്യം' },
    { name: 'Education', path: '/education', ml: 'വിദ്യാഭ്യാസം' },
    { name: 'Culture', path: '/culture', ml: 'സംസ്കാരം' }
  ];

  const services = [
    { name: 'Live TV', icon: <Tv className="w-4 h-4" />, path: '/live-tv' },
    { name: 'Mobile App', icon: <Smartphone className="w-4 h-4" />, path: '/mobile-app' },
    { name: 'Radio', icon: <Radio className="w-4 h-4" />, path: '/radio' },
    { name: 'Newsletter', icon: <Mail className="w-4 h-4" />, path: '/newsletter' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-hero py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 font-headline">Stay Updated</h3>
              <p className="text-white/90 font-malayalam">
                പ്രധാന വാർത്തകൾ നേരിട്ട് നിങ്ങളുടെ ഇൻബോക്സിൽ
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <Input
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-r-none"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 rounded-l-none">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo 
                  size="lg" 
                  showText={true} 
                  showMalayalam={false}
                  className="text-white [&_h1]:text-white [&_h1]:hover:text-white" 
                />
              </div>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Kerala's premier Malayalam news portal delivering authentic, timely, and comprehensive news coverage across all major categories.
              </p>
              
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 font-headline">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.name}</span>
                      <span className="text-xs text-gray-500 font-malayalam">{link.ml}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-bold mb-6 font-headline">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <span className="text-xs text-gray-500 font-malayalam">{category.ml}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services & Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6 font-headline">Our Services</h3>
              <div className="space-y-4 mb-8">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-white mb-3">Contact Info</h4>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Kochi, Kerala, India</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 484 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>contact@timetotimenews.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0 text-sm text-gray-400">
              <span>© 2024 Time To Time News</span>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-gray-400 border-gray-600">
                <Globe className="w-3 h-3 mr-1" />
                Malayalam & English
              </Badge>
              <Badge className="bg-gradient-breaking text-white">
                Live 24/7
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NDTVFooter;