import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Trust Badges */}
      <section className="py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="font-bold text-xl md:text-2xl tracking-tighter">ISO 9001:2015</span>
            <span className="font-bold text-xl md:text-2xl tracking-tighter">SAFETY FIRST</span>
            <span className="font-bold text-xl md:text-2xl tracking-tighter">CE CERTIFIED</span>
            <span className="font-bold text-xl md:text-2xl tracking-tighter">PREMIUM QUALITY</span>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-3xl mx-auto">
            Ready to Upgrade Your Building's Vertical Experience?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Contact us today for a free site survey and consultation for your elevator requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-safety-orange hover:bg-safety-orange/90 text-white" asChild>
              <Link href="/quote">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black bg-transparent"
              asChild
            >
              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> Call +91 98765 43210
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
