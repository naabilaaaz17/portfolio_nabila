import telkomLogo from "../assets/telkom-logo.png"

const skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Laravel"]

const highlights = [
  "Implementasi fitur aplikasi web, frontend hingga backend",
  "Input dan validasi data, serta pengujian fungsionalitas fitur",
  "Pengelolaan dan integrasi data dengan database",
]

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <p className="section-eyebrow">Tentang Saya</p>

        {/* ---------- pernyataan besar ---------- */}
        <h2 className="ed-statement">
          Berfokus pada pengembangan web dan pengalaman pengguna.
        </h2>

        {/* ---------- dua kolom: cerita + poin ---------- */}
        <div className="ed-body">
          <div className="ed-story">
<p className="ed-lead">
  Lulusan Teknologi Informasi Universitas Telkom dengan pengalaman
  dalam pengembangan aplikasi web melalui pengalaman profesional dan
  berbagai proyek akademik. Memahami proses pengembangan aplikasi
  dari frontend hingga backend, dengan fokus pada Front-End Development.
</p>

            <p className="ed-text">
              Teliti, adaptif, dan komunikatif. Mampu bekerja mandiri maupun
              dalam tim, serta terus mempelajari teknologi baru.
            </p>

            <div className="ed-cta">
              <a
                href={`${import.meta.env.BASE_URL}CV-NABILA.pdf`}
                download
                className="btn primary"
              >
                Download CV
              </a>
              <a href="#contact" className="btn secondary">
                Hubungi saya
              </a>
            </div>
          </div>

          <ul className="ed-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ---------- pita: pendidikan, IPK, skill ---------- */}
        <div className="ed-ribbon">
          <div className="ed-edu">
            <img
              src={telkomLogo}
              alt="Logo Telkom University"
              className="ed-logo"
            />
            <div className="ed-edu-text">
              <span className="ed-edu-name">Universitas Telkom</span>
              <span className="ed-edu-degree">
                Sarjana Teknologi Informasi
              </span>
              <span className="ed-edu-period">Sept 2022 – Aug 2026</span>
            </div>
          </div>

          <div className="ed-gpa">
            <strong>3.66</strong>
            <span>dari 4.00</span>
          </div>

          <div className="ed-chips">
            {skills.map((skill) => (
              <span key={skill} className="ed-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About