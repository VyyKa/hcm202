import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, BookOpen } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `Bạn là trợ lý AI chuyên về môn học "Tư tưởng Hồ Chí Minh về Nhà nước" (HCM202).

THÔNG TIN DỰ ÁN:
- Dự án học thuật: Môn HCM202 - Tư tưởng Hồ Chí Minh
- Trường: Đại học FPT - Campus Hồ Chí Minh
- Học kỳ: Fall 2025

THÔNG TIN NHÓM:
- Nhóm: 6 - 3W_HCM202_06
- Thành viên:
  • Hồ Tài Liên Vy Kha
  • Lê Tiến Đạt
  • Nguyễn Cao Trí

GIẢNG VIÊN:
- Hướng dẫn: Đoàn Thị Ngân (NganDT31)
- Cảm ơn cô đã hướng dẫn và hỗ trợ nhóm trong quá trình thực hiện dự án.

THÔNG TIN BẢN QUYỀN:
- © 2025 · Sản phẩm sáng tạo môn HCM202 - Nhóm 6 - Đại học FPT

THÔNG TIN VỀ BẠN (CHATBOT):
- Bạn được tạo ra bởi 3 thành viên nhóm 6: Hồ Tài Liên Vy Kha, Lê Tiến Đạt, và Nguyễn Cao Trí.
- Bạn là trợ lý AI được phát triển như một phần của dự án học thuật môn HCM202.

NHIỆM VỤ CỦA BẠN:
- Trả lời các câu hỏi liên quan đến tư tưởng Hồ Chí Minh về Nhà nước, về Nhà nước của Dân, do Dân, vì Dân.
- Giúp người dùng hiểu về: bản chất giai cấp công nhân, tính nhân dân, tính dân tộc của Nhà nước; Nhà nước pháp quyền XHCN; xây dựng Đảng và Nhà nước trong sạch, vững mạnh.
- Cung cấp thông tin chính xác, có căn cứ từ tư tưởng Hồ Chí Minh và Hiến pháp Việt Nam.
- Khi được hỏi về thông tin dự án, nhóm, giảng viên, bản quyền, hoặc ai tạo ra bạn, hãy trả lời dựa trên thông tin đã cung cấp ở trên.

QUY TẮC:
- Nếu câu hỏi KHÔNG liên quan đến chủ đề HCM202, thông tin dự án, nhóm, hoặc giảng viên, hãy lịch sự từ chối và đề nghị người dùng hỏi về chủ đề môn học hoặc thông tin dự án.
- Trả lời ngắn gọn, dễ hiểu, phù hợp với ngữ cảnh học thuật.
- Sử dụng tiếng Việt.
- Không trả lời các câu hỏi về chính trị nhạy cảm, lịch sử tranh cãi, hoặc các chủ đề ngoài phạm vi môn học.

Bắt đầu trò chuyện thân thiện và hữu ích!`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Xin chào! Tôi là trợ lý AI về môn học HCM202. Tôi có thể giúp bạn tìm hiểu về Tư tưởng Hồ Chí Minh về Nhà nước. Bạn muốn hỏi gì?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const genAI = useRef(null);
  
  // Anti-spam: Rate limiting
  const [messageTimestamps, setMessageTimestamps] = useState([]);
  const [lastMessageTime, setLastMessageTime] = useState(0);
  const [recentMessages, setRecentMessages] = useState([]);
  const COOLDOWN_MS = 2000; // 2 giây giữa các tin nhắn
  const MAX_MESSAGES_PER_MINUTE = 10; // Tối đa 10 tin nhắn/phút
  const MAX_MESSAGE_LENGTH = 500; // Tối đa 500 ký tự

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (apiKey) {
      genAI.current = new GoogleGenerativeAI(apiKey);
    } else {
      console.warn("VITE_GEMINI_API_KEY chưa được cấu hình. Vui lòng tạo file .env với key của bạn.");
    }
  }, []);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Kiểm tra spam
  const checkSpam = (message) => {
    const now = Date.now();
    const trimmedMsg = message.trim();
    
    // 1. Kiểm tra độ dài
    if (trimmedMsg.length > MAX_MESSAGE_LENGTH) {
      return { isSpam: true, reason: `Tin nhắn quá dài (tối đa ${MAX_MESSAGE_LENGTH} ký tự).` };
    }
    
    // 2. Kiểm tra cooldown (thời gian giữa các tin nhắn)
    if (now - lastMessageTime < COOLDOWN_MS) {
      const remaining = Math.ceil((COOLDOWN_MS - (now - lastMessageTime)) / 1000);
      return { isSpam: true, reason: `Vui lòng đợi ${remaining} giây trước khi gửi tin nhắn tiếp theo.` };
    }
    
    // 3. Kiểm tra rate limiting (số tin nhắn/phút)
    const oneMinuteAgo = now - 60000;
    const recentCount = messageTimestamps.filter((ts) => ts > oneMinuteAgo).length;
    if (recentCount >= MAX_MESSAGES_PER_MINUTE) {
      return { isSpam: true, reason: `Bạn đã gửi quá nhiều tin nhắn. Vui lòng đợi một chút.` };
    }
    
    // 4. Kiểm tra tin nhắn lặp lại (giống hệt 3 tin nhắn gần nhất)
    const lastThreeMessages = recentMessages.slice(-3);
    const duplicateCount = lastThreeMessages.filter((msg) => msg.toLowerCase() === trimmedMsg.toLowerCase()).length;
    if (duplicateCount >= 2) {
      return { isSpam: true, reason: `Bạn đã gửi tin nhắn tương tự gần đây. Vui lòng thử câu hỏi khác.` };
    }
    
    // 5. Kiểm tra tin nhắn chỉ có ký tự đặc biệt hoặc số
    const hasValidContent = /[a-zA-ZÀ-ỹ]/.test(trimmedMsg);
    if (!hasValidContent && trimmedMsg.length > 5) {
      return { isSpam: true, reason: `Tin nhắn không hợp lệ.` };
    }
    
    return { isSpam: false };
  };

  const handleSend = async () => {
    if (!input.trim() || loading || !genAI.current) return;

    const userMessage = input.trim();
    
    // Kiểm tra spam
    const spamCheck = checkSpam(userMessage);
    if (spamCheck.isSpam) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `⚠️ ${spamCheck.reason}`,
        },
      ]);
      return;
    }
    
    // Cập nhật anti-spam state
    const now = Date.now();
    setMessageTimestamps((prev) => [...prev, now].filter((ts) => ts > now - 60000));
    setLastMessageTime(now);
    setRecentMessages((prev) => [...prev, userMessage].slice(-5));
    
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);
    try {
      // Tên model được khuyến nghị cho tốc độ và Free Tier: gemini-2.5-flash
      const model = genAI.current.getGenerativeModel({ model: "gemini-2.5-flash" }); 
      const recentHistory = messages
    // ...
        .slice(-5)
        .map((m) => `${m.role === "user" ? "Người học" : "Trợ lý"}: ${m.content}`)
        .join("\n");

      const prompt = `${SYSTEM_PROMPT}\n\nLịch sử trao đổi gần đây (nếu có):\n${recentHistory}\n\nCâu hỏi hiện tại của người học: ${userMessage}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { role: "assistant", content: text }]);
    } catch (error) {
      console.error("Lỗi khi gọi Gemini API:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Xin lỗi, đã có lỗi xảy ra. Vui lòng kiểm tra API key hoặc thử lại sau.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Nút floating */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 bg-primary text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 ease-out ${
          isOpen ? "w-14 h-14 rounded-full p-0" : "rounded-full gap-2 pl-4 pr-5 py-2"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        aria-label="Mở Trợ lý Tư tưởng Hồ Chí Minh"
      >
        {isOpen ? (
          <X size={18} />
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <BookOpen size={18} className="text-white" />
            </div>
            <span className="text-sm font-semibold whitespace-nowrap">
              Trợ lý Tư tưởng Hồ Chí Minh
            </span>
          </div>
        )}
      </motion.button>

      {/* Khung chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-white/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-primary/5 rounded-t-2xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Trợ lý HCM202
                  </div>
                  <div className="text-xs text-muted-slate">Sẵn sàng hỗ trợ</div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.role === "user"
                        ? "bg-primary text-white"
                        : "bg-cream text-slate-900 border border-white/60"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-cream border border-white/60 rounded-lg px-4 py-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white rounded-b-2xl">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Nhập câu hỏi về HCM202..."
                  className="flex-1 px-4 py-2 rounded-lg border border-white/60 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                  disabled={loading}
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center"
                >
                  <Send size={18} />
                </button>
              </div>
              {!genAI.current && (
                <p className="mt-2 text-xs text-red-500">
                  ⚠️ Chưa cấu hình API key. Tạo file .env với VITE_GEMINI_API_KEY
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

