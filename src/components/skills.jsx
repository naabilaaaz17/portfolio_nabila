import {
  SiJavascript,
  SiPhp,
  SiCplusplus,
  SiHtml5,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiLaravel,
  SiMysql,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiFigma,
  SiLinux,
  SiApachetomcat
} from 'react-icons/si'

import { FaJava, FaCss3Alt } from 'react-icons/fa'
import { FaVuejs } from 'react-icons/fa6'
import { MdComputer } from 'react-icons/md'

const skills = {
  "Programming Languages": [
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
    { name: "Java", icon: <FaJava />, color: "#ED8B00" },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
  ],

  "Frontend Development": [
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
    { name: "Vue.js", icon: <FaVuejs />, color: "#4FC08D" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
  ],

  "Backend Development": [
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
  ],

  "Database": [
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  ],

  "Tools & Technologies": [
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { name: "Microsoft Office", icon: <MdComputer />, color: "#D83B01" },
    { name: "Linux / Ubuntu", icon: <SiLinux />, color: "#FCC624" },
    { name: "Apache Tomcat", icon: <SiApachetomcat />, color: "#F8DC75" },
  ],
}

function Skills() {
  const categories = Object.entries(skills)

  return (
    <section
      id="skills"
      className="skills-section"
      style={{ paddingTop: '20px' }}
    >
      <div className="skills-inner">
        <div className="skills-head">
          <div>
            <p className="section-eyebrow">Skills</p>
            <h2>Technical Skills</h2>
          </div>
        </div>

        <div className="sk-grid">
          {categories.map(([category, technologies]) => (
            <article className="sk-card" key={category}>
              <h3 className="sk-label">{category}</h3>

              <ul className="sk-tiles">
                {technologies.map((tech) => (
                  <li
                    className="sk-tile"
                    key={tech.name}
                    style={{ "--c": tech.color }}
                  >
                    <span className="sk-icon" aria-hidden="true">
                      {tech.icon}
                    </span>
                    <span className="sk-name">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills