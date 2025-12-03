import React, { useState, useEffect, useRef, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import coverAudio from "../audio/cover.mp3";
import page1Audio from "../audio/page-1.mp3";
import page2Audio from "../audio/page-2.mp3";
import page3Audio from "../audio/page-3.mp3";
import page4Audio from "../audio/page-4.mp3";
import page5Audio from "../audio/page-5.mp3";
import page6Audio from "../audio/page-6.mp3";
import endAudio from "../audio/end.mp3";

const pages = [
  {
    id: 0,
    type: "cover",
    title: "",
    subtitle: "Câu chuyện Chiếc ghế và lòng dân dưới đây là một lời nhắc nhở sâu sắc về những giá trị cốt lõi, được kể lại qua lăng kính của những người đã và đang cống hiến",
    image: "/pages/start.png",
    audio: "Chào bạn đọc thân mến, Trong hành trình xây dựng và phát triển đất nước, tư tưởng Hồ Chí Minh về đạo đức cách mạng, về mối quan hệ giữa quan và dân luôn là kim chỉ nam soi sáng. Câu chuyện Chiếc ghế và lòng dân dưới đây là một lời nhắc nhở sâu sắc về những giá trị cốt lõi ấy, được kể lại qua lăng kính của những người đã và đang cống hiến. Mời bạn cùng lắng nghe"
  },
  {
    id: 1,
    title: "",
    content: "Khi người phụ nữ cất lời về lá đơn khiếu nại đất đai, ông Hách-chủ tịch xã, chỉ hờ hững đáp lời mà không hề ngẩng mặt. Sự coi thường thể hiện rõ rệt, biến văn phòng tiếp dân thành một nơi xa cách, đầy quyền lực và sự lạnh nhạt",
    image: "/pages/page1.png",
    audio: "Trong căn phòng tiếp dân của Ủy ban xã, không khí luôn đặc quánh sự chờ đợi và lo lắng. Hôm nay cũng vậy, một người phụ nữ với những xấp giấy tờ trên tay đứng rụt rè, đôi mắt dõi về phía chiếc bàn làm việc. Ông Hách, vị Chủ tịch xã, đang ngồi vắt chân, dán mắt vào màn hình điện thoại. Khi người phụ nữ cất lời về lá đơn khiếu nại đất đai, ông chỉ hờ hững đáp lời mà không hề ngẩng mặt. Sự coi thường thể hiện rõ rệt, biến văn phòng tiếp dân thành một nơi xa cách, đầy quyền lực và sự lạnh nhạt. Ông Hách tự cho mình là người quyết định tất cả, gạt bỏ mọi thắc mắc của người dân bằng giọng điệu hách dịch. Ông cho rằng luật nằm trong tay ông, và người dân chỉ biết nghe theo. Ông hùng hồn tuyên bố: Tôi là người đứng đầu ở đây, tôi quyết lúc nào thì được lúc đấy. Dân thì biết gì mà luật với lá. Các người bầu tôi lên, giờ tôi có quyền."
  },
  {
    id: 2,
    title: "",
    content: "Đúng lúc đó, Bác Trung, một cựu chiến binh với gương mặt hiền hậu nhưng ánh mắt cương nghị, và cô Lan, một cán bộ tư pháp trẻ trung, đầy nhiệt huyết, bước vào. Họ lắng nghe những lời lẽ đầy quyền uy của ông Hách",
    image: "/pages/page2.png",
    audio: "Đúng lúc đó, Bác Trung, một cựu chiến binh với gương mặt hiền hậu nhưng ánh mắt cương nghị, và cô Lan, một cán bộ tư pháp trẻ trung, đầy nhiệt huyết, bước vào. Họ lắng nghe những lời lẽ đầy quyền uy của ông Hách. Cô Lan không ngần ngại lên tiếng nhắc nhở về những lời dạy của Bác Hồ về vai trò đày tớ của dân. Nhưng ông Hách chỉ cười khẩy, cho rằng đó chỉ là lý thuyết sách vở, và khẳng định quyền lực của mình khi đang ngồi trên chiếc ghế Chủ tịch: Quan nhất thời, dân vạn đại, nhưng lúc tôi đang nhất thời ngồi cái ghế này thì quyền trong tay tôi."
  },
  {
    id: 3,
    title: "",
    content: "Bác Trung, với dáng vẻ từ tốn nhưng cương trực, tiến lên. Ông nhẹ nhàng nhưng dứt khoát chỉ ra rằng quan nhất thời là đúng, nhưng dân vạn đại mới là gốc rễ, là chủ nhân thực sự.",
    image: "/pages/page3.png",
    audio: "Bác Trung, với dáng vẻ từ tốn nhưng cương trực, tiến lên. Ông nhẹ nhàng nhưng dứt khoát chỉ ra rằng quan nhất thời là đúng, nhưng dân vạn đại mới là gốc rễ, là chủ nhân thực sự. Ông nhấn mạnh rằng quyền lực không phải để áp đặt mà là để phục vụ nhân dân. Bác Trung nói: Dân là gốc, dân là chủ, cán bộ là đầy tớ của dân. Chúng ta phải luôn nhớ lời dạy của Bác Hồ: Cán bộ phải thật sự là người đầy tớ trung thành của nhân dân. Chiếc ghế này không phải để ngồi hưởng thụ quyền lực, mà là để phục vụ nhân dân."
  },
  {
    id: 4,
    title: "",
    content: "Lời nói của Bác Trung về sự tín nhiệm của dân, cùng với bằng chứng về việc vi phạm pháp luật mà cô Lan đưa ra, khiến ông Hách dần chột dạ. Ông ngồi xuống, vẻ mặt thất thần",
    image: "/pages/page4.png",
    audio: "Cô Lan cũng giơ tập hồ sơ, chỉ ra những sai phạm của ông Hách trong việc chậm trễ giải quyết đơn thư và có dấu hiệu ưu ái người nhà trong dự án đất đai. Cô khẳng định dứt khoát: Trong Nhà nước pháp quyền, không ai được phép đứng trên luật pháp cả. Lời nói của Bác Trung về sự tín nhiệm của dân, cùng với bằng chứng về việc vi phạm pháp luật mà cô Lan đưa ra, khiến ông Hách dần chột dạ. Ông ngồi xuống, vẻ mặt thất thần"
  },
  {
    id: 5,
    title: "",
    content: "Ông Hách nhìn mọi người, nhìn xuống tập hồ sơ, và nhận ra sai lầm.",
    image: "/pages/page5.png",
    audio: "Ông Hách thở dài, đứng dậy cúi đầu với người phụ nữ khiếu nại. Ông nhận ra sự quan liêu đã khiến ông quên mất mình từ đâu mà ra."
  },
  {
    id: 6,
    title: "",
    content: "Ông từ từ đứng lên, cúi đầu xin lỗi mọi người và cam kết sẽ sửa chữa sai lầm, lấy lại niềm tin từ dân.",
    image: "/pages/page6.png",
    audio: "Ông mời người phụ nữ vào, cùng nhau xem xét lại hồ sơ trong một không khí ôn hòa và đầy tinh thần trách nhiệm. Từ đó, ông luôn ghi nhớ lời dạy của Bác Hồ, rằng cán bộ, công chức phải là người đầy tớ thật trung thành của nhân dân."
  },
  {
    id: 7,
    type: "end",
    title: "",
    content: "Câu chuyện về, Chiếc ghế và Lòng dân, là một hình ảnh sống động về căn bệnh làm quan tự cao tự đại, biểu hiện của chủ nghĩa cá nhân và quan liêu trong bộ máy công quyền.",
    image: "/pages/end.png",
    audio: "Câu chuyện về Chiếc ghế và Lòng dân là một hình ảnh sống động về căn bệnhquan cách mạng biểu hiện của chủ nghĩa cá nhân và quan liêu trong bộ máy công quyền. Quyền lực thuộc về Nhân dân: Chiếc ghế lãnh đạo chỉ là sự ủy thác nhất thời. Sức mạnh thực sự của người cán bộ không nằm ở vị trí hay chức vụ, mà ở sự tín nhiệm, đồng lòng của nhân dân. Mất lòng dân là mất tất cả, bởi lẽ Dân là gốc"
  }
];

// Component cho mỗi trang sách
const Page = forwardRef(({ pageData, onPlayAudio }, ref) => {
  return (
    <div ref={ref} className="page-content">
      <div
        className={`h-full w-full p-5 sm:p-8 flex flex-col justify-center items-center text-center ${
          pageData.type === "cover"
            ? "bg-gradient-to-br from-primary to-accent text-white"
            : pageData.type === "end"
            ? "bg-gradient-to-br from-accent to-primary text-white"
            : "bg-[#FDF3E3]"
        }`}
      >
        <div className="mb-4 w-full max-w-[180px] sm:max-w-xs">
          <img
            src={pageData.image}
            alt={pageData.title}
            className="w-full h-auto object-contain rounded-lg"
            draggable={false}
          />
        </div>

        <h2
          className={`text-2xl sm:text-3xl font-bold mb-3 ${
            pageData.type === "cover" || pageData.type === "end"
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          {pageData.title}
        </h2>

        {pageData.subtitle && (
          <p className="text-base sm:text-lg text-white/90 mb-3 max-w-xl">
            {pageData.subtitle}
          </p>
        )}

        {pageData.content && (
          <p
            className={`text-base sm:text-lg leading-relaxed max-w-md ${
              pageData.type === "end"
                ? "text-white/95"
                : "text-muted-slate"
            }`}
          >
            {pageData.content}
          </p>
        )}

        {/* Nút audio cho từng trang */}
        {pageData.audio && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // chặn luôn native event để HTMLFlipBook không nhận click
              if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
                e.nativeEvent.stopImmediatePropagation();
              }
              onPlayAudio && onPlayAudio(pageData.id);
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
                e.nativeEvent.stopImmediatePropagation();
              }
            }}
            onMouseUp={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
                e.nativeEvent.stopImmediatePropagation();
              }
            }}
            onTouchStart={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
                e.nativeEvent.stopImmediatePropagation();
              }
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
                e.nativeEvent.stopImmediatePropagation();
              }
            }}
            className={`mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              pageData.type === "cover" || pageData.type === "end"
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-primary/10 text-primary hover:bg-primary/20"
            }`}
          >
            <span>🔊</span>
            <span>Nghe trang này</span>
          </button>
        )}
      </div>
    </div>
  );
});

Page.displayName = "Page";

export default function StoryFlipbook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // đang phát audio thủ công
  const [isAuto, setIsAuto] = useState(false); // chế độ tự động đọc & lật
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bookRef = useRef(null);
  const audioRef = useRef(null);
  const autoRef = useRef(false);
  const isFlippingRef = useRef(false);
  const getBookDimensions = (width) => {
    if (width < 360) return { bookWidth: 230, bookHeight: 340 };
    if (width < 480) return { bookWidth: 270, bookHeight: 390 };
    if (width < 768) return { bookWidth: 340, bookHeight: 500 };
    if (width < 1024) return { bookWidth: 420, bookHeight: 600 };
    return { bookWidth: 520, bookHeight: 720 };
  };
  const [bookSize, setBookSize] = useState(() => {
    if (typeof window === "undefined") {
      return { bookWidth: 520, bookHeight: 720 };
    }
    return getBookDimensions(window.innerWidth);
  });

  // Map trang -> file audio tương ứng
  const audioMap = {
    0: coverAudio,
    1: page1Audio,
    2: page2Audio,
    3: page3Audio,
    4: page4Audio,
    5: page5Audio,
    6: page6Audio,
    7: endAudio,
  };
  const coverImage = pages[0].image;

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const playPageAudio = (pageIndex, { onEnded } = {}) => {
    const src = audioMap[pageIndex];
    if (!src) return;

    // Dừng audio cũ nếu có
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(src);
    audioRef.current = audio;
    setIsPlaying(true);

    audio.onended = () => {
      setIsPlaying(false);
      if (onEnded) onEnded();
    };
    audio.onerror = () => {
      setIsPlaying(false);
    };

    audio.play();
  };

  const playCurrentPageAudio = () => {
    // Đọc trang đang hiển thị (trang trái hoặc trang đơn)
    playPageAudio(currentPage);
  };

  // Tự động đọc từ một trang nhất định và lật tới hết sách
  const autoPlayFrom = (startIndex) => {
    if (!autoRef.current) return;
    if (startIndex >= pages.length) {
      autoRef.current = false;
      setIsAuto(false);
      return;
    }

    playPageAudio(startIndex, {
      onEnded: () => {
        if (!autoRef.current) return;
        const nextIndex = startIndex + 1;

        // Lật sang trang tiếp theo nếu còn
        if (nextIndex < pages.length && bookRef.current) {
          isFlippingRef.current = true;
          bookRef.current.pageFlip().flipNext();
        }

        // Chờ lật trang xong rồi đọc trang kế tiếp
        setTimeout(() => {
          isFlippingRef.current = false;
          autoPlayFrom(nextIndex);
        }, 900);
      },
    });
  };

  const toggleAuto = () => {
    if (isAuto) {
      // Tắt chế độ auto
      autoRef.current = false;
      setIsAuto(false);
      stopAudio();
    } else {
      autoRef.current = true;
      setIsAuto(true);
      stopAudio();
      autoPlayFrom(currentPage);
    }
  };

  // Tính trang trái/phải đang hiển thị (ước lượng)
  const getVisiblePages = () => {
    if (currentPage === 0) return [0, 0];
    const left = currentPage;
    const right = left + 1 < pages.length ? left + 1 : left;
    return [left, right];
  };

  const handlePlayLeftPage = () => {
    const [left] = getVisiblePages();
    // tắt auto nếu đang bật
    autoRef.current = false;
    setIsAuto(false);
    playPageAudio(left);
  };

  const handlePlayRightPage = () => {
    const [, right] = getVisiblePages();
    autoRef.current = false;
    setIsAuto(false);
    playPageAudio(right);
  };

  const handlePlayForPage = (pageIndex) => {
    autoRef.current = false;
    setIsAuto(false);
    playPageAudio(pageIndex);
  };

  const onFlip = (e) => {
    const newPage = e.data;
    stopAudio();
    setCurrentPage(newPage);
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setBookSize(getBookDimensions(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  return (
    <section className="mt-10 pb-20">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl section-title font-bold mb-4"
        >
          Flipbook câu chuyện
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-sm sm:text-base text-muted-slate mb-6"
        >
          Trải nghiệm câu chuyện "Chiếc ghế và lòng dân" dưới dạng sách lật,
          kèm giọng đọc từng trang để hiểu rõ hơn về quan điểm "Quan nhất thời, dân vạn đại". Bấm nút bên dưới để mở sách.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mx-auto mb-4 max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-soft-lg border border-white/60 bg-white"
        >
          <img
            src={coverImage}
            alt="Bìa flipbook Chiếc ghế và lòng dân"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.button
          variants={fadeUp}
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 shadow-soft-lg text-sm font-medium transition-colors duration-200"
        >
          📖 Mở flipbook
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center px-3 sm:px-6"
            onClick={() => {
              setIsModalOpen(false);
              autoRef.current = false;
              setIsAuto(false);
              stopAudio();
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-6xl w-full max-h-[92vh] overflow-y-auto bg-cream rounded-2xl shadow-2xl border border-white/60 p-3 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  autoRef.current = false;
                  setIsAuto(false);
                  stopAudio();
                }}
                className="absolute right-3 top-3 text-sm text-muted-slate hover:text-slate-900"
              >
                ✕
              </button>

              {/* Thanh tiến trình + nút auto */}
              <div className="mb-4 max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-2 gap-2 text-xs sm:text-sm">
                  <span className="text-muted-slate">
                    Trang {currentPage + 1} / {pages.length}
                  </span>
                  <button
                    onClick={toggleAuto}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      isAuto
                        ? "bg-white text-muted-slate hover:bg-slate-100"
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
                  >
                    {isAuto ? "⏸️ Dừng auto" : "▶️ Auto đọc & lật"}
                  </button>
                </div>
                <div className="w-full bg-white/60 rounded-full h-1.5">
                  <div
                    className="bg-primary h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentPage + 1) / pages.length) * 100}%`,
                    }}
                  />
                </div>

                {isPlaying && (
                  <div className="mt-2 flex justify-center items-center gap-2 text-xs sm:text-sm text-muted-slate">
                    <span className="animate-pulse">🔊</span>
                    <span>Đang phát audio...</span>
                  </div>
                )}
              </div>

              {/* Flipbook container */}
              <div className="flex justify-center items-center">
                <HTMLFlipBook
                  ref={bookRef}
                  width={bookSize.bookWidth}
                  height={bookSize.bookHeight}
                  size="stretch"
                  minWidth={Math.max(bookSize.bookWidth - 60, 220)}
                  maxWidth={bookSize.bookWidth + 220}
                  minHeight={Math.max(bookSize.bookHeight - 80, 320)}
                  maxHeight={bookSize.bookHeight + 220}
                  maxShadowOpacity={0.2}
                  showCover={true}
                  mobileScrollSupport={true}
                  onFlip={onFlip}
                  className="flipbook-container"
                  startPage={0}
                  drawShadow={true}
                  flippingTime={800}
                  usePortrait={true}
                  startZIndex={0}
                  autoSize={true}
                  clickEventForward={true}
                  useMouseEvents={true}
                  swipeDistance={30}
                  showPageCorners={true}
                  disableFlipByClick={false}
                >
                  {pages.map((page) => (
                    <Page
                      key={page.id}
                      pageData={page}
                      onPlayAudio={handlePlayForPage}
                    />
                  ))}
                </HTMLFlipBook>
              </div>

              <div className="mt-4 text-center text-xs sm:text-sm text-muted-slate">
                💡 Nhấp vào cạnh phải/trái của sách hoặc kéo để lật trang. Bấm
                "Nghe trang này" ở cuối mỗi trang để phát audio tương ứng.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .flipbook-container {
          margin: 0 auto;
        }

        .page-content {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          background-color: #fdf3e3;
        }

        .stf__wrapper {
          margin: 0 auto;
        }

        .stf__item {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}


