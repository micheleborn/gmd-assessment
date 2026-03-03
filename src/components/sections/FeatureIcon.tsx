import type { FeatureIconKey } from "@/lib/variants"

export default function FeatureIcon({ name }: { name: FeatureIconKey }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }

  switch (name) {
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c3 3.5 3 14.5 0 18" />
          <path d="M12 3c-3 3.5-3 14.5 0 18" />
        </svg>
      )
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3" />
          <path d="M22 12h-3" />
          <path d="M12 22v-3" />
          <path d="M2 12h3" />
        </svg>
      )
    case "trend":
      return (
        <svg {...common}>
          <path d="M3 17l7-7 4 4 7-7" />
          <path d="M21 7v6h-6" />
        </svg>
      )
    case "budget":
      return (
        <svg {...common}>
          <path d="M7 7h10" />
          <path d="M7 12h10" />
          <path d="M7 17h6" />
          <path d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z" />
        </svg>
      )
    case "visibility":
      return (
        <svg {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case "expand":
      return (
        <svg {...common}>
          <path d="M7 17l10-10" />
          <path d="M14 7h3v3" />
          <path d="M10 17H7v-3" />
        </svg>
      )
    default:
      return null
  }
}