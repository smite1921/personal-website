import { ComponentType } from "react"
import SFSkyline from "@/features/contact/components/SFSkyline"
import TorontoSkyline from "@/features/contact/components/TorontoSkyline"

// Add new cities here
export type CityKey = "san-francisco" | "toronto"

export interface CityConfig {
  name: string
  location: string
  skyline: ComponentType
}

const cities: Record<CityKey, CityConfig> = {
  "san-francisco": {
    name: "San Francisco",
    location: "san francisco, california",
    skyline: SFSkyline,
  },
  toronto: {
    name: "Toronto",
    location: "toronto, canada",
    skyline: TorontoSkyline,
  },
}

// Change this to switch cities
export const CURRENT_CITY: CityKey = "san-francisco"

export const siteConfig = {
  city: cities[CURRENT_CITY],
}
