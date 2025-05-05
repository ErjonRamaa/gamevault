import Link from "next/link"
import Image from "next/image"
import { GameCard } from "@/components/game-card"
import { FeaturedGame } from "@/components/featured-game"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { getPopularGames, getFeaturedGame } from "@/lib/games-data"

export default function Home() {

  const popularGames = getPopularGames(6)
  const featuredGame = getFeaturedGame()

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <Image
          src="go23.png"
          alt="GameVault Hero"
          width={1600}
          height={600}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Game Keys at <span className="text-purple-500">Unbeatable Prices</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Join thousands of gamers who save up to 70% on their favorite titles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                placeholder="Search for games..."
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Game */}
      <section className="py-12 px-6 md:px-12 bg-gray-900">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Featured Deal</h2>
        <FeaturedGame game={featuredGame} />
      </section>

      {/* Popular Games */}
      <section className="py-12 px-6 md:px-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Popular Games</h2>
          <Link href="/games" className="text-purple-400 hover:text-purple-300">
            View all games →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {popularGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 md:px-12 bg-gray-900">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Action", "RPG", "Strategy", "Sports", "Adventure", "Simulation", "FPS", "Racing"].map((category) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="bg-gray-800 hover:bg-gray-700 transition-colors p-6 rounded-lg text-center"
            >
              <span className="text-lg font-medium text-white">{category}</span>
            </Link>
          ))}
        </div>
      </section>

      {}
      <section className="py-16 px-6 md:px-12 bg-purple-900 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Ready to Save on Your Next Game?</h2>
        <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
          Create an account today and get 5% off your first purchase!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-purple-900 hover:bg-gray-100">Register Now</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </section>
    </main>
  )
}
