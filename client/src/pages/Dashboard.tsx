import { Button } from "@/components/ui/button";
import { PortfolioSummary } from "@/components/portfolio/PortfolioSummary";
import { AgentCard } from "@/components/portfolio/AgentCard";
import { usePortfolio } from "@/lib/portfolio";
import { useWalletAddress } from "@/lib/wallet";
import { Link } from "wouter";

export function Dashboard() {
  const wallet = useWalletAddress();
  const { agents, removeAgent, updateAllocation } = usePortfolio();

  if (!wallet) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Portfolio Manager</h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect your wallet to get started with AI-powered portfolio management
        </p>
        <Button asChild>
          <Link href="/learn/introduction">Learn More</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold mb-6">Portfolio Dashboard</h1>
      
      <PortfolioSummary />
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Active Agents</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            onRemove={removeAgent}
            onUpdateAllocation={updateAllocation}
          />
        ))}
        {agents.length === 0 && (
          <p className="text-gray-500 col-span-full text-center py-8">
            No agents added yet. Visit the{" "}
            <Link href="/agents" className="text-primary hover:underline">
              Agents page
            </Link>{" "}
            to get started.
          </p>
        )}
      </div>
    </div>
  );
}
