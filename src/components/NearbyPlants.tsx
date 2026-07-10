import { Navigation, Flower2, Leaf } from "lucide-react"

function NearbyPlants() {
  const plants = [
    {
      name: "梧桐",
      family: "梧桐科",
      type: "落叶乔木",
      icon: Navigation,
      iconColor: "text-primary",
      iconBg: "bg-[#e8f5e9]",
      distance: "50m",
    },
    {
      name: "月季",
      family: "蔷薇科",
      type: "常绿灌木",
      icon: Flower2,
      iconColor: "text-pink-500",
      iconBg: "bg-[#fce4ec]",
      distance: "120m",
    },
    {
      name: "薄荷",
      family: "唇形科",
      type: "多年生草本",
      icon: Leaf,
      iconColor: "text-teal-600",
      iconBg: "bg-[#e0f2f1]",
      distance: "200m",
    },
  ]

  return (
    <div className="bg-white rounded-2xl divide-y divide-card-bg shadow-sm border border-card-bg">
      {plants.map((plant) => {
        const Icon = plant.icon
        return (
          <div
            key={plant.name}
            className="flex items-center gap-3 px-4 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className={`w-10 h-10 rounded-xl ${plant.iconBg} flex items-center justify-center shrink-0`}>
              <Icon className={`w-5 h-5 ${plant.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-text-primary">{plant.name}</p>
              <p className="text-[11px] text-text-secondary">
                {plant.family} · {plant.type}
              </p>
            </div>
            <span className="text-[11px] text-text-placeholder">距您 {plant.distance}</span>
          </div>
        )
      })}
    </div>
  )
}

export default NearbyPlants
