import { getNewReleases } from "@/lib/games-data";
import { GameCard } from "@/components/game-card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from 'lucide-react';

export const metadata = {
  title: "New Releases | GameVault",
  description: "The latest and upcoming game releases for 2025",
};

export default function NewReleasesPage() {
  const newReleases = getNewReleases();
  
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-3xl font-bold">New Releases</h1>
          <Badge variant="outline" className="border-green-500 text-green-400">
            <CalendarDays className="h-3 w-3 mr-1" /> 2025 Releases
          </Badge>
        </div>
        
        {}
        <div className="bg-gradient-to-r from-green-900/30 to-gray-900 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">Hottest Games of 2025</h2>
          <p className="text-gray-300">
            Pre-order or get the latest releases of 2025. Be the first to play these highly anticipated titles!
          </p>
        </div>
        
        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {newReleases.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </main>
  );
}
