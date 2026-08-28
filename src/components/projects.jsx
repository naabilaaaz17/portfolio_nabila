import dotrackImg from "../assets/projects/dotrack.png"
import rumahSuksesImg from "../assets/projects/rumah-sukses.png"
import craftfolioImg from "../assets/projects/craftfolio.png"
import eventEaseImg from "../assets/projects/eventease.png"

const projects = [
  {
    year: "2026",
    title: "Website Yayasan Pendidikan Rumah Sukses",
    description: "Developed an integrated web platform for a Preschool and tutoring foundation in Papua. Features online student enrollment connected to an admin dashboard with CSV export, automated email/WhatsApp notifications, Google Maps integration, and a fully responsive design.",
    image: rumahSuksesImg,
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    year: "2025",
    title: "DoTrack",
    description: "Developed a web-based system to digitize Work Instructions at PT Len Railway Systems, replacing manual documentation. Features CRUD operations, data validation, status tracking, and database-driven documentation, built collaboratively using OOP principles for scalability.",
    image: dotrackImg,
    tech: ["React", "Firebase"],
  },
  {
    year: "2025",
    title: "Craftfolio",
    description: "Developed a web application that automatically generates personal portfolio websites from user input. Features customizable dynamic templates, drag-and-drop interface, and a template marketplace, cutting creation time from 2–3 weeks to under 30 minutes.",
    image: craftfolioImg,
    tech: ["Laravel", "Bootstrap"],
  },
  {
    year: "2023",
    title: "EventEase",
    description: "Web-based event management platform with event creation and participant registration features, built using OOP principles for a modular and scalable system.",
    image: eventEaseImg,
    tech: ["Java", "MySQL", "Apache Tomcat"],
  },
]

function Projects() {
  return (
    <section className="section" id="projects" style={{ paddingTop: '20px' }}>
      <p className="section-eyebrow">Selected work</p>
      <h2>Projects I've built</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-body">
              <div className="project-year">{project.year}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-technologies">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects