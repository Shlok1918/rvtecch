import type { Metadata } from "next"
import { CheckCircle2, ShieldAlert, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Safety & Compliance | RV Tech Elevators",
  description:
    "Our commitment to safety standards, certifications, and international compliance in vertical transportation.",
}

export default function SafetyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20 text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Safety & Compliance</h1>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-2xl">
            Your safety is our absolute priority. We adhere to the most stringent global standards.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">Our Safety Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              At RV Tech Elevators, we believe that safety is not an option—it is a foundation. Every component we use
              and every installation we perform undergoes rigorous testing to ensure it meets and exceeds local and
              international safety regulations.
            </p>
            <div className="grid gap-4 mt-8">
              {[
                "ISO 9001:2015 Quality Management Systems",
                "Advanced Over-speed Protection Systems",
                "Automatic Rescue Devices (ARD) as Standard",
                "Full Infrared Door Sensors for Obstruction Detection",
                "Emergency Communication Systems (24/7 Monitoring)",
                "Fire-Rated Doors and Materials",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-safety-orange" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="p-8 bg-muted rounded-2xl border border-border">
              <Award className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Certifications</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We are proud to be recognized by leading international bodies for our quality and safety management
                systems.
              </p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex justify-between border-b pb-2">
                  <span>ISO 9001:2015</span> <span className="text-primary">Certified</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>CE Marking</span> <span className="text-primary">Compliant</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>EN 81-20/50</span> <span className="text-primary">Compliant</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-safety-orange/10 rounded-2xl border border-safety-orange/20">
              <ShieldAlert className="h-10 w-10 text-safety-orange mb-4" />
              <h3 className="text-xl font-bold mb-2">Regular Audits</h3>
              <p className="text-sm text-muted-foreground">
                Our safety protocols include monthly site inspections and quarterly internal audits for all installed
                units under AMC.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
