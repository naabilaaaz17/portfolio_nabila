import { useState, useEffect, useCallback } from "react"
import studentInterestPhoto from "../assets/organization/student-interest.jpeg"
import studentInterestPhoto2 from "../assets/organization/student-interest2.jpeg"
import studentInterestPhoto3 from "../assets/organization/student-interest3.jpeg"
import studentInterestPhoto4 from "../assets/organization/student-interest4.jpeg"
import studentInterestPhoto5 from "../assets/organization/student-interest5.jpeg"
import interiumPhoto from "../assets/organization/interium.jpeg"
import proximitiPhoto from "../assets/organization/proximiti.jpeg"
import proximitiPhoto2 from "../assets/organization/proximiti2.jpeg"
import proximitiPhoto3 from "../assets/organization/proximiti3.jpeg"
import mudikRoadshowPhoto from "../assets/organization/mudik-roadshow.jpeg"
import mudikRoadshowPhoto2 from "../assets/organization/mudik-roadshow2.jpeg"
import mudikRoadshowPhoto3 from "../assets/organization/mudik-roadshow3.jpeg"
import mudikRoadshowPhoto4 from "../assets/organization/mudik-roadshow4.jpeg"

const organizations = [
  {
    name: "Himpunan Mahasiswa Teknologi Informasi (HMIT)",
    role: "Staf Minat dan Bakat",
    period: "Mar 2024 – Des 2025",
    description:
      "Berkontribusi di Divisi Minat dan Bakat dengan mengoordinasikan kegiatan basket, mendukung jadwal latihan dan persiapan kompetisi, serta membantu kegiatan administrasi dan promosi untuk mendorong partisipasi anggota.",
    photos: [studentInterestPhoto, studentInterestPhoto2, studentInterestPhoto3, studentInterestPhoto4, studentInterestPhoto5],
  },
  {
    name: "Interium Festival",
    role: "Staf Divisi Operasional",
    period: "Mei 2024 – Jan 2025",
    description:
      "Mendukung tim operasional dalam mengelola logistik dan kebutuhan acara, serta berkoordinasi dengan berbagai divisi agar kebutuhan operasional terpenuhi dengan baik selama festival.",
    photos: [interiumPhoto],
  },
  {
    name: "Proximiti 2024",
    role: "Staf Tim Konsumsi & Kesehatan",
    period: "Mar 2024 – Des 2024",
    description:
      "Mengelola kebutuhan makanan dan minuman bagi panitia dan peserta, serta mendukung kebutuhan kesehatan dan keselamatan selama acara, termasuk memastikan kesiapan P3K di lokasi.",
    photos: [proximitiPhoto, proximitiPhoto2, proximitiPhoto3],
  },
  {
    name: "Mudik Roadshow IMAKA Telkom",
    role: "Wakil Ketua Pelaksana",
    period: "Jan 2023 – Mar 2023",
    description:
      "Mendampingi ketua pelaksana dalam merencanakan dan melaksanakan program roadshow SMA di Karanganyar. Mengoordinasikan komunikasi antardivisi dan membantu memperkenalkan Universitas Telkom beserta program studinya kepada calon mahasiswa.",
    photos: [mudikRoadshowPhoto, mudikRoadshowPhoto2, mudikRoadshowPhoto3, mudikRoadshowPhoto4],
  },
]

function Mosaic({ photos, name, onOpen }) {
  const shown = photos.slice(0, 5)
  const extra = photos.length - shown.length

  return (
    <div className={`og-mosaic og-mosaic--${shown.length}`}>
      {shown.map((photo, i) => (
        <button
          key={i}
          type="button"
          className="og-shot"
          onClick={() => onOpen(i)}
          aria-label={`Perbesar foto ${i + 1} dari ${name}`}
        >
          <img src={photo} alt="" loading="lazy" />
          {i === shown.length - 1 && extra > 0 && (
            <span className="og-more">+{extra}</span>
          )}
        </button>
      ))}
    </div>
  )
}

function OrgItem({ org, isOpen, onToggle, onOpenPhoto, panelId }) {
  const faces = org.photos.slice(0, 3)
  const hiddenFaces = org.photos.length - faces.length

  return (
    <article className={`og-item${isOpen ? " open" : ""}`}>
      <button
        type="button"
        className="og-head"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="og-faces" aria-hidden="true">
          {faces.map((photo, i) => (
            <span className="og-face" key={i}>
              <img src={photo} alt="" />
            </span>
          ))}
          {hiddenFaces > 0 && (
            <span className="og-face og-face--more">+{hiddenFaces}</span>
          )}
        </span>

        <span className="og-title">
          <span className="og-name">{org.name}</span>
          <span className="og-role">{org.role}</span>
        </span>

        <span className="og-period">{org.period}</span>

        <span className="og-toggle" aria-hidden="true" />
      </button>

      <div className="og-panel" id={panelId} role="region" aria-label={org.name}>
        <div className="og-panel-inner">
          <div className="og-content">
            <div className="og-about">
              <p>{org.description}</p>
              <span className="og-meta">
                {org.photos.length} foto · klik untuk memperbesar
              </span>
            </div>

            <Mosaic
              photos={org.photos}
              name={org.name}
              onOpen={onOpenPhoto}
            />
          </div>
        </div>
      </div>
    </article>
  )
}

function Organization() {
  const [openIdx, setOpenIdx] = useState(0)
  const [lightbox, setLightbox] = useState(null) // { orgIdx, index }

  const openLightbox = (orgIdx, index = 0) => setLightbox({ orgIdx, index })
  const closeLightbox = useCallback(() => setLightbox(null), [])

  const showNext = useCallback(() => {
    setLightbox((lb) => {
      if (!lb) return lb
      const total = organizations[lb.orgIdx].photos.length
      return { ...lb, index: (lb.index + 1) % total }
    })
  }, [])

  const showPrev = useCallback(() => {
    setLightbox((lb) => {
      if (!lb) return lb
      const total = organizations[lb.orgIdx].photos.length
      return { ...lb, index: (lb.index - 1 + total) % total }
    })
  }, [])

  const isLightboxOpen = lightbox !== null

  useEffect(() => {
    if (!isLightboxOpen) return

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
  }, [isLightboxOpen, closeLightbox, showNext, showPrev])

  const activeOrg = isLightboxOpen ? organizations[lightbox.orgIdx] : null
  const activePhotos = activeOrg ? activeOrg.photos : []

  return (
    <section id="organization" className="organization-section">
      <div className="organization-inner">
        <p className="section-eyebrow">Organisasi</p>
        <h2>Pengalaman Organisasi</h2>

        <div className="og-list">
          {organizations.map((org, orgIdx) => (
            <OrgItem
              key={org.name}
              org={org}
              panelId={`og-panel-${orgIdx}`}
              isOpen={openIdx === orgIdx}
              onToggle={() => setOpenIdx(openIdx === orgIdx ? null : orgIdx)}
              onOpenPhoto={(index) => openLightbox(orgIdx, index)}
            />
          ))}
        </div>
      </div>

      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Tutup"
          >
            ×
          </button>

          {activePhotos.length > 1 && (
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
              src={activePhotos[lightbox.index]}
              alt={`${activeOrg.name} - ${lightbox.index + 1}`}
            />
            {activePhotos.length > 1 && (
              <div className="lightbox-counter">
                {lightbox.index + 1} / {activePhotos.length}
              </div>
            )}
          </div>

          {activePhotos.length > 1 && (
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

export default Organization