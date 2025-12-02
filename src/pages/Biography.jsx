import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, BookOpen, Award, Globe, Heart } from "lucide-react";
import anhbac2 from "../assets/anhbac2.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function TimelineEvent({ year, title, content, location, i, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="relative flex gap-6"
    >
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg z-10 border-4 border-white">
          <Clock size={20} />
        </div>
        {!isLast && (
          <div className="w-1 h-full bg-primary/30 mt-2 min-h-[80px]" />
        )}
      </div>
      <div className="flex-1 pb-12">
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
            {year}
          </span>
          <h3 className="text-lg font-semibold section-title text-slate-900">
            {title}
          </h3>
        </div>
        {location && (
          <div className="flex items-center gap-1 text-xs text-muted-slate mb-2">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        )}
        <p className="text-sm text-muted-slate leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
}

export default function Biography() {
  const timelineEvents = [
    {
      year: "1890",
      title: "Sinh ra tại làng Kim Liên",
      location: "Nghệ An, Việt Nam",
      content:
        "Nguyễn Sinh Cung (sau này là Nguyễn Ái Quốc, Hồ Chí Minh) sinh ra trong một gia đình nhà nho yêu nước. Cha là Nguyễn Sinh Sắc (một nhà nho, từng đỗ Phó bảng), mẹ là Hoàng Thị Loan. Người được nuôi dưỡng trong môi trường giàu truyền thống yêu nước và hiếu học.",
    },
    {
      year: "1906-1910",
      title: "Học tập và tiếp thu tư tưởng yêu nước",
      location: "Huế, Việt Nam",
      content:
        "Người theo cha vào Huế học tập, tiếp xúc với các phong trào yêu nước, đọc nhiều sách báo tiến bộ. Năm 1910, Người vào học Trường Quốc học Huế, nơi Người tiếp thu tư tưởng cách mạng và quyết tâm tìm đường cứu nước.",
    },
    {
      year: "1911",
      title: "Ra đi tìm đường cứu nước",
      location: "Sài Gòn → Pháp",
      content:
        "Với tên Văn Ba, Người rời Việt Nam trên con tàu Amiral Latouche-Tréville từ bến Nhà Rồng (Sài Gòn), bắt đầu hành trình 30 năm bôn ba khắp năm châu bốn biển để tìm đường giải phóng dân tộc.",
    },
    {
      year: "1911-1917",
      title: "Bôn ba qua nhiều nước",
      location: "Pháp, Anh, Mỹ, châu Phi...",
      content:
        "Người làm nhiều nghề khác nhau trên các con tàu, đi qua nhiều nước ở châu Á, châu Phi, châu Mỹ, châu Âu. Qua đó, Người học hỏi kinh nghiệm đấu tranh của các dân tộc bị áp bức và nhận thức rõ bản chất của chủ nghĩa đế quốc.",
    },
    {
      year: "1919",
      title: "Gửi Yêu sách của nhân dân An Nam",
      location: "Versailles, Pháp",
      content:
        "Với tên Nguyễn Ái Quốc, Người gửi bản yêu sách 8 điểm đòi quyền tự do, dân chủ, bình đẳng cho nhân dân Việt Nam tại Hội nghị Hòa bình Versailles. Đây là lần đầu tiên tiếng nói của nhân dân Việt Nam được vang lên trên trường quốc tế.",
    },
    {
      year: "1920",
      title: "Tham gia thành lập Đảng Cộng sản Pháp",
      location: "Tours, Pháp",
      content:
        "Tại Đại hội Tours, Nguyễn Ái Quốc trở thành một trong những người sáng lập Đảng Cộng sản Pháp. Người tìm thấy con đường giải phóng dân tộc qua cách mạng vô sản và chủ nghĩa Mác-Lênin.",
    },
    {
      year: "1921-1923",
      title: "Hoạt động cách mạng ở Pháp và Liên Xô",
      location: "Pháp, Liên Xô",
      content:
        "Người thành lập Hội Liên hiệp thuộc địa, xuất bản báo Le Paria (Người cùng khổ). Năm 1923, Người sang Liên Xô học tập và nghiên cứu kinh nghiệm cách mạng, tham gia Đại hội Quốc tế Cộng sản lần thứ V.",
    },
    {
      year: "1924-1927",
      title: "Hoạt động cách mạng ở Trung Quốc",
      location: "Quảng Châu, Trung Quốc",
      content:
        "Người thành lập Hội Việt Nam Cách mạng Thanh niên, xuất bản báo Thanh niên, mở các lớp huấn luyện cán bộ cách mạng. Người viết tác phẩm 'Đường Kách mệnh' - cuốn sách giáo khoa đầu tiên về lý luận cách mạng cho cán bộ Việt Nam.",
    },
    {
      year: "1930",
      title: "Thành lập Đảng Cộng sản Việt Nam",
      location: "Hồng Kông",
      content:
        "Người chủ trì Hội nghị hợp nhất các tổ chức cộng sản tại Hồng Kông, thành lập Đảng Cộng sản Việt Nam (sau đổi tên thành Đảng Cộng sản Đông Dương). Đây là bước ngoặt quan trọng trong lịch sử cách mạng Việt Nam.",
    },
    {
      year: "1941",
      title: "Về nước lãnh đạo cách mạng",
      location: "Cao Bằng, Việt Nam",
      content:
        "Sau 30 năm bôn ba, Người trở về nước tại Pác Bó (Cao Bằng). Người thành lập Mặt trận Việt Minh (Việt Nam Độc lập Đồng minh), xây dựng căn cứ địa cách mạng và lãnh đạo cuộc đấu tranh giành độc lập dân tộc.",
    },
    {
      year: "1945",
      title: "Đọc Tuyên ngôn Độc lập",
      location: "Hà Nội, Việt Nam",
      content:
        "Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa - nhà nước dân chủ nhân dân đầu tiên ở Đông Nam Á. Người trở thành Chủ tịch nước đầu tiên của nước Việt Nam độc lập.",
    },
    {
      year: "1946-1954",
      title: "Lãnh đạo kháng chiến chống thực dân Pháp",
      location: "Việt Nam",
      content:
        "Người lãnh đạo cuộc kháng chiến toàn dân, toàn diện chống thực dân Pháp xâm lược. Dưới sự lãnh đạo của Người, quân và dân Việt Nam giành thắng lợi vẻ vang tại Điện Biên Phủ (1954), buộc Pháp phải ký Hiệp định Geneva, chấm dứt chiến tranh Đông Dương.",
    },
    {
      year: "1954-1969",
      title: "Lãnh đạo xây dựng miền Bắc và đấu tranh thống nhất đất nước",
      location: "Hà Nội, Việt Nam",
      content:
        "Người lãnh đạo công cuộc khôi phục và phát triển kinh tế miền Bắc, xây dựng chủ nghĩa xã hội, đồng thời lãnh đạo cuộc đấu tranh giải phóng miền Nam, thống nhất đất nước. Năm 1987, UNESCO tôn vinh Người là 'Anh hùng giải phóng dân tộc, nhà văn hóa kiệt xuất của Việt Nam'.",
    },
    {
      year: "1969",
      title: "Qua đời",
      location: "Hà Nội, Việt Nam",
      content:
        "Ngày 2/9/1969, Chủ tịch Hồ Chí Minh qua đời tại Hà Nội, để lại di chúc lịch sử và tư tưởng cách mạng vĩ đại cho dân tộc Việt Nam. Người đã cống hiến trọn đời mình cho sự nghiệp giải phóng dân tộc, thống nhất đất nước, và xây dựng một nước Việt Nam độc lập, tự do, hạnh phúc.",
    },
  ];

  return (
    <section className="mt-10">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row gap-6 items-start mb-8"
        >
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl section-title font-bold mb-4">
              Cuộc đời và Sự nghiệp Chủ tịch Hồ Chí Minh
            </h1>
            <div className="text-muted-slate max-w-2xl space-y-3 text-base leading-relaxed">
              <p>
                Hành trình 79 năm của Người từ một người con yêu nước đến vị lãnh
                tụ vĩ đại của dân tộc Việt Nam, người đã tìm ra con đường giải phóng
                và xây dựng đất nước độc lập, tự do, hạnh phúc.
              </p>
              <p>
                Sinh ra trong gia đình nhà nho yêu nước ở Nghệ An, Người sớm tiếp thu tư tưởng cách mạng và quyết tâm tìm đường cứu nước. Với hành trình 30 năm bôn ba qua hơn 30 quốc gia trên 4 châu lục, Người đã học hỏi kinh nghiệm đấu tranh của các dân tộc bị áp bức, tìm thấy ánh sáng của chủ nghĩa Mác-Lênin và con đường giải phóng dân tộc.
              </p>
              <p>
                Người không chỉ là nhà cách mạng lỗi lạc mà còn là nhà văn hóa kiệt xuất, để lại di sản tư tưởng vĩ đại về độc lập dân tộc gắn liền với chủ nghĩa xã hội, về dân chủ và nhân quyền, về đạo đức cách mạng và lối sống giản dị, thanh cao. Tư tưởng của Người đã trở thành nền tảng lý luận và kim chỉ nam cho cách mạng Việt Nam.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-64">
            <div className="rounded-2xl overflow-hidden shadow-soft-lg mb-3">
              <img
                src={anhbac2}
                alt="Chủ tịch Hồ Chí Minh"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900">Hồ Chí Minh</div>
              <div className="text-sm text-muted-slate mt-1">1890 - 1969</div>
            </div>
          </div>
        </motion.div>

        {/* Section điểm nổi bật */}
        <motion.div
          variants={fadeUp}
          className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="bg-white rounded-2xl p-5 shadow-soft-lg border border-white/60">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm">30 năm bôn ba</h3>
            </div>
            <p className="text-xs text-muted-slate leading-relaxed">
              Người đã đi qua hơn 30 quốc gia trên 4 châu lục để tìm đường cứu nước, học hỏi kinh nghiệm cách mạng của các dân tộc bị áp bức.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-soft-lg border border-white/60">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm">UNESCO tôn vinh</h3>
            </div>
            <p className="text-xs text-muted-slate leading-relaxed">
              Năm 1987, UNESCO công nhận Người là "Anh hùng giải phóng dân tộc, nhà văn hóa kiệt xuất của Việt Nam".
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-soft-lg border border-white/60">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm">79 năm cống hiến</h3>
            </div>
            <p className="text-xs text-muted-slate leading-relaxed">
              Người đã cống hiến trọn đời mình cho sự nghiệp giải phóng dân tộc, thống nhất đất nước, vì độc lập, tự do, hạnh phúc của nhân dân.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-soft-lg p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-md bg-primary text-white flex items-center justify-center">
              <BookOpen size={20} />
            </div>
            <h2 className="text-xl font-semibold section-title">
              Dòng thời gian cuộc đời
            </h2>
          </div>

          <div className="relative">
            {timelineEvents.map((event, idx) => (
              <TimelineEvent
                key={idx}
                i={idx}
                year={event.year}
                title={event.title}
                content={event.content}
                location={event.location}
                isLast={idx === timelineEvents.length - 1}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 bg-cream rounded-2xl p-6 border border-white/60"
        >
          <h3 className="font-semibold mb-3 section-title">Di sản và Ảnh hưởng</h3>
          <div className="space-y-3 text-sm text-muted-slate leading-relaxed">
            <p>
              Chủ tịch Hồ Chí Minh là một nhà ái quốc chân chính, nhà cách mạng sáng suốt, vị lãnh tụ thiên tài. Cuộc đời và sự nghiệp cách mạng của Người gắn liền với lịch sử vẻ vang của dân tộc Việt Nam.
            </p>
            <p>
              Người đã cống hiến trọn đời mình cho sự nghiệp giải phóng dân tộc của nhân dân Việt Nam, góp phần vào cuộc đấu tranh chung của các dân tộc vì hòa bình, độc lập, dân chủ và tiến bộ xã hội.
            </p>
            <p>
              Năm 1987, Tổ chức Giáo dục, Khoa học và Văn hóa Liên hợp quốc (UNESCO) đã tôn vinh Hồ Chí Minh là <strong>"Anh hùng giải phóng dân tộc, nhà văn hóa kiệt xuất của Việt Nam"</strong>.
            </p>
            <p>
              Tư tưởng Hồ Chí Minh về độc lập dân tộc, dân chủ, và chủ nghĩa xã hội đã trở thành nền tảng lý luận cho cách mạng Việt Nam. Người để lại di sản văn hóa, đạo đức cách mạng, và tấm gương sáng về lối sống giản dị, thanh cao, vì dân, vì nước.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

