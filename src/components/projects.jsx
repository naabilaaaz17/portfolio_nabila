import { useState, useEffect, useCallback } from "react"
import dotrackImg from "../assets/projects/dotrack.png"
import dotrackImg2 from "../assets/projects/dotrack3.png"
import rumahSuksesImg from "../assets/projects/rumah-sukses.png"
import rumahSuksesImg2 from "../assets/projects/rumah-sukses2.png"
import craftfolioImg from "../assets/projects/craftfolio.png"
import craftfolioImg2 from "../assets/projects/craftfolio2.png"
import eventEaseImg from "../assets/projects/eventease.png"
import eventEaseImg2 from "../assets/projects/eventease3.png"

const projects = [
  {
    year: "2026",
    title: "Website Yayasan Pendidikan Rumah Sukses",
    description: "Mengembangkan platform web terintegrasi untuk yayasan pendidikan Preschool dan bimbingan belajar di Papua. Fitur yang tersedia meliputi pendaftaran siswa secara online yang terhubung dengan dashboard admin, ekspor data ke CSV, notifikasi otomatis melalui email/WhatsApp, integrasi Google Maps, serta desain yang responsif.",
    images: [rumahSuksesImg, rumahSuksesImg2],
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    year: "2025",
    title: "DoTrack",
    description: "Mengembangkan sistem berbasis web untuk mendigitalisasi Work Instructions di PT Len Railway Systems dan menggantikan proses dokumentasi manual. Sistem memiliki fitur CRUD, validasi data, pelacakan status, dan dokumentasi berbasis database yang dikembangkan secara kolaboratif dengan menerapkan prinsip OOP untuk mendukung skalabilitas.",
    images: [dotrackImg, dotrackImg2],
    tech: ["React", "Firebase"],
  },
  {
    year: "2025",
    title: "Craftfolio",
    description: "Membangun portfolio builder berbasis web yang membantu desainer membuat dan menampilkan karya mereka dengan mudah menggunakan Laravel dan Bootstrap.",
    images: [craftfolioImg, craftfolioImg2],
    tech: ["Laravel", "Bootstrap"],
  },
  {
    year: "2023",
    title: "EventEase",
    description: "Platform manajemen acara berbasis web dengan fitur pembuatan acara dan pendaftaran peserta, dibangun menggunakan prinsip OOP untuk menghasilkan sistem yang modular dan mudah dikembangkan.",
    images: [eventEaseImg, eventEaseImg2],
    tech: ["Java", "MySQL", "Apache Tomcat"],
  },
]

function Projects() {
  const [lightboxProject, setLightboxProject] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (projectIdx, imgIdx = 0) => {
    setLightboxProject(projectIdx)
    setLightboxIndex(imgIdx)
  }

  const closeLightbox = useCallback(() => {
    setLightboxProject(null)
  }, [])

  const showNext = useCallback(() => {
    if (lightboxProject === null) return
    const total = projects[lightboxProject].images.length
    setLightboxIndex((prev) => (prev + 1) % total)
  }, [lightboxProject])

  const showPrev = useCallback(() => {
    if (lightboxProject === null) return
    const total = projects[lightboxProject].images.length
    setLightboxIndex((prev) => (prev - 1 + total) % total)
  }, [lightboxProject])

  useEffect(() => {
    if (lightboxProject === null) return

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") showNext()
      if (e.key === "ArrowLeft") showPrev()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [lightboxProject, closeLightbox, showNext, showPrev])

  const activeImages =
    lightboxProject !== null ? projects[lightboxProject].images : []

  return (
    <section className="section" id="projects" style={{ paddingTop: '20px' }}>
      <p className="section-eyebrow">Proyek Pilihan</p>
      <h2>Proyek yang Saya Bangun</h2>

      <div className="projects-grid">
        {projects.map((project, projectIdx) => (
          <div className="project-card" key={project.title}>
            <div
              className="project-image"
              onClick={() => openLightbox(projectIdx, 0)}
            >
              <img src={project.images[0]} alt={project.title} />

              <div className="project-zoom-hint">
                <span className="project-zoom-hint-icon">🔍</span>

                {project.images.length > 1 && (
                  <span className="project-zoom-hint-text">
                    {project.images.length} foto
                  </span>
                )}
              </div>
            </div>

            <div className="project-body">
              <div className="project-year">{project.year}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-technologies">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxProject !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Tutup"
          >
            ×
          </button>

          {activeImages.length > 1 && (
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
              aria-label="Foto sebelumnya"
            >
              ‹
            </button>
          )}

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImages[lightboxIndex]}
              alt={`${projects[lightboxProject].title} - ${lightboxIndex + 1}`}
            />

            {activeImages.length > 1 && (
              <div className="lightbox-counter">
                {lightboxIndex + 1} / {activeImages.length}
              </div>
            )}
          </div>

          {activeImages.length > 1 && (
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              aria-label="Foto berikutnya"
            >
              ›
            </button>
          )}
        </div>
      )}
    </section>
  )
}

export default Projects