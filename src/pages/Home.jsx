import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import anhbacho from "../assets/anhbacho.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function FlipCard({ frontTitle, backText }) {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <div
      className={`flip-card w-full h-44 sm:h-52 ${
        flipped ? "flipped" : ""
      }`}
      onClick={() => setFlipped((s) => !s)}
    >
      <div className="flip-card-inner bg-white shadow-soft-lg rounded-2xl hover:bg-primary/20 transition-colors duration-200 cursor-pointer">
        <div className="flip-card-front p-6 text-center flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-slate-900">
            {frontTitle}
          </h3>
          <p className="mt-2 text-sm text-muted-slate">Chạm để xem</p>
        </div>
        <div className="flip-card-back bg-cream p-6 text-center">
          <p className="text-sm text-slate-900">{backText}</p>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ year, title, content, i, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      className="relative flex gap-4"
    >
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow z-10">
          <Clock size={18} />
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-primary/30 mt-2 min-h-[60px]" />
        )}
      </div>
      <div className="flex-1 pb-10">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
            {year}
          </span>
          <div className="text-sm font-semibold section-title">
            {title}
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-slate">{content}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[68vh] flex items-center" aria-label="Hero">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={fadeUp} className="py-12">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl section-title leading-tight font-bold"
              style={{ color: "#1A1A1A" }}
            >
              Tư tưởng{" "}
              <span className="whitespace-nowrap text-primary">
                Hồ Chí Minh
              </span>
              <br />
              về Nhà nước
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-xl">
              <span className="font-semibold">
                Nhà nước của Dân, do Dân, vì Dân.
              </span>{" "}
              Trong tư tưởng Hồ Chí Minh, đó là Nhà nước mang bản chất giai cấp
              công nhân, do Đảng Cộng sản Việt Nam lãnh đạo, nhưng đồng thời
              thống nhất chặt chẽ với tính nhân dân và tính dân tộc.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const element = document.getElementById('section1');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-4 py-2 rounded-lg bg-primary text-white shadow-sm hover:bg-primary/90 transition-colors duration-200"
              >
                Khám phá
              </button>
              <a
                href="/game"
                className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Trò chơi
              </a>
              <a
                href="/flipbook"
                className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Flipbook câu chuyện
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="py-12">
            <div className="w-full h-64 sm:h-80 rounded-2xl shadow-soft-lg overflow-hidden">
              <img
                src={anhbacho}
                alt="Hình ảnh Bác Hồ làm việc"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 4 - Giới thiệu về Cuộc đời Bác Hồ */}
      {/* <section className="mt-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h2 className="text-2xl section-title font-bold mb-3">
                  Tìm hiểu về Cuộc đời Chủ tịch Hồ Chí Minh
                </h2>
                <p className="text-muted-slate mb-4 max-w-2xl">
                  Khám phá hành trình 79 năm của Người từ một người con yêu nước
                  đến vị lãnh tụ vĩ đại, người đã tìm ra con đường giải phóng dân
                  tộc và xây dựng đất nước độc lập, tự do, hạnh phúc.
                </p>
                <Link
                  to="/biography"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors duration-200 shadow-sm"
                >
                  <span>Xem dòng thời gian cuộc đời</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
              <div className="w-full md:w-48 flex-shrink-0">
                <div className="aspect-square rounded-xl bg-primary/5 border-2 border-primary/20 flex items-center justify-center">
                  <Clock size={48} className="text-primary/40" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section> */}

      {/* SECTION 1 - Nhà nước Dân chủ */}
      <section id="section1" className="mt-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl section-title font-bold"
          >
            Nhà nước Dân chủ
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-muted-slate max-w-2xl"
          >
            Bản chất giai cấp công nhân, tính nhân dân và tính dân tộc là ba trụ
            cột thống nhất trong một Nhà nước. Nhà nước vừa thể hiện vai trò
            lãnh đạo của giai cấp công nhân và Đảng Cộng sản Việt Nam, vừa là
            kết quả và công cụ của toàn thể nhân dân trong sự nghiệp xây dựng
            chủ nghĩa xã hội.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-2xl shadow-soft-lg">
                <h3 className="font-semibold">Bản chất giai cấp công nhân</h3>
                <p className="mt-2 text-sm text-muted-slate">
                  Nhà nước ta là Nhà nước dân chủ nhân dân, dựa trên nền tảng
                  liên minh công – nông – trí thức do giai cấp công nhân và Đảng
                  Cộng sản Việt Nam lãnh đạo; lấy định hướng xã hội chủ nghĩa làm
                  mục tiêu phát triển lâu dài.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-soft-lg">
                <h3 className="font-semibold">Tính nhân dân</h3>
                <p className="mt-2 text-sm text-muted-slate">
                  Nhà nước ra đời từ cuộc đấu tranh lâu dài, gian khổ của nhiều
                  thế hệ nhân dân; mọi đường lối, chính sách đều phải vì lợi ích
                  của nhân dân lao động, bảo đảm nhân dân là chủ và làm chủ.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-soft-lg">
                <h3 className="font-semibold">Tính dân tộc</h3>
                <p className="mt-2 text-sm text-muted-slate">
                  Nhà nước gắn chặt với sự nghiệp đấu tranh giành và giữ độc lập
                  dân tộc, bảo vệ chủ quyền quốc gia, kế thừa và phát huy các
                  giá trị tốt đẹp của lịch sử và văn hoá Việt Nam.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FlipCard
                  frontTitle="Quyền lực"
                  backText="Quyền lực là của nhân dân; nhà nước quản lý và thực hiện quyền lực theo pháp luật."
                />
                <FlipCard
                  frontTitle="Dân là chủ"
                  backText="Những quyết định quan trọng đều cần phản ánh ý chí, lợi ích của đại đa số nhân dân."
                />
              </div>

              <div className="p-4">
                <div className="text-sm text-muted-slate">Ví dụ thực tiễn:</div>
                <ul className="mt-2 text-sm list-disc list-inside text-muted-slate">
                  <li>Tham gia bầu cử, trưng cầu ý dân và giám sát cơ quan nhà nước.</li>
                  <li>Thực hiện quyền khiếu nại, tố cáo, phản biện xã hội.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2 - Nhà nước Pháp quyền (Timeline) */}
      <section id="section2" className="mt-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl section-title font-bold"
          >
            Nhà nước Pháp quyền
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-muted-slate max-w-2xl"
          >
            Thượng tôn pháp luật là nguyên tắc nền tảng: mọi cơ quan, cán bộ và
            công dân đều phải sống và làm việc theo Hiến pháp và pháp luật; mọi
            quyền lực nhà nước đều được phân công, phối hợp và kiểm soát chặt
            chẽ.
          </motion.p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2 bg-white p-6 rounded-2xl shadow-soft-lg">
              <div className="flex-1">
                <TimelineItem
                  i={0}
                  year="1946"
                  title="Hiến pháp 1946"
                  content="Khẳng định quyền làm chủ của nhân dân, mở đầu cho việc xây dựng Nhà nước Việt Nam Dân chủ Cộng hòa – nhà nước dân chủ nhân dân đầu tiên ở Đông Nam Á."
                  isLast={false}
                />
                <TimelineItem
                  i={1}
                  year="1959"
                  title="Bổ sung nguyên tắc pháp quyền"
                  content="Khẳng định rõ Nhà nước dân chủ nhân dân dựa trên nền tảng liên minh công – nông, do giai cấp công nhân lãnh đạo; thể chế hoá nhiều nguyên tắc pháp quyền xã hội chủ nghĩa."
                  isLast={false}
                />
                <TimelineItem
                  i={2}
                  year="Nhiều giai đoạn"
                  title="Đạo đức và Pháp luật"
                  content="Hồ Chí Minh nhấn mạnh mối quan hệ giữa đạo đức và pháp luật: pháp luật phải bảo vệ người lương thiện, trừng trị kẻ xấu, đồng thời góp phần giáo dục, cảm hoá con người."
                  isLast={true}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-primary text-white flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} className="flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold">Nguyên tắc</h4>
                  <p className="mt-2 text-sm text-muted-slate">
                    Hợp hiến, hợp pháp; mọi hành động của Nhà nước phải có căn
                    cứ pháp luật và chịu giám sát của nhân dân.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-sm font-semibold">
                  Tương quan đạo đức - pháp luật
                </h5>
                <p className="mt-2 text-sm text-muted-slate">
                  Đạo đức là nền tảng cho pháp luật; pháp luật là công cụ bảo
                  đảm công bằng, trật tự xã hội.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 - Trong sạch, vững mạnh (2x2 grid) */}
      <section id="section3" className="mt-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl section-title font-bold"
          >
            Nhà nước Trong sạch, Vững mạnh
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-muted-slate max-w-2xl"
          >
            Tinh thần cần, kiệm, liêm, chính; chống tham ô, lãng phí, quan liêu;
            kiểm soát quyền lực để phục vụ nhân dân. Muốn vậy phải phát huy dân
            chủ, thực thi pháp luật nghiêm minh, kết hợp chặt chẽ giữa giáo dục,
            nêu gương và xử lý kỷ luật, pháp luật.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="group relative overflow-hidden rounded-2xl p-6 bg-white shadow-soft-lg transform transition-all">
              <motion.div whileHover={{ scale: 1.02 }} className="h-full">
                <h4 className="font-semibold">Cần, Kiệm</h4>
                <p className="mt-2 text-sm text-muted-slate">
                  Lối sống giản dị, tiết kiệm, chống xa hoa lãng phí trong bộ
                  máy công quyền.
                </p>
              </motion.div>
              <div className="absolute -right-8 -top-8 opacity-30 text-9xl font-bold text-primary select-none">
                C
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl p-6 bg-white shadow-soft-lg transform transition-all">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h4 className="font-semibold">Liêm, Chính</h4>
                <p className="mt-2 text-sm text-muted-slate">
                  Chính trực, liêm khiết, không tham nhũng; cán bộ phải lấy dân
                  làm gốc.
                </p>
              </motion.div>
              <div className="absolute -right-8 -top-8 opacity-30 text-9xl font-bold text-primary select-none">
                L
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl p-6 bg-white shadow-soft-lg transform transition-all">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h4 className="font-semibold">Kiểm soát quyền lực</h4>
                <p className="mt-2 text-sm text-muted-slate">
                  Cơ chế giám sát, phân chia quyền lực, minh bạch thông tin để
                  ngăn lạm quyền.
                </p>
              </motion.div>
              <div className="absolute -right-8 -top-8 opacity-30 text-9xl font-bold text-primary select-none">
                K
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl p-6 bg-white shadow-soft-lg transform transition-all">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h4 className="font-semibold">
                  Chống tham ô, lãng phí, quan liêu
                </h4>
                <p className="mt-2 text-sm text-muted-slate">
                  Thanh tra, kiểm tra, và trách nhiệm pháp lý nghiêm minh đối
                  với hành vi tham nhũng.
                </p>
              </motion.div>
              <div className="absolute -right-8 -top-8 opacity-30 text-9xl font-bold text-primary select-none">
                C
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

    </>
  );
}


