import lenPhoto1 from "../assets/experiences/len-1.jpeg"
import lenPhoto2 from "../assets/experiences/len-2.jpeg"
import lenPhoto3 from "../assets/experiences/len-3.jpeg"

// Mau tambah pengalaman lain? Salin satu objek di bawah, lalu ganti isinya.
// Jumlah foto bebas. Kalau ganjil, foto terakhir otomatis di tengah.
const experiences = [
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
      { src: lenPhoto1, alt: "Kegiatan magang di PT Len Railway Systems" },
      { src: lenPhoto2, alt: "Kegiatan magang di PT Len Railway Systems" },
      { src: lenPhoto3, alt: "Kegiatan magang di PT Len Railway Systems" },
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
                {/* ---------- KIRI: daftar bernomor ---------- */}
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

                {/* ---------- KANAN: foto polaroid ---------- */}
                <div className="exp-polaroids">
                  {exp.photos.map((photo, i) => (
                    <figure key={i} className="exp-polaroid">
                      <img src={photo.src} alt={photo.alt} />
                    </figure>
                  ))}
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