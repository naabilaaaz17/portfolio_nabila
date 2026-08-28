import contactPhoto1 from "../assets/contact/contact-1.png"
import contactPhoto2 from "../assets/contact/contact-2.png"

function Contact() {
  return (
    <section id="contact" className="contact-section" style={{ paddingTop: '20px' }}>

      <div className="contact-photos">
        <div className="contact-photo contact-photo--left">
          <img src={contactPhoto1} alt="Nabila Az Zahra" />
        </div>
        <div className="contact-photo contact-photo--right">
          <img src={contactPhoto2} alt="Nabila Az Zahra" />
        </div>
      </div>

      <div className="contact-content">
        <p className="section-eyebrow">Contact</p>
        <h2>Let's build something<br /><em>together.</em></h2>

        <p>
          I'm open to opportunities in frontend development,
          web development, and related roles.
        </p>

        <div className="contact-links">
          <a href="mailto:naabilaaaz17@gmail.com">Email</a>
          <a href="http://www.linkedin.com/in/naabila-az-zahra" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com/naabilaaaz" target="_blank" rel="noreferrer">Instagram</a>
          <a href="tel:+6288221583992">Phone</a>
        </div>
      </div>

    </section>
  )
}

export default Contact