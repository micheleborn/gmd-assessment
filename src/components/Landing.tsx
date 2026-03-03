"use client"

import { useEffect, useRef } from "react"
import posthog from "posthog-js"
import type { VariantKey } from "@/lib/variants"
import { VARIANTS } from "@/lib/variants"
import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import FinalCTA from "@/components/sections/FinalCTA"
import MidCTA from "@/components/sections/MidCTA"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function Landing({ variant }: { variant: VariantKey }) {
  const v = VARIANTS[variant]

  // Prevent duplicate firing per click session
  const hasFiredRef = useRef(false)

  // Track variant view
  useEffect(() => {
    const id = window.setTimeout(() => {
      posthog.capture("variant_viewed", { variant })
    }, 0)

    return () => window.clearTimeout(id)
  }, [variant])

// Placeholder while testing (Assignment target later: https://ads.axon.ai/auth/signup)
const signupUrl = `https://mmmbop.net/?referralCode=${encodeURIComponent(
  v.referralCode
)}`

  const handleSignupClick = (placement: "hero" | "mid" | "final") => {
    if (hasFiredRef.current) return
    hasFiredRef.current = true

    posthog.capture("signed_up", {
      variant,
      placement,
      referralCode: v.referralCode,
      destination: signupUrl,
    })

    // Small delay ensures event is flushed before navigation
    window.setTimeout(() => {
      window.location.assign(signupUrl)
    }, 150)
  }

  return (

  <main className="min-h-screen bg-[#0b1220] text-white overflow-x-hidden">
  <Header current={variant} />
<div className="mx-auto max-w-5xl px-6 pt-16 pb-16">

        <Hero
          eyebrow={v.hero.eyebrow}
          headline={v.hero.headline}
          subhead={v.hero.subhead}
          primaryCta={v.hero.primaryCta}
          secondaryCta={v.hero.secondaryCta}
          onPrimaryClick={() => handleSignupClick("hero")}
        />

       <Features title={v.features.title} items={v.features.items} />

      <MidCTA
  text="Add a channel without adding volatility"
  primaryCta="Start Advertising"
  onPrimaryClick={() => handleSignupClick("mid")}  
/>

        <FinalCTA
          headline={v.finalCta.headline}
          primaryCta={v.finalCta.primaryCta}
          onPrimaryClick={() => handleSignupClick("final")}
        />
        <Footer />

        

      </div>
    </main>
  )
}