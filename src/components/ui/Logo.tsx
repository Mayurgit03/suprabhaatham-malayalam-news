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
  // Responsive size classes for different screen sizes
  const sizeClasses = {
    sm: 'w-8 h-8 sm:w-10 sm:h-10',
    md: 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14',
    lg: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20'
  };

  const textSizeClasses = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg md:text-xl',
    lg: 'text-lg sm:text-xl md:text-2xl'
  };

  return (
    <Link to="/" className={`flex items-center space-x-2 sm:space-x-3 md:space-x-4 group ${className} flex-shrink-0`}>
      <div className="relative flex-shrink-0">
        <img
          src="/loggo.jpg"
          alt="Time to Time News Official Logo - Your exact circular logo with microphone design and TIME TO TIME NEWS text"
          className={`${sizeClasses[size]} object-cover rounded-full shadow-lg group-hover:shadow-gold transition-all duration-300 group-hover:scale-105 border-2 border-white flex-shrink-0`}
          width={size === 'sm' ? 40 : size === 'md' ? 56 : 80}
          height={size === 'sm' ? 40 : size === 'md' ? 56 : 80}
          style={{
            width: size === 'sm' ? '40px' : size === 'md' ? '56px' : '80px',
            height: size === 'sm' ? '40px' : size === 'md' ? '56px' : '80px',
            minWidth: size === 'sm' ? '40px' : size === 'md' ? '56px' : '80px',
            minHeight: size === 'sm' ? '40px' : size === 'md' ? '56px' : '80px'
          }}
          onError={(e) => {
            console.error('Logo failed to load:', e.currentTarget.src);
            // Fallback to text-based logo
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      {showText && (
        <div className="min-w-0 flex-1">
          <h1 className={`${textSizeClasses[size]} font-bold text-primary font-headline leading-tight whitespace-nowrap overflow-hidden text-ellipsis`}>
            TIME TO TIME NEWS
          </h1>
          {showMalayalam && (
            <p className="text-xs sm:text-sm opacity-80 font-malayalam leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              മലയാളം വാർത്താ പോർട്ടൽ
            </p>
          )}
        </div>
      )}
    </Link>
  );
};

export default Logo;