
import telkomLogo from "../assets/telkom-logo.png"

const skills = [
  "JavaScript",
  "PHP",
  "React.js",
  "Vue.js",
  "Node.js",
  "Laravel",
  "MySQL",
  "Firebase",
]

const highlights = [
  "Pengembangan fitur dan fungsionalitas aplikasi web",
  "Integrasi layanan backend dan pengelolaan database",
  "Implementasi validasi data serta pengujian fungsionalitas aplikasi",
]

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <p className="section-eyebrow">Tentang Saya</p>

        <h2 className="ed-statement">
          Berfokus pada pengembangan aplikasi web yang fungsional dan mudah digunakan.
        </h2>

        <div className="ed-body">
          <div className="ed-story">
            <p className="ed-lead">
              Lulusan S1 Teknologi Informasi Universitas Telkom dengan predikat
              Cum Laude dan IPK 3,66/4,00. Memiliki pengalaman dalam
              pengembangan aplikasi berbasis web melalui pengalaman profesional,
              magang, dan proyek akademik. Terampil menggunakan HTML, CSS,
              JavaScript, React.js, dan Vue.js dalam membangun antarmuka pengguna,
              serta memiliki pengalaman dalam integrasi layanan backend dan
              database. Tertarik mengembangkan karier di bidang Web Development
              dan membangun aplikasi yang fungsional serta mudah digunakan.
            </p>

            <p className="ed-text">
              Teliti, adaptif, dan komunikatif. Mampu bekerja secara mandiri
              maupun dalam tim, serta memiliki antusiasme untuk terus
              mempelajari teknologi baru.
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
                Hubungi Saya
              </a>
            </div>
          </div>

          <ul className="ed-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

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
                S1 Teknologi Informasi
              </span>
              <span className="ed-edu-period">
                Sept 2022 – Aug 2026
              </span>
            </div>
          </div>

          <div className="ed-gpa">
            <strong>3.66</strong>
            <span>Cum Laude · 4.00</span>
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
