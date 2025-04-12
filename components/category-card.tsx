import { Code, Brain, Lightbulb, Briefcase, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface CategoryCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export default function CategoryCard({ title, description, icon, color }: CategoryCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-6 w-6 text-white" />
      case "Brain":
        return <Brain className="h-6 w-6 text-white" />
      case "Lightbulb":
        return <Lightbulb className="h-6 w-6 text-white" />
      case "Briefcase":
        return <Briefcase className="h-6 w-6 text-white" />
      default:
        return <Code className="h-6 w-6 text-white" />
    }
  }

  return (
    <Link href={`/categories/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className={`${color} p-3 rounded-lg`}>{getIcon()}</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm mb-4">{description}</p>
              <div className="flex items-center text-emerald-600 text-sm font-medium">
                Explore <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
