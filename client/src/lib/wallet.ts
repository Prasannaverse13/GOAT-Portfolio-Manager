import { useState, useEffect } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

let currentAddress: string | null = null;
const listeners = new Set<(address: string | null) => void>();

export function useWalletAddress() {
  const [address, setAddress] = useState<string | null>(currentAddress);

  useEffect(() => {
    listeners.add(setAddress);
    return () => {
      listeners.delete(setAddress);
    };
  }, []);

  return address;
}

function notifyListeners(address: string | null) {
  currentAddress = address;
  listeners.forEach(listener => listener(address));
}

export async function connectWallet(): Promise<string> {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed");
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    
    const address = accounts[0];
    notifyListeners(address);
    
    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      notifyListeners(accounts[0] || null);
    });

    return address;
  } catch (error) {
    console.error("Failed to connect wallet:", error);
    throw error;
  }
}

export async function disconnectWallet() {
  notifyListeners(null);
}
