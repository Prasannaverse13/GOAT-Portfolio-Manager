import { useState } from "react";
import { useWalletAddress } from "@/lib/wallet";
import { executeAIAction } from "@/lib/goat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const wallet = useWalletAddress();
  const { toast } = useToast();

  const handleExecute = async () => {
    if (!wallet) {
      toast({
        title: "Connect Wallet",
        description: "Please connect your wallet to use GOAT features",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const result = await executeAIAction(prompt);
      toast({
        title: "Action Executed",
        description: "GOAT action completed successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to execute action",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-8 mb-12">
          <div className="relative z-10">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              GOAT Portfolio Manager
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Harness the power of AI for intelligent portfolio management
            </p>
            <div className="flex gap-4">
              {!wallet ? (
                <Button size="lg" className="bg-white text-black hover:bg-blue-100">
                  Connect Wallet to Start
                </Button>
              ) : (
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600" asChild>
                  <Link href="/dashboard">View Dashboard</Link>
                </Button>
              )}
            </div>
          </div>
          {/* Cyber grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        {/* GOAT Interaction Section */}
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">AI Assistant</h2>
            <div className="space-y-4">
              <Input
                placeholder="Enter your instruction (e.g., 'Rebalance portfolio to 60% ETH, 40% USDC')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button 
                onClick={handleExecute} 
                disabled={loading || !prompt || !wallet}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {loading ? "Executing..." : "Execute Action"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "AI-Powered",
              description: "Advanced algorithms for optimal portfolio management",
              icon: "🤖",
            },
            {
              title: "Multi-Chain",
              description: "Support for multiple blockchain networks",
              icon: "⛓️",
            },
            {
              title: "Automated",
              description: "Automated rebalancing and portfolio optimization",
              icon: "⚡",
            },
          ].map((feature) => (
            <Card key={feature.title} className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-blue-400">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}