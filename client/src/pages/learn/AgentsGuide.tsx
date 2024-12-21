import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AgentsGuide() {
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold mb-6">Understanding GOAT Agents</h1>
      
      <div className="prose max-w-none space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What are GOAT Agents?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              GOAT agents are autonomous programs that execute trading and investment
              strategies on your behalf. They leverage artificial intelligence and
              blockchain technology to:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Execute trades automatically</li>
              <li>Monitor market conditions 24/7</li>
              <li>Implement complex DeFi strategies</li>
              <li>Manage risk according to predefined parameters</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Types of Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Conservative DeFi Agent</h3>
                <p>Focuses on stable yields with minimal risk exposure</p>
              </div>
              <div>
                <h3 className="font-bold">Momentum Trading Agent</h3>
                <p>Follows market trends and technical indicators</p>
              </div>
              <div>
                <h3 className="font-bold">Alpha Seeking Agent</h3>
                <p>Actively searches for high-potential opportunities</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Use Agents Effectively</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Choose agents that match your risk tolerance</li>
              <li>Diversify across multiple agent strategies</li>
              <li>Monitor performance and adjust allocations</li>
              <li>Understand each agent's specific approach</li>
              <li>Keep track of transaction history</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
