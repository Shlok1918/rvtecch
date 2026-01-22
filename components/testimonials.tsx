import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Manager, SkyLine Builders",
    content:
      "RV Tech Elevators delivered top-notch passenger lifts for our 20-story residential project. Their installation team was professional and the finishing is excellent.",
    rating: 5,
  },
  {
    name: "Sarah D'Souza",
    role: "Homeowner",
    content:
      "The residential lift they installed in our villa is silent, smooth, and fits perfectly with our interior decor. Highly recommended for premium homes.",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    role: "Facility Manager, Corporate Plaza",
    content:
      "Their AMC service is exceptional. We've seen a significant reduction in downtime since switching to RV Tech for our building's elevator maintenance.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl md:text-5xl">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4 text-safety-orange">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
