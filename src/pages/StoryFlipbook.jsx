import React, { useState, useEffect, useRef, forwardRef } from "react";
import { motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";

const pages = [
  {
    id: 0,
    type: "cover",
    title: "",
    subtitle: "Câu chuyện Chiếc ghế và lòng dân dưới đây là một lời nhắc nhở sâu sắc về những giá trị cốt lõi ấy, được kể lại qua lăng kính của những người đã và đang cống hiến",
    image: "/pages/start.png",
    audio: "Chào bạn đọc thân mến, Trong hành trình xây dựng và phát triển đất nước, tư tưởng Hồ Chí Minh về đạo đức cách mạng, về mối quan hệ giữa quan và dân luôn là kim chỉ nam soi sáng. Câu chuyện Chiếc ghế và lòng dân dưới đây là một lời nhắc nhở sâu sắc về những giá trị cốt lõi ấy, được kể lại qua lăng kính của những người đã và đang cống hiến. Mời bạn cùng lắng nghe"
  },
  {
    id: 1,
    title: "",
    content: "Khi người phụ nữ cất lời về lá đơn khiếu nại đất đai, ông chỉ hờ hững đáp lời mà không hề ngẩng mặt. Sự coi thường thể hiện rõ rệt, biến văn phòng tiếp dân thành một nơi xa cách, đầy quyền lực và sự lạnh nhạt",
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
    content: "Ông Hách cam kết sẽ sửa chữa sai lầm, lấy lại niềm tin từ dân.",
    image: "/pages/page6.png",
    audio: "Ông mời người phụ nữ vào, cùng nhau xem xét lại hồ sơ trong một không khí ôn hòa và đầy tinh thần trách nhiệm. Từ đó, ông luôn ghi nhớ lời dạy của Bác Hồ, rằng cán bộ, công chức phải là người đầy tớ thật trung thành của nhân dân."
  },
  {
    id: 7,
    type: "end",
    title: "",
    content: "Câu chuyện về Chiếc ghế và Lòng dân là một hình ảnh sống động về căn bệnhquan cách mạng biểu hiện của chủ nghĩa cá nhân và quan liêu trong bộ máy công quyền.",
    image: "/pages/end.png",
    audio: "Câu chuyện về Chiếc ghế và Lòng dân là một hình ảnh sống động về căn bệnhquan cách mạng biểu hiện của chủ nghĩa cá nhân và quan liêu trong bộ máy công quyền. Quyền lực thuộc về Nhân dân: Chiếc ghế lãnh đạo chỉ là sự ủy thác nhất thời. Sức mạnh thực sự của người cán bộ không nằm ở vị trí hay chức vụ, mà ở sự tín nhiệm, đồng lòng của nhân dân. Mất lòng dân là mất tất cả, bởi lẽ Dân là gốc"
  }
];

// Component cho mỗi trang sách
const Page = forwardRef(({ pageData }, ref) => {
  return (
    <div ref={ref} className="page-content">
      <div className={`h-full w-full p-8 flex flex-col justify-center items-center text-center ${pageData.type === 'cover'
        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
        : pageData.type === 'end'
          ? 'bg-gradient-to-br from-green-500 to-teal-600 text-white'
          : 'bg-white'
        }`}>
        <div className="mb-4 w-full max-w-xs">
          <img
            src={pageData.image}
            alt={pageData.title}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${pageData.type === 'cover' || pageData.type === 'end'
          ? 'text-white'
          : 'text-gray-800'
          }`}>
          {pageData.title}
        </h2>

        {pageData.subtitle && (
          <p className="text-lg text-white/90 mb-3">
            {pageData.subtitle}
          </p>
        )}

        {pageData.content && (
          <p className={`text-base sm:text-lg leading-relaxed max-w-md ${pageData.type === 'end'
            ? 'text-white/95'
            : 'text-gray-700'
            }`}>
            {pageData.content}
          </p>
        )}
      </div>
    </div>
  );
});

Page.displayName = "Page";

export default function StoryFlipbook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [currentReadingPage, setCurrentReadingPage] = useState(0);
  const bookRef = useRef(null);
  const utteranceRef = useRef(null);
  const timeoutRef = useRef(null);
  const isFlippingRef = useRef(false);
  const readingStateRef = useRef({ pageIndex: 0, stage: 'first' }); // 'first', 'second', 'done'

  const speak = (text, pageNum) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      if (pageNum !== undefined) {
        setCurrentReadingPage(pageNum);
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.9;
      utterance.pitch = 1;

      utteranceRef.current = utterance;
      setIsReading(true);

      utterance.onend = () => {
        setIsReading(false);
      };

      utterance.onerror = () => {
        setIsReading(false);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeech = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const readPagesAndFlip = async (pageIndex) => {
    if (!autoPlay || isFlippingRef.current) return;

    const isCover = pageIndex === 0;
    const isLastPage = pageIndex === pages.length - 1;
    let shouldStop = false;

    // Hàm kiểm tra xem có nên dừng không
    const checkStop = () => {
      shouldStop = !autoPlay;
      return shouldStop;
    };

    if (isCover) {
      // Đọc trang bìa (trang 1)
      readingStateRef.current = { pageIndex, stage: 'first' };
      speak(pages[pageIndex].audio, 0);

      // Đợi đọc xong
      await new Promise((resolve) => {
        const checkSpeech = setInterval(() => {
          if (!window.speechSynthesis.speaking || checkStop()) {
            clearInterval(checkSpeech);
            resolve();
          }
        }, 100);
      });

      // Kiểm tra lại trước khi lật trang
      if (checkStop()) return;

      // Lật sang trang 1 (sẽ hiển thị trang 2-3)
      timeoutRef.current = setTimeout(() => {
        if (bookRef.current && !checkStop()) {
          isFlippingRef.current = true;
          bookRef.current.pageFlip().flipNext();
        }
      }, 1000);
    } else if (isLastPage) {
      // Đọc trang cuối
      readingStateRef.current = { pageIndex, stage: 'first' };
      speak(pages[pageIndex].audio, pageIndex);

      await new Promise((resolve) => {
        const checkSpeech = setInterval(() => {
          if (!window.speechSynthesis.speaking || checkStop()) {
            clearInterval(checkSpeech);
            resolve();
          }
        }, 100);
      });
    } else {
      // Các trang giữa: khi lật từ trang bìa, currentPage sẽ là 1
      // Khi hiển thị trang 2-3, currentPage = 1 (trang phải là 1, trang trái là 2)
      // Cần đọc trang 1 (index 1) và trang 2 (index 2)
      if (pageIndex === 1) {
        // Kiểm tra xem có đang ở giữa chừng không
        const shouldReadFirst = readingStateRef.current.pageIndex !== pageIndex || readingStateRef.current.stage === 'first';

        if (shouldReadFirst) {
          // Đọc trang 2 (index 1)
          readingStateRef.current = { pageIndex, stage: 'first' };
          speak(pages[pageIndex].audio, pageIndex);

          await new Promise((resolve) => {
            const checkSpeech = setInterval(() => {
              if (!window.speechSynthesis.speaking) {
                clearInterval(checkSpeech);
                resolve();
              }
              if (checkStop()) {
                clearInterval(checkSpeech);
                resolve();
              }
            }, 100);
          });

          if (checkStop()) return;

          // Delay giữa 2 trang
          await new Promise(resolve => setTimeout(resolve, 500));

          if (checkStop()) return;
        }

        if (checkStop()) return;

        // Đọc trang 3 (index 2)
        if (pageIndex + 1 < pages.length && !pages[pageIndex + 1].type) {
          if (checkStop()) return; // Kiểm tra lại trước khi đọc

          readingStateRef.current = { pageIndex, stage: 'second' };
          speak(pages[pageIndex + 1].audio, pageIndex + 1);

          await new Promise((resolve) => {
            const checkSpeech = setInterval(() => {
              if (!window.speechSynthesis.speaking || checkStop()) {
                clearInterval(checkSpeech);
                resolve();
              }
            }, 100);
          });
        }

        if (checkStop()) return;

        // Đánh dấu đã đọc xong
        readingStateRef.current = { pageIndex, stage: 'done' };

        // Lật sang spread tiếp theo (trang 4-5)
        if (pageIndex + 1 < pages.length - 1) {
          timeoutRef.current = setTimeout(() => {
            if (bookRef.current && !checkStop()) {
              isFlippingRef.current = true;
              bookRef.current.pageFlip().flipNext();
            }
          }, 1000);
        }
      } else if (pageIndex === 3) {
        // Kiểm tra xem có đang ở giữa chừng không
        const shouldReadFirst = readingStateRef.current.pageIndex !== pageIndex || readingStateRef.current.stage === 'first';

        if (shouldReadFirst) {
          // Đọc trang 4 (index 3)
          readingStateRef.current = { pageIndex, stage: 'first' };
          speak(pages[pageIndex].audio, pageIndex);

          await new Promise((resolve) => {
            const checkSpeech = setInterval(() => {
              if (!window.speechSynthesis.speaking) {
                clearInterval(checkSpeech);
                resolve();
              }
              if (checkStop()) {
                clearInterval(checkSpeech);
                resolve();
              }
            }, 100);
          });

          if (checkStop()) return;

          // Delay giữa 2 trang
          await new Promise(resolve => setTimeout(resolve, 500));

          if (checkStop()) return;
        }

        if (checkStop()) return;

        // Đọc trang 5 (index 4)
        if (pageIndex + 1 < pages.length && !pages[pageIndex + 1].type) {
          if (checkStop()) return; // Kiểm tra lại trước khi đọc

          readingStateRef.current = { pageIndex, stage: 'second' };
          speak(pages[pageIndex + 1].audio, pageIndex + 1);

          await new Promise((resolve) => {
            const checkSpeech = setInterval(() => {
              if (!window.speechSynthesis.speaking || checkStop()) {
                clearInterval(checkSpeech);
                resolve();
              }
            }, 100);
          });
        }

        if (checkStop()) return;

        // Đánh dấu đã đọc xong
        readingStateRef.current = { pageIndex, stage: 'done' };

        // Lật sang spread tiếp theo (trang 6-7)
        if (pageIndex + 1 < pages.length - 1) {
          timeoutRef.current = setTimeout(() => {
            if (bookRef.current && !checkStop()) {
              isFlippingRef.current = true;
              bookRef.current.pageFlip().flipNext();
            }
          }, 1000);
        }
      } else if (pageIndex === 5) {
        // Kiểm tra xem có đang ở giữa chừng không
        const shouldReadFirst = readingStateRef.current.pageIndex !== pageIndex || readingStateRef.current.stage === 'first';

        if (shouldReadFirst) {
          // Đọc trang 6 (index 5)
          readingStateRef.current = { pageIndex, stage: 'first' };
          speak(pages[pageIndex].audio, pageIndex);

          await new Promise((resolve) => {
            const checkSpeech = setInterval(() => {
              if (!window.speechSynthesis.speaking) {
                clearInterval(checkSpeech);
                resolve();
              }
              if (checkStop()) {
                clearInterval(checkSpeech);
                resolve();
              }
            }, 100);
          });

          if (checkStop()) return;

          // Delay giữa 2 trang
          await new Promise(resolve => setTimeout(resolve, 500));

          if (checkStop()) return;
        }

        if (checkStop()) return;

        // Đọc trang 7 (index 6)
        if (pageIndex + 1 < pages.length && !pages[pageIndex + 1].type) {
          if (checkStop()) return; // Kiểm tra lại trước khi đọc

          readingStateRef.current = { pageIndex, stage: 'second' };
          speak(pages[pageIndex + 1].audio, pageIndex + 1);

          await new Promise((resolve) => {
            const checkSpeech = setInterval(() => {
              if (!window.speechSynthesis.speaking || checkStop()) {
                clearInterval(checkSpeech);
                resolve();
              }
            }, 100);
          });
        }

        if (checkStop()) return;

        // Đánh dấu đã đọc xong
        readingStateRef.current = { pageIndex, stage: 'done' };

        // Lật sang trang cuối (trang 8)
        if (pageIndex + 1 < pages.length - 1) {
          timeoutRef.current = setTimeout(() => {
            if (bookRef.current && !checkStop()) {
              isFlippingRef.current = true;
              bookRef.current.pageFlip().flipNext();
            }
          }, 1000);
        }
      }
    }
  };

  useEffect(() => {
    if (autoPlay) {
      // Delay nhỏ để đảm bảo state đã ổn định sau khi lật
      const timer = setTimeout(() => {
        if (!isFlippingRef.current) {
          readPagesAndFlip(currentPage);
        }
      }, 200);

      return () => {
        clearTimeout(timer);
        stopSpeech();
      };
    } else {
      return () => {
        stopSpeech();
      };
    }
  }, [currentPage, autoPlay]);

  const onFlip = (e) => {
    const newPage = e.data;
    stopSpeech();

    // Đợi một chút trước khi update state
    setTimeout(() => {
      isFlippingRef.current = false;
      setCurrentPage(newPage);
    }, 50);
  };

  const toggleAutoPlay = () => {
    const newAutoPlayState = !autoPlay;
    setAutoPlay(newAutoPlayState);

    if (!newAutoPlayState) {
      // Chuyển sang chế độ thủ công -> dừng đọc
      stopSpeech();
    } else {
      // Chuyển sang chế độ tự động -> bắt đầu đọc từ trang hiện tại
      if (!isFlippingRef.current) {
        readPagesAndFlip(currentPage);
      }
    }
  };

  return (
    <section className="mt-10 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl section-title font-bold mb-8 text-center"
        >
          Flipbook câu chuyện
        </motion.h1>

        {/* Progress bar */}
        <div className="mb-6 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-slate">
              Trang {currentPage + 1} / {pages.length}
            </span>
            <button
              onClick={toggleAutoPlay}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${autoPlay
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {autoPlay ? '🔊 Tự động đọc' : '⏸️ Chế độ thủ công'}
            </button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
            />
          </div>

          {isReading && (
            <div className="mt-3 flex justify-center items-center gap-2 text-sm text-gray-600">
              <span className="animate-pulse">🔊</span>
              <span>Đang đọc trang {currentReadingPage + 1}...</span>
            </div>
          )}
        </div>

        {/* Flipbook container */}
        <div className="flex justify-center items-center">
          <HTMLFlipBook
            ref={bookRef}
            width={500}
            height={700}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onFlip}
            className="flipbook-container"
            style={{}}
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
              <Page key={page.id} pageData={page} />
            ))}
          </HTMLFlipBook>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          💡 Nhấp vào cạnh phải/trái của sách hoặc kéo để lật trang
        </div>
      </div>

      <style jsx global>{`
        .flipbook-container {
          margin: 0 auto;
        }
        
        .page-content {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          background-color: white;
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
    </section >
  );
}


