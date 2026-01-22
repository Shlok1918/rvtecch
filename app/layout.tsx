import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://rvtechelevators.com"),
  title: {
    default: "RV Tech Elevators | Passenger & Residential Elevator Solutions",
    template: "%s | RV Tech Elevators",
  },
  description:
    "RV Tech Elevators provides passenger and residential elevator solutions for low-rise, mid-rise and high-rise buildings. We offer manual and automatic door elevators with fully customizable interiors, plus repair, modernization and AMC services.",
  keywords: [
    "elevators",
    "passenger elevators",
    "residential lifts",
    "elevator installation",
    "elevator repair",
    "elevator maintenance",
    "AMC services",
    "elevator modernization",
    "RV Tech Elevators",
  ],
  authors: [{ name: "RV Tech Elevators" }],
  creator: "RV Tech Elevators",
  publisher: "RV Tech Elevators",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rvtechelevators.com",
    title: "RV Tech Elevators | Passenger & Residential Elevator Solutions",
    description:
      "RV Tech Elevators provides passenger and residential elevator solutions for low-rise, mid-rise and high-rise buildings with safety, reliability and modern design.",
    siteName: "RV Tech Elevators",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RV Tech Elevators - Elevator Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RV Tech Elevators | Passenger & Residential Elevator Solutions",
    description:
      "RV Tech Elevators provides passenger and residential elevator solutions for low-rise, mid-rise and high-rise buildings.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "RV Tech Elevators",
              description:
                "Passenger and residential elevator solutions for low-rise, mid-rise and high-rise buildings",
              url: "https://rvtechelevators.com",
              telephone: "+1-XXX-XXX-XXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Your City",
                addressRegion: "Your State",
                postalCode: "Your ZIP",
                addressCountry: "Your Country",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "Your Latitude",
                longitude: "Your Longitude",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: [
                "https://facebook.com/rvtechelevators",
                "https://twitter.com/rvtechelevators",
                "https://linkedin.com/company/rvtechelevators",
              ],
              priceRange: "$$",
            }),
          }}
        />
      </body>
    </html>
  )
}
