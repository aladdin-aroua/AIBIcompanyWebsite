import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { LanguageProvider } from './context/LanguageContext'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FPAI - Empowering Business with AI and BI",
  description: "Transform your business with cutting-edge AI and BI solutions",
  "icons":{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

