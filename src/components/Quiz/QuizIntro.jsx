import React from "react"
import { motion } from "framer-motion"
import { Play, BookOpen, Clock, Target, Lightbulb } from "lucide-react"

export default function QuizIntro({
  totalQuestions,
  onStart,
  playerName,
  onChangePlayerName,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-soft-lg p-6 sm:p-8"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <BookOpen size={40} className="text-primary" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          Trắc nghiệm HCM202
        </h2>
        <p className="text-muted-slate">Nhà nước của Dân, do Dân, vì Dân</p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-cream rounded-xl p-4 text-center">
          <Target size={24} className="mx-auto mb-2 text-primary" />
          <p className="text-2xl font-bold text-slate-900">{totalQuestions}</p>
          <p className="text-sm text-muted-slate">Câu hỏi</p>
        </div>
        <div className="bg-cream rounded-xl p-4 text-center">
          <Lightbulb size={24} className="mx-auto mb-2 text-primary" />
          <p className="text-2xl font-bold text-slate-900">4 ~ 7</p>
          <p className="text-sm text-muted-slate">Lựa chọn/câu</p>
        </div>
      </div>

      {/* Player name input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-900 mb-1">
          Tên người chơi
        </label>
        <input
          type="text"
          value={playerName}
          onChange={(e) => onChangePlayerName?.(e.target.value)}
          placeholder="Nhập tên của bạn..."
          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
        />
        <p className="mt-1 text-xs text-muted-slate">
          Nếu để trống, kết quả sẽ được lưu với tên &quot;Khách&quot;.
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-primary/5 rounded-xl p-5 mb-8">
        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
          <Lightbulb size={18} className="text-primary" />
          Hướng dẫn
        </h3>
        <ul className="text-sm text-muted-slate space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
              1
            </span>
            <span>Đọc kỹ câu hỏi và chọn một đáp án đúng nhất</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
              2
            </span>
            <span>Nhấn "Xác nhận" để kiểm tra đáp án</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
              3
            </span>
            <span>Xem giải thích và tiếp tục câu tiếp theo</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
              4
            </span>
            <span>Xem kết quả tổng kết sau khi hoàn thành</span>
          </li>
        </ul>
      </div>

      {/* Start Button */}
      <button
        onClick={onStart}
        className="w-full py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
      >
        <Play size={22} />
        Bắt đầu làm bài
      </button>
    </motion.div>
  )
}
