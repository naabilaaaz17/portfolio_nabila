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
import eventEaseImg2 from "../assets/projects/eventease3.png"
import eventEaseImg3 from "../assets/projects/eventease4.png"
import eventEaseImg4 from "../assets/projects/eventease5.png"
import eventEaseImg5 from "../assets/projects/eventease7.png"
import jmediaImg from "../assets/projects/jmedia-1.jpeg"
import jmediaImg2 from "../assets/projects/jmedia-2.jpeg"
import jmediaImg3 from "../assets/projects/jmedia-3.jpeg"
import jmediaImg4 from "../assets/projects/jmedia-4.jpeg"
import jmediaImg5 from "../assets/projects/jmedia-5.jpeg"
import jmediaImg6 from "../assets/projects/jmedia-6.jpeg"
import jmediaImg7 from "../assets/projects/jmedia-7.jpeg"

const projects = [
  {
    year: "2026",
    title: "Social Media SuperApps",
   description:
  "Mengembangkan fitur Sosmed Poster pada platform SaaS SuperApps: studio konten berbasis AI yang mengubah ide, transkrip, atau rekaman menjadi naskah, caption, foto, dan video, lalu menjadwalkan posting otomatis ke TikTok, YouTube, Instagram, Facebook, dan X. Mencakup mode Autopilot dengan tinjau sebelum posting, caption per platform, kalender konten, dan Brand Kit.",
    images: [
      jmediaImg,
      jmediaImg2,
      jmediaImg3,
      jmediaImg4,
      jmediaImg5,
      jmediaImg6,
      jmediaImg7,
    ],
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    year: "2026",
    title: "Website Rumah Sukses Education Foundation",
    description:
      "Mengembangkan platform web terintegrasi untuk yayasan prasekolah dan bimbingan belajar di Papua. Fitur meliputi pendaftaran siswa online yang terhubung ke dashboard admin dengan ekspor CSV, notifikasi email/WhatsApp otomatis, integrasi Google Maps, dan desain yang responsif.",
    images: [
      rumahSuksesImg,
      rumahSuksesImg2,
      rumahSuksesImg3,
      rumahSuksesImg4,
      rumahSuksesImg5,
    ],
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    year: "2025",
    title: "DoTrack",
    description:
      "Aplikasi web Documented Instruction Tracker di PT Len Railway Systems untuk mengelola dan memantau Instruksi Kerja. Membangun antarmuka responsif dengan React.js (Login, Dashboard, User Management, Task Management, Progress Monitoring), terintegrasi dengan Firebase Firestore, Authentication, dan RBAC untuk hak akses Admin dan Employee. Mencakup fitur Manufacturing Order (MO), pelacakan progres, serta pengujian fungsionalitas dan UAT.",
    images: [
      dotrackImg,
      dotrackImg2,
      dotrackImg3,
      dotrackImg4,
      dotrackImg5,
    ],
    tech: ["React.js", "Firebase", "Firestore"],
  },
  {
    year: "2025",
    title: "Craftfolio",
    description:
      "Website pembuat portofolio yang membantu desainer membuat dan menampilkan karya mereka dengan mudah, dibangun menggunakan Laravel dan Bootstrap.",
    images: [craftfolioImg, craftfolioImg2],
    tech: ["Laravel", "Bootstrap"],
  },
  {
    year: "2023",
    title: "EventEase",
    description:
      "Platform manajemen acara berbasis web dengan fitur pembuatan acara dan pendaftaran peserta, dibangun menggunakan Java, MySQL, dan Apache Tomcat dengan prinsip OOP.",
    images: [
      eventEaseImg,
      eventEaseImg2,
      eventEaseImg3,
      eventEaseImg4,
      eventEaseImg5,
    ],
    tech: ["Java", "MySQL", "Apache Tomcat"],
  },
]

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

  const openLightbox = useCallback((projectIdx, imgIdx = 0) => {
    setLightboxProject(projectIdx)
    setLightboxIndex(imgIdx)
  }, [])

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

    const previousOverflow = document.body.style.overflow

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox()
      }

      if (event.key === "ArrowRight") {
        showNext()
      }

      if (event.key === "ArrowLeft") {
        showPrev()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [lightboxProject, closeLightbox, showNext, showPrev])

  const activeProject =
    lightboxProject !== null ? projects[lightboxProject] : null

  const activeImages = activeProject?.images ?? []

  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <p className="section-eyebrow">Proyek</p>
        <h2>Pengalaman Proyek</h2>

        <div className="projects-list">
          {projects.map((project, projectIdx) => (
            <article className="proj-row" key={project.title}>
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

              <div className="proj-text">
                <span className="proj-num">
                  {String(projectIdx + 1).padStart(2, "0")}
                </span>

                <span className="proj-year">{project.year}</span>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="proj-tech">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className="proj-more"
                  onClick={() => openLightbox(projectIdx)}
                >
                  Lihat {project.images.length} foto{" "}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeri ${activeProject.title}`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Tutup galeri"
          >
            ×
          </button>

          {activeImages.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={(event) => {
                event.stopPropagation()
                showPrev()
              }}
              aria-label="Foto sebelumnya"
            >
              ‹
            </button>
          )}

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeImages[lightboxIndex]}
              alt={`${activeProject.title} - foto ${lightboxIndex + 1}`}
            />

            {activeImages.length > 1 && (
              <div className="lightbox-counter" aria-live="polite">
                {lightboxIndex + 1} / {activeImages.length}
              </div>
            )}
          </div>

          {activeImages.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={(event) => {
                event.stopPropagation()
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