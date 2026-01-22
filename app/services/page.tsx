import type { Metadata } from "next"
import { Wrench, Settings, Zap, ShieldCheck, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Elevator Services | RV Tech Elevators",
  description:
    "Professional elevator installation, repair, AMC maintenance, and modernization services for all lift brands.",
}

const services = [
  {
    title: "Annual Maintenance (AMC)",
    icon: Settings,
    desc: "Proactive monthly checkups to prevent breakdowns and ensure peak performance.",
    points: ["24/7 Breakdown Support", "Original Spare Parts", "Safety Audits"],
  },
  {
    title: "Modernization",
    icon: Zap,
    desc: "Update your aging elevator with current safety technology and modern aesthetics.",
    points: ["Controller Upgrades", "Cabin Refurbishing", "Jerk-free Drives"],
  },
  {
    title: "Repair Services",
    icon: Wrench,
    desc: "Expert troubleshooting and repair for all major brands of elevators and home lifts.",
    points: ["Qualified Technicians", "Quick Response", "Standardized Pricing"],
  },
  {
    title: "Installation",
    icon: CheckCircle,
    desc: "End-to-end installation service including civil consultation and testing.",
    points: ["Project Management", "Handover Testing", "Regulatory Compliance"],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20 text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-2xl">
            Complete lifecycle support for your vertical transportation systems, from installation to lifelong
            maintenance.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <div key={i} className="p-8 rounded-2xl border bg-background hover:shadow-lg transition-all group">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <ShieldCheck className="h-6 w-6 text-safety-orange opacity-50" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                <div className="grid gap-2 mb-8">
                  {service.points.map((point, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm font-medium">
                      <Clock className="h-4 w-4 text-safety-orange" />
                      {point}
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
