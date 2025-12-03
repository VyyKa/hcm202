import React, { useEffect, useRef, useState } from "react"
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom"
import {
  Play,
  Pause,
  BookOpen,
  Users,
  Mail,
  Heart,
  Menu,
  X,
} from "lucide-react"
import icon from "../assets/icon.jpg"
import dangBg from "../assets/dang.png"
import Chatbot from "../components/Chatbot"

export default function MainLayout() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

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

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const linkBase =
    "text-sm px-3 py-1.5 rounded-lg hover:bg-white/70 transition inline-flex items-center"
  const navLinks = [
    { to: "/", label: "Trang chính" },
    { to: "/learn-more", label: "Tìm hiểu thêm" },
    { to: "/game", label: "Trò chơi" },
    { to: "/flipbook", label: "Flipbook" },
  ]

  const renderLinks = (extraClasses = "") =>
    navLinks.map((link) => (
      <NavLink
        key={link.to}
        to={link.to}
        className={({ isActive }) =>
          `${linkBase} ${extraClasses} ${isActive ? "bg-white shadow-sm" : ""}`
        }
      >
        {link.label}
      </NavLink>
    ))

  return (
    <div className="min-h-screen bg-cream text-slate-900 antialiased flex flex-col relative overflow-hidden">
      {/* Background cố định với hình Đảng mờ mờ */}
      <div
        className="pointer-events-none fixed inset-0 z-0 flex justify-center"
        aria-hidden="true"
      >
        <div
          className="w-full max-w-5xl h-full opacity-[0.12] bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${dangBg})` }}
        />
      </div>

      <audio ref={audioRef} loop src="/nhac.mp3" className="relative z-10" />

      <header className="sticky top-0 z-30 backdrop-blur-sm bg-white/70 border-b border-white/60 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
            aria-label="Về trang chính"
          >
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center overflow-hidden">
              <img
                src={icon}
                alt="Biểu tượng Hồ Chí Minh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold">Tư tưởng Hồ Chí Minh</div>
              <div className="text-xs text-muted-slate">Về Nhà nước</div>
            </div>
          </button>
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden sm:flex gap-1">{renderLinks()}</nav>
            <button
              onClick={toggleAudio}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border hover:shadow-sm transition text-xs sm:text-sm"
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
              <span>{playing ? "Tạm dừng nhạc" : "Nghe nhạc"}</span>
            </button>
            <button
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-lg border hover:bg-white transition"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Mở menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden border-t border-white/60 bg-white/95 backdrop-blur px-4 pb-4 shadow-sm">
            <div className="flex flex-col gap-2 pt-3">{renderLinks("w-full justify-center text-base")}</div>
          </div>
        )}
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 pb-20 w-full relative z-10">
        <Outlet />
      </main>

      <footer className="mt-10 py-8 relative z-10">
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
      {location.pathname !== "/game" && (
        <div className="relative z-20">
          <Chatbot />
        </div>
      )}
    </div>
  )
}
