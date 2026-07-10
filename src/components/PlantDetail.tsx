import { X, MapPin, Leaf, Beaker, Globe } from "lucide-react"
import type { Plant } from "../data/plants"

interface PlantDetailProps {
  plant: Plant
  onClose: () => void
}

function PlantDetail({ plant, onClose }: PlantDetailProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40" onClick={onClose}>
      <div
        className="relative w-full max-w-[430px] max-h-[85vh] bg-white rounded-t-3xl overflow-y-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 sticky top-0 bg-white z-10">
          <div className="w-10 h-1 rounded-full bg-card-bg" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/10 flex items-center justify-center z-20"
        >
          <X className="w-4 h-4 text-text-primary" />
        </button>

        {/* Header */}
        <div className={`px-5 pt-2 pb-4`}>
          <div className={`w-20 h-20 rounded-2xl ${plant.iconBg} flex items-center justify-center mb-3`}>
            <Leaf className={`w-9 h-9 ${plant.iconColor}`} />
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-1">{plant.name}</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-text-secondary bg-card-bg px-2.5 py-1 rounded-full">
              {plant.family}
            </span>
            <span className="text-xs font-semibold text-text-secondary bg-card-bg px-2.5 py-1 rounded-full">
              {plant.type}
            </span>
            {plant.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Quick description */}
        <div className="px-5 pb-4">
          <p className="text-sm text-text-secondary leading-relaxed">{plant.desc}</p>
        </div>

        {/* Detail sections */}
        <div className="px-5 pb-28 space-y-4">
          <section>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-[#e8f5e9] flex items-center justify-center">
                <Leaf className="w-3.5 h-3.5 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-text-primary">植物形态</h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed pl-8">{plant.detail}</p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
              </div>
              <h3 className="text-sm font-bold text-text-primary">生态习性</h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed pl-8">{plant.ecology}</p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-amber-50 flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
              </div>
              <h3 className="text-sm font-bold text-text-primary">地理分布</h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed pl-8">{plant.distribution}</p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-purple-50 flex items-center justify-center">
                <Beaker className="w-3.5 h-3.5 text-purple-500" />
              </div>
              <h3 className="text-sm font-bold text-text-primary">主要用途</h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed pl-8">{plant.usage}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PlantDetail
