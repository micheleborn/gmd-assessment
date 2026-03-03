"use client"

type FinalCTAProps = {
  headline: string
  primaryCta: string
  onPrimaryClick?: () => void
}

export default function FinalCTA({ headline, primaryCta, onPrimaryClick }: FinalCTAProps) {
  return (
    <section className="relative mt-24 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0
          bg-[radial-gradient(900px_520px_at_50%_40%,rgba(0,77,202,0.55),transparent_65%),radial-gradient(700px_500px_at_65%_25%,rgba(124,58,237,0.55),transparent_70%)]
          blur-3xl opacity-80"
        />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          {headline}
        </h2>

        <div className="mt-10 flex justify-center">
          <button
            onClick={onPrimaryClick}
            className="rounded-full bg-[#2f6bff] px-7 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            {primaryCta}
          </button>
        </div>
      </div>
    </section>
  )
}