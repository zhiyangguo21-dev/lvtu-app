import { Flame, Sparkles, TrendingUp, Leaf } from "lucide-react"

const discoverItems = [
  {
    id: 1,
    name: "樱花",
    family: "蔷薇科",
    tag: "热门",
    tagColor: "text-orange-600 bg-orange-50",
    icon: Flame,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
    desc: "春季开花的落叶乔木，花瓣多为粉白色，是日本国花，深受人们喜爱。",
    count: "识别 8,921 次",
  },
  {
    id: 2,
    name: "银杏",
    family: "银杏科",
    tag: "珍稀",
    tagColor: "text-amber-600 bg-amber-50",
    icon: Sparkles,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    desc: "中生代孑遗的稀有树种，被誉为'活化石'，秋季叶片金黄，极具观赏价值。",
    count: "识别 6,344 次",
  },
  {
    id: 3,
    name: "薰衣草",
    family: "唇形科",
    tag: "人气",
    tagColor: "text-purple-600 bg-purple-50",
    icon: TrendingUp,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50",
    desc: "多年生草本植物，花朵呈紫色，具有浓郁的芳香，常用于精油提取和园艺观赏。",
    count: "识别 5,127 次",
  },
  {
    id: 4,
    name: "竹子",
    family: "禾本科",
    tag: "常见",
    tagColor: "text-green-600 bg-green-50",
    icon: Leaf,
    iconColor: "text-green-500",
    iconBg: "bg-green-50",
    desc: "多年生禾本科植物，生长迅速，质地坚韧，在中国文化中象征气节与品格。",
    count: "识别 3,892 次",
  },
]

function DiscoverPage() {
  return (
    <div className="pb-2">
      <header className="flex items-center justify-between px-5 pt-5 pb-3">
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">发现</h1>
      </header>

      <p className="px-5 pb-4 text-sm text-text-secondary">
        探索热门植物 · 发现自然之美
      </p>

      {/* Hot tags */}
      <div className="px-5 pb-4 flex gap-2 flex-wrap">
        {["全部", "花卉", "乔木", "草本", "蕨类", "多肉"].map((tag, i) => (
          <button
            key={tag}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
              i === 0
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
        {discoverItems.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-sm border border-card-bg"
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-text-primary">{item.name}</h4>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-text-secondary mb-1">{item.family}</p>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                  <p className="text-[10px] text-text-placeholder mt-2">{item.count}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DiscoverPage
