import type { Metadata } from "next"
import { Shield, Users, Lightbulb, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | RV Tech Elevators",
  description:
    "Learn about RV Tech Elevators, our mission, values, and our journey in providing premium elevator solutions.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Story</h1>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-2xl">
            Redefining vertical mobility with engineering excellence and a passion for safety.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed">
                RV Tech Elevators is a leading provider of innovative elevator solutions for commercial, residential,
                and industrial sectors. Since our inception, we have been dedicated to delivering high-performance
                vertical transportation systems that prioritize safety, reliability, and aesthetics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of experienced engineers and technicians works tirelessly to ensure that every installation
                meets the highest international standards. We believe that an elevator is more than just a utility; it
                is a vital part of a building's architecture and user experience.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img src="/about-us-team.jpg" alt="RV Tech Elevators Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Core Values</h2>
        </div>
        <div className="container px-4 md:px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Shield,
              title: "Safety First",
              text: "Zero-compromise approach to passenger safety in every system.",
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              text: "Continuously adopting the latest vertical mobility technologies.",
            },
            {
              icon: Users,
              title: "Customer Centric",
              text: "Tailored solutions built around the unique needs of our clients.",
            },
            {
              icon: TrendingUp,
              title: "Reliability",
              text: "Engineering systems that stand the test of time and heavy usage.",
            },
          ].map((value, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-background rounded-xl shadow-sm">
              <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
