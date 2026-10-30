import { MdEmail, MdPhone } from "react-icons/md"
import { FaLinkedinIn, FaInstagram } from "react-icons/fa"

import contactPhoto1 from "../assets/contact/contact-1.png"
import contactPhoto2 from "../assets/contact/contact-2.png"

const contacts = [
  {
    label: "Email",
    value: "naabilaaaz.career@gmail.com",
    href: "mailto:naabilaaaz.career@gmail.com",
    icon: <MdEmail />,
  },
  {
    label: "LinkedIn",
    value: "Nabila Az Zahra",
    href: "https://linkedin.com/in/naabilaaaz17",
    icon: <FaLinkedinIn />,
    external: true,
  },
  {
    label: "Instagram",
    value: "@naabilaaaz",
    href: "https://instagram.com/naabilaaaz",
    icon: <FaInstagram />,
    external: true,
  },
  {
    label: "Phone",
    value: "+62 882-2158-3992",
    href: "tel:+6288221583992",
    icon: <MdPhone />,
  },
]

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <p className="section-eyebrow">Kontak</p>

        <div className="contact-card">
          <div className="contact-photo contact-photo--left">
            <img src={contactPhoto1} alt="Nabila Az Zahra" />
          </div>
          <div className="contact-photo contact-photo--right">
            <img src={contactPhoto2} alt="Nabila Az Zahra" />
          </div>

          <div className="contact-content">
            <h2>
              Mari membangun sesuatu <em>bersama.</em>
            </h2>

            <p>
              Saya terbuka untuk peluang di bidang frontend development, web
              development, dan peran terkait.
            </p>

            <div className="contact-grid">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="contact-item"
                  {...(c.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  <span className="contact-icon">{c.icon}</span>

                  <span className="contact-text">
                    <span className="contact-label">{c.label}</span>
                    <span className="contact-value">{c.value}</span>
                  </span>

                  <span className="contact-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact