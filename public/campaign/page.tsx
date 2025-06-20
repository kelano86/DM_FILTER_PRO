'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Share2, Copy, TrendingUp, Users, Award, MessageSquare } from 'lucide-react';

interface ScanResult {
  scanId: string;
  deals: {
    missedDeals: number;
    missedValue: number;
    totalDMs: number;
    mutualFollowers: number;
    ethosScore: number;
    yaps: number;
  };
  avgValue: number;
  createdAt: string;
}

export default function CampaignPage() {
  const [avgValue, setAvgValue] = useState([100]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  const handleScan = async () => {
    setIsScanning(true);
    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ avgValue: avgValue[0] }),
      });

      if (!response.ok) {
        throw new Error('Scan failed');
      }

      const result = await response.json();
      setScanResult(result);
    } catch (error) {
      console.error('Scan error:', error);
    } finally {
      setIsScanning(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!scanResult) return;

    setIsGeneratingImage(true);
    try {
      const response = await fetch(`/api/scan/${scanResult.scanId}/image`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Image generation failed');
      }

      const result = await response.json();
      setImageUrl(result.imageUrl);
    } catch (error) {
      console.error('Image generation error:', error);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleShareOnX = () => {
    if (!imageUrl) return;
    
    const shareText = `Check what I was missing ➜ ${imageUrl} @DMDealAlert`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(twitterUrl, '_blank');
  };

  const handleCopyLink = async () => {
    if (!imageUrl) return;
    
    try {
      await navigator.clipboard.writeText(imageUrl);
      // You could add a toast notification here
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            DM Deal Audit
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover how many potential deals you've been missing in your Twitter DMs
          </p>
        </div>

        {/* Configuration Card */}
        <Card className="mb-8 bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Configure Your Audit</CardTitle>
            <CardDescription className="text-slate-300">
              Set your average deal value to calculate missed opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-white font-medium mb-4 block">
                Average Deal Value: ${avgValue[0].toLocaleString()}
              </label>
              <Slider
                value={avgValue}
                onValueChange={setAvgValue}
                max={10000}
                min={0}
                step={50}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-slate-400 mt-2">
                <span>$0</span>
                <span>$10,000</span>
              </div>
            </div>
            
            <Button 
              onClick={handleScan}
              disabled={isScanning}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 text-lg"
            >
              {isScanning ? 'Scanning DMs...' : 'Run DM Audit'}
            </Button>
          </CardContent>
        </Card>

        {/* Results Card */}
        {scanResult && (
          <Card className="mb-8 bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Audit Results
              </CardTitle>
              <CardDescription className="text-slate-300">
                Your missed opportunity analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Main Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg border border-red-500/30">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {scanResult.deals.missedDeals}
                  </div>
                  <div className="text-red-300 font-medium">Missed Deals</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-lg border border-yellow-500/30">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    ${scanResult.deals.missedValue.toLocaleString()}
                  </div>
                  <div className="text-yellow-300 font-medium">Missed Value</div>
                </div>
              </div>

              {/* Detailed Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Users className="h-8 w-8 text-blue-400" />
                  <div>
                    <div className="text-white font-semibold">{scanResult.deals.mutualFollowers}</div>
                    <div className="text-slate-400 text-sm">Mutual Followers</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Award className="h-8 w-8 text-purple-400" />
                  <div>
                    <div className="text-white font-semibold">{scanResult.deals.ethosScore}</div>
                    <div className="text-slate-400 text-sm">Ethos Score</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <MessageSquare className="h-8 w-8 text-cyan-400" />
                  <div>
                    <div className="text-white font-semibold">{scanResult.deals.yaps}</div>
                    <div className="text-slate-400 text-sm">Yaps</div>
                  </div>
                </div>
              </div>

              {/* Generate Image Button */}
              <Button 
                onClick={handleGenerateImage}
                disabled={isGeneratingImage}
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-3"
              >
                {isGeneratingImage ? 'Generating Image...' : 'Generate Viral Image'}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Sharing Card */}
        {imageUrl && (
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Share2 className="h-6 w-6" />
                Share Your Results
              </CardTitle>
              <CardDescription className="text-slate-300">
                Show the world what they're missing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Image Preview */}
              <div className="relative">
                <img 
                  src="/viral-share-preview.png" 
                  alt="Viral share preview" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                />
                <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                  Ready to Share
                </Badge>
              </div>

              {/* Share Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleShareOnX}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Share on X
                </Button>
                
                <Button 
                  onClick={handleCopyLink}
                  variant="outline"
                  className="flex-1 border-white/30 text-white hover:bg-white/10 font-semibold py-3"
                >
                  <Copy className="h-5 w-5 mr-2" />
                  Copy Link
                </Button>
              </div>

              {/* Share Preview */}
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-slate-400 text-sm mb-2">Share message preview:</div>
                <div className="text-white font-mono text-sm">
                  "Check what I was missing ➜ {imageUrl} @DMDealAlert"
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

