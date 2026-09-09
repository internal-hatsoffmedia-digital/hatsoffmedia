"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  Bot,
  User,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  ChevronDown,
  Phone,
} from "lucide-react";
import Link from "next/link";
import {
  STARTER_SUGGESTIONS,
  getBotResponse,
  BotAction,
} from "@/lib/faqBotData";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  displayedText?: string;
  isStreaming?: boolean;
  actions?: BotAction[];
  suggestions?: string[];
  timestamp: string;
}

// =========================================================
// STYLISH LADY / CONCIERGE AVATAR ICON FOR "HATTY"
// =========================================================
function HattyAvatar({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dimension = size === "sm" ? 28 : size === "lg" ? 44 : 36;
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 rounded-full overflow-hidden ${className}`}
      style={{ width: dimension, height: dimension }}
    >
      <svg
        viewBox="0 0 64 64"
        width={dimension}
        height={dimension}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full object-cover select-none"
      >
        {/* Background Circle with Warm Glow */}
        <circle cx="32" cy="32" r="32" fill="url(#hattyGrad)" />

        {/* Lady Silhouette / Shoulders */}
        <path
          d="M14 60C14 48 22 43 32 43C42 43 50 48 50 60V64H14V60Z"
          fill="#1A1A1E"
        />

        {/* Chic Gold Collar Trim */}
        <path
          d="M26 43L32 49L38 43"
          stroke="#FFCC00"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Neck */}
        <path d="M28 35H36V44H28V35Z" fill="#F7D3B5" />

        {/* Hair Back Silhouette */}
        <path
          d="M19 24C19 16 24 11 32 11C40 11 45 16 45 24V38C45 42 42 44 38 44H26C22 44 19 42 19 38V24Z"
          fill="#2C1A14"
        />

        {/* Face */}
        <rect x="23" y="20" width="18" height="20" rx="9" fill="#FFDFC4" />

        {/* Smiling Eyes */}
        <path
          d="M26 27C27 25.8 28.5 25.8 29.5 27"
          stroke="#2C1A14"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M34.5 27C35.5 25.8 37 25.8 38 27"
          stroke="#2C1A14"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Blushing Cheeks */}
        <circle cx="25.5" cy="31.5" r="2" fill="#FFAAA6" opacity="0.65" />
        <circle cx="38.5" cy="31.5" r="2" fill="#FFAAA6" opacity="0.65" />

        {/* Warm Smile */}
        <path
          d="M29 33.5C30.5 35.5 33.5 35.5 35 33.5"
          stroke="#D45B6A"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Hair Front / Stylish Modern Bangs */}
        <path
          d="M20 23C20 15 25 11 32 11C39 11 44 15 44 23C42 19 37 18 32 18C27 18 22 20 20 23Z"
          fill="#3D2314"
        />
        <path
          d="M20 22C21 27 22 32 23 34C22 32 21 27 20 22Z"
          fill="#3D2314"
        />
        <path
          d="M44 22C43 27 42 32 41 34C42 32 43 27 44 22Z"
          fill="#3D2314"
        />

        {/* Signature Hatsoff Gold Headband */}
        <path
          d="M19 21C19 14 24 10 32 10C40 10 45 14 45 21"
          stroke="#FFCC00"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Concierge Headset with Microphone */}
        <circle cx="44" cy="26" r="2.5" fill="#FFCC00" />
        <path
          d="M44 28.5C44 32.5 40 35.5 37 36"
          stroke="#FFCC00"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="36" cy="36" r="1.3" fill="#111111" />

        <defs>
          <linearGradient id="hattyGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF2A3" />
            <stop offset="0.5" stopColor="#FFCC00" />
            <stop offset="1" stopColor="#E5B700" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function FaqBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [likedMap, setLikedMap] = useState<Record<string, "like" | "dislike">>({});

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial welcome message from Hatty
  const initialBotMessage: Message = {
    id: "welcome",
    sender: "bot",
    text: "Hi! 👋 I'm **Hatty**, your personal creative concierge at Hatsoff Media.\n\nAsk me anything about our branding, web design, packages, pricing guidelines, or project workflows. Or pick a prompt below to get started!",
    displayedText: "Hi! 👋 I'm **Hatty**, your personal creative concierge at Hatsoff Media.\n\nAsk me anything about our branding, web design, packages, pricing guidelines, or project workflows. Or pick a prompt below to get started!",
    suggestions: STARTER_SUGGESTIONS,
    timestamp: "Just now",
  };

  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setHasOpened(true);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend ?? inputValue).trim();
    if (!text || isTyping) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      displayedText: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Fetch intelligent response
    const botResponse = getBotResponse(text);

    setTimeout(() => {
      const botMessageId = `bot-${Date.now()}`;
      const fullText = botResponse.answer;

      const newBotMsg: Message = {
        id: botMessageId,
        sender: "bot",
        text: fullText,
        displayedText: "",
        isStreaming: true,
        actions: botResponse.actions,
        suggestions: botResponse.suggestions,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);

      // Streaming typewriter simulation
      let index = 0;
      const speed = 16;
      const interval = setInterval(() => {
        index += 3;
        if (index >= fullText.length) {
          clearInterval(interval);
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId
                ? { ...msg, displayedText: fullText, isStreaming: false }
                : msg
            )
          );
        } else {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId
                ? { ...msg, displayedText: fullText.slice(0, index) }
                : msg
            )
          );
        }
      }, speed);
    }, 450);
  };

  const handleReset = () => {
    setMessages([
      {
        ...initialBotMessage,
        id: `welcome-${Date.now()}`,
      },
    ]);
    setLikedMap({});
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFeedback = (id: string, type: "like" | "dislike") => {
    setLikedMap((prev) => ({
      ...prev,
      [id]: prev[id] === type ? undefined! : type,
    }));
  };

  // Simple markdown renderer for bold, lists, and links (All text in crisp black)
  const renderFormattedText = (raw: string) => {
    return raw.split("\n").map((line, lineIdx) => {
      if (!line) return <div key={lineIdx} className="h-2" />;

      // Helper to parse bold **text** in black
      const parseBold = (str: string) => {
        const parts = str.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={i} className="font-extrabold text-black">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return (
            <span key={i} className="text-black font-medium">
              {part}
            </span>
          );
        });
      };

      // Render bullet list
      const bulletMatch = line.match(/^[•\-]\s*(.*)/);
      if (bulletMatch) {
        return (
          <div key={lineIdx} className="flex items-start gap-2 my-1 text-black">
            <span className="text-[#B8860B] font-bold text-xs mt-1 shrink-0">✦</span>
            <span className="flex-1 leading-relaxed text-black font-medium">
              {parseBold(bulletMatch[1])}
            </span>
          </div>
        );
      }

      // Render numbered list (strip leading number from body so it does not repeat)
      const numMatch = line.match(/^(\d+\.)\s*(.*)/);
      if (numMatch) {
        return (
          <div key={lineIdx} className="flex items-start gap-2 my-1.5 text-black">
            <span className="text-black font-black text-xs mt-0.5 shrink-0">{numMatch[1]}</span>
            <span className="flex-1 leading-relaxed text-black font-medium">
              {parseBold(numMatch[2])}
            </span>
          </div>
        );
      }

      return (
        <p key={lineIdx} className="leading-relaxed text-black my-1 font-medium">
          {parseBold(line)}
        </p>
      );
    });
  };

  return (
    <>
      {/* =========================================================
          FLOATING CHAT LAUNCHER PILL (Bottom Left)
      ========================================================= */}
      <div className="fixed bottom-6 left-6 z-40">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 10 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="
                group
                relative
                flex
                items-center
                gap-3
                rounded-full
                border
                border-neutral-200/90
                bg-white/95
                py-3
                pl-4
                pr-5
                text-neutral-900
                shadow-[0_12px_35px_rgba(0,0,0,0.08)]
                backdrop-blur-2xl
                transition-all
                duration-300
                hover:border-[#FFCC00]
                hover:shadow-[0_12px_35px_rgba(255,204,0,0.22)]
              "
              aria-label="Open Hatty Concierge Assistant"
            >
              {/* Hatty Avatar Icon in glowing badge */}
              <div className="relative flex items-center justify-center">
                <HattyAvatar size="md" className="ring-2 ring-[#FFCC00]/60 shadow-[0_0_15px_rgba(255,204,0,0.45)]" />
                <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFCC00] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 border border-white" />
                </span>
              </div>

              {/* Text label */}
              <div className="flex flex-col items-start text-left">
                <span className="text-xs font-bold tracking-tight text-neutral-900 flex items-center gap-1.5">
                  Ask Hatty
                  <span className="rounded bg-[#FFCC00]/20 px-1.5 py-0.5 text-[9px] font-bold text-neutral-900 border border-[#FFCC00]/40">
                    Concierge
                  </span>
                </span>
                <span className="text-[10px] text-neutral-500 font-medium">
                  Instant answers 24/7
                </span>
              </div>

              {/* Prompt teaser on first visit */}
              {!hasOpened && (
                <span className="absolute -top-3.5 right-2 rounded-full bg-[#FFCC00] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-black shadow-md animate-bounce">
                  Chat with me
                </span>
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================================
          CHAT WINDOW (Modern White & Gold Glassmorphic Theme)
      ========================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="
              fixed
              bottom-4
              left-4
              z-50
              flex
              h-[620px]
              max-h-[calc(100vh-2rem)]
              w-[420px]
              max-w-[calc(100vw-2rem)]
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-neutral-200/90
              bg-white
              text-neutral-900
              shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)]
              backdrop-blur-2xl
              sm:bottom-6
              sm:left-6
            "
          >
            {/* Top Bar / Header */}
            <div className="flex items-center justify-between border-b border-neutral-200/70 bg-white px-5 py-4">
              <div className="flex items-center gap-3">
                {/* Hatty Avatar */}
                <div className="relative">
                  <HattyAvatar size="lg" className="ring-2 ring-[#FFCC00] shadow-[0_0_18px_rgba(255,204,0,0.4)]" />
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 border-2 border-white" />
                  </span>
                </div>

                {/* Name & Concierge Badge */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-neutral-950 tracking-tight">
                      HATTY
                    </h3>
                    <span className="rounded-md border border-[#FFCC00]/40 bg-[#FFCC00]/15 px-1.5 py-0.5 text-[10px] font-bold text-neutral-900">
                      Hatsoff Concierge
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 font-medium">
                    Creative Agency Specialist • Online
                  </p>
                </div>
              </div>

              {/* Action Buttons: Reset, Quick Call & Close */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleReset}
                  title="Restart Conversation"
                  aria-label="Restart Conversation"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-800"
                >
                  <RotateCcw size={15} />
                </button>

                {/* Direct Call Quick Action */}
                <a
                  href="tel:+918925881695"
                  title="Quick Call Hatsoff Media (+91 89258 81695)"
                  aria-label="Quick Call Hatsoff Media (+91 89258 81695)"
                  className="group relative flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/60 transition-all hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95 shadow-sm"
                >
                  <Phone size={14} className="transition-transform duration-200 group-hover:rotate-12" />
                  <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  aria-label="Close"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-800"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Conversation Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5 bg-white [scrollbar-width:thin] [scrollbar-color:rgba(255,204,0,0.45)_transparent]">
              {messages.map((message) => {
                const isBot = message.sender === "bot";

                return (
                  <div
                    key={message.id}
                    className={`flex flex-col ${isBot ? "items-start" : "items-end"}`}
                  >
                    <div
                      className={`flex gap-2.5 max-w-[88%] ${
                        isBot ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* Avatar */}
                      {isBot ? (
                        <HattyAvatar size="sm" className="ring-1 ring-[#FFCC00]/60 shadow-sm" />
                      ) : (
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 text-xs font-bold">
                          <User size={13} />
                        </div>
                      )}

                      {/* Bubble */}
                      <div
                        className={`rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                          isBot
                            ? "border border-neutral-200/90 bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                            : "bg-gradient-to-br from-[#FFCC00] via-[#FFD633] to-[#FFE066] text-black font-semibold shadow-sm"
                        }`}
                      >
                        {isBot ? (
                          <div className="text-black">
                            {renderFormattedText(message.displayedText ?? message.text)}
                            {message.isStreaming && (
                              <span className="inline-block h-3.5 w-1.5 ml-1 bg-[#FFCC00] animate-pulse align-middle" />
                            )}
                          </div>
                        ) : (
                          <p className="text-black font-medium">{message.text}</p>
                        )}
                      </div>
                    </div>

                    {/* Interactive Action Buttons inside AI response */}
                    {isBot && message.actions && message.actions.length > 0 && !message.isStreaming && (
                      <div className="ml-10 mt-2.5 flex flex-wrap gap-2">
                        {message.actions.map((act, actIdx) =>
                          act.isExternal ? (
                            <a
                              key={actIdx}
                              href={act.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                border-black/20
                                bg-[#FFCC00]
                                px-3.5
                                py-1.5
                                text-xs
                                font-bold
                                text-black
                                shadow-sm
                                transition-all
                                hover:bg-[#FFE04D]
                                hover:scale-105
                              "
                            >
                              <span>{act.label}</span>
                              <ExternalLink size={12} />
                            </a>
                          ) : (
                            <Link
                              key={actIdx}
                              href={act.href}
                              onClick={() => setIsOpen(false)}
                              className="
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                border-neutral-300
                                bg-white
                                px-3.5
                                py-1.5
                                text-xs
                                font-bold
                                text-black
                                shadow-sm
                                transition-all
                                hover:border-black
                                hover:bg-neutral-100
                              "
                            >
                              <span>{act.label}</span>
                              <ArrowRight size={12} />
                            </Link>
                          )
                        )}
                      </div>
                    )}

                    {/* Prompt Suggestions */}
                    {isBot && message.suggestions && message.suggestions.length > 0 && !message.isStreaming && (
                      <div className="ml-10 mt-3 flex flex-wrap gap-2">
                        {message.suggestions.map((sugg, suggIdx) => (
                          <button
                            key={suggIdx}
                            type="button"
                            onClick={() => handleSend(sugg)}
                            className="
                              rounded-full
                              border
                              border-neutral-300
                              bg-white
                              px-3.5
                              py-1.5
                              text-left
                              text-xs
                              font-semibold
                              text-black
                              shadow-sm
                              transition-all
                              hover:border-black
                              hover:bg-[#FFCC00]/20
                              hover:text-black
                            "
                          >
                            💬 {sugg}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* AI Message Footer: Timestamp, Copy & Thumbs Feedback */}
                    {isBot && !message.isStreaming && (
                      <div className="ml-10 mt-1.5 flex items-center gap-3 text-[10px] text-neutral-400">
                        <span>{message.timestamp}</span>

                        <button
                          type="button"
                          onClick={() => handleCopy(message.id, message.text)}
                          className="flex items-center gap-1 hover:text-neutral-700 transition-colors"
                          title="Copy answer"
                        >
                          {copiedId === message.id ? (
                            <>
                              <Check size={11} className="text-emerald-500" />
                              <span className="text-emerald-500 font-semibold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={11} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleFeedback(message.id, "like")}
                          className={`hover:text-neutral-700 transition-colors ${
                            likedMap[message.id] === "like" ? "text-[#E5B700] font-bold" : ""
                          }`}
                          title="Helpful"
                        >
                          <ThumbsUp size={11} />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleFeedback(message.id, "dislike")}
                          className={`hover:text-neutral-700 transition-colors ${
                            likedMap[message.id] === "dislike" ? "text-rose-500 font-bold" : ""
                          }`}
                          title="Not helpful"
                        >
                          <ThumbsDown size={11} />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <HattyAvatar size="sm" className="ring-1 ring-[#FFCC00]/60 shadow-sm" />
                  <div className="flex items-center gap-1 rounded-2xl border border-neutral-200/80 bg-white px-4 py-2.5 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFCC00] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFCC00] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFCC00] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="border-t border-neutral-200/80 bg-white p-3 sm:p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative flex items-center"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask HATTY anything..."
                  className="
                    w-full
                    rounded-full
                    border
                    border-neutral-200
                    bg-neutral-50
                    py-3
                    pl-4
                    pr-12
                    text-xs
                    text-black
                    font-medium
                    placeholder-neutral-500
                    outline-none
                    transition-all
                    focus:bg-white
                    focus:border-[#FFCC00]
                    focus:ring-2
                    focus:ring-[#FFCC00]/25
                    sm:text-sm
                  "
                />

                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  aria-label="Send message"
                  className={`
                    absolute
                    right-1.5
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-200
                    ${
                      inputValue.trim() && !isTyping
                        ? "bg-[#FFCC00] text-black shadow-md hover:scale-105"
                        : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                    }
                  `}
                >
                  <Send size={14} className="translate-x-[1px]" />
                </button>
              </form>

              {/* Disclaimer */}
              <p className="mt-2 text-center text-[10px] text-neutral-600 font-medium">
                Hatty can make mistakes. For official quotes,{" "}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-black underline font-bold hover:text-[#B8860B]"
                >
                  contact our team
                </Link>
                .
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
