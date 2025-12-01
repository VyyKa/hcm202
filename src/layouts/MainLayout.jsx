import React, { useRef, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Play, Pause } from "lucide-react";
import icon from "../assets/icon.jpg";

export default function MainLayout() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function toggleAudio() {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.volume = 0.2;
      const p = a.play();
      if (p !== undefined) {
        p.then(() => setPlaying(true)).catch(() => {
          setPlaying(false);
        });
      } else {
        setPlaying(true);
      }
    }
  }

  const linkBase =
    "text-sm px-3 py-1.5 rounded-lg hover:bg-white/70 transition inline-flex items-center";

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
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-semibold">
                Dự án: Tư tưởng Hồ Chí Minh về Nhà nước
              </div>
              <div className="text-sm text-muted-slate">
                Sinh viên / Nhóm - Trường Đại học • Năm học • Tài liệu tham
                khảo: Hiến pháp, Di sản Hồ Chí Minh
              </div>
            </div>
            <div className="text-sm text-muted-slate">
              © {new Date().getFullYear()} • Thiết kế &amp; triển khai bằng
              React + Tailwind + Framer Motion
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


