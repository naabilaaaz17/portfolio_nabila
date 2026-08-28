import { useState, useEffect, useCallback } from "react"
import eprtCert from "../assets/certifications/eprt.png"
import azureAiCert from "../assets/certifications/azure-ai-900.png"
import magangCert from "../assets/certifications/magang-len.png"
import iceracert from "../assets/certifications/icera-2026.png"

function Certifications() {
  const certifications = [
    {
      title: "Author — ICERA 2026 International Conference",
      issuer: "ICERA — Electronics Representation and Algorithm",
      year: "2026",
      image: iceracert,
    },
    {
      title: "English Proficiency Test (EPrT)",
      issuer: "Telkom University",
      year: "2026",
      image: eprtCert,
    },
    {
      title: "Magang Generasi Bertalenta (MAGENTA)",
      issuer: "PT Len Industri (Persero)",
      year: "2026",
      image: magangCert,
    },
    {
      title: "Preparation Course for Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      year: "2025",
      image: azureAiCert,
    },
  ]

  // cert yang lagi di-zoom, null kalau modal tertutup
  const [activeCert, setActiveCert] = useState(null)

  const closeModal = useCallback(() => setActiveCert(null), [])

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
    <section className="certifications-section" style={{ paddingTop: '20px' }}>
      <div style={{ maxWidth: '1300px', margin: 'auto' }}>
        <p className="section-eyebrow">Certifications</p>
        <h2>Certifications & Achievements</h2>

        <div className="certifications">
          {certifications.map((cert) => (
            <div className="certification-card" key={cert.title}>
              <div className="cert-meta">
                <div>
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                </div>
                <span className="cert-year">{cert.year}</span>
              </div>

              <div
                className="certification-image"
                onClick={() => setActiveCert(cert)}
              >
                <img src={cert.image} alt={cert.title} />
                <div className="cert-zoom-hint">
                  <span className="cert-zoom-hint-icon">🔍</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeCert && (
        <div className="cert-zoom-overlay" onClick={closeModal}>
          <button
            className="cert-zoom-close"
            onClick={closeModal}
            aria-label="Tutup"
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
              <p className="cert-zoom-issuer">{activeCert.issuer} · {activeCert.year}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications