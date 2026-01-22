import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/50">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">RV Tech Elevators</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading provider of safe, reliable, and modern elevator solutions for residential and commercial
              buildings.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/passenger-elevators" className="text-muted-foreground hover:text-primary">
                  Passenger Elevators
                </Link>
              </li>
              <li>
                <Link href="/residential-lifts" className="text-muted-foreground hover:text-primary">
                  Residential Lifts
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  AMC Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Modernization
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/safety-compliance" className="text-muted-foreground hover:text-primary">
                  Safety & Compliance
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">123 Industrial Area, Phase II, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@rvtechelevators.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} RV Tech Elevators. All rights reserved.
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">WhatsApp Us</span>
      </a>
    </footer>
  )
}
