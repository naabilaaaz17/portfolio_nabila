import profileImage from "../assets/fotonabila.jpeg"

function Hero() {
  return (
    <section className="hero" style={{ paddingTop: '20px' }}>  {/* ← sini */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for work
        </div>

        <p className="hero-greeting">Hello, I'm</p>
        <h1>Nabila Az Zahra</h1>
        <h2>Frontend Engineer & Web Developer</h2>

<p className="hero-description">
  Information Technology graduate from Telkom University
  passionate about building responsive and user-focused
  web applications.
</p>


        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View my work</a>
          <a href="#contact" className="btn secondary">Get in touch</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="Nabila Az Zahra" />
      </div>
    </section>
  )
}

export default Hero