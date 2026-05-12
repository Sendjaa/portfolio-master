import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from "next/font/local"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playwrite = localFont({
  src: './fonts/PlaywriteIE-Regular.ttf',
  variable: '--font-playwrite',
  display: 'swap',
})
const _telma = localFont({
  src: './fonts/FontshareKit-2604000363/Telma-Black.ttf',
  variable: '--font-telma',
  display: 'swap',  weight: '900',
})

export const metadata: Metadata = {
  title: "SoftEngineer™ | Portfolio & Digital Solutions",
  description: "Jasa pembuatan website profesional dan solusi digital modern.",
  verification: {
    google: "4JUZL4x2RsH18J8sQiL2p9aCk9rrUEuIkEsQnTyzDc8",
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_playwrite.variable} ${_telma.variable}`} >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}