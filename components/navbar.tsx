"use client"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tighter text-primary">RV TECH ELEVATORS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link href="/about" className="hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/passenger-elevators" className="hover:text-primary transition-colors">
            Passenger
          </Link>
          <Link href="/residential-lifts" className="hover:text-primary transition-colors">
            Residential
          </Link>
          <Link href="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/safety-compliance" className="hover:text-primary transition-colors">
            Safety
          </Link>
          <Link href="/gallery" className="hover:text-primary transition-colors">
            Gallery
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex gap-2 bg-transparent" asChild>
            <a href="tel:+1234567890">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button size="sm" className="bg-safety-orange hover:bg-safety-orange/90 text-white" asChild>
            <Link href="/quote">Get Quote</Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/about">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/passenger-elevators">Passenger Elevators</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/residential-lifts">Residential Lifts</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services">Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/safety-compliance">Safety</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/gallery">Gallery</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
