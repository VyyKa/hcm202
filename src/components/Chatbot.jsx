import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `Bạn là trợ lý AI chuyên về môn học "Tư tưởng Hồ Chí Minh về Nhà nước" (HCM202).

NHIỆM VỤ CỦA BẠN:
- Chỉ trả lời các câu hỏi liên quan đến tư tưởng Hồ Chí Minh về Nhà nước, về Nhà nước của Dân, do Dân, vì Dân.
- Giúp người dùng hiểu về: bản chất giai cấp công nhân, tính nhân dân, tính dân tộc của Nhà nước; Nhà nước pháp quyền XHCN; xây dựng Đảng và Nhà nước trong sạch, vững mạnh.
- Cung cấp thông tin chính xác, có căn cứ từ tư tưởng Hồ Chí Minh và Hiến pháp Việt Nam.

QUY TẮC:
- Nếu câu hỏi KHÔNG liên quan đến chủ đề HCM202, hãy lịch sự từ chối và đề nghị người dùng hỏi về chủ đề môn học.
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

  const handleSend = async () => {
    if (!input.trim() || loading || !genAI.current) return;

    const userMessage = input.trim();
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
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Mở chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
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

