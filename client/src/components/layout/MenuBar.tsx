import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { WalletConnect } from "@/components/wallet/WalletConnect";

export function MenuBar() {
  return (
    <Menubar className="border-b px-2 lg:px-4">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Portfolio Manager</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href="/">Dashboard</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/agents">Agents</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Learn</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href="/learn/introduction">What is GOAT?</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/learn/portfolio">Portfolio Management</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/learn/agents">Understanding Agents</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <div className="ml-auto flex items-center gap-2">
        <WalletConnect />
        <Button variant="outline" asChild>
          <Link href="/learn">Documentation</Link>
        </Button>
      </div>
    </Menubar>
  );
}
