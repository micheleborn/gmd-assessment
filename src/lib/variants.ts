// src/lib/variants.ts

export type VariantKey = "control" | "variant-1" | "variant-2"

export type FeatureIconKey =
  | "globe"
  | "target"
  | "trend"
  | "budget"
  | "visibility"
  | "expand"

export type Feature = {
  title: string
  body: string
  icon: FeatureIconKey
}

export type VariantMethod = "USP Baseline" | "Authority + Social Proof" | "Risk Mitigation"

export type VariantConfig = {
  key: VariantKey

  /**
   * Psychological / persuasion framework used for this variant.
   * (Shown in UI if you want; also useful for analytics/debugging.)
   */
  method: VariantMethod

  /**
   * Two different labels used in the UI:
   * - heroLabel: small label above hero text
   * - panelLabel: small label above the second panel (above cards)
   */
  heroLabel: string
  panelLabel: string

  referralCode: string

  hero: {
    eyebrow: string
    headline: string
    subhead: string
    primaryCta: string
    secondaryCta: string
  }

  proof: {
    items: string[]
  }

  features: {
    title: string
    items: Feature[]
  }

  testimonial: {
    quote: string
    author: string
  }

  finalCta: {
    headline: string
    subhead: string
    primaryCta: string
    secondaryCta: string
  }
}

export const VARIANTS: Record<VariantKey, VariantConfig> = {
  control: {
    key: "control",
    method: "USP Baseline",
    heroLabel: "Control",
    panelLabel: "Core Capabilities",

    referralCode: "CODE_ONE",

    hero: {
      eyebrow: "Real Campaign Performance",
      headline: "Add a new source of customer growth",
      subhead:
        "Growth teams have direct access to performance media built to drive measurable, incremental revenue.",
      primaryCta: "Start Advertising",
      secondaryCta: "Why Teams Trust It →",
    },

    proof: {
      items: [
        "Designed for growth teams",
        "Built for incremental acquisition",
        "Self-serve activation",
      ],
    },

    features: {
      title: "Why Teams Scale",
      items: [
        {
          icon: "globe",
          title: "Reach Net-New Audiences",
          body:
            "Expand acquisition beyond saturated platforms without cannibalizing existing retargeting pools.",
        },
        {
          icon: "target",
          title: "Focus on Real Conversions",
          body:
            "Campaigns prioritize purchase outcomes — not impressions or vanity engagement.",
        },
        {
          icon: "trend",
          title: "Scale Without Saturation",
          body: "Increase spend without inflating costs across your primary platforms.",
        },
      ],
    },

    testimonial: {
      quote:
        "A clean way to add acquisition capacity without rebuilding our entire channel strategy.",
      author: "Growth Lead",
    },

    finalCta: {
      headline: "A performance channel built for teams that value clarity and control",
      subhead: "",
      primaryCta: "Start Advertising",
      secondaryCta: "",
    },
  },

  "variant-1": {
    key: "variant-1",
    method: "Authority + Social Proof",
    heroLabel: "Variant 1",
    panelLabel: "Performance Infrastructure",

    referralCode: "CODE_TWO",

    hero: {
      eyebrow: "Verified Incremental Lift",
      headline: "Built for measurable performance",
      subhead:
        "Infrastructure to evaluate, optimize, and scale campaigns based on measurable revenue signals.",
      primaryCta: "Start Advertising",
      secondaryCta: "Why Teams Trust It →",
    },

    proof: {
      items: [
        "Revenue-signal optimization",
        "Incrementality-first evaluation",
        "Adopted by performance-first brands",
      ],
    },

    features: {
      title: "Designed for data-informed growth",
      items: [
        {
          icon: "visibility",
          title: "Performance Clarity",
          body: "Access campaign reporting tied to conversion activity and revenue impact.",
        },
        {
          icon: "target",
          title: "Revenue-Aligned Delivery",
          body:
            "Campaign delivery responds to purchase-based data rather than engagement signals.",
        },
        {
          icon: "trend",
          title: "Informed Budget Decisions",
          body: "Increase budget with visibility into performance trends over time.",
        },
      ],
    },

    testimonial: {
      quote:
        "When the measurement layer is disciplined, it’s easier to justify expanding a new channel.",
      author: "Performance Marketer",
    },

    finalCta: {
      headline: "Anchor your growth strategy in measurable results",
      subhead: "",
      primaryCta: "Start Advertising",
      secondaryCta: "",
    },
  },

  "variant-2": {
    key: "variant-2",
    method: "Risk Mitigation",
    heroLabel: "Variant 2",
    panelLabel: "Controlled Growth Framework",

    referralCode: "CODE_THREE",

    hero: {
      eyebrow: "Performance Stability",
      headline: "Expand acquisition without disrupting performance",
      subhead:
        "Introduce a new acquisition channel without destabilizing existing performance while maintaining visibility, efficiency, and budget control.",
      primaryCta: "Start Advertising",
      secondaryCta: "Why Teams Trust It →",
    },

    proof: {
      items: ["Controlled rollout", "Clear visibility from day one", "Gradual expansion"],
    },

    features: {
      title: "Why teams trust it",
      items: [
        {
          icon: "budget",
          title: "Controlled Budget Activation",
          body: "Start with deliberate spend levels and scale based on observed results.",
        },
        {
          icon: "visibility",
          title: "Performance Visibility from Day One",
          body: "Monitor spend, revenue signals, and efficiency metrics as campaigns run.",
        },
        {
          icon: "expand",
          title: "Gradual Expansion",
          body: "Increase investment without destabilizing existing acquisition performance.",
        },
      ],
    },

    testimonial: {
      quote:
        "The structure makes it easy to introduce a new channel without creating chaos in our mix.",
      author: "Operator",
    },

    finalCta: {
      headline: "A structured approach to incremental growth",
      subhead: "",
      primaryCta: "Start Advertising",
      secondaryCta: "",
    },
  },
}