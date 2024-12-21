import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePortfolio, Agent } from "@/lib/portfolio";
import { Badge } from "@/components/ui/badge";
import { useWalletAddress } from "@/lib/wallet";
import { Link } from "wouter";

const AVAILABLE_AGENTS: Omit<Agent, "id" | "allocation">[] = [
  {
    name: "Conservative DeFi",
    description: "Low-risk yield farming strategy focusing on stable pairs",
    performance: 5.2,
    risk: "low",
  },
  {
    name: "Momentum Trader",
    description: "Follows market trends using technical indicators",
    performance: 12.8,
    risk: "medium",
  },
  {
    name: "Alpha Seeker",
    description: "Aggressive strategy targeting high-potential opportunities",
    performance: 24.5,
    risk: "high",
  },
];

export function Agents() {
  const wallet = useWalletAddress();
  const { agents, addAgent } = usePortfolio();
  const [adding, setAdding] = useState<string | null>(null);

  if (!wallet) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Agent Marketplace</h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect your wallet to add AI agents to your portfolio
        </p>
        <Button asChild>
          <Link href="/learn/agents">Learn About Agents</Link>
        </Button>
      </div>
    );
  }

  const handleAddAgent = async (agent: Omit<Agent, "id">) => {
    setAdding(agent.name);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
      addAgent(agent);
    } finally {
      setAdding(null);
    }
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold mb-6">Available Agents</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {AVAILABLE_AGENTS.map((agent) => {
          const isAdded = agents.some((a) => a.name === agent.name);
          const isAdding = adding === agent.name;
          
          return (
            <Card key={agent.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{agent.name}</CardTitle>
                  <Badge className={`
                    ${agent.risk === 'low' && 'bg-green-100 text-green-800'}
                    ${agent.risk === 'medium' && 'bg-yellow-100 text-yellow-800'}
                    ${agent.risk === 'high' && 'bg-red-100 text-red-800'}
                  `}>
                    {agent.risk} risk
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{agent.description}</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Performance</label>
                    <p className="text-2xl font-bold">
                      +{agent.performance.toFixed(1)}%
                    </p>
                  </div>
                  <Button
                    className="w-full"
                    disabled={isAdded || isAdding}
                    onClick={() => handleAddAgent({ ...agent, allocation: 0 })}
                  >
                    {isAdded ? "Added to Portfolio" : isAdding ? "Adding..." : "Add to Portfolio"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
