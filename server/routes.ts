import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Portfolio-related endpoints
  app.get("/api/portfolio", (_req, res) => {
    res.json({ message: "Portfolio API endpoint" });
  });

  // GOAT integration endpoints
  app.get("/api/agents", (_req, res) => {
    res.json({ message: "Agents API endpoint" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
