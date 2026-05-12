"use client"

//Componentes
import TrendCard from "@/components/TrendCard"
import AreaFilter from "@/components/AreaFilter"
import { useState, useEffect } from "react"

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

  const [trends, setTrends] = useState<Trend[]>([])

  //Uso de estados
  const [selectedArea, setSelectedArea] = useState("Software Engineering")

  useEffect(() => {
    const loadTrends = async () => {
      const response = await fetch(`/api/trends?area=${selectedArea}`)
      const data = await response.json()
      console.log(data)
      setTrends(data.trends)
    }

    loadTrends()
  }, [selectedArea])

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 max-w-6xl mx-auto">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Labor Market Trends</h1>
        <p className="text-gray-500 text-sm">Real-time insights by professional area</p>
      </div>

      <div className="mb-8">
        <AreaFilter
          areas={areas}
          selectedArea={selectedArea}
          onSelect={setSelectedArea}
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
