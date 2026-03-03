"use client"

type MidCTAProps = {
  text: string
  primaryCta: string
  onPrimaryClick?: () => void
}

export default function MidCTA({
  text,
  primaryCta,
  onPrimaryClick,
}: MidCTAProps) {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4">
        <div className="text-sm text-white/70">
          {text}
        </div>

        <button
          onClick={onPrimaryClick}
          className="rounded-md bg-[#2f6bff] px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition"
        >
          {primaryCta}
        </button>
      </div>
    </section>
  )
}