"use client"

import type {ChatInputProps} from "@/types/index"
import { useState } from "react"

export default function ChatInput({onSend}: ChatInputProps) {
    const [text, setText] = useState("")
    const handleSend = () => {
      if(text.trim() === "") return
      onSend(text)
      setText("")
    }

  
     return (
    <div className="flex items-center gap-3 p-4 bg-white border-t border-gray-100">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Write a message..."
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button
        onClick={handleSend}
        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl text-sm font-medium transition-colors duration-150"
      >
        Send
      </button>
    </div>
  ) 
}
