import telkomLogo from "../assets/telkom-logo.png"

function About() {
  return (
    <section id="about" className="section" style={{ paddingTop: '20px' }}>
      <p className="section-eyebrow">About me</p>

      <div className="about-layout">
        <div className="about-left">
          <h2>Crafting responsive and user-friendly web applications with modern technologies.</h2>

          <div className="about-cta">
            <a href={`${import.meta.env.BASE_URL}CV-NABILA.pdf`} download className="btn primary">
  Download CV
</a>
          </div>
        </div>

        <div className="about-right">
          <div className="about-tag edu-card">
            <div className="edu-header">
              <img src={telkomLogo} alt="Telkom University logo" className="edu-logo" />
              <div className="edu-header-text">
                <span className="edu-name">Telkom University</span>
                <span className="edu-degree">Bachelor of Information Technology</span>
              </div>
            </div>
            <span className="edu-period">Sept 2022 – Nov 2026 (Expected)</span>
            <span className="edu-gpa">GPA: 3.66 / 4.00</span>
          </div>

          <p>
            Information Technology undergraduate from Telkom University with
            experience developing responsive and database-driven web
            applications. Skilled in CRUD implementation, database
            integration, and modern frontend technologies, passionate
            about building clean, user-friendly digital experiences.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About