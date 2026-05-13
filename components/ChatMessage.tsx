"use client"
import type { Message } from "@/types/index"
import ReactMarkdown from "react-markdown"

export default function ChatMessage({ id, content, role, timestamp, document }: Message) {
  return (
    <div className={`flex w-full mb-3 ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm leading-relaxed
        ${role === 'user'
          ? 'bg-purple-600 text-white rounded-br-none'
          : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-none'
        }`}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
