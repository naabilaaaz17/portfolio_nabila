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
    description: "Developed an integrated web platform for a Preschool and tutoring foundation in Papua. Features online student enrollment connected to an admin dashboard with CSV export, automated email/WhatsApp notifications, Google Maps integration, and a fully responsive design.",
    images: [rumahSuksesImg, rumahSuksesImg2],
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    year: "2025",
    title: "DoTrack",
    description: "Developed a web-based system to digitize Work Instructions at PT Len Railway Systems, replacing manual documentation. Features CRUD operations, data validation, status tracking, and database-driven documentation, built collaboratively using OOP principles for scalability.",
    images: [dotrackImg, dotrackImg2],
    tech: ["React", "Firebase"],
  },
  {
    year: "2025",
    title: "Craftfolio",
    description: "A web-based portfolio builder that helps designers create and showcase their work easily, built with Laravel and Bootstrap.",
    images: [craftfolioImg, craftfolioImg2],
    tech: ["Laravel", "Bootstrap"],
  },
  {
    year: "2023",
    title: "EventEase",
    description: "Web-based event management platform with event creation and participant registration features, built using OOP principles for a modular and scalable system.",
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

  const activeImages = lightboxProject !== null ? projects[lightboxProject].images : []

  return (
    <section className="section" id="projects" style={{ paddingTop: '20px' }}>
      <p className="section-eyebrow">Selected work</p>
      <h2>Projects I've built</h2>

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
                  <span className="project-zoom-hint-text">{project.images.length} photos</span>
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