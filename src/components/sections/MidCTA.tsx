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
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        
        <div className="text-sm text-white/70">
          {text}
        </div>

        <button
          onClick={onPrimaryClick}
          className="w-full sm:w-auto rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white cursor-pointer transition-all duration-200 hover:-translate-y-[5px] hover:bg-white/10"
        >
          {primaryCta}
        </button>

      </div>
    </section>
  )
}