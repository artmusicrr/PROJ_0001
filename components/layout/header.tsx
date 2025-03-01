"use client"

import { ShoppingCart, Menu, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useCart } from "@/providers/CartProvider"
import { CartModal } from "@/components/ui/cart-modal"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function Header() {
  const { setTheme } = useTheme()
  const { setIsOpen, items } = useCart()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Store</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/products" className="text-sm font-medium hover:text-primary">
              Products
            </Link>
            <Link href="/subscriptions" className="text-sm font-medium hover:text-primary">
              Subscriptions
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" size="icon" className="relative" onClick={() => setIsOpen(true)}>
            <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
            <span className="sr-only">Shopping cart</span>
          </Button>
          
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
      <CartModal />
    </header>
  )
}