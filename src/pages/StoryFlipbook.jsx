import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function StoryFlipbook() {
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
          Flipbook câu chuyện
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-sm sm:text-base text-muted-slate"
        >
          Đây sẽ là nơi kể một câu chuyện (theo dạng lật trang) minh họa tư
          tưởng Hồ Chí Minh về Nhà nước của Dân, do Dân, vì Dân. Mỗi trang có
          thể là một hình ảnh/khung truyện ngắn kèm đoạn mô tả ngắn gọn.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-6 p-5 rounded-2xl bg-white shadow-soft-lg border border-white/60 text-sm text-muted-slate"
        >
          Hiện tại mới là phần khung để bạn dễ thiết kế: sau này bạn có thể
          thêm hiệu ứng lật trang, thanh tiến độ (page 1/5, 2/5, ...) và nút
          &quot;Tiếp&quot; / &quot;Quay lại&quot; cho từng trang truyện.
        </motion.div>
      </motion.div>
    </section>
  );
}


