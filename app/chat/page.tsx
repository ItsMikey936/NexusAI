"use client"

import { useState } from "react"
import ChatMessage from "@/components/ChatMessage"
import ChatInput from "@/components/ChatInput"
import type { Message } from "@/types/index"

export default function Chat() {
  //Estado array con datos harcodeados
  const [messages, setMessages] = useState<Message[]>([
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

  const [isLoading, setIsLoading] = useState(false)

  //Funcion que agrega al array
  const handleAdd = (text: string) => {
    // 1. Agrega mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      role: "user",
      timestamp: new Date()
    }
    setMessages((prev) => [...prev, userMessage])

    // 2. Simula que el asistente está pensando
    setIsLoading(true)

    // 3. Después de 1 segundo agrega respuesta falsa
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now().toString(),
        content: "This is a simulated response. The AI will be connected in the next stage.",
        role: "assistant",
        timestamp: new Date()
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }


  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-gray-50">

      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-3xl w-full mx-auto">
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
      </div>

      {isLoading && (
        <div className="flex justify-start mb-3">
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-none px-4 py-3 text-sm text-gray-400">
            NexusAI is thinking...
          </div>
        </div>
      )}

      <div className="max-w-3xl w-full mx-auto px-4 pb-4">
        <ChatInput onSend={handleAdd} />
      </div>

    </div>
  )
}
