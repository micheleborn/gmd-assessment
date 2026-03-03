"use client"

type HeaderProps = {
  siteName?: string
  current?: "control" | "variant-1" | "variant-2"
}

const NAV = [
  { key: "control", label: "Control", href: "/control" },
  { key: "variant-1", label: "Variant 1", href: "/variant-1" },
  { key: "variant-2", label: "Variant 2", href: "/variant-2" },
] as const

export default function Header({
  siteName = "Axon",
  current,
}: HeaderProps) {
  return (

        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black border-b border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-sm font-medium tracking-tight text-white">
          {siteName}
        </div>

        <nav className="flex items-center gap-2">
          {NAV.map((n) => {
            const active = current === n.key
            return (
              <a
                key={n.href}
                href={n.href}
                className={[
                  "rounded-full px-4 py-2 text-xs transition",
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                {n.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}