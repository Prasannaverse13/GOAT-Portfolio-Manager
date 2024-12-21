import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export function Documentation() {
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold mb-6">Documentation</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Learn the basics of GOAT and how to get started with portfolio management.
            </p>
            <Link href="/learn/introduction" className="text-primary hover:underline">
              Read More →
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Portfolio Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Understand how to effectively manage your portfolio using AI agents.
            </p>
            <Link href="/learn/portfolio" className="text-primary hover:underline">
              Read More →
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Understanding Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Deep dive into different types of agents and their strategies.
            </p>
            <Link href="/learn/agents" className="text-primary hover:underline">
              Read More →
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <a
                href="https://ohmygoat.dev/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Official GOAT Documentation
              </a>
            </li>
            <li>
              <a
                href="https://ohmygoat.dev/plugins"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GOAT Plugins Directory
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
