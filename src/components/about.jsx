import telkomLogo from "../assets/telkom-logo.png"

function About() {
  return (
    <section id="about" className="section" style={{ paddingTop: '20px' }}>
      <p className="section-eyebrow">Tentang Saya</p>

      <div className="about-layout">
        <div className="about-left">
          <h2>Membangun aplikasi web yang responsif dan mudah digunakan dengan teknologi modern.</h2>

          <div className="about-cta">
            <a href={`${import.meta.env.BASE_URL}CV-NABILA.pdf`} download className="btn primary">
              Unduh CV
            </a>
          </div>
        </div>

        <div className="about-right">
          <div className="about-tag edu-card">
            <div className="edu-header">
              <img src={telkomLogo} alt="Logo Telkom University" className="edu-logo" />
              <div className="edu-header-text">
                <span className="edu-name">Telkom University</span>
                <span className="edu-degree">Sarjana Teknologi Informasi</span>
              </div>
            </div>
            <span className="edu-period">September 2022 – Agustus 2026</span>
            <span className="edu-gpa">IPK: 3.66 / 4.00</span>
          </div>

          <p>
            Lulusan Teknologi Informasi dari Telkom University dengan pengalaman
            sebagai Frontend Engineer intern di PT Len Railway Systems. Memiliki
            pengalaman membangun antarmuka web yang responsif menggunakan React,
            Laravel, dan MySQL dalam berbagai proyek web. Selain itu, merupakan
            penulis artikel ilmiah yang telah dipublikasikan dalam konferensi,
            dengan minat dalam menerjemahkan kebutuhan yang kompleks menjadi
            antarmuka yang rapi, mudah digunakan, dan aksesibel.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About