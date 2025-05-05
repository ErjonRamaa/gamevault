"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Menu, Search, ShoppingCart, User, LogIn, UserPlus } from "lucide-react"
import { LoginForm } from "./login-form"
import { RegisterForm } from "./register-form"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const isMobile = useMobile()
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/95 backdrop-blur">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-900 text-white">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="/games" className="hover:text-purple-400 transition-colors">
                All Games
              </Link>
              <Link href="/deals" className="hover:text-purple-400 transition-colors">
                Deals
              </Link>
              <Link href="/new-releases" className="hover:text-purple-400 transition-colors">
                New Releases
              </Link>
              <Link href="/about" className="hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="/support" className="hover:text-purple-400 transition-colors">
                Support
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold text-white">
            Game<span className="text-purple-500">Vault</span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="/games" className="hover:text-purple-400 transition-colors">
            All Games
          </Link>
          <Link href="/deals" className="hover:text-purple-400 transition-colors">
            Deals
          </Link>
          <Link href="/new-releases" className="hover:text-purple-400 transition-colors">
            New Releases
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {!isMobile && (
            <form className="hidden md:flex relative mr-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search games..."
                className="w-[200px] lg:w-[300px] pl-8 bg-gray-800 border-gray-700 text-white"
              />
            </form>
          )}

          <Button variant="ghost" size="icon" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>

          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="hidden md:flex">
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-gray-900 text-white">
              <DialogHeader>
                <DialogTitle>Login to GameVault</DialogTitle>
                <DialogDescription>Enter your credentials to access your account</DialogDescription>
              </DialogHeader>
              <LoginForm onSuccess={() => setIsLoginOpen(false)} />
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => {
                    setIsLoginOpen(false)
                    setIsRegisterOpen(true)
                  }}
                  className="text-purple-400 hover:underline"
                >
                  Register
                </button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
            <DialogTrigger asChild>
              <Button className="hidden md:flex">
                <UserPlus className="mr-2 h-4 w-4" /> Register
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-gray-900 text-white">
              <DialogHeader>
                <DialogTitle>Create an Account</DialogTitle>
                <DialogDescription>Join GameVault to start saving on your favorite games</DialogDescription>
              </DialogHeader>
              <RegisterForm onSuccess={() => setIsRegisterOpen(false)} />
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setIsRegisterOpen(false)
                    setIsLoginOpen(true)
                  }}
                  className="text-purple-400 hover:underline"
                >
                  Login
                </button>
              </div>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-900 text-white border-gray-700">
              <DropdownMenuItem onClick={() => setIsLoginOpen(true)} className="cursor-pointer">
                <LogIn className="mr-2 h-4 w-4" /> Login
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsRegisterOpen(true)} className="cursor-pointer">
                <UserPlus className="mr-2 h-4 w-4" /> Register
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
