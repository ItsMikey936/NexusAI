import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <span className="font-bold text-xl">Mi App</span>
      <div className="flex gap-6">
        <Link href="/" className="text-gray-600 hover:text-blue-600">Inicio</Link>
        <Link href="/chat" className="text-gray-600 hover:text-blue-600">Chatbot</Link>
        <Link href="/trends" className="text-gray-600 hover:text-blue-600">Tendencias</Link>
      </div>
    </nav>
  )
}
