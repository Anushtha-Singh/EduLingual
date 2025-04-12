"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const featuredContent = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    category: "Tech Tutorials",
    language: "English",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Logical Reasoning for Competitive Exams",
    description: "Master logical reasoning techniques for competitive examinations.",
    category: "Logical Reasoning",
    language: "Hindi",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Innovations in Renewable Energy",
    description: "Explore the latest innovations in renewable energy technologies.",
    category: "Innovations",
    language: "Tamil",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Resume Building Workshop",
    description: "Learn how to create an impressive resume that stands out to employers.",
    category: "Career Prep",
    language: "Telugu",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Data Structures and Algorithms",
    description: "Master the fundamentals of data structures and algorithms for coding interviews.",
    category: "Tech Tutorials",
    language: "Bengali",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleItems >= featuredContent.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, featuredContent.length - visibleItems) : prevIndex - 1,
    )
  }

  const visibleContent = featuredContent.slice(currentIndex, currentIndex + visibleItems)

  return (
    <div className="relative">
      <div className="flex space-x-4 overflow-hidden">
        {visibleContent.map((item) => (
          <Card
            key={item.id}
            className="flex-shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] transition-all duration-300 hover:shadow-lg"
          >
            <CardContent className="p-0">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{item.language}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Learning</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white border border-gray-200 rounded-full h-10 w-10 shadow-md"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white border border-gray-200 rounded-full h-10 w-10 shadow-md"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
