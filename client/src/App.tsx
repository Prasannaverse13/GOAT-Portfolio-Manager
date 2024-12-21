import { Switch, Route } from "wouter";
import { MenuBar } from "@/components/layout/MenuBar";
import { Home } from "@/pages/Home";
import { Dashboard } from "@/pages/Dashboard";
import { Agents } from "@/pages/Agents";
import { Introduction } from "@/pages/learn/Introduction";
import { Portfolio } from "@/pages/learn/Portfolio";
import { AgentsGuide } from "@/pages/learn/AgentsGuide";
import { Documentation } from "@/pages/learn/Documentation";
import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <MenuBar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/agents" component={Agents} />
          <Route path="/learn/introduction" component={Introduction} />
          <Route path="/learn/portfolio" component={Portfolio} />
          <Route path="/learn/agents" component={AgentsGuide} />
          <Route path="/learn" component={Documentation} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            The page you're looking for doesn't exist.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;