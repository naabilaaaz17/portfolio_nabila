import lenPhoto1 from "../assets/experiences/len-1.jpeg"
import lenPhoto2 from "../assets/experiences/len-2.jpeg"
import lenPhoto3 from "../assets/experiences/len-3.jpeg"

import jmedia1 from "../assets/experiences/jmedia-1.jpeg"
import jmedia2 from "../assets/experiences/jmedia-2.jpeg"

// Pengalaman terbaru ditampilkan paling atas
const experiences = [
  {
    company: "PT Joglosemar Media Technology",
    role: "Junior Staff Developer Assistant",
    period: "Okt 2026 – Sekarang",
    points: [
      "Berkontribusi dalam perancangan konsep fitur Social Media pada platform SuperApps, termasuk penjadwalan publikasi konten ke berbagai platform media sosial seperti Instagram, TikTok, dan YouTube.",
      "Merancang konsep add-on Digital Marketing Automation untuk mengotomatisasi proses pembuatan konten, mulai dari transkripsi hingga konten siap dipublikasikan dan dijadwalkan ke berbagai platform media sosial.",
      "Menyusun presentasi produk dan panduan pengguna untuk solusi SaaS SuperApps, termasuk AI Assistant, Social Media, dan Digital Signage.",
      "Membuat video tutorial perangkat lunak serta mendukung demonstrasi produk dan kegiatan pemasaran melalui media sosial.",
    ],
    photos: [
      { src: jmedia1, alt: "Kegiatan di PT Joglosemar Media Technology" },
      { src: jmedia2, alt: "Dokumentasi pekerjaan di PT Joglosemar Media Technology" },
    ],
    links: [
      {
        label: "YouTube Video",
        url: "https://youtu.be/KkhpV-YyM20?si=KxMqvRPnIUiDcbKA",
      },
      {
        label: "YouTube Shorts",
        url: "https://youtube.com/shorts/eMofPGHqoXo?si=Eo_j0Qt6xUHPHhwL",
      },
    ],
  },
  {
    company: "PT Len Railway Systems",
    role: "Frontend Engineer Intern – Program Magang MAGENTA",
    period: "Mei 2025 – Sep 2025",
    points: [
      "Mengembangkan sistem berbasis web untuk mendigitalisasi Instruksi Kerja (Work Instruction), menggantikan proses dokumentasi manual.",
      "Mengimplementasikan operasi CRUD, validasi data, pelacakan status, dan fitur dokumentasi berbasis database.",
      "Menerapkan prinsip Object-Oriented Programming untuk meningkatkan skalabilitas dan kemudahan pemeliharaan sistem.",
      "Berkolaborasi dengan tim pengembang untuk membangun dan menguji fitur sesuai kebutuhan bisnis.",
    ],
    photos: [
      {
        src: lenPhoto1,
        alt: "Kegiatan magang di PT Len Railway Systems",
      },
      {
        src: lenPhoto2,
        alt: "Kegiatan magang di PT Len Railway Systems",
      },
      {
        src: lenPhoto3,
        alt: "Kegiatan magang di PT Len Railway Systems",
      },
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="exp-inner">
        <p className="section-eyebrow">Experience</p>
        <h2>Internship Experience</h2>

        <div className="exp-list">
          {experiences.map((exp) => (
            <article key={exp.company} className="exp-case">
              <span className="exp-company">{exp.company}</span>

              <header className="exp-case-head">
                <h3>{exp.role}</h3>
                <span className="exp-period">{exp.period}</span>
              </header>

              <div className="exp-case-body">
                {/* KIRI: daftar bernomor */}
                <ol className="exp-steps">
                  {exp.points.map((point, i) => (
                    <li key={point}>
                      <span className="exp-step-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ol>

                {/* KANAN: kotak pink berisi polaroid dan link video */}
                <div className="exp-media">
                  <div className="exp-polaroids">
                    {exp.photos.map((photo) => (
                      <figure key={photo.src} className="exp-polaroid">
                        <img src={photo.src} alt={photo.alt} />
                      </figure>
                    ))}
                  </div>

                  {exp.links && exp.links.length > 0 && (
                    <div className="exp-video">
                      <p className="exp-video-title">Konten Video</p>

                      <div className="exp-video-links">
                        {exp.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="exp-video-play">▶</span>
                            {link.label}
                            <span className="exp-video-arrow">↗</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience