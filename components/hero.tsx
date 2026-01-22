import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/modern-elevator-interior-in-skyscraper.jpg" alt="Modern Elevator Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-safety-orange mr-2" />
            Innovative Vertical Mobility Solutions
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Elevating <span className="text-safety-orange">Safety</span> & Design in Every Floor
          </h1>
          <p className="text-lg text-gray-300 md:text-xl max-w-[600px] leading-relaxed">
            RV Tech Elevators provides premium passenger and residential elevator solutions with cutting-edge technology
            and customizable interiors for modern architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-safety-orange hover:bg-safety-orange/90 text-white px-8" asChild>
              <Link href="/quote">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black px-8 bg-transparent"
              asChild
            >
              <Link href="/passenger-elevators">View Our Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
