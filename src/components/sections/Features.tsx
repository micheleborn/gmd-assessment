"use client"

import type { Feature } from "@/lib/variants"
import FeatureIcon from "./FeatureIcon"


export default function Features({
  title,
  items,
  panelLabel,
}: {
  title: string
  items: Feature[]
  panelLabel: string
})

 {
  return (
 <section id="features">
      {/* pill */}
<div className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
  {panelLabel}
</div>

      <h2 className="mt-5 text-3xl font-semibold tracking-tight">{title}</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((f, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          >
            <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 min-h-[40px] min-w-[40px] shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
               <FeatureIcon name={f.icon} />
              </div>

              <div>
                <div className="text-lg font-medium leading-snug">{f.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {f.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}