import { useState, useMemo } from "react"
import { Bell, Camera, X } from "lucide-react"
import heroBg from "../assets/hero-bg.png"
import gardenia from "../assets/gardenia.png"
import NearbyPlants from "../components/NearbyPlants"
import PlantDetail from "../components/PlantDetail"
import { plants, searchPlants } from "../data/plants"
import type { Plant } from "../data/plants"

function SearchBar({ value, onChange, onClear }: { value: string; onChange: (v: string) => void; onClear: () => void }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm border border-card-bg">
      <svg className="w-5 h-5 text-text-placeholder shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
      <input
        type="text"
        placeholder="搜索植物名称..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent outline-none text-sm text-text-primary placeholder:text-text-placeholder font-medium"
      />
      {value && (
        <button onClick={onClear} className="shrink-0">
          <X className="w-4 h-4 text-text-placeholder" />
        </button>
      )}
    </div>
  )
}

function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null)

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null
    return searchPlants(searchQuery)
  }, [searchQuery])

  const gardeniaPlant = plants.find((p) => p.id === "zhizihua")

  return (
    <div className="pb-2">
      {/* Header */}
      <header className="flex items-center justify-between px-5 pt-5 pb-3">
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">🌿 绿途</h1>
        <button className="relative p-2 rounded-full hover:bg-primary-light/50 transition-colors">
          <Bell className="w-6 h-6 text-text-primary" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </header>

      {/* Search Bar */}
      <div className="px-5 py-2">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery("")}
        />
      </div>

      {/* Search Results */}
      {searchResults !== null && (
        <div className="px-5 pb-3">
          {searchResults.length > 0 ? (
            <div className="bg-white rounded-2xl divide-y divide-card-bg shadow-sm border border-card-bg">
              {searchResults.map((plant) => (
                <div
                  key={plant.id}
                  onClick={() => setSelectedPlant(plant)}
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl ${plant.iconBg} flex items-center justify-center shrink-0`}>
                    <span className="text-lg">🌿</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-text-primary">{plant.name}</p>
                    <p className="text-[11px] text-text-secondary">{plant.family} · {plant.type}</p>
                  </div>
                  <span className="text-[11px] text-text-placeholder">{plant.tags[0]}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-text-placeholder">未找到相关植物</p>
            </div>
          )}
        </div>
      )}

      {!searchQuery.trim() && (
        <>
          {/* Hero Card */}
          <div className="px-5 pt-3 pb-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[340/200]">
              <img src={heroBg} alt="植物识别" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h2 className="text-white text-xl font-bold leading-tight mb-1">遇见，并了解它们</h2>
                <p className="text-white/85 text-xs font-medium leading-relaxed max-w-[220px]">
                  AI 瞬时识别超过 10,000 种植物
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="px-5 py-3">
            <button className="w-full bg-primary text-white font-bold text-base py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:bg-[#015a13] active:scale-[0.98] transition-all">
              <Camera className="w-5 h-5" />
              拍照识花
            </button>
          </div>

          {/* Daily Plant Recommendation */}
          <div className="px-5 pt-1 pb-2">
            <h3 className="text-base font-bold text-text-primary mb-3">📌 每日植物推荐</h3>
            <div
              className="bg-white rounded-2xl p-4 shadow-sm border border-card-bg cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => gardeniaPlant && setSelectedPlant(gardeniaPlant)}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-card-bg">
                  <img src={gardenia} alt="栀子花" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-bold text-text-primary">栀子花</h4>
                    <span className="text-[10px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full whitespace-nowrap">
                      识别 1,283 次
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                    茜草科栀子属植物，花芳香，通常为白色，可作药用，常绿灌木，喜温暖湿润气候。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Common Plants */}
          <div className="px-5 pt-1">
            <h3 className="text-base font-bold text-text-primary mb-3">📍 附近常见植物</h3>
            <NearbyPlants onPlantClick={(plant) => setSelectedPlant(plant)} />
          </div>
        </>
      )}

      {/* Plant Detail Overlay */}
      {selectedPlant && (
        <PlantDetail plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
      )}
    </div>
  )
}

export default ExplorePage
