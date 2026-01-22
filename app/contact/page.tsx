import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/forms/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | RV Tech Elevators",
  description: "Get in touch with RV Tech Elevators for installation, repair, and maintenance services.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary py-20 text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-balance">Contact Our Support Team</h1>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-2xl text-pretty">
            We're here to help you with all your vertical transportation needs, 24/7.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have a question about our services or need technical support? Fill out the form, and our team will get
                  back to you within 24 hours.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col p-6 rounded-2xl bg-muted/50 border">
                  <Phone className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">+91 98765 01234</p>
                </div>
                <div className="flex flex-col p-6 rounded-2xl bg-muted/50 border">
                  <Mail className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-sm text-muted-foreground">info@rvtechelevators.com</p>
                  <p className="text-sm text-muted-foreground">support@rvtechelevators.com</p>
                </div>
                <div className="flex flex-col p-6 rounded-2xl bg-muted/50 border">
                  <MapPin className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-bold mb-1">Visit Us</h3>
                  <p className="text-sm text-muted-foreground leading-snug">
                    123 Industrial Area, Phase II, New Delhi, India 110020
                  </p>
                </div>
                <div className="flex flex-col p-6 rounded-2xl bg-muted/50 border">
                  <Clock className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-bold mb-1">Work Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon - Fri: 9am - 6pm</p>
                  <p className="text-sm text-muted-foreground">24/7 Emergency Support</p>
                </div>
              </div>
            </div>

            <div className="bg-background border rounded-3xl p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="w-full h-[400px] bg-muted relative overflow-hidden grayscale opacity-80 hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <MapPin className="h-10 w-10 mx-auto mb-2 opacity-20" />
            <p className="font-medium">Google Maps Integration</p>
          </div>
        </div>
      </section>
    </div>
  )
}
