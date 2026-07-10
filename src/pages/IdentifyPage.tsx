import { useState, useEffect, useRef } from "react"
import { Camera, Zap, Trees, RefreshCw, SwitchCamera, Image } from "lucide-react"

function IdentifyPage() {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [error, setError] = useState("")
  const [cameraOn, setCameraOn] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const startCamera = async () => {
    try {
      setError("")
      const s = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1280 } },
      })
      setStream(s)
      setCameraOn(true)
    } catch (e) {
      setError("无法访问摄像头，请使用上传图片功能")
    }
  }

  const stopCamera = () => {
    stream?.getTracks().forEach((t) => t.stop())
    setStream(null)
    setCameraOn(false)
  }

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  useEffect(() => {
    return () => {
      stream?.getTracks().forEach((t) => t.stop())
    }
  }, [stream])

  return (
    <div className="pb-2">
      <header className="sticky top-0 z-30 bg-bg/95 backdrop-blur-sm flex items-center justify-between px-5 pt-5 pb-3">
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">识别</h1>
      </header>

      {/* Camera Area */}
      <div className="px-5 pb-4">
        <div className="relative rounded-2xl aspect-[340/340] overflow-hidden bg-gray-900">
          {cameraOn ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,107,23,0.15),transparent_70%)] flex flex-col items-center justify-center">
              <Camera className="w-12 h-12 text-white/60 mb-3" />
              <p className="text-white/70 text-sm font-semibold mb-2">对准植物，自动识别</p>
              <p className="text-white/40 text-xs">{error || "点击下方按钮启动摄像头"}</p>
            </div>
          )}

          {/* Scanning animation */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-green-400/60 to-transparent"></div>
        </div>

        {/* Camera controls */}
        <div className="flex items-center justify-center gap-4 mt-3">
          <button
            onClick={() => (cameraOn ? stopCamera() : startCamera())}
            className="bg-primary text-white font-bold text-sm py-2.5 px-6 rounded-2xl flex items-center gap-2 shadow-lg shadow-primary/25 hover:bg-[#015a13] active:scale-[0.98] transition-all"
          >
            {cameraOn ? <RefreshCw className="w-4 h-4" /> : <Camera className="w-4 h-4" />}
            {cameraOn ? "重新识别" : "启动摄像头"}
          </button>
          <button className="p-2.5 rounded-full bg-white border border-card-bg hover:bg-gray-50 transition-colors">
            <SwitchCamera className="w-4 h-4 text-text-secondary" />
          </button>
          <button className="p-2.5 rounded-full bg-white border border-card-bg hover:bg-gray-50 transition-colors">
            <Image className="w-4 h-4 text-text-secondary" />
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
                onClick={() => {
                  if (item.label === "即时识别") startCamera()
                }}
                className="bg-white rounded-2xl p-4 shadow-sm border border-card-bg text-left hover:shadow-md transition-shadow active:scale-[0.98]"
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
            <div key={item.name} className="flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 transition-colors cursor-pointer">
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
