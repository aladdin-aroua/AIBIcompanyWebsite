'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from './LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-indigo-700">
      <nav className="bg-indigo-800/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-white font-bold text-xl">
              Logo
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-indigo-700/50">
                  {t('nav.home')}
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="text-white hover:bg-indigo-700/50">
                  {t('nav.about')}
                </Button>
              </Link>
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
                {t('nav.getStarted')}
              </Button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
} 