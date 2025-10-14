import { useState, useEffect } from 'react';

function Home() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] =useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "The $35T physical labor economy. Starting with end-of-line packaging",
    "One robot for many tasks: case packing to palletizing", 
    "Deploy in hours. Scale across lines and SKUs",
    "24/7 reliability, built for the factory floor"
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
        
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
        
        if (currentText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, isDeleting ? 60 : 120) 

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <main className="flex flex-grow flex-col items-center justify-center px-6 text-center">
      {/* Badge */}
      <div className="mb-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <span className="px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm font-medium">
          Starting with End-of-Line Packaging
        </span>
      </div>

      {/* Main heading */}
      <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter animate-fade-in-up bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
        SynthRails
      </h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl font-light leading-relaxed mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        We build <span className="text-white font-semibold">general-purpose robots</span> for the <span className="text-white font-semibold">$35T physical labor economy</span>. Starting with <span className="text-white font-semibold">end-of-line packaging</span>.
      </p>

      {/* Animated text section */}
      <div className="mb-20 h-16 flex items-center justify-center w-full animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="text-xl md:text-2xl font-semibold tracking-tight bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
          <span className="inline-block w-full max-w-lg text-center">
            {currentText}
            <span className="animate-blink text-cyan-400/60">|</span>
          </span>
        </div>
      </div>

      {/* Get in touch button */}
      <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <a 
          href="mailto:abhinav@quicksight.ai"
          className="inline-block px-10 py-4 text-base font-bold text-gray-300 rounded-lg border border-gray-600 hover:bg-white hover:text-gray-950 transition-all duration-300 transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </main>
  )
}

export default Home;
