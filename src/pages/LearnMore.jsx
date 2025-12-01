import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function LearnMore() {
  return (
    <section className="mt-10">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
        className="max-w-3xl"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl section-title font-bold flex items-center gap-3"
        >
          <span>
            Tìm hiểu thêm về Tư tưởng Hồ Chí Minh về Nhà nước
          </span>
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white">
            <ShieldCheck size={18} />
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-muted-slate text-sm sm:text-base"
        >
          Đây là khu vực tóm lược một số điểm sâu hơn trong giáo trình HCM202:
          bản chất giai cấp công nhân của Nhà nước, sự thống nhất với tính nhân
          dân – tính dân tộc, nguyên tắc pháp quyền xã hội chủ nghĩa và yêu cầu
          xây dựng Nhà nước, Đảng thật sự trong sạch, vững mạnh.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 space-y-5"
        >
          <div className="p-5 rounded-2xl bg-white shadow-soft-lg">
            <h3 className="font-semibold text-sm sm:text-base">
              1. Bản chất giai cấp công nhân, tính nhân dân và tính dân tộc
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-slate">
              Hồ Chí Minh khẳng định Nhà nước Việt Nam mới là Nhà nước dân chủ
              nhân dân, mang bản chất giai cấp công nhân, dựa trên nền tảng liên
              minh công – nông – trí thức do Đảng Cộng sản Việt Nam lãnh đạo.
              Đồng thời, bản chất đó thống nhất với tính nhân dân (Nhà nước vì
              lợi ích của nhân dân lao động) và tính dân tộc (gắn với sự nghiệp
              đấu tranh giành và giữ độc lập, bảo vệ chủ quyền quốc gia).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white shadow-soft-lg">
            <h3 className="font-semibold text-sm sm:text-base">
              2. Nhà nước pháp quyền xã hội chủ nghĩa theo tư tưởng Hồ Chí Minh
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-slate">
              Trong Nhà nước pháp quyền, mọi cơ quan, tổ chức, cá nhân đều phải
              sống và làm việc theo Hiến pháp, pháp luật; quyền lực nhà nước
              được phân công, phối hợp, kiểm soát; pháp luật nghiêm minh bảo vệ
              người lương thiện, trừng trị kẻ vi phạm. Hồ Chí Minh luôn gắn pháp
              luật với đạo đức: vừa dùng pháp luật để đấu tranh chống tiêu cực,
              vừa đề cao giáo dục, nêu gương và cảm hoá con người.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white shadow-soft-lg">
            <h3 className="font-semibold text-sm sm:text-base">
              3. Xây dựng Đảng và Nhà nước trong sạch, vững mạnh
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-slate">
              Muốn Nhà nước thực sự “của Dân, do Dân, vì Dân”, phải xây dựng Đảng
              cầm quyền trong sạch, vững mạnh, có đường lối đúng đắn và tổ chức
              thực hiện tốt; đồng thời phải kiên quyết phòng, chống tham ô, lãng
              phí, quan liêu, đề cao trách nhiệm nêu gương của cán bộ, nhất là
              người đứng đầu.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white shadow-soft-lg">
            <h3 className="font-semibold text-sm sm:text-base">
              Gợi ý câu hỏi thảo luận / ôn tập
            </h3>
            <ul className="mt-2 text-xs sm:text-sm text-muted-slate list-disc list-inside space-y-1.5">
              <li>
                Vì sao nói bản chất giai cấp công nhân của Nhà nước thống nhất
                với tính nhân dân và tính dân tộc?
              </li>
              <li>
                Theo bạn, nguyên tắc “mọi quyền lực nhà nước thuộc về nhân dân”
                được thể hiện qua những cơ chế nào trong thực tiễn hiện nay?
              </li>
              <li>
                Hãy nêu một số biện pháp cơ bản mà Hồ Chí Minh đề xuất để phòng,
                chống tham nhũng, lãng phí trong bộ máy nhà nước.
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


