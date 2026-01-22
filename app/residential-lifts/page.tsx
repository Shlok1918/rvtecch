import type { Metadata } from "next"
import { Home, Ruler, VolumeX, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Residential Lifts | RV Tech Elevators",
  description: "Bespoke home lifts and villa elevators designed for comfort, luxury, and space efficiency.",
}

export default function ResidentialLiftsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20 text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Residential Lifts</h1>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-2xl">
            Luxury home lifts designed to fit perfectly into your private residence with minimal civil work.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Your Home, Upgraded</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our residential lifts are the perfect blend of luxury and functionality. Whether you want to improve
                accessibility or add a premium feature to your home, our compact designs require zero pit or overhead
                space in many configurations.
              </p>
              <div className="grid gap-4">
                {[
                  { icon: Ruler, title: "Compact Footprint", text: "Requires as little as 1x1 meter space." },
                  { icon: VolumeX, title: "Silent Operation", text: "Specially damped motors for home environments." },
                  { icon: Home, title: "No Pit Required", text: "Pit-less designs for existing homes." },
                  { icon: Sparkles, title: "Designer Interiors", text: "Matches your home's unique decor." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-muted/50">
                    <item.icon className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="bg-safety-orange hover:bg-safety-orange/90 text-white" asChild>
                <Link href="/quote">Get Home Survey</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/residential-lift-villa.jpg" alt="Home Lift in Villa" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
