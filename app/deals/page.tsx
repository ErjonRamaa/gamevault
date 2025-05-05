import { getBestDeals } from "@/lib/games-data";
import { GameCard } from "@/components/game-card";
import { Badge } from "@/components/ui/badge";
import { Percent } from 'lucide-react';

export const metadata = {
  title: "Best Deals | GameVault",
  description: "The biggest discounts on popular games",
};

export default function DealsPage() {
  const bestDeals = getBestDeals();
  
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-3xl font-bold">Best Deals</h1>
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            <Percent className="h-3 w-3 mr-1" /> Save up to 67%
          </Badge>
        </div>
        
        {/* Deals Banner */}
        <div className="bg-gradient-to-r from-purple-900/50 to-gray-900 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">Limited Time Offers</h2>
          <p className="text-gray-300">
            Grab these amazing deals before they're gone! All discounts are for a limited time only.
          </p>
        </div>
        
        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {bestDeals.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </main>
  );
}
