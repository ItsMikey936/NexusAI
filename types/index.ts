// Definición de tipos

//Conversation
export type Conversation = {
  messages: Message[]
  startedAt: Date
}

//Message
export type Message = {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
  document?: Document
}

//Documents
export type Document = {
  name: string
  type: 'pdf' | 'image'
  size: number
  extractedContent: string
}

//Trend
export type Trend = {
  title: string
  summary: string
  area: string
  source: string
  url: string
  publishedAt: string
}

// Professional area
export type ProfessionalArea = {
  name: string
  searchKeywords: string[]
}


// AreaFilterProps
export type AreaFilterProps = {
  areas: ProfessionalArea[]
  selectedArea: string
  onSelect: (area: string) => void
}


// ChatInputProps
export type ChatInputProps = {
  onSend: (message: string) => void
}
