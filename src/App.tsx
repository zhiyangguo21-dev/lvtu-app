import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { Compass, BookOpen, Map, Users, User, ScanLine } from "lucide-react"
import ExplorePage from "./pages/ExplorePage"
import EncyclopediaPage from "./pages/EncyclopediaPage"
import DiscoverPage from "./pages/DiscoverPage"
import MapPage from "./pages/MapPage"
import CommunityPage from "./pages/CommunityPage"
import ProfilePage from "./pages/ProfilePage"
import IdentifyPage from "./pages/IdentifyPage"

const tabs = [
  { path: "/explore", label: "探索", icon: Compass },
  { path: "/encyclopedia", label: "百科", icon: BookOpen },
  { path: "/identify", label: "识别", icon: ScanLine, center: true },
  { path: "/map", label: "地图", icon: Map },
  { path: "/profile", label: "我的", icon: User },
]

function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-card-bg px-3 pb-1 pt-2 safe-area-bottom z-50">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = currentPath === tab.path || (tab.path === "/explore" && currentPath === "/")
          const isCenter = tab.center

          if (isCenter) {
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className="flex flex-col items-center gap-0.5 py-1.5 px-3 relative -top-3"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[10px] font-bold text-primary -mt-1">{tab.label}</span>
              </button>
            )
          }

          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center gap-0.5 py-1.5 px-3"
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-nav-active" : "text-nav-inactive"}`} />
              <span className={`text-[10px] font-medium ${isActive ? "text-nav-active font-bold" : "text-nav-inactive"}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

function Layout() {
  return (
    <>
      <div className="pb-24">
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/encyclopedia" element={<EncyclopediaPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/identify" element={<IdentifyPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </div>
      <BottomNav />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative mx-auto max-w-[430px] min-h-screen bg-bg font-[Manrope,_sans-serif]">
        <Layout />
      </div>
    </BrowserRouter>
  )
}

export default App
