import Groq from "groq-sdk"

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

export async function POST(request: Request) {
  const body = await request.json()
  const { messages, file } = body

  const groqMessages = messages.map((m: any) => ({
    role: m.role,
    content: m.content
  }))

  if (file) {
  if (file.type === "application/pdf") {
    const PDFParser = (await import("pdf2json")).default
    const pdfParser = new PDFParser()
    const buffer = Buffer.from(file.data.split(",")[1], "base64")
    const text = await new Promise<string>((resolve, reject) => {
      pdfParser.on("pdfParser_dataReady", (pdfData: any) => {
        const text = pdfData.Pages
          .map((page: any) => page.Texts
          .map((t: any) => decodeURIComponent(t.R[0].T))
          .join(" "))
          .join("\n")
        resolve(text)
      })
      pdfParser.on("pdfParser_dataError", reject)
      pdfParser.parseBuffer(buffer)
    })
    groqMessages.push({
      role: "user",
      content: `El usuario adjuntó un PDF llamado "${file.name}". Aquí está su contenido:\n\n${text}`
    })
  } else if (file.type.startsWith("image/")) {
    groqMessages.push({
      role: "user",
      content: [
        {
          type: "image_url",
          image_url: { url: file.data }
        },
        {
          type: "text",
          text: `El usuario adjuntó una imagen llamada "${file.name}". Analízala en el contexto de la conversación.`
        }
      ]
    })
  }
}

  const response = await groq.chat.completions.create({
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    messages: [
      { role: "system", content: "Eres un asistente especializado en orientación profesional y tendencias del mercado laboral. Tu función es ayudar a estudiantes, egresados y profesionistas a entender qué habilidades están en demanda y cómo actualizar su perfil profesional. Cuando el usuario te comparta un plan de estudios, una lista de habilidades, un PDF o una imagen con información académica, debes: 1. Analizar las habilidades o materias presentes 2. Identificar cuáles están vigentes y en demanda 3. Señalar cuáles están desactualizadas 4. Sugerir qué habilidades debería agregar o reforzar 5. Dar retroalimentación clara, concisa y accionable. Responde siempre en español, de forma amigable y directa. Usa listas y formato claro para que la información sea fácil de leer."},
      ...groqMessages
    ]
  })

  const text = response.choices[0].message.content
  return Response.json({ reply: text })
}
