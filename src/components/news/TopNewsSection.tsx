import React from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';
import NewsCard from './NewsCard';
import { Button } from '@/components/ui/button';

const TopNewsSection = () => {
  // Additional stories for the main content area
  const topStories = [
    {
      id: '6',
      title: '"Jaish" No More, Hit By Sanctions, Banned Terror Group Changes Name',
      malayalamTitle: '"ജൈഷ്" ഇല്ല, ഉപരോധം ബാധിച്ചു, നിരോധിത ഭീകര സംഘടന പേര് മാറ്റി',
      excerpt: 'The Pakistan-based terror group Jaish-e-Mohammed has reportedly changed its name...',
      malayalamExcerpt: 'പാകിസ്താൻ ആസ്ഥാനമായുള്ള ഭീകര സംഘടനയായ ജൈഷ്-ഇ-മുഹമ്മദ് പേര് മാറ്റിയതായി റിപ്പോർട്ട്...',
      category: 'Politics',
      author: 'Rajesh Kumar',
      publishedAt: '4 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=400&fit=crop',
      views: 18750,
      comments: 145,
    },
    {
      id: '7',
      title: 'What Are Trump\'s Gold, Platinum, Corporate Gold Cards For H-1B Workers?',
      malayalamTitle: 'എച്ച്-1ബി തൊഴിലാളികൾക്കുള്ള ട്രംപിന്റെ ഗോൾഡ്, പ്ലാറ്റിനം, കോർപ്പറേറ്റ് ഗോൾഡ് കാർഡുകൾ എന്താണ്?',
      excerpt: 'Understanding the new visa classification system announced by the Trump administration...',
      malayalamExcerpt: 'ട്രംപ് അഡ്മിനിസ്ട്രേഷൻ പ്രഖ്യാപിച്ച പുതിയ വിസ വർഗ്ഗീകരണ സമ്പ്രദായം മനസ്സിലാക്കുന്നു...',
      category: 'World',
      author: 'Priya Nair',
      publishedAt: '6 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop',
      views: 12340,
      comments: 89,
    },
    {
      id: '8',
      title: 'Amazon, TCS, Microsoft: These Firms May Be Worst Hit By H-1B Visa Fee Hike',
      malayalamTitle: 'അമേസൺ, ടിസിഎസ്, മൈക്രോസോഫ്റ്റ്: എച്ച്-1ബി വിസാ ഫീസ് വർധനയിൽ ഏറ്റവും കൂടുതൽ ബാധിക്കപ്പെടാൻ സാധ്യതയുള്ള കമ്പനികൾ',
      excerpt: 'Major technology companies face significant impact from the new H-1B visa fee structure...',
      malayalamExcerpt: 'പുതിയ എച്ച്-1ബി വിസാ ഫീസ് ഘടനയിൽ നിന്ന് പ്രധാന സാങ്കേതിക കമ്പനികൾക്ക് കാര്യമായ ആഘാതം...',
      category: 'Business',
      author: 'Ahmed Hassan',
      publishedAt: '8 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      views: 15890,
      comments: 234,
    },
  ];

  const moreStories = [
    {
      id: '9',
      title: 'Al Qaeda May Leverage Global Wars With US Role: Counter-Terrorism Unit',
      malayalamTitle: 'യുഎസ് പങ്കാളിത്തത്തോടെയുള്ള ആഗോള യുദ്ധങ്ങൾ അൽ ഖായിദ ചൂഷണം ചെയ്യാനിടയുണ്ട്: കൗണ്ടർ ടെററിസം യൂണിറ്റ്',
      excerpt: 'Intelligence agencies warn of potential terrorist exploitation of global conflicts...',
      malayalamExcerpt: 'ആഗോള സംഘർഷങ്ങളുടെ ഭീകര ചൂഷണത്തെക്കുറിച്ച് രഹസ്യാന്വേഷണ ഏജൻസികൾ മുന്നറിയിപ്പ്...',
      category: 'World',
      author: 'Security Correspondent',
      publishedAt: '10 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1586336777815-654e95dd7bf5?w=600&h=400&fit=crop',
      views: 9876,
      comments: 67,
    },
    {
      id: '10',
      title: '"My Message To Asim Munir": Imran Khan Accuses Army Chief Of Mental Torture',
      malayalamTitle: '"ആസിം മുനീറിനുള്ള എന്റെ സന്ദേശം": മാനസിക പീഡനത്തിന് സൈനിക മേധാവിയെ കുറ്റപ്പെടുത്തി ഇമ്രാൻ ഖാൻ',
      excerpt: 'Former Pakistan Prime Minister makes serious allegations against military leadership...',
      malayalamExcerpt: 'സൈനിക നേതൃത്വത്തിനെതിരെ മുൻ പാകിസ്താൻ പ്രധാനമന്ത്രി ഗുരുതരമായ ആരോപണങ്ങൾ ഉന്നയിക്കുന്നു...',
      category: 'Politics',
      author: 'International Desk',
      publishedAt: '12 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=600&h=400&fit=crop',
      views: 22340,
      comments: 198,
    },
    {
      id: '11',
      title: '"Abuse Of H-1B Programme National Security Threat": Donald Trump',
      malayalamTitle: '"എച്ച്-1ബി പ്രോഗ്രാമിന്റെ ദുരുപയോഗം ദേശീയ സുരക്ഷാ ഭീഷണി": ഡൊണാൾഡ് ട്രംപ്',
      excerpt: 'President Trump expresses concerns about the current H-1B visa system...',
      malayalamExcerpt: 'നിലവിലെ എച്ച്-1ബി വിസാ സമ്പ്രദായത്തെക്കുറിച്ച് പ്രസിഡന്റ് ട്രംപ് ആശങ്ക പ്രകടിപ്പിക്കുന്നു...',
      category: 'World',
      author: 'Washington Correspondent',
      publishedAt: '14 hours ago',
      imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop',
      views: 18750,
      comments: 156,
    },
  ];

  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Top News & Updates Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-headline-primary font-headline flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-primary" />
              Top News & Updates
            </h2>
            <Button variant="ghost" className="group text-primary hover:text-primary">
              View All
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Featured Grid of 3 stories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {topStories.map((story) => (
              <NewsCard key={story.id} {...story} />
            ))}
          </div>
        </div>

        {/* More Stories Section */}
        <div className="border-t border-border pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Stories Column */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {moreStories.map((story) => (
                  <NewsCard key={story.id} {...story} />
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="text-center mt-8">
                <Button size="lg" variant="outline" className="group">
                  Load More Stories
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Trending Topics */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-bold mb-4 text-lg border-b border-border pb-2">
                    Trending Now
                  </h3>
                  <div className="space-y-3">
                    {[
                      'H-1B Visa Changes',
                      'India-US Relations', 
                      'Tech Industry Impact',
                      'Immigration Policy',
                      'Global Politics'
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-primary">#{index + 1}</span>
                        <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Updates */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-bold mb-4 text-lg border-b border-border pb-2 text-breaking">
                    🔴 Live Updates
                  </h3>
                  <div className="space-y-4">
                    <div className="text-sm">
                      <div className="text-xs text-muted-foreground mb-1">2 mins ago</div>
                      <p className="text-foreground">Breaking: New developments in H-1B visa policy discussions</p>
                    </div>
                    <div className="text-sm">
                      <div className="text-xs text-muted-foreground mb-1">15 mins ago</div>
                      <p className="text-foreground">Tech companies respond to new immigration regulations</p>
                    </div>
                    <div className="text-sm">
                      <div className="text-xs text-muted-foreground mb-1">45 mins ago</div>
                      <p className="text-foreground">Indian government issues statement on visa concerns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNewsSection;