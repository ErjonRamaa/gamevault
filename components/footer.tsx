import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">GameVault</h3>
            <p className="text-gray-400 mb-4">
              The best place to buy game keys at unbeatable prices. Save up to 70% on your favorite titles.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-400 hover:text-white">
                  All Games
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-gray-400 hover:text-white">
                  Deals
                </Link>
              </li>
              <li>
                <Link href="/new-releases" className="text-gray-400 hover:text-white">
                  New Releases
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-gray-400 hover:text-white">
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/payment-methods" className="text-gray-400 hover:text-white">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-400 hover:text-white">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and new game alerts.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border border-gray-700 rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-r px-4 py-2">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} GameVault. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
