import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { MapPin, Star, ChevronDown, Plus, Minus, LocateFixed } from "lucide-react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { plants } from "../data/plants"
import PlantDetail from "../components/PlantDetail"
import type { Plant } from "../data/plants"

import iconUrl from "leaflet/dist/images/marker-icon.png"
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png"
import shadowUrl from "leaflet/dist/images/marker-shadow.png"

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl, shadowUrl })

const greenIcon = new L.Icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='42' viewBox='0 0 32 42'%3E%3Ccircle cx='16' cy='16' r='12' fill='%23016b17' stroke='%23ffffff' stroke-width='3'/%3E%3Cpath d='M16 40 L8 28 Q4 22 4 16 A12 12 0 1 1 28 16 Q28 22 24 28 Z' fill='%23016b17' opacity='0.4'/%3E%3C/svg%3E",
  iconSize: [32, 42],
  iconAnchor: [16, 42],
  popupAnchor: [0, -42],
})

interface PlantMarker {
  id: string
  plant: Plant
  lat: number
  lng: number
  count: number
}

const plantMarkers: PlantMarker[] = [
  { id: "yueji", plant: plants.find((p) => p.id === "yueji")!, lat: 31.2304, lng: 121.4737, count: 12 },
  { id: "wutong", plant: plants.find((p) => p.id === "wutong")!, lat: 31.2350, lng: 121.4780, count: 8 },
  { id: "yinxing", plant: plants.find((p) => p.id === "yinxing")!, lat: 31.2320, lng: 121.4700, count: 23 },
  { id: "yinghua", plant: plants.find((p) => p.id === "yinghua")!, lat: 31.2280, lng: 121.4800, count: 15 },
  { id: "bohe", plant: plants.find((p) => p.id === "bohe")!, lat: 31.2380, lng: 121.4750, count: 6 },
  { id: "zhizihua", plant: plants.find((p) => p.id === "zhizihua")!, lat: 31.2330, lng: 121.4820, count: 19 },
  { id: "xunyicao", plant: plants.find((p) => p.id === "xunyicao")!, lat: 31.2290, lng: 121.4680, count: 4 },
  { id: "zhuzi", plant: plants.find((p) => p.id === "zhuzi")!, lat: 31.2360, lng: 121.4850, count: 31 },
]

const plantTypes = ["\u5168\u90e8\u690d\u7269", "\u4e54\u6728", "\u704c\u6728", "\u8349\u672c", "\u82b1\u5349"]

function ZoomControls() {
  const map = useMap()
  return (
    <div className="absolute top-4 right-4 z-[1000] flex flex-col bg-white rounded-xl shadow-lg overflow-hidden">
      <button onClick={() => map.zoomIn()} className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors">
        <Plus className="w-5 h-5 text-text-primary" />
      </button>
      <div className="h-px bg-gray-100" />
      <button onClick={() => map.zoomOut()} className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors">
        <Minus className="w-5 h-5 text-text-primary" />
      </button>
    </div>
  )
}

function LocateButton() {
  const map = useMap()
  return (
    <button onClick={() => map.locate({ setView: true, maxZoom: 16 })} className="absolute bottom-6 right-4 z-[1000] w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
      <LocateFixed className="w-5 h-5 text-primary" />
    </button>
  )
}

function MapPage() {
  const [filterType, setFilterType] = useState("\u5168\u90e8\u690d\u7269")
  const [showFilter, setShowFilter] = useState(false)
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null)

  const filteredMarkers = filterType === "\u5168\u90e8\u690d\u7269"
    ? plantMarkers
    : plantMarkers.filter((m) => m.plant.type.includes(filterType) || m.plant.tags.includes(filterType))

  return (
    <div className="pb-2 relative">
      <header className="flex items-center justify-between px-5 pt-5 pb-3">
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">\U0001f5fa\ufe0f \u57ce\u5e02\u7eff\u5730\u56fe</h1>
        <div className="relative">
          <button onClick={() => setShowFilter(!showFilter)} className="flex items-center gap-1.5 bg-white border border-card-bg rounded-full px-3.5 py-1.5 text-sm font-semibold text-text-primary hover:bg-gray-50 transition-colors">
            \U0001f333 {filterType}
            <ChevronDown className={`w-4 h-4 text-text-placeholder transition-transform ${showFilter ? "rotate-180" : ""}`} />
          </button>
          {showFilter && (
            <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-card-bg py-2 z-[1001] min-w-[140px]">
              {plantTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => { setFilterType(type); setShowFilter(false) }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                    filterType === type ? "text-primary bg-primary-light" : "text-text-primary hover:bg-gray-50"
                  }`}
                >
                  {type === "\u5168\u90e8\u690d\u7269" ? "\U0001f333 " : "\U0001f33f "}{type}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="px-5 pb-4">
        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-card-bg" style={{ height: "calc(100vh - 280px)", minHeight: "400px" }}>
          <MapContainer
            center={[31.2320, 121.4737]}
            zoom={14}
            scrollWheelZoom={true}
            zoomControl={false}
            className="w-full h-full"
            style={{ borderRadius: "1rem" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredMarkers.map((marker) => (
              <Marker key={marker.id} position={[marker.lat, marker.lng]} icon={greenIcon}>
                <Popup>
                  <div className="cursor-pointer min-w-[180px]" onClick={() => setSelectedPlant(marker.plant)}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-8 h-8 rounded-lg ${marker.plant.iconBg} flex items-center justify-center`}>
                        <span className="text-sm">\U0001f33f</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-primary">{marker.plant.name}</p>
                        <p className="text-[10px] text-text-secondary">{marker.plant.family}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-[11px] text-text-secondary">
                      <span>\u8bc6\u522b {marker.count} \u6b21</span>
                      <span className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        {marker.plant.tags[0]}
                      </span>
                    </div>
                    <p className="text-[10px] text-primary mt-1 font-semibold">\u70b9\u51fb\u67e5\u770b\u8be6\u60c5 \u2192</p>
                  </div>
                </Popup>
              </Marker>
            ))}
            <ZoomControls />
            <LocateButton />
          </MapContainer>
        </div>
      </div>

      <div className="px-5">
        <h3 className="text-sm font-bold text-text-primary mb-3">\U0001f4cd \u9644\u8fd1\u690d\u7269 ({filteredMarkers.length})</h3>
        <div className="bg-white rounded-2xl shadow-sm border border-card-bg divide-y divide-card-bg">
          {filteredMarkers.map((marker) => (
            <div
              key={marker.id}
              onClick={() => setSelectedPlant(marker.plant)}
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className={`w-10 h-10 rounded-xl ${marker.plant.iconBg} flex items-center justify-center shrink-0`}>
                <MapPin className={`w-5 h-5 ${marker.plant.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-text-primary">{marker.plant.name}</p>
                <p className="text-[11px] text-text-secondary">{marker.plant.desc}</p>
              </div>
              <span className="text-[11px] text-text-placeholder whitespace-nowrap">\u8bc6\u522b {marker.count} \u6b21</span>
            </div>
          ))}
        </div>
      </div>

      {selectedPlant && (
        <PlantDetail plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
      )}
    </div>
  )
}

export default MapPage
