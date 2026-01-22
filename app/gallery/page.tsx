import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Gallery | RV Tech Elevators",
  description: "Explore our portfolio of completed elevator installations for residential and commercial projects.",
}

const projects = [
  { title: "Skyline Residential Tower", category: "Passenger Elevator", img: "/gallery-1.jpg" },
  { title: "Luxury Villa - South Delhi", category: "Home Lift", img: "/gallery-2.jpg" },
  { title: "Corporate Hub IT Park", category: "Glass Elevator", img: "/gallery-3.jpg" },
  { title: "Metro Mall Shopping Center", category: "High-Traffic Lift", img: "/gallery-4.jpg" },
  { title: "Heritage Hotel Renovation", category: "Modernization", img: "/gallery-5.jpg" },
  { title: "Private Penthouse", category: "Custom Residential", img: "/gallery-6.jpg" },
]

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20 text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Projects</h1>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-2xl">
            A showcase of our engineering excellence and architectural integration across the country.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <img
                  src={project.img || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <p className="text-safety-orange text-xs font-bold uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
