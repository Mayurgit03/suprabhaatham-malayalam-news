import React from 'react';
import { Clock, User, MessageCircle, Share2, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl?: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
  readTime?: string;
  views?: number;
  comments?: number;
  malayalamTitle?: string;
  malayalamExcerpt?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  excerpt,
  category,
  author,
  publishedAt,
  imageUrl,
  isBreaking = false,
  isFeatured = false,
  readTime = '5 min read',
  views = 0,
  comments = 0,
  malayalamTitle,
  malayalamExcerpt,
}) => {
  const getCategoryColor = (cat: string) => {
    const categoryMap: Record<string, string> = {
      politics: 'bg-category-politics text-white',
      sports: 'bg-category-sports text-white',
      business: 'bg-category-business text-white',
      tech: 'bg-category-tech text-white',
      entertainment: 'bg-category-entertainment text-white',
      gulf: 'bg-category-gulf text-white',
      kerala: 'bg-primary text-primary-foreground',
      breaking: 'bg-breaking text-breaking-foreground animate-pulse-breaking',
    };
    return categoryMap[cat.toLowerCase()] || 'bg-secondary text-secondary-foreground';
  };

  const formatViews = (count: number) => {
    if (count > 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count > 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  return (
    <Card className={`group hover:shadow-news-card hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-card border-0 hover:-translate-y-1 hover:scale-105 animate-fade-in ${
      isFeatured ? 'shadow-hero animate-bounce-in' : ''
    } ${isBreaking ? 'ring-2 ring-breaking/50 animate-pulse' : ''}`}>
      <Link to={`/article/${id}`}>
        {imageUrl && (
          <div className={`relative overflow-hidden ${isFeatured ? 'h-64' : 'h-48'}`}>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 group-hover:brightness-110 group-hover:contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Category badge */}
            <Badge className={`absolute top-4 left-4 ${getCategoryColor(category)} font-semibold`}>
              {category.toUpperCase()}
            </Badge>
            
            {/* Breaking news indicator */}
            {isBreaking && (
              <div className="absolute top-4 right-4 bg-breaking text-breaking-foreground px-3 py-1 rounded-full text-xs font-bold animate-pulse-breaking">
                🔴 LIVE
              </div>
            )}
          </div>
        )}
      </Link>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          {/* Meta information */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-byline">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{publishedAt}</span>
              </div>
            </div>
            <span className="text-xs text-caption bg-accent px-2 py-1 rounded-full">
              {readTime}
            </span>
          </div>

          {/* Title */}
          <Link to={`/article/${id}`}>
            <h3 className={`font-bold text-headline-primary hover:text-primary transition-colors line-clamp-2 ${
              isFeatured ? 'text-2xl' : 'text-lg'
            } font-headline leading-tight`}>
              {title}
            </h3>
            {malayalamTitle && (
              <h4 className="text-base font-semibold text-headline-secondary mt-1 font-malayalam line-clamp-2">
                {malayalamTitle}
              </h4>
            )}
          </Link>

          {/* Excerpt */}
          <p className="text-muted-foreground line-clamp-3 font-body leading-relaxed">
            {excerpt}
          </p>
          {malayalamExcerpt && (
            <p className="text-muted-foreground line-clamp-2 font-malayalam text-sm leading-relaxed">
              {malayalamExcerpt}
            </p>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center space-x-4 text-sm text-byline">
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{formatViews(views)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{comments}</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-byline hover:text-primary">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;