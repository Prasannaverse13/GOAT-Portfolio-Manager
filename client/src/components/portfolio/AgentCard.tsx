import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Agent } from "@/lib/portfolio";

interface AgentCardProps {
  agent: Agent;
  onRemove: (id: string) => void;
  onUpdateAllocation: (id: string, allocation: number) => void;
}

export function AgentCard({ agent, onRemove, onUpdateAllocation }: AgentCardProps) {
  const riskColor = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  }[agent.risk];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{agent.name}</CardTitle>
          <Badge className={riskColor}>{agent.risk} risk</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{agent.description}</p>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Performance</label>
            <p className="text-2xl font-bold">
              {agent.performance >= 0 ? "+" : ""}
              {agent.performance.toFixed(2)}%
            </p>
          </div>
          <div>
            <label className="text-sm font-medium">Allocation</label>
            <Slider
              value={[agent.allocation]}
              onValueChange={([value]) => onUpdateAllocation(agent.id, value)}
              max={100}
              step={1}
              className="mt-2"
            />
            <p className="text-sm text-right mt-1">{agent.allocation}%</p>
          </div>
          <Button
            variant="destructive"
            size="sm"
            className="w-full"
            onClick={() => onRemove(agent.id)}
          >
            Remove Agent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
