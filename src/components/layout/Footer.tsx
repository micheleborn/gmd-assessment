"use client"

type FooterProps = {
  left?: string
  right?: string
}

export default function Footer({
  left = "© Axon",
  right = "Privacy • Terms",
}: FooterProps) {
  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <div className="flex items-center justify-between text-xs text-white/50">
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </footer>
  )
}