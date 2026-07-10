import { Bell, Search, Camera, Navigation, Leaf, Flower2, Compass, Users, User, ScanLine } from "lucide-react"
import heroBg from "./assets/hero-bg.png"
import gardenia from "./assets/gardenia.png"

function App() {
  return (
    <div className="relative mx-auto max-w-[430px] min-h-screen bg-bg font-[Manrope,_sans-serif]">
      {/* Scrollable Content */}
      <div className="pb-24">
        {/* Header */}
        <header className="flex items-center justify-between px-5 pt-5 pb-3">
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">
            🌿 绿途
          </h1>
          <button className="relative p-2 rounded-full hover:bg-primary-light/50 transition-colors">
            <Bell className="w-6 h-6 text-text-primary" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </header>

        {/* Search Bar */}
        <div className="px-5 py-2">
          <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm border border-card-bg">
            <Search className="w-5 h-5 text-text-placeholder shrink-0" />
            <input
              type="text"
              placeholder="搜索植物名称..."
              className="flex-1 bg-transparent outline-none text-sm text-text-primary placeholder:text-text-placeholder font-medium"
            />
          </div>
        </div>

        {/* Hero Card */}
        <div className="px-5 pt-3 pb-1">
          <div className="relative rounded-2xl overflow-hidden aspect-[340/200]">
            <img
              src={heroBg}
              alt="植物识别"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h2 className="text-white text-xl font-bold leading-tight mb-1">
                遇见，并了解它们
              </h2>
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
          <h3 className="text-base font-bold text-text-primary mb-3">
            📌 每日植物推荐
          </h3>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-card-bg">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-card-bg">
                <img
                  src={gardenia}
                  alt="栀子花"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-base font-bold text-text-primary">
                    栀子花
                  </h4>
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
        <div className="px-5 pt-1 pb-2">
          <h3 className="text-base font-bold text-text-primary mb-3">
            📍 附近常见植物
          </h3>
          <div className="bg-white rounded-2xl divide-y divide-card-bg shadow-sm border border-card-bg">
            {/* 梧桐 */}
            <div className="flex items-center gap-3 px-4 py-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#e8f5e9] flex items-center justify-center shrink-0">
                <Navigation className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-text-primary">梧桐</p>
                <p className="text-[11px] text-text-secondary">梧桐科 · 落叶乔木</p>
              </div>
              <span className="text-[11px] text-text-placeholder">距您 50m</span>
            </div>
            {/* 月季 */}
            <div className="flex items-center gap-3 px-4 py-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#fce4ec] flex items-center justify-center shrink-0">
                <Flower2 className="w-5 h-5 text-pink-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-text-primary">月季</p>
                <p className="text-[11px] text-text-secondary">蔷薇科 · 常绿灌木</p>
              </div>
              <span className="text-[11px] text-text-placeholder">距您 120m</span>
            </div>
            {/* 薄荷 */}
            <div className="flex items-center gap-3 px-4 py-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#e0f2f1] flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-text-primary">薄荷</p>
                <p className="text-[11px] text-text-secondary">唇形科 · 多年生草本</p>
              </div>
              <span className="text-[11px] text-text-placeholder">距您 200m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-card-bg px-3 pb-1 pt-2 safe-area-bottom">
        <div className="flex items-center justify-around">
          {/* 探索 */}
          <button className="flex flex-col items-center gap-0.5 py-1.5 px-3">
            <Compass className="w-5 h-5 text-nav-inactive" />
            <span className="text-[10px] font-medium text-nav-inactive">探索</span>
          </button>
          {/* 发现 */}
          <button className="flex flex-col items-center gap-0.5 py-1.5 px-3">
            <Search className="w-5 h-5 text-nav-inactive" />
            <span className="text-[10px] font-medium text-nav-inactive">发现</span>
          </button>
          {/* 识别 (Active) */}
          <button className="flex flex-col items-center gap-0.5 py-1.5 px-3 relative -top-3">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <ScanLine className="w-6 h-6 text-white" />
            </div>
            <span className="text-[10px] font-bold text-primary -mt-1">识别</span>
          </button>
          {/* 社区 */}
          <button className="flex flex-col items-center gap-0.5 py-1.5 px-3">
            <Users className="w-5 h-5 text-nav-inactive" />
            <span className="text-[10px] font-medium text-nav-inactive">社区</span>
          </button>
          {/* 我的 */}
          <button className="flex flex-col items-center gap-0.5 py-1.5 px-3">
            <User className="w-5 h-5 text-nav-inactive" />
            <span className="text-[10px] font-medium text-nav-inactive">我的</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default App
