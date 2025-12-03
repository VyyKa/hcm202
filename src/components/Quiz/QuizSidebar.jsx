import React from "react"
import { motion } from "framer-motion"
import { Info, Clock, CheckCircle2, XCircle, Trophy, Zap } from "lucide-react"

export default function QuizSidebar({
  gameState,
  currentQuestion,
  totalQuestions,
  answers,
  score,
  questions,
  onJumpToQuestion,
  elapsedTime = 0,
}) {
  // Format time as mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`
  }

  // Get status for each question
  const getQuestionStatus = (index) => {
    if (!answers[index]) return "unanswered"
    if (!questions || !questions[index]) return "answered"
    return answers[index] === questions[index].correctAnswer
      ? "correct"
      : "wrong"
  }

  const correctCount = answers.filter(
    (ans, i) => questions && questions[i] && ans === questions[i].correctAnswer
  ).length
  const wrongCount = answers.filter(
    (ans, i) => questions && questions[i] && ans !== questions[i].correctAnswer
  ).length

  const isRunning = gameState === "playing"

  return (
    <aside className="lg:sticky lg:top-24 space-y-4 transition-all">
      {/* Timer Card */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-4 shadow-soft-lg text-white"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Clock size={20} />
            </div>
            <div>
              <div className="text-xs opacity-80">Thời gian làm bài</div>
              <div className="text-2xl font-bold tracking-wider">
                {formatTime(elapsedTime)}
              </div>
            </div>
          </div>
          {isRunning && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-3 h-3 rounded-full bg-green-400"
            />
          )}
        </div>
      </motion.div>

      {/* Progress Card */}
      <div className="bg-white rounded-2xl p-4 shadow-soft-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold flex items-center gap-2">
            <Zap size={16} className="text-primary" />
            Tiến độ
          </div>
          <div className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
            {gameState === "intro" ? currentQuestion : currentQuestion + 1}/
            {totalQuestions}
          </div>
        </div>

        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-3 bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${Math.round(
                ((gameState === "intro"
                  ? currentQuestion
                  : currentQuestion + 1) /
                  totalQuestions) *
                  100
              )}%`,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-muted-slate">
            Câu hiện tại:{" "}
            <span className="font-semibold text-slate-900">
              {gameState === "intro" ? currentQuestion : currentQuestion + 1}
            </span>
          </span>
          <span className="text-muted-slate">
            {Math.round(
              ((gameState === "intro" ? currentQuestion : currentQuestion + 1) /
                totalQuestions) *
                100
            )}
            %
          </span>
        </div>
      </div>

      {/* Answer Tracker Card */}
      <div className="bg-white rounded-2xl p-4 shadow-soft-lg">
        <div className="text-sm font-semibold mb-3 flex items-center justify-between">
          <span>Theo dõi câu trả lời</span>
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 text-green-600">
              <CheckCircle2 size={12} /> {correctCount}
            </span>
            <span className="flex items-center gap-1 text-red-500">
              <XCircle size={12} /> {wrongCount}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: totalQuestions }).map((_, i) => {
            const status = getQuestionStatus(i)
            const isCurrent = i === currentQuestion && gameState === "playing"

            let bgClass = "bg-gray-100 text-slate-400"
            let icon = null

            if (status === "correct") {
              bgClass = "bg-green-500 text-white"
              icon = <CheckCircle2 size={14} />
            } else if (status === "wrong") {
              bgClass = "bg-red-500 text-white"
              icon = <XCircle size={14} />
            } else if (status === "answered") {
              bgClass = "bg-primary text-white"
            }

            return (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onJumpToQuestion && onJumpToQuestion(i)}
                disabled={!onJumpToQuestion}
                className={`w-full aspect-square rounded-xl flex items-center justify-center text-xs font-semibold transition-all ${bgClass} ${
                  isCurrent ? "ring-2 ring-primary ring-offset-2" : ""
                } ${
                  onJumpToQuestion
                    ? "cursor-pointer hover:shadow-md"
                    : "cursor-default"
                }`}
              >
                {icon || i + 1}
              </motion.button>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-3 gap-2 text-xs text-muted-slate">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-green-500" />
            <span>Đúng</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-red-500" />
            <span>Sai</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-gray-200" />
            <span>Chưa làm</span>
          </div>
        </div>
      </div>

      {/* Score Card */}
      <motion.div
        className="bg-gradient-to-br from-cream to-white rounded-2xl p-4 shadow-soft-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Trophy size={24} className="text-primary" />
          </div>
          <div>
            <div className="text-xs text-muted-slate">Điểm hiện tại</div>
            <div className="text-2xl font-bold text-primary">
              {score}{" "}
              <span className="text-base font-normal text-muted-slate">
                / {totalQuestions}
              </span>
            </div>
          </div>
        </div>
        {answers.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-slate">Tỉ lệ đúng</span>
              <span className="font-semibold text-primary">
                {answers.length > 0
                  ? Math.round((correctCount / answers.length) * 100)
                  : 0}
                %
              </span>
            </div>
            <div className="mt-2 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-2 bg-green-500 rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: `${
                    answers.length > 0
                      ? (correctCount / answers.length) * 100
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>
        )}
      </motion.div>

      {/* Tips Card */}
      <div className="bg-cream/50 rounded-2xl p-4 shadow-soft-lg border border-cream">
        <div className="flex items-center gap-2 mb-2">
          <Info size={16} className="text-primary" />
          <div className="text-sm font-semibold">Gợi ý nhanh</div>
        </div>
        <ul className="text-xs text-muted-slate space-y-1.5">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Đọc kỹ câu hỏi trước khi chọn đáp án.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Nhấn <span className="font-semibold">Xác nhận</span> để kiểm tra.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            Xem giải thích để hiểu rõ hơn.
          </li>
        </ul>
      </div>
    </aside>
  )
}
