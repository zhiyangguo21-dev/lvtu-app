import { Camera, Zap, Trees } from "lucide-react"

function IdentifyPage() {
  return (
    <div className="pb-2">
      <header className="flex items-center justify-between px-5 pt-5 pb-3">
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">识别</h1>
      </header>

      {/* Camera Area */}
      <div className="px-5 pb-4">
        <div className="bg-gray-900 rounded-2xl aspect-[340/340] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,107,23,0.15),transparent_70%)]" />
          <Camera className="w-12 h-12 text-white/60 mb-3" />
          <p className="text-white/70 text-sm font-semibold mb-6">对准植物，自动识别</p>
          <button className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-white text-xs font-semibold">
            上传照片
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 pb-4">
        <h3 className="text-sm font-bold text-text-primary mb-3">快捷功能</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Zap, label: "即时识别", desc: "拍照立即识别", color: "text-amber-500", bg: "bg-amber-50" },
            { icon: Trees, label: "图库识别", desc: "从相册选择", color: "text-blue-500", bg: "bg-blue-50" },
          ].map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                className="bg-white rounded-2xl p-4 shadow-sm border border-card-bg text-left"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-2`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <p className="text-sm font-bold text-text-primary mb-0.5">{item.label}</p>
                <p className="text-[11px] text-text-secondary">{item.desc}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Recognition History */}
      <div className="px-5">
        <h3 className="text-sm font-bold text-text-primary mb-3">最近识别</h3>
        <div className="bg-white rounded-2xl divide-y divide-card-bg shadow-sm border border-card-bg">
          {[
            { name: "栀子花", time: "今天 14:32", conf: "98.7%" },
            { name: "玫瑰", time: "昨天 10:15", conf: "96.3%" },
            { name: "向日葵", time: "前天 16:48", conf: "99.1%" },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between px-4 py-3.5">
              <div>
                <p className="text-sm font-bold text-text-primary">{item.name}</p>
                <p className="text-[10px] text-text-placeholder">{item.time}</p>
              </div>
              <span className="text-[11px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full">
                {item.conf}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IdentifyPage
