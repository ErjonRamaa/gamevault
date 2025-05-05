import { getAllGames } from "@/lib/games-data";
import { GameCard } from "@/components/game-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from 'lucide-react';

export const metadata = {
  title: "All Games | GameVault",
  description: "Browse our complete collection of games at unbeatable prices",
};

export default function AllGamesPage() {
  const allGames = getAllGames();
  
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All Games</h1>
        
        {}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search games..." 
              className="pl-10 bg-gray-800 border-gray-700"
            />
          </div>
          <Button variant="outline" className="border-gray-700">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>
        
        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </main>
  );
}
