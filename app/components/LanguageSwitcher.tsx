'use client'

import { useLanguage } from '../context/LanguageContext'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2 text-[#3b82f6] hover:text-blue-400 transition-colors duration-200">
      <button
        className={`font-semibold ${language === 'en' ? 'underline' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <span>|</span>
      <button
        className={`font-semibold ${language === 'fr' ? 'underline' : ''}`}
        onClick={() => setLanguage('fr')}
      >
        FR
      </button>
    </div>
  )
} 