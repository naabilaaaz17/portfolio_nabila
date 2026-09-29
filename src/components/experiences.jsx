import lenPhoto1 from "../assets/experiences/len-1.jpeg"
import lenPhoto2 from "../assets/experiences/len-2.jpeg"
import lenPhoto3 from "../assets/experiences/len-3.jpeg"

function Experience() {
  return (
    <section id="experience" className="experience-section" style={{ paddingTop: '20px' }}>
      <div style={{ maxWidth: '1300px', margin: 'auto' }}>
        <p className="section-eyebrow">Experience</p>
        <h2>Work Experience</h2>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Frontend Engineer Intern - MAGENTA Internship Program</h3>
              <p>PT Len Railway Systems</p>
            </div>
            <span>May 2025 – Sep 2025</span>
          </div>

          <ul>
            <li>Developed a web-based system to digitize Work Instructions, replacing manual documentation processes.</li>
            <li>Implemented CRUD operations, data validation, status tracking, and database-driven documentation features.</li>
            <li>Applied Object-Oriented Programming principles to improve system scalability and maintainability.</li>
            <li>Collaborated with the development team to build and test features based on business requirements.</li>
          </ul>

          <div className="experience-photos">
            <div className="experience-photo">
              <img src={lenPhoto1} alt="PT Len Railway Systems" />
            </div>
            <div className="experience-photo">
              <img src={lenPhoto2} alt="PT Len Railway Systems" />
            </div>
            <div className="experience-photo">
              <img src={lenPhoto3} alt="PT Len Railway Systems" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience