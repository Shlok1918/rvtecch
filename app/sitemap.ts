import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rvtechelevators.com"
  const routes = [
    "",
    "/about",
    "/passenger-elevators",
    "/residential-lifts",
    "/services",
    "/safety",
    "/gallery",
    "/contact",
    "/get-quote",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
