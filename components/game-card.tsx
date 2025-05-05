import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Game } from "@/lib/games-data"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700 transition-all hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1">
      <Link href={`/game/${game.id}`}>
        <div className="relative">
          <Image
            src={game.image || "/placeholder.svg?height=300&width=200"}
            alt={game.title}
            width={200}
            height={300}
            className="w-full h-[180px] object-cover"
          />
          {game.discount > 0 && (
            <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
              -{game.discount}%
            </div>
          )}
          {game.isNewRelease && (
            <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">NEW</div>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/game/${game.id}`} className="hover:text-purple-400 transition-colors">
          <h3 className="font-medium line-clamp-2 h-12">{game.title}</h3>
        </Link>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold">${game.price.toFixed(2)}</span>
          {game.originalPrice > game.price && (
            <span className="text-sm text-gray-400 line-through">${game.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
