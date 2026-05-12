import Groq from "groq-sdk"

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

export async function POST(request: Request) {
  const body = await request.json()
  const { messages } = body

  const groqMessages = messages.map((m: any) => ({
    role: m.role,
    content: m.content
  }))

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content:"Eres un asistente especializado en orientación profesional y tendencias del mercado laboral. Tu función es ayudar a  estudiantes, egresados y profesionistas a entender qué  habilidades están en demanda y cómo actualizar su perfil profesional. Cuando el usuario te comparta un plan de estudios, una lista  de habilidades, un PDF o una imagen con información académica,  debes: 1. Analizar las habilidades o materias presentes 2. Identificar cuáles están vigentes y en demanda 3. Señalar cuáles están desactualizadas 4. Sugerir qué habilidades debería agregar o reforzar 5. Dar retroalimentación clara, concisa y accionable  Responde siempre en español, de forma amigable y directa. Usa listas y formato claro para que la información sea fácil  de leer."},
      ...groqMessages
    ]
  })

  const text = response.choices[0].message.content

  return Response.json({ reply:text })
}
