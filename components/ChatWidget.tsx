"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import { MAX_MESSAGES_PER_SESSION } from "@/lib/constants";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "usps-chat-history";

function loadMessages(): Message[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveMessages(messages: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {
    // localStorage might be full or unavailable
  }
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loaded = loadMessages();
    setMessages(loaded);
    setMessageCount(loaded.filter((m) => m.role === "user").length);
  }, []);

  useEffect(() => {
    if (mounted && messages.length > 0) {
      saveMessages(messages);
    }
  }, [messages, mounted]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = useCallback(
    async (content: string) => {
      if (isStreaming) return;
      if (messageCount >= MAX_MESSAGES_PER_SESSION) return;

      const userMessage: Message = { role: "user", content };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);
      setMessageCount((c) => c + 1);
      setIsStreaming(true);

      // Add placeholder assistant message
      const assistantMessage: Message = { role: "assistant", content: "" };
      setMessages([...newMessages, assistantMessage]);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: newMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.error || `Request failed with status ${response.status}`
          );
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No response stream");

        const decoder = new TextDecoder();
        let assistantContent = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") break;

              try {
                const parsed = JSON.parse(data);
                if (parsed.error) {
                  throw new Error(parsed.error);
                }
                if (parsed.text) {
                  assistantContent += parsed.text;
                  setMessages([
                    ...newMessages,
                    { role: "assistant", content: assistantContent },
                  ]);
                }
              } catch (e) {
                if (e instanceof SyntaxError) continue;
                throw e;
              }
            }
          }
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Something went wrong";
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: `Sorry, I ran into an issue: ${errorMessage}. Please try again.`,
          },
        ]);
      } finally {
        setIsStreaming(false);
      }
    },
    [isStreaming, messageCount, messages]
  );

  const clearChat = () => {
    setMessages([]);
    setMessageCount(0);
    localStorage.removeItem(STORAGE_KEY);
  };

  const rateLimited = messageCount >= MAX_MESSAGES_PER_SESSION;

  if (!mounted) return null;

  return (
    <>
      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-accent-500 text-white rounded-full shadow-lg hover:bg-accent-600 transition-all hover:scale-105 flex items-center justify-center"
          aria-label="Open chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path
              fillRule="evenodd"
              d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-5 sm:right-5 z-50 sm:w-[400px] sm:h-[600px] flex flex-col bg-white sm:rounded-2xl sm:shadow-2xl border border-navy-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-navy-900 text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <h3 className="font-semibold text-sm">USPS Jobs Helper</h3>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                className="text-navy-300 hover:text-white p-1.5 transition-colors text-xs"
                title="Clear chat"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-navy-300 hover:text-white p-1.5 transition-colors"
                aria-label="Close chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">📬</div>
                <h4 className="font-semibold text-navy-800 mb-1">
                  Hey! Ask me anything about USPS jobs
                </h4>
                <p className="text-sm text-navy-500">
                  I can help with applications, job types, exams, and more.
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <ChatMessage key={i} role={msg.role} content={msg.content} />
            ))}
            {isStreaming &&
              messages.length > 0 &&
              messages[messages.length - 1].content === "" && (
                <div className="flex justify-start mb-3">
                  <div className="bg-navy-100 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-navy-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-navy-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-navy-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            <div ref={messagesEndRef} />
          </div>

          {/* Rate limit warning */}
          {rateLimited && (
            <div className="px-4 py-2 bg-amber-50 border-t border-amber-200 text-amber-800 text-xs text-center">
              You&apos;ve reached the message limit for this session. Refresh to start a
              new session.
            </div>
          )}

          {/* Suggested questions (only when no messages) */}
          {messages.length === 0 && !rateLimited && (
            <SuggestedQuestions
              onSelect={sendMessage}
              disabled={isStreaming}
            />
          )}

          {/* Input */}
          <ChatInput
            onSend={sendMessage}
            disabled={isStreaming || rateLimited}
          />
        </div>
      )}
    </>
  );
}
