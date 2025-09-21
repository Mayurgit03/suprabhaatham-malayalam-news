import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '@/assets/loggo.jpg'; // Import from src/assets

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

  return (
    <Link to="/" className={`flex items-center space-x-4 group ${className}`}>
      <div className="relative">
        <img
          src={logoUrl}
          alt="Time to Time News Logo - Official circular logo with microphone design"
          className={`${sizeClasses[size]} object-cover rounded-full shadow-lg group-hover:shadow-gold transition-all duration-300 group-hover:scale-105 border-2 border-white`}
          width={size === 'sm' ? 40 : size === 'md' ? 56 : 80}
          height={size === 'sm' ? 40 : size === 'md' ? 56 : 80}
          onError={(e) => {
            console.error('Logo failed to load:', logoUrl);
            // Fallback to a default if needed
          }}
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