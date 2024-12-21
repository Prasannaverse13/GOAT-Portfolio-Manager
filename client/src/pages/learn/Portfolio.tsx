import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Portfolio() {
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold mb-6">Portfolio Management Guide</h1>
      
      <div className="prose max-w-none space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Understanding Portfolio Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Portfolio allocation is the process of distributing your investments across
              different assets or strategies. Key concepts include:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Risk management through diversification</li>
              <li>Balancing potential returns with risk tolerance</li>
              <li>Regular rebalancing to maintain target allocations</li>
              <li>Monitoring performance and adjusting strategies</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Working with AI Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our platform uses AI agents powered by GOAT to automate portfolio management:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Each agent specializes in specific strategies</li>
              <li>Agents continuously monitor market conditions</li>
              <li>Automated rebalancing maintains optimal allocations</li>
              <li>Performance tracking helps evaluate strategy effectiveness</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Start with a clear investment strategy</li>
              <li>Diversify across different risk levels</li>
              <li>Monitor agent performance regularly</li>
              <li>Adjust allocations based on market conditions</li>
              <li>Keep some funds in reserve for opportunities</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
