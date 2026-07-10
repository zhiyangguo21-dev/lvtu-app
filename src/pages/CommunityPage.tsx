import { MessageCircle, Heart, Share2, MoreHorizontal } from "lucide-react"

const posts = [
  {
    id: 1,
    user: "植物爱好者小王",
    avatar: "🌻",
    time: "2 小时前",
    content: "今天在公园发现了一棵超级大的银杏树！秋叶金黄，太美了 🌟 分享给大家",
    likes: 234,
    comments: 18,
    tag: "银杏",
    tagColor: "bg-amber-50 text-amber-600",
  },
  {
    id: 2,
    user: "绿植达人",
    avatar: "🌵",
    time: "5 小时前",
    content: "分享我的多肉养护心得：少浇水、多光照，春秋两季施薄肥，新手也能养爆盆！",
    likes: 189,
    comments: 32,
    tag: "养护技巧",
    tagColor: "bg-green-50 text-green-600",
  },
  {
    id: 3,
    user: "花开半夏",
    avatar: "🌸",
    time: "昨天",
    content: "院子里月季又开花了，粉色的特别好看，忍不住拍了好多张 📸",
    likes: 156,
    comments: 9,
    tag: "月季",
    tagColor: "bg-pink-50 text-pink-600",
  },
]

function CommunityPage() {
  return (
    <div className="pb-2">
      <header className="flex items-center justify-between px-5 pt-5 pb-3">
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">社区</h1>
        <button className="p-2 rounded-full hover:bg-primary-light/50 transition-colors">
          <MoreHorizontal className="w-5 h-5 text-text-primary" />
        </button>
      </header>

      <div className="px-5 pb-4 flex gap-2">
        {["推荐", "关注", "最新", "热门"].map((tab, i) => (
          <button
            key={tab}
            className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-colors ${
              i === 0
                ? "bg-primary text-white"
                : "bg-white text-text-secondary border border-card-bg hover:bg-primary-light"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-5 flex flex-col gap-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl p-4 shadow-sm border border-card-bg"
          >
            {/* User info */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-card-bg flex items-center justify-center text-lg">
                {post.avatar}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-text-primary">{post.user}</p>
                <p className="text-[10px] text-text-placeholder">{post.time}</p>
              </div>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${post.tagColor}`}>
                {post.tag}
              </span>
            </div>

            {/* Content */}
            <p className="text-sm text-text-primary leading-relaxed mb-3">{post.content}</p>

            {/* Actions */}
            <div className="flex items-center gap-5 pt-1 border-t border-card-bg">
              <button className="flex items-center gap-1 text-text-placeholder hover:text-red-400 transition-colors">
                <Heart className="w-4 h-4" />
                <span className="text-[11px] font-medium">{post.likes}</span>
              </button>
              <button className="flex items-center gap-1 text-text-placeholder hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-[11px] font-medium">{post.comments}</span>
              </button>
              <button className="flex items-center gap-1 text-text-placeholder hover:text-blue-400 transition-colors ml-auto">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommunityPage
