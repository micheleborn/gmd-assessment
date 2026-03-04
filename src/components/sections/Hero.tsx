"use client"

type HeroProps = {
  eyebrow: string
  headline: string
  subhead: string
  primaryCta: string
  secondaryCta?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export default function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  onPrimaryClick,
  onSecondaryClick,
}: HeroProps) {
  return (
 <section className="relative overflow-hidden py-24 md:py-28 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  {/* backgrounds + chart stay absolute inset-0 as you already have */}
  <div className="relative z-10 mx-auto max-w-5xl">

      {/* ===== Animated Gradient Glow ===== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-60 -right-40 bottom-20 
          bg-[radial-gradient(600px_600px_at_60%_42%,rgba(124,58,237,1),transparent_60%),radial-gradient(700px_600px_at_56%_54%,rgb(0,77,202),transparent_66%),radial-gradient(980px_820px_at_62%_50%,rgba(110,168,255,0.2),transparent_72%)]
          blur-3xl opacity-90 animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      {/* ===== Ghosted Performance Chart ===== */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden 
        [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">

        <svg
          viewBox="0 0 1200 400"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] opacity-[0.07] blur-[1px]"
          fill="none"
        >
          <path
            d="M0 320 
               C150 300 220 260 320 270 
               C420 280 500 200 600 210 
               C700 220 780 140 880 160 
               C980 180 1050 120 1200 100"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <div className="w-full lg:w-2/3">

          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
            {eyebrow}
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-regular tracking-tight text-white">
            {headline}
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70">
            {subhead}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={onPrimaryClick}
              className="rounded-md bg-[#1e4ed8] px-6 py-3 text-sm font-medium text-white cursor-pointer transition-all duration-200 hover:-translate-y-[5px] hover:opacity-90"
            >
              {primaryCta}
            </button>

            {secondaryCta && (
              <button
                onClick={onSecondaryClick}
               className="rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white cursor-pointer transition-all duration-200 hover:-translate-y-[5px] hover:bg-white/10"
              >
                {secondaryCta}
              </button>
            )}
          </div>

        </div>
        </div>
      </div>
    </section>
  )
}