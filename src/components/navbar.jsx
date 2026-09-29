import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <a href="#" className="logo">Portofolio.</a>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>Tentang Saya</a>
        <a href="#experience" onClick={() => setIsOpen(false)}>Pengalaman</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Proyek</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Keahlian</a>
        <a href="#certifications" onClick={() => setIsOpen(false)}>Sertifikasi</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Kontak</a>
      </div>

      <button
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar