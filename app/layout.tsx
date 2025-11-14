import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Harsh Chanchad - Full-Stack Developer",
  description: "Portfolio of Harsh Chanchad, Full-Stack MERN Developer | SDE Intern at devx commerce. Specialized in React, Next.js, Node.js, and MongoDB.",
  keywords: ["Harsh Chanchad", "Full-Stack Developer", "MERN Stack", "React", "Next.js", "Node.js", "MongoDB", "Web Developer", "Software Engineer"],
  authors: [{ name: "Harsh Chanchad" }],
  creator: "Harsh Chanchad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshchanchad.com",
    title: "Harsh Chanchad - Full-Stack Developer",
    description: "Portfolio of Harsh Chanchad, Full-Stack MERN Developer | SDE Intern at devx commerce",
    siteName: "Harsh Chanchad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Chanchad - Full-Stack Developer",
    description: "Full-Stack MERN Developer | SDE Intern at devx commerce",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
