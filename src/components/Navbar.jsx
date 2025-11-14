import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-teal-500" />
            <span className="font-semibold text-gray-900">EnergyCo</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#transition" className="hover:text-teal-600 transition-colors">Energy Transition</a>
            <a href="#solutions" className="hover:text-teal-600 transition-colors">Solutions</a>
            <a href="#stories" className="hover:text-teal-600 transition-colors">Stories</a>
            <a href="#investors" className="hover:text-teal-600 transition-colors">Investors</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-md transition-colors">Contact Us</a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" /></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm text-gray-700">
              <a href="#transition" className="px-3 py-2 rounded hover:bg-gray-100">Energy Transition</a>
              <a href="#solutions" className="px-3 py-2 rounded hover:bg-gray-100">Solutions</a>
              <a href="#stories" className="px-3 py-2 rounded hover:bg-gray-100">Stories</a>
              <a href="#investors" className="px-3 py-2 rounded hover:bg-gray-100">Investors</a>
              <a href="#contact" className="px-3 py-2 rounded bg-teal-600 text-white">Contact Us</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
