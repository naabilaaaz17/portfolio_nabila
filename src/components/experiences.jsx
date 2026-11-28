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
    period: "Okt 2026 – Nov 2026",
points: [
  "Membuat video tutorial penggunaan perangkat lunak, menyiapkan presentasi produk, serta mempresentasikan produk – produk yaitu AI Assistant, Digital Signage, VoIP IPPBX, dan Absensi Karyawan kepada tim internal.",
  "Berkontribusi dalam pengembangan fitur Social Media pada SuperApps (SaaS), sebuah platform studio konten berbasis AI yang dapat menghasilkan skrip, foto, dan video serta menjadwalkan publikasi otomatis ke Instagram, Facebook, TikTok, YouTube, dan X.",
],
    photos: [
      { src: jmedia1, alt: "Kegiatan di PT Joglosemar Media Technology" },
      { src: jmedia2, alt: "Dokumentasi pekerjaan di PT Joglosemar Media Technology" },
    ],
    links: [
      {
        type: "video",
        label: "YouTube Video",
        url: "https://youtu.be/KkhpV-YyM20?si=KxMqvRPnIUiDcbKA",
      },
      {
        type: "video",
        label: "YouTube Shorts",
        url: "https://youtube.com/shorts/eMofPGHqoXo?si=Eo_j0Qt6xUHPHhwL",
      },
    ],
  },
  {
  company: "PT Len Railway Systems",
  role: "Full Stack Developer Intern",
  period: "Juni 2025 – September 2025",
  points: [
    "Mengembangkan aplikasi web DoTrack (Documented Instruction Tracker) untuk mendigitalisasi proses pengelolaan dan pemantauan instruksi kerja.",
    "Merancang dan mengembangkan antarmuka aplikasi menggunakan React.js, termasuk halaman Login, Dashboard, Task Execution, MO Selection, dan Progress Monitoring.",
    "Mengintegrasikan Firebase Authentication dan Cloud Firestore untuk autentikasi pengguna serta pengelolaan data secara real-time.",
    "Menerapkan role-based access control menggunakan Protected Route untuk membedakan hak akses Admin dan Employee.",
    "Melakukan pengujian fungsionalitas dan evaluasi UI/UX untuk memastikan aplikasi berjalan sesuai kebutuhan pengguna."
  ],
    photos: [
      { src: lenPhoto1, alt: "Kegiatan magang di PT Len Railway Systems" },
      { src: lenPhoto2, alt: "Kegiatan magang di PT Len Railway Systems" },
      { src: lenPhoto3, alt: "Kegiatan magang di PT Len Railway Systems" },
    ],
    links: [
      {
        type: "github",
        label: "GitHub",
        url: "https://naabilaaaz17.github.io/workinstruction/",
      },
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="exp-inner">
        <p className="section-eyebrow">Pengalaman</p>
        <h2>Pengalaman Profesional</h2>

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

                {/* KANAN: kotak pink berisi polaroid dan link */}
                <div className="exp-media">
                  <div className="exp-polaroids">
                    {exp.photos.map((photo) => (
                      <figure key={photo.src} className="exp-polaroid">
                        <img src={photo.src} alt={photo.alt} />
                      </figure>
                    ))}
                  </div>

                  {exp.links?.some((l) => l.type === "video") && (
                    <div className="exp-video">
                      <p className="exp-video-title">Konten Video</p>
                      <div className="exp-video-links">
                        {exp.links
                          .filter((l) => l.type === "video")
                          .map((link) => (
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

                  {exp.links?.some((l) => l.type === "github") && (
                    <div className="exp-video exp-project">
                      <p className="exp-video-title">Proyek</p>
                      <div className="exp-video-links">
                        {exp.links
                          .filter((l) => l.type === "github")
                          .map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg
                                className="exp-github-icon"
                                viewBox="0 0 16 16"
                                width="16"
                                height="16"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                              </svg>
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