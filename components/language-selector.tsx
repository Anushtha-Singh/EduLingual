"use client"

import { useState } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "mr", name: "Marathi" },
  { code: "gu", name: "Gujarati" },
  { code: "bn", name: "Bengali" },
  { code: "kn", name: "Kannada" },
  { code: "ml", name: "Malayalam" },
  { code: "ur", name: "Urdu" },
]

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600">
        <Globe className="h-4 w-4" />
        <span>{selectedLanguage.name}</span>
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className="flex items-center justify-between"
            onClick={() => setSelectedLanguage(language)}
          >
            <span>{language.name}</span>
            {selectedLanguage.code === language.code && <Check className="h-4 w-4 text-emerald-600" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
