import lenPhoto1 from "../assets/experiences/len-1.jpeg"
import lenPhoto2 from "../assets/experiences/len-2.jpeg"
import lenPhoto3 from "../assets/experiences/len-3.jpeg"

function Experience() {
  return (
    <section id="experience" className="experience-section" style={{ paddingTop: '20px' }}>
      <div style={{ maxWidth: '1300px', margin: 'auto' }}>
        <p className="section-eyebrow">Pengalaman</p>
        <h2>Pengalaman Kerja</h2>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Frontend Engineer Intern - Program Magang MAGENTA</h3>
              <p>PT Len Railway Systems</p>
            </div>
            <span>Mei 2025 – Sep 2025</span>
          </div>

          <ul>
            <li>Mengembangkan sistem berbasis web untuk mendigitalisasi Work Instructions, menggantikan proses dokumentasi manual.</li>
            <li>Mengimplementasikan operasi CRUD, validasi data, pelacakan status, dan fitur dokumentasi berbasis database.</li>
            <li>Menerapkan prinsip Object-Oriented Programming untuk meningkatkan skalabilitas dan kemudahan pemeliharaan sistem.</li>
            <li>Berkolaborasi dengan tim pengembangan dalam membangun dan menguji fitur berdasarkan kebutuhan bisnis.</li>
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