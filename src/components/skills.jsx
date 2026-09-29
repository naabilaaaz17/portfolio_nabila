import {
  SiJavascript, SiPhp, SiCplusplus,
  SiHtml5, SiReact, SiBootstrap,
  SiNodedotjs, SiLaravel,
  SiMysql, SiFirebase, SiMongodb,
  SiGit, SiFigma, SiLinux, SiApachetomcat
} from 'react-icons/si'
import { FaJava, FaCss3Alt } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'

function Skills() {
  const skills = {
    "Programming Languages": [
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "PHP",        icon: <SiPhp />,        color: "#777BB4" },
      { name: "Java",       icon: <FaJava />,       color: "#ED8B00" },
      { name: "C++",        icon: <SiCplusplus />,  color: "#00599C" },
    ],
    "Frontend Development": [
      { name: "HTML5",      icon: <SiHtml5 />,      color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "React.js",   icon: <SiReact />,      color: "#61DAFB" },
      { name: "Bootstrap",  icon: <SiBootstrap />,  color: "#7952B3" },
    ],
    "Backend Development": [
      { name: "Node.js",    icon: <SiNodedotjs />,  color: "#339933" },
      { name: "Laravel",    icon: <SiLaravel />,    color: "#FF2D20" },
    ],
    "Database": [
      { name: "MySQL",      icon: <SiMysql />,      color: "#4479A1" },
      { name: "Firebase",   icon: <SiFirebase />,   color: "#FFCA28" },
      { name: "MongoDB",    icon: <SiMongodb />,    color: "#47A248" },
    ],
    "Tools & Technologies": [
      { name: "Git",              icon: <SiGit />,            color: "#F05032" },
      { name: "Figma",            icon: <SiFigma />,          color: "#F24E1E" },
      { name: "Microsoft Office", icon: <MdComputer />,color: "#D83B01" },
      { name: "Linux / Ubuntu",   icon: <SiLinux />,          color: "#FCC624" },
      { name: "Apache Tomcat",    icon: <SiApachetomcat />,   color: "#F8DC75" },
    ],
  }

  return (
    <section id="skills" className="skills-section" style={{ paddingTop: '20px' }}>
      <div style={{ maxWidth: '1300px', margin: 'auto' }}>
        <p className="section-eyebrow">Skills</p>
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, technologies]) => (
            <div className="skill-category" key={category}>
              <h3>{category}</h3>
              <div className="skill-list">
                {technologies.map((tech) => (
                  <span className="skill-pill" key={tech.name}>
                    <span
                      className="skill-icon"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills