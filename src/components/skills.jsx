
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
  SiApachetomcat,
  SiAnydesk,
} from 'react-icons/si'

import { FaJava, FaCss3Alt } from 'react-icons/fa'
import { FaVuejs } from 'react-icons/fa6'
import { MdComputer } from 'react-icons/md'

import {
  LuMessageCircle,
  LuUsers,
  LuLightbulb,
  LuRefreshCw,
  LuClock,
} from 'react-icons/lu'

// ===============================
// TECHNICAL SKILLS
// ===============================

const skills = {
  'Programming Languages': [
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
    { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
  ],

  'Frontend Development': [
    { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'React.js', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Vue.js', icon: <FaVuejs />, color: '#4FC08D' },
    { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
  ],

  'Backend Development': [
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
  ],

  Database: [
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  ],

  'Tools & Technologies': [
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
    { name: 'Microsoft Office', icon: <MdComputer />, color: '#D83B01' },
    { name: 'Linux / Ubuntu', icon: <SiLinux />, color: '#FCC624' },
    { name: 'Apache Tomcat', icon: <SiApachetomcat />, color: '#F8DC75' },
    { name: 'AnyDesk', icon: <SiAnydesk />, color: '#EF443B' },
  ],
}

// ===============================
// SOFT SKILLS
// ===============================

const softSkills = [
  { name: 'Komunikasi', icon: <LuMessageCircle /> },
  { name: 'Kerja Sama Tim', icon: <LuUsers /> },
  { name: 'Pemecahan Masalah', icon: <LuLightbulb /> },
  { name: 'Kemampuan Beradaptasi', icon: <LuRefreshCw /> },
  { name: 'Manajemen Waktu', icon: <LuClock /> },
]

// ===============================
// SKILLS COMPONENT
// ===============================

function Skills() {
  const categories = Object.entries(skills)

  return (
    <section
      id="skills"
      className="skills-section"
      style={{ paddingTop: '20px' }}
    >
      <div className="skills-inner">

        {/* Technical Skills */}
        <div className="skills-head">
          <div>
            <p className="section-eyebrow">Keterampilan</p>
            <h2>Keterampilan Teknis</h2>
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
                    style={{ '--c': tech.color }}
                  >
                    <span className="sk-icon" aria-hidden="true">
                      {tech.icon}
                    </span>

                    <span className="sk-name">
                      {tech.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="soft-skills">
          <div className="soft-skills-head">
            <h2>Keterampilan Interpersonal</h2>
          </div>

          <div className="soft-skills-list">
            {softSkills.map((skill) => (
              <div className="soft-skill-tag" key={skill.name}>
                <span className="soft-skill-icon" aria-hidden="true">
                  {skill.icon}
                </span>

                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
