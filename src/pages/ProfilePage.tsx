import { Settings, Award, MapPin, Camera, ChevronRight, Leaf } from "lucide-react"

function ProfilePage() {
  return (
    <div className="pb-2">
      <header className="sticky top-0 z-30 bg-bg/95 backdrop-blur-sm flex items-center justify-between px-5 pt-5 pb-3">
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">我的</h1>
        <button className="p-2 rounded-full hover:bg-primary-light/50 transition-colors">
          <Settings className="w-5 h-5 text-text-primary" />
        </button>
      </header>

      {/* Profile Card */}
      <div className="px-5 pb-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-card-bg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-[#e8f5e9] flex items-center justify-center text-3xl">
              🌿
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-text-primary">自然探索者</h3>
              <p className="text-xs text-text-secondary">热爱大自然 · 植物识别达人</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex divide-x divide-card-bg pt-3 border-t border-card-bg">
            {[
              { label: "识别", value: "127", unit: "种" },
              { label: "足迹", value: "48", unit: "处" },
              { label: "分享", value: "23", unit: "篇" },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 text-center">
                <p className="text-lg font-bold text-primary">{stat.value}</p>
                <p className="text-[10px] text-text-secondary">
                  {stat.label}
                  <span className="text-text-placeholder">{stat.unit}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="px-5 pb-4">
        <h3 className="text-sm font-bold text-text-primary mb-3">🏅 成就徽章</h3>
        <div className="flex gap-3">
          {[
            { icon: "🌱", label: "新手识别", active: true },
            { icon: "🌿", label: "达人级别", active: true },
            { icon: "🌳", label: "植物学家", active: false },
            { icon: "🏆", label: "顶级专家", active: false },
          ].map((badge) => (
            <div
              key={badge.label}
              className={`flex-1 rounded-xl p-3 text-center ${
                badge.active
                  ? "bg-white border border-card-bg shadow-sm"
                  : "bg-card-bg opacity-40"
              }`}
            >
              <div className="text-2xl mb-1">{badge.icon}</div>
              <p className="text-[10px] font-semibold text-text-secondary">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="px-5">
        <div className="bg-white rounded-2xl shadow-sm border border-card-bg divide-y divide-card-bg">
          {[
            { icon: Camera, label: "我的识别记录", color: "text-primary", bg: "bg-[#e8f5e9]" },
            { icon: MapPin, label: "足迹地图", color: "text-blue-500", bg: "bg-blue-50" },
            { icon: Leaf, label: "我的植物收藏", color: "text-green-500", bg: "bg-green-50" },
            { icon: Award, label: "成就与积分", color: "text-amber-500", bg: "bg-amber-50" },
          ].map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                className="flex items-center gap-3 w-full px-4 py-3.5 hover:bg-gray-50 transition-colors"
              >
                <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-4.5 h-4.5 ${item.color}`} />
                </div>
                <span className="flex-1 text-sm font-semibold text-text-primary text-left">
                  {item.label}
                </span>
                <ChevronRight className="w-4 h-4 text-text-placeholder" />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
