import { useState, useEffect, useCallback } from "react"
import eprtCert from "../assets/certifications/eprt.png"
import azureAiCert from "../assets/certifications/azure-ai-900.png"
import magangCert from "../assets/certifications/magang-len.png"
import iceracert from "../assets/certifications/icera-2026.png"

const certifications = [
  {
    title: "Penulis dan Presenter— International Conference",
    issuer: "The 5th International Conference on Electronics Representation and Algorithm",
    year: "2026",
    description:
      "Menulis dan mempresentasikan makalah penelitian tentang faktor-faktor yang memengaruhi niat pengguna e-commerce Indonesia untuk mengadopsi autentikasi multi-faktor menggunakan Technology Acceptance Model yang diperluas.",
    image: iceracert,
  },
  {
    title: "English Proficiency Test (EPrT)",
    issuer: "Universitas Telkom",
    year: "2026",
    description:
      "Memperoleh skor EPrT sebesar 490, yang menunjukkan kemampuan bahasa Inggris dalam konteks akademik dan profesional.",
    image: eprtCert,
  },
  {
    title: "Magang Generasi Bertalenta (MAGENTA)",
    issuer: "PT Len Industri (Persero)",
    year: "2025",
    description:
      "Menyelesaikan program magang MAGENTA di PT Len Railway Systems, berkontribusi pada dokumentasi berbasis web dan digitalisasi instruksi kerja melalui pengelolaan database, pengujian fitur, dan dokumentasi sistem.",
    image: magangCert,
  },
  {
    title: "Kursus Persiapan Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    year: "2025",
    description:
      "Menyelesaikan kursus persiapan yang membahas konsep dasar kecerdasan buatan dan layanan Microsoft Azure AI.",
    image: azureAiCert,
  },
]

function Certifications() {
  const [selected, setSelected] = useState(0)
  const [activeCert, setActiveCert] = useState(null)

  const current = certifications[selected]
  const closeModal = useCallback(() => setActiveCert(null), [])

  // panah atas/bawah (atau kiri/kanan) untuk berpindah antar tab
  const handleTabKeyDown = (e) => {
    const total = certifications.length
    let next = null
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (selected + 1) % total
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (selected - 1 + total) % total
    if (next === null) return
    e.preventDefault()
    setSelected(next)
    document.getElementById(`cert-tab-${next}`)?.focus()
  }

  useEffect(() => {
    if (!activeCert) return

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [activeCert, closeModal])

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-inner">
        <p className="section-eyebrow">Sertifikasi</p>
        <h2>Sertifikasi & Pencapaian</h2>

        <div className="cert-showcase">
          {/* ---------- KIRI: daftar ---------- */}
          <div
            className="cert-list"
            role="tablist"
            aria-label="Daftar sertifikasi"
            aria-orientation="vertical"
          >
            {certifications.map((cert, i) => (
              <button
                key={cert.title}
                id={`cert-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={i === selected}
                aria-controls="cert-panel"
                tabIndex={i === selected ? 0 : -1}
                className={`cert-tab${i === selected ? " active" : ""}`}
                onClick={() => setSelected(i)}
                onKeyDown={handleTabKeyDown}
              >
                <span className="cert-tab-year">{cert.year}</span>

                <span className="cert-tab-text">
                  <span className="cert-tab-title">{cert.title}</span>
                  <span className="cert-tab-issuer">{cert.issuer}</span>
                </span>
              </button>
            ))}
          </div>

          {/* ---------- KANAN: pratinjau ---------- */}
          <div
            id="cert-panel"
            className="cert-preview"
            role="tabpanel"
            aria-labelledby={`cert-tab-${selected}`}
          >
            <div
              className="certification-image"
              role="button"
              tabIndex={0}
              aria-label={`Perbesar sertifikat ${current.title}`}
              onClick={() => setActiveCert(current)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setActiveCert(current)
                }
              }}
            >
              <img key={current.title} src={current.image} alt={current.title} />

              <div className="cert-zoom-hint">
                <span className="cert-zoom-hint-icon">🔍</span>
                <span className="cert-zoom-hint-text">Lihat sertifikat</span>
              </div>
            </div>

            <div className="cert-detail">
              <h3>{current.title}</h3>
              <span className="cert-issuer-pill">{current.issuer}</span>
              <p>{current.description}</p>
            </div>
          </div>
        </div>
      </div>

      {activeCert && (
        <div className="cert-zoom-overlay" onClick={closeModal}>
          <button
            className="cert-zoom-close"
            onClick={closeModal}
            aria-label="Close"
          >
            ×
          </button>

          <div
            className="cert-zoom-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeCert.image} alt={activeCert.title} />

            <div className="cert-zoom-caption">
              <p className="cert-zoom-title">{activeCert.title}</p>
              <p className="cert-zoom-issuer">
                {activeCert.issuer} · {activeCert.year}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications