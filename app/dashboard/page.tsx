"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  BarChart2,
  Clock,
  Award,
  BookMarked,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronRight,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import LanguageSelector from "@/components/language-selector"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-600">EduLingual</span>
          </div>

          <div className="hidden md:flex items-center space-x-6 flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input type="text" placeholder="Search..." className="pl-10 py-5 rounded-xl border-gray-200" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold">
                  US
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/profile" className="flex items-center">
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold text-lg">
                  US
                </div>
                <div>
                  <h2 className="font-semibold">User Student</h2>
                  <p className="text-sm text-gray-500">user@example.com</p>
                </div>
              </div>

              <nav className="space-y-1">
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-600"
                >
                  <BookOpen className="h-5 w-5" />
                  <span className="font-medium">My Learning</span>
                </Link>
                <Link
                  href="/progress"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  <BarChart2 className="h-5 w-5" />
                  <span>Progress</span>
                </Link>
                <Link
                  href="/bookmarks"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  <BookMarked className="h-5 w-5" />
                  <span>Bookmarks</span>
                </Link>
                <Link
                  href="/certificates"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  <Award className="h-5 w-5" />
                  <span>Certificates</span>
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="font-medium mb-3">Learning Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Total Learning Time</span>
                      <span className="text-sm text-gray-500">24h 35m</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Courses Completed</span>
                      <span className="text-sm text-gray-500">8/15</span>
                    </div>
                    <Progress value={53} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Weekly Goal</span>
                      <span className="text-sm text-gray-500">4/5 days</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h1 className="text-2xl font-bold mb-6">My Learning Dashboard</h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4 flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">In Progress</p>
                    <p className="text-xl font-semibold">7 Courses</p>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-4 flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-600">Completed</p>
                    <p className="text-xl font-semibold">8 Courses</p>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-600">Learning Time</p>
                    <p className="text-xl font-semibold">24h 35m</p>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="all" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-blue-100 rounded-lg flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Web Development"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">Introduction to Web Development</h3>
                        <p className="text-sm text-gray-500 mt-1">Learn the basics of HTML, CSS, and JavaScript</p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full mr-2">
                            Tech Tutorials
                          </span>
                          <span className="text-xs text-gray-500">15 lessons</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col items-end">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium">65% complete</span>
                        <Progress value={65} className="h-2 w-24" />
                      </div>
                      <Link href="/content/web-development">
                        <Button className="bg-emerald-600">Continue</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-purple-100 rounded-lg flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Logical Reasoning"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">Logical Reasoning for Competitive Exams</h3>
                        <p className="text-sm text-gray-500 mt-1">Master logical reasoning techniques</p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full mr-2">
                            Logical Reasoning
                          </span>
                          <span className="text-xs text-gray-500">12 lessons</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col items-end">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium">40% complete</span>
                        <Progress value={40} className="h-2 w-24" />
                      </div>
                      <Link href="/content/logical-reasoning">
                        <Button className="bg-emerald-600">Continue</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-yellow-100 rounded-lg flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Renewable Energy"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">Innovations in Renewable Energy</h3>
                        <p className="text-sm text-gray-500 mt-1">Explore the latest renewable energy technologies</p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full mr-2">
                            Innovations
                          </span>
                          <span className="text-xs text-gray-500">10 lessons</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col items-end">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium">25% complete</span>
                        <Progress value={25} className="h-2 w-24" />
                      </div>
                      <Link href="/content/renewable-energy">
                        <Button className="bg-emerald-600">Continue</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-emerald-100 rounded-lg flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Resume Building"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">Resume Building Workshop</h3>
                        <p className="text-sm text-gray-500 mt-1">Create an impressive resume that stands out</p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full mr-2">
                            Career Prep
                          </span>
                          <span className="text-xs text-gray-500">8 lessons</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col items-end">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium">100% complete</span>
                        <Progress value={100} className="h-2 w-24" />
                      </div>
                      <Link href="/content/resume-building">
                        <Button variant="outline" className="border-emerald-600 text-emerald-600">
                          Review
                        </Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="in-progress" className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-blue-100 rounded-lg flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Web Development"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">Introduction to Web Development</h3>
                        <p className="text-sm text-gray-500 mt-1">Learn the basics of HTML, CSS, and JavaScript</p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full mr-2">
                            Tech Tutorials
                          </span>
                          <span className="text-xs text-gray-500">15 lessons</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col items-end">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium">65% complete</span>
                        <Progress value={65} className="h-2 w-24" />
                      </div>
                      <Link href="/content/web-development">
                        <Button className="bg-emerald-600">Continue</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-purple-100 rounded-lg flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Logical Reasoning"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">Logical Reasoning for Competitive Exams</h3>
                        <p className="text-sm text-gray-500 mt-1">Master logical reasoning techniques</p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full mr-2">
                            Logical Reasoning
                          </span>
                          <span className="text-xs text-gray-500">12 lessons</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col items-end">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium">40% complete</span>
                        <Progress value={40} className="h-2 w-24" />
                      </div>
                      <Link href="/content/logical-reasoning">
                        <Button className="bg-emerald-600">Continue</Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="completed" className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-emerald-100 rounded-lg flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Resume Building"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">Resume Building Workshop</h3>
                        <p className="text-sm text-gray-500 mt-1">Create an impressive resume that stands out</p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full mr-2">
                            Career Prep
                          </span>
                          <span className="text-xs text-gray-500">8 lessons</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col items-end">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium">100% complete</span>
                        <Progress value={100} className="h-2 w-24" />
                      </div>
                      <div className="flex space-x-2">
                        <Link href="/content/resume-building">
                          <Button variant="outline" className="border-emerald-600 text-emerald-600">
                            Review
                          </Button>
                        </Link>
                        <Link href="/certificates/resume-building">
                          <Button variant="outline" className="border-emerald-600 text-emerald-600">
                            Certificate
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="bookmarked" className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-yellow-100 rounded-lg flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Renewable Energy"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">Innovations in Renewable Energy</h3>
                        <p className="text-sm text-gray-500 mt-1">Explore the latest renewable energy technologies</p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full mr-2">
                            Innovations
                          </span>
                          <span className="text-xs text-gray-500">10 lessons</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col items-end">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium">25% complete</span>
                        <Progress value={25} className="h-2 w-24" />
                      </div>
                      <Link href="/content/renewable-energy">
                        <Button className="bg-emerald-600">Continue</Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center">
                <Button variant="outline" className="border-emerald-600 text-emerald-600">
                  View All Courses <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Recommended For You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-16 h-16 bg-blue-100 rounded-md flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="Data Structures"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Data Structures and Algorithms</h3>
                      <p className="text-xs text-gray-500 mt-1">Master coding interviews</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                          Tech Tutorials
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-16 h-16 bg-purple-100 rounded-md flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="Critical Thinking"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Critical Thinking Skills</h3>
                      <p className="text-xs text-gray-500 mt-1">Enhance problem-solving abilities</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                          Logical Reasoning
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-16 h-16 bg-yellow-100 rounded-md flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="AI Innovations"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">AI Innovations in 2025</h3>
                      <p className="text-xs text-gray-500 mt-1">Latest AI advancements</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                          Innovations
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-16 h-16 bg-emerald-100 rounded-md flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="Interview Prep"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Technical Interview Prep</h3>
                      <p className="text-xs text-gray-500 mt-1">Ace your tech interviews</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                          Career Prep
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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
  )
}
