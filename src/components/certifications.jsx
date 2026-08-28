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

              <div className="certification-image">
                <img src={cert.image} alt={cert.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications