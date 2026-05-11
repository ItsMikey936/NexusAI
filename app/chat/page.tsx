"use client"

import {useState} from "react"
import ChatMessage from "@/components/ChatMessage"
import ChatInput from "@/components/ChatInput"
import type { Message } from "@/types/index"

export default function Chat() {
  //Estado array con datos harcodeados
    const [messages, setMessage] = useState<Message[]>([
    {
       id: "1",
       content: "Hola",
       role: "user",
       timestamp: new Date()
     },
     {
        id: "2",
        content: "Hola, ¿en qué te ayudo?",
        role: "assistant",
        timestamp: new Date()
     },
    ]) 

  //Funcion que agrega al array
  const handleAdd = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content: text,
      role: "user",
      timestamp: new Date()
    }
    setMessage((prev) => [...prev, newMessage])
  }

    return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-gray-50">
      
      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-3xl w-full mx-auto">
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
      </div>

      <div className="max-w-3xl w-full mx-auto px-4 pb-4">
        <ChatInput onSend={handleAdd} />
      </div>

    </div>
  )
}
