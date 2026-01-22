import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Home, Settings, Wrench, ShieldCheck, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Passenger Elevators",
    description: "High-speed and reliable solutions for commercial and residential high-rises.",
    icon: Users,
    href: "/passenger-elevators",
  },
  {
    title: "Residential Lifts",
    description: "Elegant and compact lifts designed specifically for private homes and villas.",
    icon: Home,
    href: "/residential-lifts",
  },
  {
    title: "AMC Services",
    description: "Comprehensive Annual Maintenance Contracts to ensure 24/7 elevator uptime.",
    icon: Settings,
    href: "/services",
  },
  {
    title: "Modernization",
    description: "Upgrade your old elevator with the latest safety features and aesthetics.",
    icon: Zap,
    href: "/services",
  },
  {
    title: "Repair & Support",
    description: "Quick response repair services for all brands of elevators and lifts.",
    icon: Wrench,
    href: "/services",
  },
  {
    title: "Safety Compliance",
    description: "Rigorous safety audits and certification according to international standards.",
    icon: ShieldCheck,
    href: "/safety-compliance",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Excellence in Services</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            From installation to 24/7 maintenance, we cover every aspect of vertical transportation.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-all group overflow-hidden">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
