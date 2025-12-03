import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Trophy } from "lucide-react"
import { quizQuestions } from "../data/quizData"
import QuizIntro from "../components/Quiz/QuizIntro"
import QuizCard from "../components/Quiz/QuizCard"
import QuizResult from "../components/Quiz/QuizResult"
import QuizSidebar from "../components/Quiz/QuizSidebar"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Game() {
  const totalQuestions = 10

  const [gameState, setGameState] = useState("intro")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [randomQuestions, setRandomQuestions] = useState([])

  // Hàm shuffle mảng (Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Hàm lấy random câu hỏi
  const getRandomQuestions = () => {
    const shuffled = shuffleArray(quizQuestions)
    return shuffled.slice(0, totalQuestions)
  }

  // Timer logic
  useEffect(() => {
    let interval = null
    if (gameState === "playing") {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [gameState])

  const handleStart = () => {
    const newQuestions = getRandomQuestions()
    setRandomQuestions(newQuestions)
    setGameState("playing")
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setAnswers([])
    setScore(0)
    setElapsedTime(0)
  }

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer)
  }

  const handleSubmit = () => {
    if (!selectedAnswer) return

    const isCorrect =
      selectedAnswer === randomQuestions[currentQuestion].correctAnswer
    if (isCorrect) {
      setScore((prev) => prev + 1)
    }

    setAnswers((prev) => [...prev, selectedAnswer])
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentQuestion < randomQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setGameState("result")
    }
  }

  const handleRestart = () => {
    setGameState("intro")
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setAnswers([])
    setScore(0)
    setElapsedTime(0)
  }

  return (
    <section className="mt-10">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Left: main content */}
        <div className="lg:col-span-2">
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {gameState === "result" ? (
                <>
                  <Trophy size={18} />
                  <span>Kết quả</span>
                </>
              ) : (
                <>
                  <BookOpen size={18} />
                  <span>Trắc nghiệm HCM202</span>
                </>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl section-title font-bold text-slate-900">
              Nhà nước của Dân, do Dân, vì Dân
            </h1>
            <p className="mt-2 text-muted-slate max-w-2xl mx-auto">
              Kiểm tra kiến thức về tư tưởng Hồ Chí Minh về Nhà nước — giao diện
              cải tiến, trực quan và thân thiện trên máy tính lẫn thiết bị di
              động.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <AnimatePresence mode="wait">
              {gameState === "intro" && (
                <QuizIntro
                  key="intro"
                  totalQuestions={totalQuestions}
                  onStart={handleStart}
                />
              )}

              {gameState === "playing" && randomQuestions.length > 0 && (
                <QuizCard
                  key={`question-${currentQuestion}`}
                  question={randomQuestions[currentQuestion]}
                  currentIndex={currentQuestion}
                  totalQuestions={totalQuestions}
                  selectedAnswer={selectedAnswer}
                  showResult={showResult}
                  onSelectAnswer={handleSelectAnswer}
                  onSubmit={handleSubmit}
                  onNext={handleNext}
                />
              )}

              {gameState === "result" && (
                <QuizResult
                  key="result"
                  score={score}
                  totalQuestions={totalQuestions}
                  answers={answers}
                  questions={randomQuestions}
                  onRestart={handleRestart}
                  elapsedTime={elapsedTime}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right: sidebar */}
        <div className="lg:col-span-1">
          <QuizSidebar
            gameState={gameState}
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            answers={answers}
            score={score}
            questions={randomQuestions}
            elapsedTime={elapsedTime}
          />
        </div>
      </motion.div>
    </section>
  )
}
