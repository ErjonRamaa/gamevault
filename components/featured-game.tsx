import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Info } from "lucide-react"
import type { Game } from "@/lib/games-data"

interface FeaturedGameProps {
  game: Game
}

export function FeaturedGame({ game }: FeaturedGameProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-900/50 to-gray-900">
      <div className="flex flex-col lg:flex-row">
        <div className="p-6 lg:p-10 lg:w-1/2 flex flex-col justify-center">
          <div className="inline-block bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded mb-4">
            DEAL OF THE DAY
          </div>
          <h3 className="text-2xl lg:text-4xl font-bold mb-2">{game.title}</h3>
          <p className="text-gray-300 mb-6">{game.description}</p>

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

          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="sm:w-auto" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Link href={`/game/${game.id}`}>
              <Button variant="outline" className="sm:w-auto border-gray-700" size="lg">
                <Info className="mr-2 h-5 w-5" /> View Details
              </Button>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2">
          <Image
            src={game.image || "/placeholder.svg?height=600&width=800"}
            alt={game.title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
