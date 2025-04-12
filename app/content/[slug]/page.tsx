"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Download,
  Volume2,
  Save,
  Trash2,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import LanguageSelector from "@/components/language-selector"

export default function ContentPage({ params }: { params: { slug: string } }) {
  const [notes, setNotes] = useState<string[]>([""])
  const [activeNoteIndex, setActiveNoteIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showShareOptions, setShowShareOptions] = useState(false)

  // Simulated content data
  const content = {
    title: "Introduction to Web Development",
    category: "Tech Tutorials",
    author: "Priya Sharma",
    date: "April 10, 2025",
    readTime: "15 min read",
    language: "English",
    content: `
      <h2>Getting Started with Web Development</h2>
      <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>
      
      <h3>The Three Core Technologies</h3>
      <p>Web development is primarily split into three core components:</p>
      <ul>
        <li><strong>HTML (HyperText Markup Language)</strong>: The standard markup language for documents designed to be displayed in a web browser.</li>
        <li><strong>CSS (Cascading Style Sheets)</strong>: A style sheet language used for describing the presentation of a document written in HTML.</li>
        <li><strong>JavaScript</strong>: A programming language that enables interactive web pages and is an essential part of web applications.</li>
      </ul>
      
      <h3>Front-End Development</h3>
      <p>Front-end web development, also known as client-side development, is the practice of producing HTML, CSS, and JavaScript for a website or web application so that a user can see and interact with them directly.</p>
      
      <h3>Back-End Development</h3>
      <p>Back-end development covers server-side web application logic and integration and activities, like writing APIs, creating libraries, and working with system components instead of the frontend code, which is designed to be seen by the user.</p>
    `,
  }

  const addNewNote = () => {
    setNotes([...notes, ""])
    setActiveNoteIndex(notes.length)
  }

  const updateNote = (value: string) => {
    const updatedNotes = [...notes]
    updatedNotes[activeNoteIndex] = value
    setNotes(updatedNotes)
  }

  const deleteNote = (index: number) => {
    if (notes.length === 1) {
      setNotes([""])
    } else {
      const updatedNotes = notes.filter((_, i) => i !== index)
      setNotes(updatedNotes)
      if (activeNoteIndex >= index && activeNoteIndex > 0) {
        setActiveNoteIndex(activeNoteIndex - 1)
      }
    }
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    // In a real implementation, this would control text-to-speech
  }

  const downloadTranscript = () => {
    // In a real implementation, this would download the content as a PDF or text file
    alert("Downloading transcript...")
  }

  const shareContent = (platform: string) => {
    // In a real implementation, this would share the content to the selected platform
    alert(`Sharing to ${platform}...`)
    setShowShareOptions(false)
  }

  // Simulate progress update
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget
    const scrollTop = element.scrollTop
    const scrollHeight = element.scrollHeight - element.clientHeight
    const newProgress = (scrollTop / scrollHeight) * 100
    setProgress(newProgress)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-emerald-600">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-semibold text-gray-800 truncate max-w-xs sm:max-w-md">{content.title}</h1>
          </div>

          <div className="flex items-center space-x-3">
            <LanguageSelector />
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Bookmark className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <Share2 className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => shareContent("WhatsApp")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  WhatsApp
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => shareContent("Telegram")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.073l3.9 1.205 2.306 6.54c.5 1.42 2.114 2.035 3.36.82l1.98-1.93 5.46 3.73c.9.617 2.1.14 2.55-.98l4.2-16.42a2.242 2.242 0 0 0-2.36-3.243z"></path>
                  </svg>
                  Telegram
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => shareContent("X")}>
                  <Twitter className="h-4 w-4 mr-2" />X (Twitter)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => shareContent("LinkedIn")}>
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => shareContent("Facebook")}>
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Progress value={progress} className="h-1" />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Content Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                  {content.category}
                </span>
                <span className="text-gray-500 text-sm">{content.readTime}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="flex items-center space-x-1" onClick={togglePlayPause}>
                  <Volume2 className="h-4 w-4" />
                  <span>{isPlaying ? "Pause" : "Listen"}</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1"
                  onClick={downloadTranscript}
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </Button>
              </div>
            </div>

            <div
              className="prose max-w-none"
              onScroll={handleScroll}
              dangerouslySetInnerHTML={{ __html: content.content }}
              style={{ maxHeight: "600px", overflowY: "auto" }}
            />

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold">
                    {content.author
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium">{content.author}</p>
                    <p className="text-sm text-gray-500">{content.date}</p>
                  </div>
                </div>
                <Button
                  variant="default"
                  className="bg-emerald-600"
                  onClick={() => document.getElementById("notes-tab")?.click()}
                >
                  Take Notes
                </Button>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Discussion</h2>
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-semibold">
                U
              </div>
              <div className="flex-1">
                <Textarea placeholder="Add to the discussion..." className="resize-none" />
                <div className="mt-2 flex justify-end">
                  <Button className="bg-emerald-600">Comment</Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold flex-shrink-0">
                  RS
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="font-medium">Rahul Singh</p>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-gray-700 mt-1">
                    This was really helpful! I've been trying to understand the difference between front-end and
                    back-end development for a while now.
                  </p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <button className="hover:text-emerald-600">Like</button>
                    <button className="hover:text-emerald-600">Reply</button>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold flex-shrink-0">
                  AK
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="font-medium">Ananya Kumar</p>
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                  <p className="text-gray-700 mt-1">
                    Could you recommend some resources to learn more about JavaScript frameworks?
                  </p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <button className="hover:text-emerald-600">Like</button>
                    <button className="hover:text-emerald-600">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Tabs defaultValue="notes" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="notes" id="notes-tab">
                Notes
              </TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
            </TabsList>

            <TabsContent value="notes" className="bg-white rounded-b-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">My Notes</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-emerald-600 border-emerald-600"
                  onClick={addNewNote}
                >
                  New Note
                </Button>
              </div>

              {notes.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {notes.map((note, index) => (
                    <Button
                      key={index}
                      variant={activeNoteIndex === index ? "default" : "outline"}
                      size="sm"
                      className={activeNoteIndex === index ? "bg-emerald-600" : ""}
                      onClick={() => setActiveNoteIndex(index)}
                    >
                      Note {index + 1}
                    </Button>
                  ))}
                </div>
              )}

              <div className="relative">
                <Textarea
                  value={notes[activeNoteIndex]}
                  onChange={(e) => updateNote(e.target.value)}
                  placeholder="Start taking notes..."
                  className="min-h-[200px] resize-none"
                />

                <div className="absolute bottom-2 right-2 flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500 hover:text-emerald-600"
                    title="Save Note"
                  >
                    <Save className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500 hover:text-red-600"
                    title="Delete Note"
                    onClick={() => deleteNote(activeNoteIndex)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" /> Export as PDF
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-1" /> Share Notes
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="progress" className="bg-white rounded-b-xl shadow-sm p-4">
              <h3 className="font-semibold mb-4">Your Learning Progress</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Tech Tutorials</span>
                    <span className="text-sm text-gray-500">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Logical Reasoning</span>
                    <span className="text-sm text-gray-500">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Innovations</span>
                    <span className="text-sm text-gray-500">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Career Prep</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="font-medium mb-3">Weekly Streak</h4>
                <div className="flex justify-between">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${index < 4 ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-400"}`}
                      >
                        {day}
                      </div>
                      <div
                        className={`mt-1 h-1 w-1 rounded-full ${index < 4 ? "bg-emerald-600" : "bg-gray-200"}`}
                      ></div>
                    </div>
                  ))}
                </div>
                <p className="text-center mt-4 text-sm text-gray-600">You're on a 4-day streak! 🔥</p>
              </div>

              <div className="mt-6">
                <Button className="w-full bg-emerald-600">View Detailed Progress</Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h3 className="font-semibold mb-4">Related Content</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 bg-gray-100 rounded-md flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="CSS Basics"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-sm">CSS Basics: Styling Your First Webpage</h4>
                  <p className="text-xs text-gray-500 mt-1">10 min read</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Tech Tutorials</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 bg-gray-100 rounded-md flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="JavaScript Fundamentals"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-sm">JavaScript Fundamentals: Variables and Functions</h4>
                  <p className="text-xs text-gray-500 mt-1">15 min read</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Tech Tutorials</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 bg-gray-100 rounded-md flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Responsive Design"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Responsive Web Design: Making Sites Work on All Devices</h4>
                  <p className="text-xs text-gray-500 mt-1">12 min read</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Tech Tutorials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chatbot */}
          <div className="fixed bottom-6 right-6 z-50">
            <Button className="h-14 w-14 rounded-full bg-emerald-600 shadow-lg flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
