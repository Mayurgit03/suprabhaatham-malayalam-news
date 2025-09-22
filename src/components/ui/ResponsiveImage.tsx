import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        width={width}
        height={height}
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : '100%',
          objectFit: 'cover'
        }}
        loading={priority ? 'eager' : 'lazy'}
        onError={(e) => {
          console.error('Image failed to load:', e.currentTarget.src);
          // Fallback handling
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
};

export default ResponsiveImage;