import React from "react";
import { motion } from "framer-motion";
import { Users, Scale, Shield, Lightbulb } from "lucide-react";

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
        className="max-w-4xl mx-auto w-full"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl section-title font-bold"
        >
          Tìm hiểu thêm về Tư tưởng Hồ Chí Minh về{" "}
          <span className="whitespace-nowrap">Nhà nước</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-muted-slate text-sm sm:text-base"
        >
          Đây là khu vực tìm hiểu sâu hơn về Tư tưởng Hồ Chí Minh về Nhà nước trong giáo trình HCM202:
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 space-y-6"
        >
          {/* Phần 1: Bản chất giai cấp công nhân */}
          <motion.div
            variants={fadeUp}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-white to-primary/5 shadow-soft-lg border-l-4 border-primary hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <h3 className="font-bold text-lg sm:text-xl text-primary">
                    Bản chất giai cấp công nhân, tính nhân dân và tính dân tộc
                  </h3>
                </div>
            
            <div className="space-y-4 text-sm sm:text-base text-muted-slate">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  a) Bản chất giai cấp của Nhà nước
                </h4>
                <p className="mb-3">
                  Trong tư tưởng Hồ Chí Minh, Nhà nước Việt Nam là nhà nước dân chủ, 
                  nhưng tuyệt nhiên nó không phải là "nhà nước toàn dân", hiểu theo 
                  nghĩa là nhà nước phi giai cấp. Nhà nước ở đâu và bao giờ cũng mang 
                  bản chất của một giai cấp nhất định. Nhà nước Việt Nam mới - Nhà nước 
                  Việt Nam Dân chủ Cộng hòa (nay là Cộng hòa xã hội chủ nghĩa Việt Nam), 
                  theo quan điểm của Hồ Chí Minh, là một nhà nước mang bản chất giai cấp công nhân.
                </p>
                <p className="mb-3 font-semibold text-slate-900">
                  Bản chất giai cấp công nhân của Nhà nước Việt Nam thể hiện trên ba phương diện:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Một là,</strong> Đảng Cộng sản Việt Nam giữ vị trí và vai trò cầm quyền. 
                    Lời nói đầu của bản Hiến pháp năm 1959 khẳng định: "Nhà nước của ta là Nhà nước 
                    dân chủ nhân dân, dựa trên nền tảng liên minh công nông, do giai cấp công nhân 
                    lãnh đạo". Ngay trong quan điểm về nhà nước dân chủ, nhà nước do nhân dân là 
                    người chủ nắm chính quyền, Hồ Chí Minh đã nhấn mạnh nòng cốt của nhân dân là 
                    liên minh công - nông - trí, do giai cấp công nhân mà đội tiên phong của nó là 
                    Đảng Cộng sản Việt Nam lãnh đạo. Đảng cầm quyền bằng các phương thức: 
                    (1) Bằng đường lối, quan điểm, chủ trương để Nhà nước thể chế hóa thành pháp luật, 
                    chính sách, kế hoạch; (2) Bằng hoạt động của các tổ chức đảng và đảng viên của mình 
                    trong bộ máy, cơ quan nhà nước; (3) Bằng công tác kiểm tra.
                  </li>
                  <li>
                    <strong>Hai là,</strong> bản chất giai cấp của Nhà nước Việt Nam thể hiện ở tính 
                    định hướng xã hội chủ nghĩa trong sự phát triển đất nước. Đưa đất nước đi lên chủ 
                    nghĩa xã hội và chủ nghĩa cộng sản là mục tiêu cách mạng nhất quán của Hồ Chí Minh. 
                    Việc giành lấy chính quyền, lập nên Nhà nước Việt Nam mới chính là để giai cấp công 
                    nhân và nhân dân lao động có được một tổ chức mạnh mẽ nhằm thực hiện mục tiêu nói trên.
                  </li>
                  <li>
                    <strong>Ba là,</strong> bản chất giai cấp công nhân của Nhà nước thể hiện ở nguyên 
                    tắc tổ chức và hoạt động của nó là nguyên tắc tập trung dân chủ. Hồ Chí Minh rất 
                    chú ý đến cả hai mặt dân chủ và tập trung trong tổ chức và hoạt động của tất cả 
                    bộ máy, cơ quan nhà nước. Người nhấn mạnh đến sự cần thiết phải phát huy cao độ dân 
                    chủ, đồng thời cũng nhấn mạnh phải phát huy cao độ tập trung, Nhà nước phải tập 
                    trung thống nhất quyền lực để tất cả mọi quyền lực thuộc về nhân dân.
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-white/40">
                <h4 className="font-semibold text-slate-900 mb-2">
                  b) Sự thống nhất giữa bản chất giai cấp công nhân với tính nhân dân và tính dân tộc
                </h4>
                <p className="mb-3">
                  Trong Nhà nước Việt Nam, bản chất giai cấp công nhân thống nhất với tính nhân dân và 
                  tính dân tộc. Hồ Chí Minh là người giải quyết rất thành công mối quan hệ giữa vấn đề 
                  dân tộc với vấn đề giai cấp trong cách mạng Việt Nam. Trong tư tưởng của Người về 
                  Nhà nước mới ở Việt Nam, bản chất giai cấp công nhân của Nhà nước thống nhất với tính 
                  nhân dân và tính dân tộc, thể hiện cụ thể như sau:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Một là,</strong> Nhà nước mới ở Việt Nam ra đời là kết quả của cuộc đấu tranh 
                    lâu dài, gian khổ của nhiều thế hệ người Việt Nam, của toàn thể dân tộc. Từ giữa thế 
                    kỷ XIX, khi đất nước bị ngoại xâm, các tầng lớp nhân dân Việt Nam, hết thế hệ này 
                    đến thế hệ khác đã không quản hy sinh, xương máu chiến đấu cho độc lập, tự do của Tổ 
                    quốc. Từ khi Đảng Cộng sản Việt Nam ra đời, trở thành lực lượng lãnh đạo sự nghiệp 
                    cách mạng của dân tộc, với chiến lược đại đoàn kết đúng đắn, sức mạnh của toàn dân 
                    tộc đã được tập hợp và phát huy cao độ, chiến thắng ngoại xâm, giành lại độc lập, tự 
                    do, lập nên Nhà nước Việt Nam Dân chủ Cộng hòa - nhà nước dân chủ nhân dân đầu tiên 
                    ở Đông Nam Á. Nhà nước Việt Nam mới, do vậy, không phải của riêng giai cấp, tầng lớp 
                    nào, mà là thuộc về nhân dân.
                  </li>
                  <li>
                    <strong>Hai là,</strong> Nhà nước Việt Nam ngay từ khi ra đời đã xác định rõ và 
                    luôn kiên trì, nhất quán mục tiêu vì quyền lợi của nhân dân, lấy quyền lợi của nhân 
                    dân làm mục tiêu cao nhất. Nhà nước mới không phải là công cụ để một giai cấp, một 
                    nhóm người thống trị, áp bức giai cấp, nhóm người khác, mà là công cụ để nhân dân 
                    thực hiện quyền làm chủ của mình, bảo vệ và phát triển lợi ích của mình.
                  </li>
                  <li>
                    <strong>Ba là,</strong> Nhà nước Việt Nam mới gắn liền với sự nghiệp đấu tranh giành 
                    và giữ độc lập dân tộc, bảo vệ chủ quyền quốc gia, thống nhất đất nước. Đây là một 
                    đặc điểm nổi bật của Nhà nước Việt Nam, phản ánh tính dân tộc sâu sắc trong tư tưởng 
                    Hồ Chí Minh về Nhà nước.
                  </li>
                </ul>
              </div>
            </div>
              </div>
            </div>
          </motion.div>

          {/* Phần 2: Nhà nước pháp quyền */}
          <motion.div
            variants={fadeUp}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-white to-accent/5 shadow-soft-lg border-l-4 border-accent hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Scale className="text-accent" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <h3 className="font-bold text-lg sm:text-xl text-accent">
                    Nhà nước pháp quyền xã hội chủ nghĩa theo tư tưởng Hồ Chí Minh
                  </h3>
                </div>
            
            <div className="space-y-4 text-sm sm:text-base text-muted-slate">
              <p>
                Trong Nhà nước pháp quyền, mọi cơ quan, tổ chức, cá nhân đều phải sống và làm việc theo 
                Hiến pháp, pháp luật. Hồ Chí Minh luôn nhấn mạnh: "Trăm đều phải có thần linh pháp quyền" 
                - nghĩa là mọi hoạt động của Nhà nước, của xã hội đều phải tuân theo pháp luật, không có 
                bất cứ vùng cấm nào.
              </p>
              <p>
                Quyền lực nhà nước được phân công, phối hợp, kiểm soát để đảm bảo không có sự lạm quyền, 
                độc đoán. Pháp luật nghiêm minh bảo vệ người lương thiện, trừng trị kẻ vi phạm. Hồ Chí 
                Minh luôn gắn pháp luật với đạo đức: vừa dùng pháp luật để đấu tranh chống tiêu cực, vừa 
                đề cao giáo dục, nêu gương và cảm hoá con người.
              </p>
              <p>
                Nguyên tắc "mọi quyền lực nhà nước thuộc về nhân dân" được thể hiện qua các cơ chế: 
                nhân dân bầu ra các cơ quan đại diện (Quốc hội, Hội đồng nhân dân các cấp), nhân dân 
                tham gia quản lý nhà nước, quản lý xã hội thông qua các hình thức dân chủ trực tiếp và 
                dân chủ đại diện, nhân dân có quyền giám sát, kiểm tra hoạt động của các cơ quan nhà nước, 
                cán bộ, công chức.
              </p>
            </div>
              </div>
            </div>
          </motion.div>

          {/* Phần 3: Xây dựng Đảng và Nhà nước trong sạch, vững mạnh */}
          <motion.div
            variants={fadeUp}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-white to-primary/10 shadow-soft-lg border-l-4 border-primary hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <h3 className="font-bold text-lg sm:text-xl text-primary">
                    Xây dựng Đảng và Nhà nước trong sạch, vững mạnh
                  </h3>
                </div>
            
            <div className="space-y-4 text-sm sm:text-base text-muted-slate">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  a) Xây dựng Đảng thật sự trong sạch, vững mạnh
                </h4>
                <p className="mb-3">
                  Muốn Nhà nước thực sự "của Dân, do Dân, vì Dân", phải xây dựng Đảng cầm quyền trong sạch, 
                  vững mạnh. Theo tư tưởng Hồ Chí Minh, có hai yêu cầu cơ bản:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Phải đề ra đường lối, chủ trương đúng đắn.</strong> Sai một ly thì đi một dặm, 
                    đó là tầm quan trọng của đường lối, chủ trương của Đảng. Đường lối, chủ trương phải 
                    dựa trên nền tảng chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh; phải vận dụng và phát 
                    triển sáng tạo phù hợp với hoàn cảnh của đất nước từng giai đoạn, thời kỳ.
                  </li>
                  <li>
                    <strong>Phải tổ chức thực hiện thật tốt đường lối, chủ trương của Đảng.</strong> Phải 
                    thể chế hóa và phải biến thành hành động tích cực nhất của tất cả các tổ chức của hệ 
                    thống chính trị, trong đó đặc biệt quan trọng là thực thi hiệu quả.
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-white/40">
                <h4 className="font-semibold text-slate-900 mb-2">
                  b) Phòng, chống tiêu cực trong Nhà nước
                </h4>
                <p className="mb-3">
                  Hồ Chí Minh luôn quan tâm đến việc phòng, chống tham ô, lãng phí, quan liêu - những 
                  căn bệnh nguy hiểm có thể làm suy yếu, biến chất Nhà nước. Người chỉ rõ các nguyên nhân 
                  của tiêu cực, bao gồm cả nguyên nhân chủ quan (từ bản thân cán bộ) và nguyên nhân khách 
                  quan (công tác cán bộ chưa tốt, cách tổ chức vận hành chưa khoa học, trình độ phát triển 
                  còn thấp, tàn dư của chế độ cũ, âm mưu chống phá của các lực lượng phản động...).
                </p>
                <p className="mb-3 font-semibold text-slate-900">
                  Các biện pháp cơ bản để phòng, chống tiêu cực:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Một là,</strong> nâng cao trình độ dân chủ trong xã hội, thực hành dân chủ 
                    rộng rãi, phát huy quyền làm chủ của nhân dân là giải pháp căn bản và có ý nghĩa lâu dài.
                  </li>
                  <li>
                    <strong>Hai là,</strong> pháp luật của Nhà nước, kỷ luật của Đảng phải nghiêm minh. 
                    Công tác kiểm tra phải thường xuyên. Cán bộ, đảng viên phải nghiêm túc và tự giác tuân 
                    thủ pháp luật, kỷ luật. Đối với những kẻ thoái hóa, biến chất, pháp luật phải "thẳng 
                    tay trừng trị", bất kỳ kẻ ấy ở địa vị nào, làm nghề nghiệp gì. Trong Nhà nước "trăm 
                    đều phải có thần linh pháp quyền" thì tuyệt nhiên không có bất cứ vùng cấm nào.
                  </li>
                  <li>
                    <strong>Ba là,</strong> phạt nghiêm minh, nghiêm khắc, đúng người đúng tội là cần thiết, 
                    song việc gì cũng xử phạt thì lại không đúng. Cần coi trọng giáo dục, lấy giáo dục, 
                    cảm hóa làm chủ yếu. Chỉ có như vậy mới làm cho cái tốt trong mỗi người được phát huy 
                    và cái xấu mất dần đi. Trong giáo dục cán bộ, phải coi trọng giáo dục đạo đức, xây dựng 
                    hệ chuẩn mực đạo đức của người cầm quyền, khơi dậy lương tâm trong mỗi con người. Hồ 
                    Chí Minh chỉ rõ: "cán bộ các cơ quan, các đoàn thể, cấp cao thì quyền to, cấp thấp 
                    thì quyền nhỏ. Dù to hay nhỏ, có quyền mà thiếu lương tâm là có dịp đục khoét, có dịp 
                    ăn của đút, có dịp 'dĩ công vi tư'".
                  </li>
                  <li>
                    <strong>Bốn là,</strong> cán bộ phải đi trước làm gương, cán bộ giữ chức vụ càng cao, 
                    trách nhiệm nêu gương càng lớn. Cán bộ, đặc biệt là người đứng đầu, có ý thức nêu gương 
                    tu dưỡng đạo đức, chống tiêu cực sẽ có tác động rất mạnh mẽ đến cấp dưới, đến nhân dân, 
                    góp phần gây nên những đức tính tốt trong nhân dân. Đây là một nét đặc sắc trong văn 
                    hoá chính trị Việt Nam.
                  </li>
                  <li>
                    <strong>Năm là,</strong> phải huy động sức mạnh của chủ nghĩa yêu nước vào cuộc chiến 
                    chống lại tiêu cực trong con người, trong xã hội và trong bộ máy nhà nước. Bất kỳ người 
                    Việt Nam nào có lòng tự hào, tự tôn dân tộc, thì dù là người dân bình thường, hay cán bộ, 
                    đảng viên, thì đều phải có trách nhiệm tu dưỡng và thực hành đạo đức cách mạng.
                  </li>
                </ul>
              </div>
            </div>
              </div>
            </div>
          </motion.div>

          {/* Phần 4: Vận dụng tư tưởng Hồ Chí Minh */}
          <motion.div
            variants={fadeUp}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-white to-accent/10 shadow-soft-lg border-l-4 border-accent hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Lightbulb className="text-accent" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <h3 className="font-bold text-lg sm:text-xl text-accent">
                    Vận dụng tư tưởng Hồ Chí Minh vào công tác xây dựng Đảng và xây dựng Nhà nước
                  </h3>
                </div>
            
            <div className="space-y-4 text-sm sm:text-base text-muted-slate">
              <p>
                Tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân có giá trị lý luận 
                và thực tiễn sâu sắc, là kim chỉ nam cho công cuộc xây dựng và hoàn thiện Nhà nước pháp 
                quyền xã hội chủ nghĩa Việt Nam hiện nay.
              </p>
              <p>
                Việc vận dụng tư tưởng Hồ Chí Minh đòi hỏi phải luôn kiên trì mục tiêu xây dựng Nhà nước 
                thực sự của dân, do dân, vì dân; phải không ngừng đổi mới, hoàn thiện tổ chức và hoạt động 
                của bộ máy nhà nước; phải kiên quyết đấu tranh chống tham nhũng, lãng phí, quan liêu; phải 
                phát huy dân chủ, tăng cường pháp chế, xây dựng đội ngũ cán bộ, công chức trong sạch, có 
                năng lực, phẩm chất đạo đức tốt.
              </p>
            </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}


