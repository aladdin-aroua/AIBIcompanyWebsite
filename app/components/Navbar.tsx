'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="bg-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            Logo
          </Link>
          <div className="flex gap-4">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-indigo-600">
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="text-white hover:bg-indigo-600">
                About
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 