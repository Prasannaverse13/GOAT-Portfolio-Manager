# GOAT Portfolio Manager

## Project Overview

GOAT Portfolio Manager is a web3 application designed to automate and optimize crypto portfolio management using AI agents. The platform allows users to manage their investments across multiple agents, ensuring efficient fund allocation and rebalancing. By leveraging blockchain technology and AI, the application provides a seamless experience for users to interact with decentralized finance (DeFi) strategies.

**Agent Objective:**  
Manage an index of agents, rebalancing funds for each agent as needed.

**User Journey:**
1. User selects multiple agents from a Dashboard and decides how much capital to deploy to each.
2. Agent auto-balances the agent portfolio.
3. Weights can be changed as needed.
4. Deposit and withdraw capital from the entire portfolio as necessary.

**Scope:**
- Agent must be able to interact with multiple agents while keeping calculations of weights allocated to each.

**Strategy:**
- Agent manages a portfolio of agents and rebalances at set or gas-optimized intervals.

## 🔒 Wallet Integration

The application integrates with MetaMask for wallet connectivity. Users can:
- Connect their wallet
- View their wallet address
- Sign transactions
- Interact with smart contracts

## 📚 GOAT Integration Details

### GOAT Configuration
The main GOAT configuration and integration is located in `client/src/lib/goat.ts`. This includes:
- Basic GOAT tools initialization
- Wallet client setup using viem
- Integration with Vercel AI SDK
- Implementation of GOAT plugins

### GOAT Plugins
The following plugins are implemented:
- `sendETH()` - For ETH transfers
- `erc20()` - For ERC20 token interactions
- `faucet()` - For testnet token acquisition
- `polymarket()` - For Polymarket integration

## 📊 Portfolio Management Guide

### Understanding Portfolio Allocation
Portfolio allocation is the process of distributing investments across different assets or strategies:
- Risk management through diversification
- Balancing potential returns with risk tolerance
- Regular rebalancing to maintain target allocations
- Monitoring performance and adjusting strategies

### Working with AI Agents
Our platform leverages AI agents powered by GOAT to automate portfolio management:
- Specialized agents for different strategies
- Continuous market monitoring
- Automated rebalancing
- Performance tracking and evaluation

### Best Practices
1. Start with a clear investment strategy
2. Diversify across different risk levels
3. Monitor agent performance regularly
4. Adjust allocations based on market conditions
5. Keep some funds in reserve for opportunities

## 🤖 Understanding GOAT Agents

GOAT agents are autonomous programs that execute trading and investment strategies:
- Automatic trade execution
- 24/7 market monitoring
- Complex DeFi strategy implementation
- Risk management with predefined parameters

### Types of Agents

#### Conservative DeFi Agent
- Focuses on stable yields
- Minimal risk exposure
- Suitable for conservative investors

#### Momentum Trading Agent
- Follows market trends
- Uses technical indicators
- More suitable for dynamic markets

#### Alpha Seeking Agent
- Searches for high-potential opportunities
- Higher risk-reward ratio
- Active market participation

### Using Agents Effectively
1. Match agents with your risk tolerance
2. Diversify across multiple strategies
3. Regular performance monitoring
4. Understand each agent's approach
5. Maintain transaction records

## 📝 API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/portfolio` - Get portfolio data
- `GET /api/agents` - Get GOAT agents data

## 🔧 SDK Integrations

### Vercel AI SDK Integration
The project uses Vercel AI SDK for AI-powered interactions:
- Located in `client/src/lib/goat.ts`
- Uses `generateText` from Vercel AI SDK
- Integrates with GPT-4 for intelligent responses
- Handles AI-based transaction suggestions

---

Made with ❤️ by Prasannaram R