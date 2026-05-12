export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const area = searchParams.get("area")

  const AREAS = [
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
  ]

  const areaData = AREAS.find((a) => a.name === area)
  if (!areaData) {
    return Response.json({ error: "Area not found" }, { status: 400 })
  }

  const keywords = areaData.searchKeywords.join(" ")

  const url = `https://gnews.io/api/v4/search?q=${keywords}&lang=en&max=10&token=${process.env.GNEWS_API_KEY}`
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  if (!data.articles) {
    return Response.json({ trends: []})
  }

  const trends = data.articles.map((article: any) => ({
    title: article.title,
    summary: article.description,
    source: article.source.name,
    url: article.url,
    publishedAt: article.publishedAt,
    area: area
  })) 

  return Response.json({ trends })
}
