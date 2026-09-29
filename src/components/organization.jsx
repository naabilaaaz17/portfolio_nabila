import studentInterestPhoto from "../assets/organization/student-interest.jpeg"
import interiumPhoto from "../assets/organization/interium.jpeg"
import proximitiPhoto from "../assets/organization/proximiti.jpeg"
import mudikRoadshowPhoto from "../assets/organization/mudik-roadshow.jpeg"

function Organization() {
  const organizations = [
    {
      name: "Information Technology Student Association",
      role: "Interest and Talent Staff",
      period: "Mar 2024 – Dec 2025",
      description:
        "Contributed to the Interest and Talent Division by coordinating basketball activities, supporting practice schedules and competition preparation, and assisting with administrative and promotional activities to encourage member participation.",
      photo: studentInterestPhoto,
    },
    {
      name: "Interium Festival",
      role: "Operational Division Staff",
      period: "May 2024 – Jan 2025",
      description:
        "Supported the operational team in managing logistics and event requirements while coordinating with different divisions to ensure operational needs were handled effectively throughout the festival.",
      photo: interiumPhoto,
    },
    {
      name: "Proximiti 2024",
      role: "Consumption & Health Team Staff",
      period: "Mar 2024 – Dec 2024",
      description:
        "Handled food and beverage supplies for committee members and participants while supporting health and safety needs during the event, including ensuring first-aid readiness on site.",
      photo: proximitiPhoto,
    },
    {
      name: "Mudik Roadshow IMAKA Telkom",
      role: "Vice Project Leader",
      period: "Jan 2023 – Mar 2023",
      description:
        "Supported the Project Leader in planning and executing a high school roadshow program in Karanganyar. Coordinated communication across divisions and helped introduce Telkom University and its academic programs to prospective students.",
      photo: mudikRoadshowPhoto,
    },
  ]

  return (
    <section
      id="organization"
      className="section"
      style={{ paddingTop: "20px" }}
    >
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
              <p className="org-description">{org.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Organization