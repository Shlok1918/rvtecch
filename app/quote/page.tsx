import type { Metadata } from "next"
import { QuoteForm } from "@/components/forms/quote-form"
import { Calculator, CheckCircle2, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Get a Quote | RV Tech Elevators",
  description: "Request a free estimate for your elevator installation or modernization project.",
}

export default function QuotePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary py-20 text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-balance">Get a Personalized Quote</h1>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-2xl text-pretty">
            Provide your building details and our engineering team will prepare a technical proposal for your vertical
            mobility requirements.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 bg-background border rounded-3xl p-8 shadow-sm">
              <div className="mb-8 border-b pb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-safety-orange" />
                  Requirement Calculator
                </h2>
                <p className="text-muted-foreground mt-2">
                  Fill out the form below to receive a free, no-obligation estimate.
                </p>
              </div>
              <QuoteForm />
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                <h3 className="font-bold text-lg">Why Request a Quote?</h3>
                <ul className="space-y-3">
                  {[
                    "Free On-site Technical Survey",
                    "Customized Cabin Design Previews",
                    "Detailed Cost Analysis & Timeline",
                    "Energy Efficiency Projections",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-safety-orange shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-primary text-white space-y-4">
                <Shield className="h-8 w-8 text-safety-orange" />
                <h3 className="font-bold text-lg">Premium Support</h3>
                <p className="text-sm text-primary-foreground/70">
                  Our quotes include 1 year of free AMC and 24/7 technical monitoring as part of our safety-first
                  promise.
                </p>
                <div className="pt-2">
                  <p className="text-xs opacity-60">Estimated turnaround time:</p>
                  <p className="font-bold text-safety-orange">24 Working Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
