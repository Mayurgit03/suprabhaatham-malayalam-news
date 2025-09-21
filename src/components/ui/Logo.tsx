import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
  showMalayalam?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showText = true, 
  showMalayalam = true,
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  // Using a web-hosted logo that works in production
  const logoUrl = "https://images.unsplash.com/photo-1705751668509-b3ca0953582c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxtaWNyb3Bob25lJTIwbmV3cyUyMGJyb2FkY2FzdGluZyUyMGNpcmN1bGFyJTIwbG9nbyUyMHJlZCUyMHllbGxvd3xlbnwwfDJ8fHJlZHwxNzU4NDY1NzEzfDA&ixlib=rb-4.1.0&q=85";

  return (
    <Link to="/" className={`flex items-center space-x-4 group ${className}`}>
      <div className="relative">
        <img
          src={logoUrl}
          alt="Time to Time News Logo - Circular red and yellow broadcasting logo by Jon Geng on Unsplash"
          className={`${sizeClasses[size]} object-cover rounded-full shadow-lg group-hover:shadow-gold transition-all duration-300 group-hover:scale-105 border-2 border-white`}
          width={size === 'sm' ? 40 : size === 'md' ? 56 : 80}
          height={size === 'sm' ? 40 : size === 'md' ? 56 : 80}
        />
      </div>
      {showText && (
        <div>
          <h1 className={`${textSizeClasses[size]} font-bold text-primary font-headline`}>
            TIME TO TIME NEWS
          </h1>
          {showMalayalam && (
            <p className="text-xs opacity-80 font-malayalam">
              മലയാളം വാർത്താ പോർട്ടൽ
            </p>
          )}
        </div>
      )}
    </Link>
  );
};

export default Logo;