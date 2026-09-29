import profileImage from "../assets/fotonabila.jpeg"

function Hero() {
  return (
    <section className="hero" style={{ paddingTop: '20px' }}>  {/* ← sini */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Open to work
        </div>

        <p className="hero-greeting">Halo, Saya</p>
        <h1>Nabila Az Zahra</h1>
        <h2>Frontend Engineer & Web Developer</h2>

<p className="hero-description">
  Lulusan Teknologi Informasi dari Telkom University 
  yang memiliki ketertarikan dalam membangun aplikasi web yang responsif 
  dan berfokus pada kebutuhan pengguna.
</p>


        <div className="hero-buttons">
          <a href="#projects" className="btn primary">Lihat Proyek Saya</a>
          <a href="#contact" className="btn secondary">Hubungi Saya</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="Nabila Az Zahra" />
      </div>
    </section>
  )
}

export default Hero