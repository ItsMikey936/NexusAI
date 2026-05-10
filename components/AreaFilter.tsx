"use client"

import type { AreaFilterProps } from "@/types/index"

export default function AreaFilter({areas, selectedArea, onSelect}: AreaFilterProps) {
    return(
       <div className="flex flex-wrap gap-2">
          {areas.map((area) => (
          <button
            key={area.name}
            onClick={() => onSelect(area.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150
              ${selectedArea === area.name
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600'
            }`}
          >
          {area.name}
          </button>
          ))}
      </div>
    )
}
