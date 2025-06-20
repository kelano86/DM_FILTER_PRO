import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Shield, Zap, ArrowRight, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">DM</span>
            </div>
            <span className="text-white font-bold text-xl">Filter Pro</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/campaign">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Run DM Audit
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
          🚀 New Feature: DM Deal Audit
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Stop Missing
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {" "}Million Dollar{" "}
          </span>
          DMs
        </h1>
        
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Discover how many potential deals you've been missing in your Twitter DMs. 
          Our AI-powered audit reveals the hidden opportunities in your message requests.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/campaign">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
              <TrendingUp className="mr-2 h-5 w-5" />
              Run Your DM Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why DM Filter Pro?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            The only tool that turns your Twitter DMs into a revenue-generating machine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-white">Deal Discovery</CardTitle>
              <CardDescription className="text-slate-300">
                AI-powered analysis reveals hidden opportunities in your message requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  Smart filtering algorithms
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  Opportunity scoring
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  Revenue calculation
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-white">Viral Sharing</CardTitle>
              <CardDescription className="text-slate-300">
                Generate shareable images that showcase your missed opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  1080x1080 social images
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  One-click X/Twitter sharing
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  Professional branding
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-white">Privacy First</CardTitle>
              <CardDescription className="text-slate-300">
                Your data stays secure with enterprise-grade privacy protection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  End-to-end encryption
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  No data storage
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  GDPR compliant
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg border-purple-500/30">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Discover Your Missed Opportunities?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators and entrepreneurs who've uncovered hidden revenue in their DMs
            </p>
            
            <Link href="/campaign">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-12 py-4 text-lg">
                <Zap className="mr-2 h-5 w-5" />
                Start Your Free Audit
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold">DM</span>
            </div>
            <span className="text-white font-bold">Filter Pro</span>
          </div>
          
          <div className="text-slate-400 text-sm">
            © 2025 DM Filter Pro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

