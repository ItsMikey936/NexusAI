import type { Trend } from "@/types/index"

export default function TrendCard({ title, summary, area, source, url, publishedAt }: Trend) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200">
      <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full w-fit">
        {area}
      </span>

      <h2 className="text-gray-900 font-semibold text-lg leading-snug">
        {title}
      </h2>

      <p className="text-gray-500 text-sm leading-relaxed">
        {summary}
      </p>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
        <span className="text-xs text-gray-400">{source}</span>
        <a href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors duration-150"
        >
          Leer artículo →
        </a>
      </div>

      <p>{publishedAt}</p>
    </div>
  )
}
