import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Introduction() {
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold mb-6">Introduction to GOAT</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Welcome to our educational portfolio management platform! This system demonstrates 
          the power of AI-driven portfolio management using GOAT (Great Onchain Agent Toolkit).
        </p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>What is GOAT?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              GOAT (Great Onchain Agent Toolkit) is a powerful framework that enables the creation 
              and management of autonomous agents for blockchain operations. These agents can:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Execute trades automatically based on predefined strategies</li>
              <li>Monitor market conditions and react to opportunities</li>
              <li>Manage portfolio allocations efficiently</li>
              <li>Implement complex DeFi strategies</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How This Platform Works</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our platform serves as an educational tool to understand portfolio management 
              and blockchain interactions. Key features include:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Interactive dashboard for monitoring your portfolio</li>
              <li>Educational resources about GOAT and blockchain technology</li>
              <li>Demo environment for testing different strategies</li>
              <li>Integration with popular Web3 wallets</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
