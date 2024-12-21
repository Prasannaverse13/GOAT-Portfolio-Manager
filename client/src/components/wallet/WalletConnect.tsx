import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { connectWallet, disconnectWallet, useWalletAddress } from "@/lib/wallet";
import { useToast } from "@/hooks/use-toast";

export function WalletConnect() {
  const [isConnecting, setIsConnecting] = useState(false);
  const address = useWalletAddress();
  const { toast } = useToast();

  const handleConnect = useCallback(async () => {
    try {
      setIsConnecting(true);
      await connectWallet();
      toast({
        title: "Wallet Connected",
        description: "Successfully connected to your wallet",
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  }, [toast]);

  const handleDisconnect = useCallback(async () => {
    await disconnectWallet();
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    });
  }, [toast]);

  if (address) {
    return (
      <Button variant="outline" onClick={handleDisconnect}>
        {address.slice(0, 6)}...{address.slice(-4)}
      </Button>
    );
  }

  return (
    <Button onClick={handleConnect} disabled={isConnecting}>
      {isConnecting ? "Connecting..." : "Connect Wallet"}
    </Button>
  );
}
