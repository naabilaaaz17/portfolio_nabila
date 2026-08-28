import "./App.css"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Experience from "./components/experiences"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Organization from "./components/organization"
import Certifications from "./components/certifications"
import Contact from "./components/contact"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Organization />
        <Certifications />
        <Contact />
      </main>

      <footer>
        <p>
          © 2026 Nabila Az Zahra. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default App