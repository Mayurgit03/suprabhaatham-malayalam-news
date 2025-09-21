import React, { useEffect } from 'react';

interface FaviconComponentProps {
  iconUrl?: string;
  title?: string;
}

const FaviconComponent: React.FC<FaviconComponentProps> = ({ 
  iconUrl, 
  title = "Time To Time News" 
}) => {
  useEffect(() => {
    // Update favicon dynamically if needed
    if (iconUrl) {
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (favicon) {
        favicon.href = iconUrl;
      } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.type = 'image/svg+xml';
        newFavicon.href = iconUrl;
        document.head.appendChild(newFavicon);
      }
    }
    
    // Update title
    document.title = title;
  }, [iconUrl, title]);

  return null; // This component doesn't render anything visible
};

export default FaviconComponent;