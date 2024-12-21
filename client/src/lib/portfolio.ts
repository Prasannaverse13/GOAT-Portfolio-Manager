import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Agent {
  id: string;
  name: string;
  description: string;
  performance: number;
  risk: "low" | "medium" | "high";
  allocation: number;
}

interface PortfolioState {
  agents: Agent[];
  totalValue: number;
  addAgent: (agent: Omit<Agent, "id">) => void;
  removeAgent: (id: string) => void;
  updateAllocation: (id: string, allocation: number) => void;
}

export const usePortfolio = create<PortfolioState>()(
  persist(
    (set) => ({
      agents: [],
      totalValue: 0,
      addAgent: (agent) =>
        set((state) => ({
          agents: [
            ...state.agents,
            { ...agent, id: Math.random().toString(36).slice(2) },
          ],
        })),
      removeAgent: (id) =>
        set((state) => ({
          agents: state.agents.filter((agent) => agent.id !== id),
        })),
      updateAllocation: (id, allocation) =>
        set((state) => ({
          agents: state.agents.map((agent) =>
            agent.id === id ? { ...agent, allocation } : agent
          ),
        })),
    }),
    {
      name: "portfolio-storage",
    }
  )
);
