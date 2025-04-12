"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Search, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LanguageSelector from "@/components/language-selector"
import FeaturedCarousel from "@/components/featured-carousel"
import CategoryCard from "@/components/category-card"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Toggle login state for demo purposes
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-600">EduLingual</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/explore" className="text-gray-600 hover:text-emerald-600">
              Explore
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-emerald-600">
              Categories
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600">
              About Us
            </Link>
            <LanguageSelector />
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant={isLoggedIn ? "outline" : "default"}
              className={isLoggedIn ? "bg-white text-emerald-600 border-emerald-600" : "bg-emerald-600"}
              onClick={toggleLogin}
            >
              {isLoggedIn ? "Log Out" : "Log In"}
            </Button>
            {!isLoggedIn && (
              <Button variant="outline" className="hidden md:block border-emerald-600 text-emerald-600">
                Sign Up
              </Button>
            )}
            {isLoggedIn && (
              <Link href="/dashboard">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold">
                  US
                </div>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn. Innovate. Grow — in your own language.</h1>
            <p className="text-xl mb-8 text-emerald-50">
              Access quality educational content in your preferred language and take your learning journey to the next
              level.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-600/20">
                Upload Content
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-600/20">
                Join the Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-md relative -mt-6 rounded-t-3xl">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for tutorials, courses, topics..."
                className="pl-10 py-6 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
              />
              <Button className="absolute right-1 top-1 bg-emerald-600">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Content</h2>
          <FeaturedCarousel />
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Tech Tutorials"
              description="Learn programming, web development, AI, and more"
              icon="Code"
              color="bg-blue-500"
            />
            <CategoryCard
              title="Logical Reasoning"
              description="Enhance your problem-solving and critical thinking skills"
              icon="Brain"
              color="bg-purple-500"
            />
            <CategoryCard
              title="Innovations"
              description="Discover the latest technological advancements and projects"
              icon="Lightbulb"
              color="bg-yellow-500"
            />
            <CategoryCard
              title="Career Prep"
              description="Prepare for interviews, build your resume, and advance your career"
              icon="Briefcase"
              color="bg-emerald-500"
            />
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-emerald-600 text-emerald-600">
              View All Categories <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="h-14 w-14 rounded-full bg-emerald-600 shadow-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-300">
                EduLingual is dedicated to providing quality educational content in multiple languages, making learning
                accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-300 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Language</h4>
                <select className="bg-gray-700 text-white rounded px-3 py-1 w-full">
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="ta">Tamil</option>
                  <option value="te">Telugu</option>
                  <option value="mr">Marathi</option>
                  <option value="gu">Gujarati</option>
                  <option value="bn">Bengali</option>
                  <option value="kn">Kannada</option>
                  <option value="ml">Malayalam</option>
                  <option value="ur">Urdu</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 EduLingual. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
