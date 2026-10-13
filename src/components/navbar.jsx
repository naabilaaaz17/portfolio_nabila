import { useState, useEffect } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'organization', label: 'Organization' },
  { id: 'certifications', label: 'Certifications' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')

  const closeMenu = () => setIsOpen(false)

  // bayangan + garis bawah saat halaman di-scroll, dan reset link aktif di paling atas
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      if (window.scrollY < 200) setActiveId('')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // tandai link sesuai section yang sedang terlihat
  useEffect(() => {
    const ids = [...links.map((l) => l.id), 'contact']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // menu mobile: Escape untuk menutup, kunci scroll, tutup otomatis saat layar melebar
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 768) setIsOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="logo">
          Portofolio<span>.</span>
        </a>

        <div id="nav-menu" className={`nav-links${isOpen ? ' active' : ''}`}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeId === link.id ? 'active' : ''}
              aria-current={activeId === link.id ? 'true' : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <button
          className={`hamburger${isOpen ? ' active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        className={`nav-overlay${isOpen ? ' active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  )
}

export default Navbar