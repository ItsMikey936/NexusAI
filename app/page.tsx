"use client"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">

      <div className="text-center max-w-2xl mx-auto">

        <div
          onClick={() => router.push("/chat")}
          className="text-8xl mb-8 cursor-pointer hover:scale-110 transition-transform duration-200 inline-block"
          title="Talk to NexusAI"
        >
          🤖
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Nexus<span className="text-purple-600">AI</span>
        </h1>

        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          Discover what skills the job market demands today.
          Share your study plan or CV and get personalized feedback.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.push("/chat")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-colors duration-150"
          >
            Talk to the assistant
          </button>
          <button
            onClick={() => router.push("/trends")}
            className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 px-8 py-3 rounded-xl font-medium transition-colors duration-150"
          >
            View trends
          </button>
        </div>

      </div>

    </main>
  )
}
