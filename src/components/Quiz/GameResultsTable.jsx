import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BarChart3 } from "lucide-react"
import { supabase } from "../../lib/supabaseClient"

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function GameResultsTable() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchResults = async () => {
      try {
        setLoading(true)
        setError(null)

        const { data, error } = await supabase
          .from("game_results")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(20)

        if (!isMounted) return

        if (error) {
          console.error("Lỗi lấy kết quả game từ Supabase:", error.message)
          setError("Không tải được dữ liệu. Vui lòng thử lại sau.")
        } else {
          setResults(data || [])
        }
      } catch (err) {
        if (!isMounted) return
        console.error("Lỗi ngoài ý muốn khi lấy kết quả game:", err)
        setError("Đã xảy ra lỗi khi tải dữ liệu.")
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchResults()

    return () => {
      isMounted = false
    }
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`
  }

  const formatDate = (iso) => {
    if (!iso) return "-"
    const d = new Date(iso)
    return d.toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <section className="mt-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-2 mb-4"
        >
          <BarChart3 size={20} className="text-primary" />
          <h2 className="text-lg sm:text-xl font-semibold section-title">
            Bảng kết quả gần đây
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-white rounded-2xl shadow-soft-lg overflow-hidden border border-white/60"
        >
          {loading ? (
            <div className="py-6 text-center text-sm text-muted-slate">
              Đang tải dữ liệu...
            </div>
          ) : error ? (
            <div className="py-6 text-center text-sm text-red-500">{error}</div>
          ) : results.length === 0 ? (
            <div className="py-6 text-center text-sm text-muted-slate">
              Chưa có ai hoàn thành bài trắc nghiệm.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-cream/70 text-xs uppercase text-muted-slate">
                  <tr>
                    <th className="px-4 py-3 text-left">Người chơi</th>
                    <th className="px-4 py-3 text-center">Điểm</th>
                    <th className="px-4 py-3 text-center hidden sm:table-cell">
                      Số câu
                    </th>
                    <th className="px-4 py-3 text-center hidden sm:table-cell">
                      Thời gian
                    </th>
                    <th className="px-4 py-3 text-right">Lúc chơi</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((row) => (
                    <tr
                      key={row.id}
                      className="border-t border-gray-100 hover:bg-cream/40 transition-colors"
                    >
                      <td className="px-4 py-2.5">
                        <span className="font-medium text-slate-900">
                          {row.player_name || "Khách"}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        <span className="font-semibold text-primary">
                          {row.score}
                        </span>
                        <span className="text-xs text-muted-slate">
                          {" "}
                          / {row.total_questions}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-center hidden sm:table-cell">
                        {row.total_questions}
                      </td>
                      <td className="px-4 py-2.5 text-center hidden sm:table-cell">
                        {formatTime(row.elapsed_time || 0)}
                      </td>
                      <td className="px-4 py-2.5 text-right text-muted-slate">
                        {formatDate(row.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}


