import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Eye, Share2, MessageCircle, ThumbsUp, Bookmark, Calendar } from 'lucide-react';
import Header from '@/components/news/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Article = () => {
  const { id } = useParams();
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');

  // Sample article data - in real app, fetch based on ID
  const article = {
    id: id || '1',
    title: 'Kerala Government Announces New IT Policy for 2024',
    malayalamTitle: 'കേരള സർക്കാർ 2024-ലേക്കുള്ള പുതിയ ഐടി നയം പ്രഖ്യാപിച്ചു',
    content: `
      <p>The Kerala government has unveiled a comprehensive IT policy aimed at transforming the state into a leading technology hub in India. The policy, announced by Chief Minister Pinarayi Vijayan, includes several groundbreaking initiatives.</p>
      
      <h2>Key Highlights</h2>
      
      <p>The new policy focuses on creating a robust digital infrastructure that will support both established companies and emerging startups. Key components include:</p>
      
      <ul>
        <li>Establishment of 10 new IT parks across major cities</li>
        <li>Investment incentives for technology companies</li>
        <li>Skill development programs for 100,000 professionals</li>
        <li>Enhanced digital governance initiatives</li>
      </ul>
      
      <h2>Impact on Employment</h2>
      
      <p>The policy is expected to create over 500,000 direct and indirect employment opportunities over the next five years. Special emphasis has been placed on encouraging women's participation in the technology sector.</p>
      
      <p>Industry leaders have welcomed the move, calling it a game-changer for Kerala's economic landscape. The state's IT exports are projected to reach $25 billion by 2030 under this new framework.</p>
    `,
    malayalamContent: `
      <p>ഇന്ത്യയിലെ പ്രമുഖ സാങ്കേതിക കേന്ദ്രമാക്കി സംസ്ഥാനത്തെ മാറ്റാൻ ലക്ഷ്യമിട്ട് കേരള സർക്കാർ സമഗ്രമായ ഐടി നയം അവതരിപ്പിച്ചു. മുഖ്യമന്ത്രി പിണറായി വിജയൻ പ്രഖ്യാപിച്ച നയത്തിൽ നിരവധി തകർപ്പൻ സംരംഭങ്ങൾ ഉൾപ്പെടുന്നു.</p>
      
      <h2>പ്രധാന വിശേഷതകൾ</h2>
      
      <p>സ്ഥാപിത കമ്പനികളെയും ഉയർന്നുവരുന്ന സ്റ്റാർട്ടപ്പുകളെയും പിന്തുണയ്ക്കുന്ന ശക്തമായ ഡിജിറ്റൽ അടിസ്ഥാന സൗകര്യങ്ങൾ സൃഷ്ടിക്കുന്നതിൽ പുതിയ നയം ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു.</p>
    `,
    category: 'Technology',
    author: 'Priya Nair',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    views: 25420,
    likes: 1240,
    comments: 189,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    tags: ['IT Policy', 'Kerala', 'Technology', 'Employment', 'Digital India']
  };

  const relatedArticles = [
    {
      id: '2',
      title: 'Tech Startups Flourish in Kochi',
      malayalamTitle: 'കൊച്ചിയിൽ ടെക് സ്റ്റാർട്ടപ്പുകൾ തഴച്ചുവളരുന്നു',
      category: 'Business',
      readTime: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop'
    }
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.title,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article Content */}
          <article className="lg:col-span-3">
            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <Badge className={`mb-4 ${
                  article.category.toLowerCase() === 'technology' 
                    ? 'bg-category-tech text-white' 
                    : 'bg-primary text-primary-foreground'
                }`}>
                  {article.category}
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-headline-primary mb-4 font-headline leading-tight">
                {article.title}
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-headline-secondary mb-6 font-malayalam leading-relaxed">
                {article.malayalamTitle}
              </h2>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-byline mb-8">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{article.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span>By {article.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{article.views.toLocaleString()} views</span>
                </div>
              </div>

              {/* Article Actions */}
              <div className="flex items-center justify-between border-y border-border py-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-byline hover:text-primary">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    {article.likes}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-byline hover:text-primary"
                    onClick={() => setShowComments(!showComments)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {article.comments}
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-byline hover:text-primary">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-byline hover:text-primary"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-news-card"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div className="text-foreground font-body leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
              
              {/* Malayalam Content */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold mb-4 font-malayalam">മലയാളത്തിൽ:</h3>
                <div className="text-foreground font-malayalam leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: article.malayalamContent }} />
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/search?q=${encodeURIComponent(tag)}`}
                    className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            {showComments && (
              <section className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Comments ({article.comments})</h3>
                
                {/* Add Comment Form */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <Textarea
                      placeholder="Share your thoughts about this article..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="mb-4"
                      rows={4}
                    />
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">
                        Please connect to Supabase to enable commenting functionality
                      </p>
                      <Button disabled>Post Comment</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Sample Comments */}
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarFallback>RK</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold">Raj Kumar</span>
                            <span className="text-sm text-muted-foreground">2 hours ago</span>
                          </div>
                          <p className="text-foreground">
                            This is a great initiative by the Kerala government. Looking forward to seeing more tech opportunities in the state.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Related Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.id}
                        to={`/article/${related.id}`}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          <img
                            src={related.imageUrl}
                            alt={related.title}
                            className="w-16 h-16 object-cover rounded group-hover:scale-105 transition-transform"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                              {related.title}
                            </h4>
                            <p className="text-xs text-muted-foreground font-malayalam mt-1">
                              {related.malayalamTitle}
                            </p>
                            <div className="flex items-center space-x-2 mt-2 text-xs text-byline">
                              <Badge variant="secondary" className="text-xs">
                                {related.category}
                              </Badge>
                              <span>{related.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest news delivered to your inbox
                  </p>
                  <Button className="w-full" disabled>
                    Subscribe to Newsletter
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Connect to Supabase to enable subscriptions
                  </p>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Article;