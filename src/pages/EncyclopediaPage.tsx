import { useState } from "react"
import { Search, ChevronRight, Flame, Leaf } from "lucide-react"
import { plants } from "../data/plants"
import PlantDetail from "../components/PlantDetail"
import type { Plant } from "../data/plants"

const categories = [
  { id: "\u5168\u90e8", label: "\u5168\u90e8", icon: "\U0001f33f" },
  { id: "\u4e54\u6728", label: "\u4e54\u6728", icon: "\U0001f333" },
  { id: "\u704c\u6728", label: "\u704c\u6728", icon: "\U0001f33a" },
  { id: "\u8349\u672c", label: "\u8349\u672c", icon: "\U0001f331" },
  { id: "\u6c34\u751f", label: "\u6c34\u751f", icon: "\U0001f4a7" },
  { id: "\u85e4\u672c", label: "\u85e4\u672c", icon: "\U0001f33f" },
]

const featuredPlant = plants.find((p) => p.id === "yinxing")!

function EncyclopediaPage() {
  const [activeCategory, setActiveCategory] = useState("\u5168\u90e8")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null)

  const filteredPlants = plants.filter((p) => {
    const matchesCategory = activeCategory === "\u5168\u90e8" || p.type.includes(activeCategory) || p.tags.includes(activeCategory)
    const matchesSearch = !searchQuery || p.name.includes(searchQuery) || p.family.includes(searchQuery)
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pb-2">
      <header className="flex items-center gap-3 px-5 pt-5 pb-3">
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">\u690d\u7269\u767e\u79d1</h1>
        <div className="flex-1" />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-placeholder" />
          <input
            type="text"
            placeholder="\u641c\u7d22\u690d\u7269..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white border border-card-bg rounded-full pl-9 pr-4 py-2 text-sm text-text-primary placeholder:text-text-placeholder outline-none focus:border-primary transition-colors w-[160px]"
          />
        </div>
      </header>

      <div className="px-5 pb-4 overflow-x-auto scrollbar-none">
        <div className="flex gap-2 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white text-text-secondary border border-card-bg hover:bg-primary-light"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {activeCategory === "\u5168\u90e8" && !searchQuery && (
        <div className="px-5 pb-4">
          <div
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-50 border border-amber-200/60 shadow-sm cursor-pointer"
            onClick={() => setSelectedPlant(featuredPlant)}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/40 rounded-bl-full" />
            <div className="relative p-5">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">\u4eca\u65e5\u63a8\u8350</span>
              </div>
              <h2 className="text-xl font-bold text-text-primary mb-1">{featuredPlant.name}</h2>
              <p className="text-sm text-amber-700 leading-relaxed max-w-[240px]">\u68ee\u6797\u91cc\u7684\u91d1\u8272\u6d3b\u5316\u77f3 \u2014\u2014 \u8de8\u8d8a\u4ebf\u5e74\u7684\u751f\u547d\u5947\u8ff9</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[10px] text-text-secondary bg-white/70 px-2 py-0.5 rounded-full">{featuredPlant.family}</span>
                <span className="text-[10px] text-text-secondary bg-white/70 px-2 py-0.5 rounded-full">{featuredPlant.type}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="px-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-text-primary">
            {activeCategory === "\u5168\u90e8" ? "\u5168\u90e8\u690d\u7269" : activeCategory} \u00b7 {filteredPlants.length} \u79cd
          </h3>
        </div>

        {filteredPlants.length > 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-card-bg divide-y divide-card-bg">
            {filteredPlants.map((plant) => (
              <div
                key={plant.id}
                onClick={() => setSelectedPlant(plant)}
                className="flex items-center gap-3 px-4 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl ${plant.iconBg} flex items-center justify-center shrink-0 text-lg`}>
                  <Leaf className={`w-5 h-5 ${plant.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-text-primary">{plant.name}</p>
                  <p className="text-[11px] text-text-secondary">{plant.family} \u00b7 {plant.type}</p>
                </div>
                <div className="flex items-center gap-1">
                  {plant.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <ChevronRight className="w-4 h-4 text-text-placeholder" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <div className="text-4xl mb-3">\U0001f50d</div>
            <p className="text-sm text-text-secondary">\u6682\u65e0\u76f8\u5173\u690d\u7269</p>
            <p className="text-xs text-text-placeholder mt-1">\u5c1d\u8bd5\u66f4\u6362\u5206\u7c7b\u6216\u641c\u7d22\u5173\u952e\u8bcd</p>
          </div>
        )}
      </div>

      {selectedPlant && (
        <PlantDetail plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
      )}
    </div>
  )
}

export default EncyclopediaPage
