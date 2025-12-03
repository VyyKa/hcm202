import React from "react"
import { motion } from "framer-motion"
import {
  Trophy,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Star,
  Award,
  Target,
  Clock,
  Calendar,
} from "lucide-react"

export default function QuizResult({
  score,
  totalQuestions,
  answers,
  questions,
  onRestart,
  elapsedTime = 0,
}) {
  const percentage = Math.round((score / totalQuestions) * 100)

  // Format time as mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`
  }

  // Format current date
  const formatDate = () => {
    const now = new Date()
    return now.toLocaleDateString("vi-VN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getMessage = () => {
    if (percentage === 100)
      return {
        text: "Xuất sắc! Bạn hiểu rất rõ về tư tưởng Hồ Chí Minh!",
        icon: Trophy,
        color: "text-yellow-500",
      }
    if (percentage >= 80)
      return {
        text: "Rất tốt! Bạn nắm vững kiến thức môn học!",
        icon: Award,
        color: "text-green-500",
      }
    if (percentage >= 60)
      return {
        text: "Khá tốt! Cần ôn tập thêm một chút!",
        icon: Target,
        color: "text-blue-500",
      }
    if (percentage >= 40)
      return {
        text: "Cố gắng hơn! Hãy đọc lại tài liệu nhé!",
        icon: Star,
        color: "text-orange-500",
      }
    return {
      text: "Đừng nản! Hãy học lại và thử lại nhé!",
      icon: Star,
      color: "text-red-500",
    }
  }

  const message = getMessage()
  const MessageIcon = message.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Score Card */}
      <div className="bg-white rounded-2xl shadow-soft-lg p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <MessageIcon size={48} className={message.color} />
        </motion.div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          Kết quả của bạn
        </h2>

        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-5xl sm:text-6xl font-bold text-primary">
            {score}
          </span>
          <span className="text-2xl text-muted-slate">/ {totalQuestions}</span>
        </div>

        {/* Time & Date Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5">
            <Clock size={18} className="text-primary" />
            <div className="text-left">
              <div className="text-xs text-muted-slate">
                Thời gian hoàn thành
              </div>
              <div className="text-sm font-semibold text-slate-900">
                {formatTime(elapsedTime)}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5">
            <Calendar size={18} className="text-primary" />
            <div className="text-left">
              <div className="text-xs text-muted-slate">Ngày hoàn thành</div>
              <div className="text-sm font-semibold text-slate-900">
                {formatDate()}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Ring */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              stroke="#C45A5A"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 352" }}
              animate={{ strokeDasharray: `${(percentage / 100) * 352} 352` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-slate-900">
              {percentage}%
            </span>
          </div>
        </div>

        <p className={`text-lg font-semibold ${message.color}`}>
          {message.text}
        </p>

        <button
          onClick={onRestart}
          className="mt-6 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
        >
          <RotateCcw size={18} />
          Làm lại
        </button>
      </div>

      {/* Answer Review */}
      <div className="bg-white rounded-2xl shadow-soft-lg p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Xem lại đáp án
        </h3>
        <div className="space-y-3">
          {questions.map((q, idx) => {
            const userAnswer = answers[idx]
            const isCorrect = userAnswer === q.correctAnswer

            return (
              <div
                key={q.id}
                className={`p-4 rounded-xl border ${
                  isCorrect
                    ? "border-green-200 bg-green-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isCorrect ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle2 size={18} className="text-white" />
                    ) : (
                      <XCircle size={18} className="text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 line-clamp-2">
                      Câu {idx + 1}: {q.question}
                    </p>
                    <div className="mt-2 text-xs space-y-1">
                      <p className="text-slate-600">
                        <span className="font-medium">Bạn chọn:</span>{" "}
                        <span
                          className={
                            isCorrect ? "text-green-600" : "text-red-600"
                          }
                        >
                          {userAnswer || "Chưa trả lời"}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p className="text-green-600">
                          <span className="font-medium">Đáp án đúng:</span>{" "}
                          {q.correctAnswer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
