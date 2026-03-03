"use client"

import posthog from "posthog-js"

type SignupIntentProps = {
  variant: string
  cta: string
  placement: "hero_primary" | "hero_secondary" | "final_primary" | "final_secondary"
  href: string
}

/**
 * Fires a signup-intent event, then redirects.
 * Uses a small delay so the event has time to send before navigation.
 */
export function trackSignupIntentAndRedirect({
  variant,
  cta,
  placement,
  href,
}: SignupIntentProps) {
  try {
    posthog.capture("signed_up", {
      variant,
      cta,
      placement,
      href,
    })
  } catch {
    // If PostHog isn't ready, we still redirect.
  }

  // Give the browser a moment to flush requests before leaving the page.
  window.setTimeout(() => {
    window.location.assign(href)
  }, 150)
}