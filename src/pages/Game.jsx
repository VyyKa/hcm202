import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Game() {
  return (
    <section className="mt-10">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="max-w-3xl"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl section-title font-bold"
        >
          Khu vực trò chơi (Quiz &amp; hình ảnh)
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-sm sm:text-base text-muted-slate"
        >
          Trang này sẽ chứa các trò chơi trắc nghiệm, câu hỏi tình huống và hình
          ảnh minh họa liên quan đến tư tưởng Hồ Chí Minh về Nhà nước. Hiện tại
          đây mới là khung giao diện, bạn sẽ bổ sung nội dung câu hỏi và logic
          chấm điểm sau.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-6 p-5 rounded-2xl bg-white shadow-soft-lg border border-white/60 text-sm text-muted-slate"
        >
          Gợi ý: có thể chia khu vực chơi thành các thẻ (card) câu hỏi, mỗi thẻ
          gồm tiêu đề, ảnh minh họa và 3–4 lựa chọn trả lời. Khi người dùng chọn
          xong, hiển thị đáp án đúng và phần giải thích ngắn.
        </motion.div>
      </motion.div>
    </section>
  );
}


