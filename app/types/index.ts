// Definición de tipos

//Conversation
type Conversation = {
  messages: Message[]
  startedAt: Date
}

//Message
type Message = {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
  document?: Document
}

//Documents
type Document = {
  name: string
  type: 'pdf' | 'image'
  size: number
  extractedContent: string
}

//Trend
type Trend = {
  title: string
  summary: string
  area: ProfessionalArea
  source: string
  url: string
  publishedAt: string
}

// Professional area
type ProfessionalArea = {
  name: string
  searchKeywords: string[]
}
