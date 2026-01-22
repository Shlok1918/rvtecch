import type { Metadata } from "next"
import { Users, Zap, Maximize, Wind } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Passenger Elevators | RV Tech Elevators",
  description:
    "Explore our high-speed, reliable passenger elevator solutions for commercial buildings, high-rises, and hospitals.",
}

const features = [
  { icon: Zap, title: "High Speed", text: "Up to 2.5 m/s for minimal waiting times." },
  { icon: Users, title: "High Capacity", text: "From 6 to 24 passengers (408kg to 1600kg)." },
  { icon: Maximize, title: "Space Efficient", text: "Machine room-less (MRL) designs available." },
  { icon: Wind, title: "Smooth Ride", text: "V3F drive technology for jerk-free travel." },
]

export default function PassengerElevatorsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20 text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Passenger Elevators</h1>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-2xl">
            Reliable, safe, and sophisticated vertical mobility for commercial and high-rise buildings.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/passenger-elevator-main.jpg"
                alt="Passenger Elevator Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Superior Technology for Modern Buildings</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our passenger elevators are engineered to handle high-traffic environments while providing a premium
                experience for users. With advanced micro-processor controls and energy-efficient gearless motors, we
                deliver performance you can trust.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {features.map((f, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <f.icon className="h-5 w-5" />
                      <h4 className="font-bold">{f.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{f.text}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-safety-orange hover:bg-safety-orange/90 text-white" asChild>
                <Link href="/quote">Request Technical Specs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Available Configurations</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Standard Series",
                desc: "Cost-effective and reliable for mid-rise residential apartments.",
                features: ["SS Finish", "Basic Rescue Device", "LED Lighting"],
              },
              {
                title: "Premium Glass",
                desc: "Stunning aesthetic for hotels and luxury shopping centers.",
                features: ["Glass Walls", "Designer Ceiling", "Touch Buttons"],
              },
              {
                title: "MRL High-Speed",
                desc: "Optimized for skyscrapers where space and speed are critical.",
                features: ["No Machine Room", "High-Efficiency", "Quiet Operation"],
              },
            ].map((config, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl border shadow-sm flex flex-col h-full">
                <h3 className="text-xl font-bold mb-4">{config.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{config.desc}</p>
                <ul className="space-y-2 text-sm mt-auto">
                  {config.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-safety-orange" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
