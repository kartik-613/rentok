import React, { useState, useEffect, useRef } from "react";
import { FiSend } from "react-icons/fi";
import  Button from "../../components/Button";
import  Card from "../../components/Card";
import  CardContent from "../../components/CardContent";
import  Input from "../../components/Input";

const ChatPopup = ({ employee, onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: `Hi! This is ${employee.name}. How can I help you?` },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // 🔹 Auto-scroll when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    // Mock reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks for your message! I'll reply soon." },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 w-80">
      <Card className="shadow-2xl border-0">
        <CardContent className="flex flex-col h-[450px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-3">
            <h2 className="text-lg font-semibold text-yellow-600">
              💬 Chat with {employee.name}
            </h2>
            <button
              className="text-gray-500 hover:text-black text-xl"
              onClick={onClose}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto no-scrollbar space-y-3 py-3 pr-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-sm max-w-[70%] shadow-sm ${
                    msg.sender === "user"
                      ? "bg-yellow-400 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="mt-3 flex items-center gap-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button
              onClick={handleSend}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-2 rounded-lg flex items-center"
            >
              <FiSend size={18} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatPopup;
