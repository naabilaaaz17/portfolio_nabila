import studentInterestPhoto from "../assets/organization/student-interest.jpeg"
import interiumPhoto from "../assets/organization/interium.jpeg"
import proximitiPhoto from "../assets/organization/proximiti.jpeg"
import mudikRoadshowPhoto from "../assets/organization/mudik-roadshow.jpeg"

function Organization() {
  const organizations = [
    {
      name: "Himpunan Mahasiswa Teknologi Informasi (HMIT)",
      role: "Student Interest and Talent Staff",
      period: "Mar 2024 – Dec 2026",
      photo: studentInterestPhoto,
    },
    {
      name: "Interium Festival",
      role: "Operational Division Staff",
      period: "Mar 2024 – Jan 2025",
      photo: interiumPhoto,
    },
    {
      name: "Proximiti 2024",
      role: "Consumption & Health Team Staff",
      period: "May 2024 – Dec 2024",
      photo: proximitiPhoto,
    },
    {
      name: "Mudik Roadshow IMAKA",
      role: "Vice Project Leader",
      period: "Jan 2023 – Mar 2023",
      photo: mudikRoadshowPhoto,
    },
  ]

  return (
    <section className="section" style={{ paddingTop: '20px' }}>
      <p className="section-eyebrow">Organization</p>
      <h2>Organizational Experience</h2>

      <div className="organization-grid">
        {organizations.map((org) => (
          <div className="organization-card" key={org.name}>
            <div className="organization-card-image">
              <img src={org.photo} alt={org.name} />
            </div>
            <div className="organization-card-body">
              <h3>{org.name}</h3>
              <span className="org-role">{org.role}</span>
              <span className="org-period">{org.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Organization