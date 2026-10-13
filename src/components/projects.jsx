import { useState, useEffect, useCallback } from "react"
import dotrackImg from "../assets/projects/dotrack.png"
import dotrackImg2 from "../assets/projects/dotrack3.png"
import dotrackImg3 from "../assets/projects/dotrack2.png"
import dotrackImg4 from "../assets/projects/dotrack4.png"
import dotrackImg5 from "../assets/projects/dotrack5.png"
import rumahSuksesImg from "../assets/projects/rumah-sukses.png"
import rumahSuksesImg2 from "../assets/projects/rumah-sukses2.png"
import rumahSuksesImg3 from "../assets/projects/rumah-sukses3.png"
import rumahSuksesImg4 from "../assets/projects/rumah-sukses4.png"
import rumahSuksesImg5 from "../assets/projects/rumah-sukses5.png"
import craftfolioImg from "../assets/projects/craftfolio.png"
import craftfolioImg2 from "../assets/projects/craftfolio2.png"
import eventEaseImg from "../assets/projects/eventease.png"
import eventEaseImg3 from "../assets/projects/eventease4.png"
import eventEaseImg4 from "../assets/projects/eventease5.png"
import eventEaseImg5 from "../assets/projects/eventease7.png"
import eventEaseImg2 from "../assets/projects/eventease3.png"

const projects = [
  {
    year: "2026",
    title: "Website Rumah Sukses Education Foundation",
    description: "Mengembangkan platform web terintegrasi untuk yayasan prasekolah dan bimbingan belajar di Papua. Fitur meliputi pendaftaran siswa online yang terhubung ke dashboard admin dengan ekspor CSV, notifikasi email/WhatsApp otomatis, integrasi Google Maps, dan desain yang sepenuhnya responsif.",
    images: [rumahSuksesImg, rumahSuksesImg2, rumahSuksesImg3, rumahSuksesImg4, rumahSuksesImg5],
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    year: "2025",
    title: "DoTrack",
    description: "Mengembangkan sistem berbasis web untuk mendigitalisasi Instruksi Kerja di PT Len Railway Systems, menggantikan dokumentasi manual. Fitur meliputi operasi CRUD, validasi data, pelacakan status, dan dokumentasi berbasis database, dibangun secara kolaboratif dengan prinsip OOP untuk skalabilitas.",
    images: [dotrackImg, dotrackImg2, dotrackImg3, dotrackImg4, dotrackImg5],
    tech: ["React", "Firebase"],
  },
  {
    year: "2025",
    title: "Craftfolio",
    description: "Website pembuat portofolio yang membantu desainer membuat dan menampilkan karya mereka dengan mudah, dibangun dengan Laravel dan Bootstrap.",
    images: [craftfolioImg, craftfolioImg2],
    tech: ["Laravel", "Bootstrap"],
  },
  {
    year: "2023",
    title: "EventEase",
    description: "Platform manajemen acara berbasis web dengan fitur pembuatan acara dan pendaftaran peserta, dibangun dengan prinsip OOP agar sistemnya modular dan mudah dikembangkan.",
    images: [eventEaseImg, eventEaseImg2, eventEaseImg3, eventEaseImg4, eventEaseImg5],
    tech: ["Java", "MySQL", "Apache Tomcat"],
  },
]

/* bilah atas bergaya jendela browser */
function BrowserBar({ title }) {
  return (
    <span className="proj-bar" aria-hidden="true">
      <span className="proj-dots">
        <i />
        <i />
        <i />
      </span>
      <span className="proj-url">{title}</span>
    </span>
  )
}

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

  const activeImages = lightboxProject !== null ? projects[lightboxProject].images : []

  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <p className="section-eyebrow">Selected work</p>
        <h2>Project Experience</h2>

        <div className="projects-list">
          {projects.map((project, projectIdx) => (
            <article className="proj-row" key={project.title}>
              {/* ---------- screenshot dalam bingkai browser ---------- */}
              <div className="proj-visual">
                {project.images.length > 1 && (
                  <button
                    type="button"
                    className="proj-browser proj-browser--back"
                    aria-label={`Lihat foto kedua ${project.title}`}
                    onClick={() => openLightbox(projectIdx, 1)}
                  >
                    <BrowserBar title={project.title} />
                    <img src={project.images[1]} alt="" />
                  </button>
                )}

                <button
                  type="button"
                  className="proj-browser proj-browser--front"
                  aria-label={`Lihat foto ${project.title}`}
                  onClick={() => openLightbox(projectIdx, 0)}
                >
                  <BrowserBar title={project.title} />
                  <img src={project.images[0]} alt={project.title} />
                </button>
              </div>

              {/* ---------- teks ---------- */}
              <div className="proj-text">
                <span className="proj-num">
                  {String(projectIdx + 1).padStart(2, "0")}
                </span>
                <span className="proj-year">{project.year}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="proj-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className="proj-more"
                  onClick={() => openLightbox(projectIdx, 0)}
                >
                  Lihat {project.images.length} foto <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
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
              onClick={(e) => { e.stopPropagation(); showPrev() }}
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
              onClick={(e) => { e.stopPropagation(); showNext() }}
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