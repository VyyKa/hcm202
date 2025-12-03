import React, { useRef, useState } from "react"
import { Outlet, NavLink, useLocation } from "react-router-dom"
import { Play, Pause, BookOpen, Users, Mail, Heart } from "lucide-react"
import icon from "../assets/icon.jpg"
import Chatbot from "../components/Chatbot"

export default function MainLayout() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const location = useLocation()

  function toggleAudio() {
    const a = audioRef.current
    if (!a) return
    if (playing) {
      a.pause()
      setPlaying(false)
    } else {
      a.volume = 0.2
      const p = a.play()
      if (p !== undefined) {
        p.then(() => setPlaying(true)).catch(() => {
          setPlaying(false)
        })
      } else {
        setPlaying(true)
      }
    }
  }

  const linkBase =
    "text-sm px-3 py-1.5 rounded-lg hover:bg-white/70 transition inline-flex items-center"

  return (
    <div className="min-h-screen bg-cream text-slate-900 antialiased flex flex-col">
      <audio ref={audioRef} loop src="/nhac.mp3" />

      <header className="sticky top-0 z-30 backdrop-blur-sm bg-white/40 border-b border-white/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center overflow-hidden">
              <img
                src={icon}
                alt="Biểu tượng Hồ Chí Minh"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-semibold">Tư tưởng Hồ Chí Minh</div>
              <div className="text-xs text-muted-slate">Về Nhà nước</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden sm:flex gap-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "bg-white shadow-sm" : ""}`
                }
              >
                Trang chính
              </NavLink>
              <NavLink
                to="/learn-more"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "bg-white shadow-sm" : ""}`
                }
              >
                Tìm hiểu thêm
              </NavLink>
              {/* <NavLink
                to="/biography"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "bg-white shadow-sm" : ""}`
                }
              >
                Cuộc đời Bác Hồ
              </NavLink> */}
              <NavLink
                to="/game"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "bg-white shadow-sm" : ""}`
                }
              >
                Trò chơi
              </NavLink>
              <NavLink
                to="/flipbook"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "bg-white shadow-sm" : ""}`
                }
              >
                Flipbook
              </NavLink>
            </nav>
            <button
              onClick={toggleAudio}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border hover:shadow-sm transition"
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
              <span className="text-sm">
                {playing ? "Tạm dừng nhạc" : "Nghe nhạc"}
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-4 pb-20 w-full">
        <Outlet />
      </main>

      <footer className="mt-10 py-8">
        <div className="border-t pt-6 border-white/60">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            {/* Cột 1: Dự án học thuật */}
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <BookOpen size={18} className="text-primary" />
                <span>Dự án học thuật</span>
              </div>
              <div className="mt-3 space-y-1.5 text-muted-slate">
                <div>
                  <span className="font-semibold">Môn:</span>{" "}
                  <span>HCM202 - Tư tưởng Hồ Chí Minh</span>
                </div>
                <div>
                  <span className="font-semibold">Trường:</span>{" "}
                  <span>Đại học FPT - Campus Hồ Chí Minh</span>
                </div>
                <div>
                  <span className="font-semibold">Học kỳ:</span>{" "}
                  <span>Fall {new Date().getFullYear()}</span>
                </div>
              </div>
            </div>

            {/* Cột 2: Thông tin nhóm */}
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Users size={18} className="text-primary" />
                <span>Thông tin nhóm</span>
              </div>
              <div className="mt-3 text-sm text-muted-slate">
                <div>
                  <span className="font-semibold">Nhóm:</span>{" "}
                  <span>6 - 3W_HCM202_06</span>
                </div>
                <div className="mt-2 font-semibold">Thành viên:</div>
                <ul className="mt-1 space-y-0.5">
                  <li>• Hồ Tài Liên Vy Kha</li>
                  <li>• Lê Tiến Đạt</li>
                  <li>• Nguyễn Cao Trí</li>
                </ul>
              </div>
            </div>

            {/* Cột 3: Giảng viên */}
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Mail size={18} className="text-primary" />
                <span>Giảng viên</span>
              </div>
              <div className="mt-3 text-sm space-y-1.5 text-muted-slate">
                <div>
                  <span className="font-semibold">Hướng dẫn:</span>{" "}
                  <span>Đoàn Thị Ngân (NganDT31)</span>
                </div>
                <p className="text-xs leading-relaxed">
                  Cảm ơn cô đã hướng dẫn và hỗ trợ nhóm trong quá trình thực
                  hiện dự án.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-slate">
            <div>
              © {new Date().getFullYear()} · Sản phẩm sáng tạo môn HCM202 - Nhóm
              6 - Đại học FPT
            </div>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart size={14} className="text-primary" />
              <span>in FPTU</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot: ẩn trên trang Trò chơi */}
      {location.pathname !== "/game" && <Chatbot />}
    </div>
  )
}
