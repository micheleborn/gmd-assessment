"use client"

import { useEffect } from "react"
import posthog from "posthog-js"

export default function Home() {
  useEffect(() => {
    posthog.onFeatureFlags(() => {
      const assigned = posthog.getFeatureFlag("splitting-tage-traffic")

      const variant =
        assigned === "control" ||
        assigned === "variant-1" ||
        assigned === "variant-2"
          ? assigned
          : "control"

      window.location.replace(`/${variant}`)
    })
  }, [])

  return null
}