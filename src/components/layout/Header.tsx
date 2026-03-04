"use client"

import { RocketIcon } from "@/components/icons/RocketIcon"

type HeaderProps = {
  siteName?: string
  current?: "control" | "variant-1" | "variant-2"
}

const NAV = [
  { key: "control", label: ".", href: "/control" },
  { key: "variant-1", label: ".", href: "/variant-1" },
  { key: "variant-2", label: ".", href: "/variant-2" },
] as const

export default function Header({ siteName = "Growth", current }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-sm font-medium tracking-tight text-white">
          <RocketIcon className="h-5 w-5 text-blue-600" />
          <span>{siteName}</span>
        </div>

        {/* Ellipse variant switcher */}
        <nav className="flex items-center">
          <div className="relative flex items-center gap-3 rounded-full bg-white/5 px-4 py-2">
            {NAV.map((n) => {
              const active = current === n.key
              return (
                <a
                  key={n.href}
                  href={n.href}
                  aria-label={n.key}
                  aria-current={active ? "true" : "false"}
                  className={[
                    "h-3 w-8 rounded-full transition-all duration-200",
                    active ? "bg-white" : "bg-white/20 hover:bg-white/40",
                  ].join(" ")}
                />
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}