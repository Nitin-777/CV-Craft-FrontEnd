import React from 'react'

const Hero = () => {
  return (
      <section className="min-h-screen bg-[#1A1C21] text-white flex items-center">
      <div className="mx-auto w-full max-w-6xl px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT PANEL */}
          <div className="bg-amber-400 p-12 flex items-center rounded-xl">
            <div className="leading-tight">
              <h1 className="text-6xl md:text-7xl font-extrabold text-white">AI</h1>
              <h1 className="text-5xl md:text-6xl font-bold text-white">That</h1>
              <h1 className="text-5xl md:text-6xl font-bold text-white">Understands</h1>
              <h1 className="text-5xl md:text-6xl font-bold text-white">Your</h1>
              <h1 className="text-6xl md:text-7xl font-extrabold text-white">Career</h1>

              <p className="mt-6 max-w-md text-white/90 text-lg">
                Build structured, AI-optimized resumes that stand out to both
                recruiters and ATS systems.
              </p>

              <button className="mt-12  rounded-xl bg-blue-400 px-8 py-4 text-lg font-semibold text-white hover:bg-black transition">
                       Get Started
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="hidden md:flex items-center justify-center bg-amber-950 rounded-xl">
            <span className="text-white/60">
              Resume Preview Area
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
