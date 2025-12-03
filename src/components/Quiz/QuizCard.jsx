import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react"

export default function QuizCard({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  showResult,
  onSelectAnswer,
  onSubmit,
  onNext,
}) {
  const isCorrect = selectedAnswer === question.correctAnswer

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-soft-lg p-6 sm:p-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <HelpCircle size={20} className="text-primary" />
          </div>
          <span className="text-sm font-semibold text-muted-slate">
            Câu {currentIndex + 1}/{totalQuestions}
          </span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex
                  ? "bg-primary"
                  : i < currentIndex
                  ? "bg-primary/40"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-6 leading-relaxed">
        {question.question}
      </h3>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.key
          const isCorrectOption = option.key === question.correctAnswer

          let optionStyle =
            "border-gray-200 hover:border-primary/50 hover:bg-primary/5"

          if (showResult) {
            if (isCorrectOption) {
              optionStyle = "border-green-500 bg-green-50"
            } else if (isSelected && !isCorrectOption) {
              optionStyle = "border-red-500 bg-red-50"
            } else {
              optionStyle = "border-gray-200 opacity-60"
            }
          } else if (isSelected) {
            optionStyle = "border-primary bg-primary/10"
          }

          return (
            <motion.button
              key={option.key}
              whileHover={!showResult ? { scale: 1.01 } : {}}
              whileTap={!showResult ? { scale: 0.99 } : {}}
              onClick={() => !showResult && onSelectAnswer(option.key)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${optionStyle}`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    showResult && isCorrectOption
                      ? "bg-green-500 text-white"
                      : showResult && isSelected && !isCorrectOption
                      ? "bg-red-500 text-white"
                      : isSelected
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-slate-700"
                  }`}
                >
                  {showResult && isCorrectOption ? (
                    <CheckCircle2 size={18} />
                  ) : showResult && isSelected && !isCorrectOption ? (
                    <XCircle size={18} />
                  ) : (
                    option.key
                  )}
                </span>
                <span className="text-sm sm:text-base text-slate-700 pt-1">
                  {option.text}
                </span>
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 p-4 rounded-xl ${
            isCorrect
              ? "bg-green-50 border border-green-200"
              : "bg-amber-50 border border-amber-200"
          }`}
        >
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle2
                className="text-green-600 flex-shrink-0 mt-0.5"
                size={20}
              />
            ) : (
              <XCircle
                className="text-red-500 flex-shrink-0 mt-0.5"
                size={20}
              />
            )}
            <div>
              <p
                className={`font-semibold ${
                  isCorrect ? "text-green-700" : "text-red-600"
                }`}
              >
                {isCorrect ? "Chính xác!" : "Chưa đúng!"}
              </p>
              <p className="text-sm text-slate-700 mt-1">
                {question.explanation}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Action Button */}
      <div className="mt-6 flex justify-end">
        {!showResult ? (
          <button
            onClick={onSubmit}
            disabled={!selectedAnswer}
            className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${
              selectedAnswer
                ? "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Xác nhận
          </button>
        ) : (
          <button
            onClick={onNext}
            className="px-6 py-2.5 rounded-xl font-semibold bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
          >
            {currentIndex < totalQuestions - 1
              ? "Câu tiếp theo"
              : "Xem kết quả"}
          </button>
        )}
      </div>
    </motion.div>
  )
}
