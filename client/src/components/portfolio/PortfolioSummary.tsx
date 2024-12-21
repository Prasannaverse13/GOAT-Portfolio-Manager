import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePortfolio } from "@/lib/portfolio";
import { Chart } from "@/components/ui/chart";

export function PortfolioSummary() {
  const { agents, totalValue } = usePortfolio();

  const totalAllocation = agents.reduce((sum, agent) => sum + agent.allocation, 0);
  const performanceData = agents.map((agent) => ({
    name: agent.name,
    value: agent.allocation,
  }));

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Value</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">${totalValue.toLocaleString()}</p>
          <p className="text-sm text-gray-500">
            Total Allocation: {totalAllocation}%
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Allocation Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <Chart
              type="pie"
              data={performanceData}
              options={{
                labels: performanceData.map((d) => d.name),
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
