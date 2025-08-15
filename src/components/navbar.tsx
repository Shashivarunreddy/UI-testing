"use client"

import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-background">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        MyApp
      </Link>

      {/* Right side items */}
      <div className="flex items-center gap-4">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>

        {/* Dark/Light Toggle */}
        <ModeToggle />
      </div>
    </nav>
  )
}
