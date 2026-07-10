import { Navigation, Flower2, Leaf } from "lucide-react"
import { plants } from "../data/plants"
import type { Plant } from "../data/plants"

const neighborIds = ["wutong", "yueji", "bohe"]
const neighbors = neighborIds.map((id) => plants.find((p) => p.id === id)!)

const iconConfig: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string; bg: string }> = {
  wutong: { icon: Navigation, color: "text-primary", bg: "bg-[#e8f5e9]" },
  yueji: { icon: Flower2, color: "text-pink-500", bg: "bg-[#fce4ec]" },
  bohe: { icon: Leaf, color: "text-teal-600", bg: "bg-[#e0f2f1]" },
}
const distances = { wutong: "50m", yueji: "120m", bohe: "200m" }

interface NearbyPlantsProps {
  onPlantClick: (plant: Plant) => void
}

function NearbyPlants({ onPlantClick }: NearbyPlantsProps) {
  return (
    <div className="bg-white rounded-2xl divide-y divide-card-bg shadow-sm border border-card-bg">
      {neighbors.map((plant) => {
        const config = iconConfig[plant.id]
        if (!config) return null
        const Icon = config.icon
        return (
          <div
            key={plant.id}
            onClick={() => onPlantClick(plant)}
            className="flex items-center gap-3 px-4 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center shrink-0`}>
              <Icon className={`w-5 h-5 ${config.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-text-primary">{plant.name}</p>
              <p className="text-[11px] text-text-secondary">{plant.family} · {plant.type}</p>
            </div>
            <span className="text-[11px] text-text-placeholder">距您 {distances[plant.id as keyof typeof distances]}</span>
          </div>
        )
      })}
    </div>
  )
}

export default NearbyPlants
