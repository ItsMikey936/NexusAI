"use client"

//Componentes
import TrendCard from "@/components/TrendCard"
import AreaFilter from "@/components/AreaFilter"

//Tipos
import type { Trend } from "@/types/index"
import type { ProfessionalArea } from "@/types/index"

export default function Trends() {
  
  //Datos Harcodeados
   const areas: ProfessionalArea[] = [
    {
      name: "Software Engineering",
      searchKeywords: ["LLM integration", "Cloud Native", "Rust programming", "DevSecOps"]
    },
    {
      name: "Medicine & Healthcare",
      searchKeywords: ["Telemedicine", "AI diagnostics", "CRISPR gene editing", "Digital health"]
    },
    {
      name: "Data Science & AI",
      searchKeywords: ["Agentic AI", "Data Governance", "MLOps", "Predictive Analytics"]
    },
    {
      name: "Cybersecurity",
      searchKeywords: ["Zero Trust Architecture", "Quantum-safe cryptography", "Threat Intelligence"]
    }
  ];

  const trends: Trend[] = [
    {
      title: "The Rise of Agentic AI Workflows",
      summary: "Moving beyond simple chatbots, companies are now deploying autonomous agents capable of executing complex multi-step tasks in development and operations.",
      area: "Software Engineering",
      source: "Gartner",
      url: "https://example.com/trends/agentic-ai",
      publishedAt: "2026-03-15"
    },
    {
      title: "AI-Driven Genomic Sequencing",
      summary: "Machine learning models are reducing the time required for DNA analysis from weeks to hours, enabling hyper-personalized medical treatments.",
      area: "Medicine & Healthcare",
      source: "Nature Biotechnology",
      url: "https://example.com/trends/genomic-ai",
      publishedAt: "2026-04-10"
    },
    {
      title: "Shift Towards Green Software Engineering",
      summary: "New industry standards focus on measuring and reducing the carbon footprint of intensive cloud computations and large-scale model training.",
      area: "Software Engineering",
      source: "The Green Software Foundation",
      url: "https://example.com/trends/green-coding",
      publishedAt: "2026-02-20"
    },
    {
      title: "Zero Trust as a Corporate Mandate",
      summary: "With the increase in sophisticated phishing, enterprises are shifting to strict identity verification for every single access request within their networks.",
      area: "Cybersecurity",
      source: "Wired Business",
      url: "https://example.com/trends/zero-trust",
      publishedAt: "2026-05-01"
    }
  ];

   return (
  <main className="min-h-screen bg-gray-50 px-6 py-10 max-w-6xl mx-auto">
    
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-1">Labor Market Trends</h1>
      <p className="text-gray-500 text-sm">Real-time insights by professional area</p>
    </div>

    <div className="mb-8">
      <AreaFilter
        areas={areas}
        selectedArea="Software Engineering"
        onSelect={() => {}}
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trends.map((trend) => (
        <TrendCard key={trend.url} {...trend} />
      ))}
    </div>

  </main>
)
}
