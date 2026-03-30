import type React from "react"
import type { Metadata } from "next" // Tambahkan import ini
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globalsMultimedia.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoftEngineer™ | Portfolio & Digital Solutions",
  description: "Jasa pembuatan website profesional dan solusi digital modern.",
  verification: {
    google: "4JUZL4x2RsH18J8sQiL2p9aCk9rrUEuIkEsQnTyzDc8",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}