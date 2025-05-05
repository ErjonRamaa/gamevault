import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Calendar, Star } from 'lucide-react'
import { getGameById } from "@/lib/games-data"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const gameId = parseInt(params.id)
  const game = getGameById(gameId)
  
  if (!game) {
    return {
      title: "Game Not Found | GameVault",
      description: "The requested game could not be found",
    }
  }
  
  return {
    title: `${game.title} | GameVault`,
    description: game.description || `Buy ${game.title} at the best price on GameVault`,
  }
}

export default function GamePage({ params }: { params: { id: string } }) {
  const gameId = parseInt(params.id)
  const game = getGameById(gameId)
  
  if (!game) {
    notFound()
  }


  const releaseDate = new Date(game.releaseDate)
  const formattedDate = releaseDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={game.image || "/placeholder.svg?height=600&width=600"}
            alt={game.title}
            width={600}
            height={600}
            className="rounded-lg w-full h-auto"
            priority
          />
          
          <div className="mt-6 grid grid-cols-4 gap-2">
            {/*Thumbnail*/}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video bg-gray-800 rounded-md overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=100&width=180&text=Screenshot+${i}`}
                  alt={`${game.title} screenshot ${i}`}
                  width={180}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(game.rating || 0) ? "fill-yellow-500 text-yellow-500" : "text-gray-500"}`}
                />
              ))}
            </div>
            <span className="text-yellow-500 font-medium">{game.rating?.toFixed(1)}</span>
          </div>
          
          {game.description && <p className="text-gray-300 mb-6">{game.description}</p>}
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold">${game.price.toFixed(2)}</span>
            {game.originalPrice > game.price && (
              <>
                <span className="text-xl text-gray-400 line-through">${game.originalPrice.toFixed(2)}</span>
                <span className="bg-purple-600/20 text-purple-400 text-sm font-bold px-2 py-1 rounded">
                  SAVE {game.discount}%
                </span>
              </>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-sm text-gray-400 mb-1">Publisher</h3>
              <p>{game.publisher}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 mb-1">Release Date</h3>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-gray-400" />
                <p>{formattedDate}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 mb-1">Platforms</h3>
              <div className="flex flex-wrap gap-1">
                {game.platform.map((platform) => (
                  <Badge key={platform} variant="outline" className="border-gray-700">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {game.category && (
            <div className="mb-6">
              <h3 className="text-sm text-gray-400 mb-2">Categories:</h3>
              <div className="flex flex-wrap gap-2">
                {game.category.map((cat) => (
                  <Badge key={cat} variant="secondary" className="bg-gray-800">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex gap-4">
            <Button size="lg" className="flex-1 sm:flex-none">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1 sm:flex-none border-gray-700">
              <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Game Details</h2>
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            {game.description || "No detailed description available for this game."}
          </p>
          <p className="text-gray-300">
            Experience the ultimate gaming adventure with {game.title}. Available on {game.platform.join(", ")}.
          </p>
        </div>
      </div>
    </div>
  )
}
