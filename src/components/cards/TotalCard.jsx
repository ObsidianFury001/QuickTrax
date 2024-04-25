import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function TotalCard({
    title = "",
    Icon = null,
    value = 0.00,
    text = "",
    iconClasses = "",
  }) {
  return (
    <Card className="w-full shadow-lg dark:hover:bg-blue-950 hover:backdrop:blur-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium whitespace-nowrap">{title}</CardTitle>
        {Icon}
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{text}</p> 
      </CardContent>
    </Card>
  )
}
