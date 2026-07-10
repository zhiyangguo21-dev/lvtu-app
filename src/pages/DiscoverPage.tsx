import { useState } from "react"
import { Flame, Sparkles, TrendingUp, Leaf } from "lucide-react"
import { plants } from "../data/plants"
import PlantDetail from "../components/PlantDetail"
import type { Plant } from "../data/plants"

const discoverPlantIds = ["yinghua", "yinxing", "xunyicao", "zhuzi"]
const iconMap: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string; bg: string }> = {
  yinghua: { icon: Flame, color: "text-orange-500", bg: "bg-orange-50" },
  yinxing: { icon: Sparkles, color: "text-amber-500", bg: "bg-amber-50" },
  xunyicao: { icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-50" },
  zhuzi: { icon: Leaf, color: "text-green-500", bg: "bg-green-50" },
}
const counts = ["识别 8,921 次", "识别 6,344 次", "识别 5,127 次", "识别 3,892 次"]

function DiscoverPage() {
  const [selectedTag, setSelectedTag] = useState("全部")
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null)

  const discoverPlants = discoverPlantIds.map((id, i) => {
    const plant = plants.find((p) => p.id === id)!
    return { plant, icon: iconMap[id], count: counts[i] }
  })

  return (
    <div className="pb-2">
      <header className="flex items-center justify-between px-5 pt-5 pb-3">
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">发现</h1>
      </header>

      <p className="px-5 pb-4 text-sm text-text-secondary">探索热门植物 · 发现自然之美</p>

      {/* Hot tags */}
      <div className="px-5 pb-4 flex gap-2 flex-wrap">
        {["全部", "花卉", "乔木", "草本", "蕨类", "多肉"].map((tag, i) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
              selectedTag === tag
                ? "bg-primary text-white"
                : "bg-white text-text-secondary border border-card-bg hover:bg-primary-light"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Discover List */}
      <div className="px-5 flex flex-col gap-3">
        {discoverPlants.map(({ plant, icon, count }) => {
          const Icon = icon.icon
          return (
            <div
              key={plant.id}
              onClick={() => setSelectedPlant(plant)}
              className="bg-white rounded-2xl p-4 shadow-sm border border-card-bg cursor-pointer hover:shadow-md transition-shadow active:scale-[0.98]"
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-xl ${icon.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 ${icon.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-text-primary">{plant.name}</h4>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${plant.iconBg} ${plant.iconColor}`}>
                      {plant.tags[0]}
                    </span>
                  </div>
                  <p className="text-[11px] text-text-secondary mb-1">{plant.family}</p>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">{plant.desc}</p>
                  <p className="text-[10px] text-text-placeholder mt-2">{count}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {selectedPlant && <PlantDetail plant={selectedPlant} onClose={() => setSelectedPlant(null)} />}
    </div>
  )
}

export default DiscoverPage
