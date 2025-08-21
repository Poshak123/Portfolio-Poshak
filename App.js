import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";
import "./App.css";

export default function App() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <div className="App">
      {/* ====== Navbar ====== */}
      <nav className="navbar">
        <div className="brand">POSHAK</div>
        <ul>
          {["Home", "About", "Education", "Skills", "Projects", "Certificates", "Contact"].map(
            (section, i) => (
              <li key={i}>
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={600}
                  offset={-70}
                >
                  {section}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* ====== HOME (keep same content; only background changed) ====== */}
      <Element name="home" className="section hero-section">
        <motion.div
          className="hero-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h1 className="hero-title">C S Poshak</h1>
          <p className="hero-sub">
            Passionate <span>Full Stack Developer</span> crafting clean, responsive
            and interactive web apps.
          </p>

          <div className="hero-cta">
            <Link to="projects" smooth duration={600} offset={-70}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                View Projects
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-70}>
              <motion.button className="btn-alt" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </Element>

      {/* ====== ABOUT (match reference: photo left, bio right, icons) ====== */}
      <Element name="about" className="section about-section">
        <motion.div
          className="about-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="about-photo-side">
            <div className="photo-ring">
              <img src="/Photo.jpg" alt="Profile" className="about-photo" />
            </div>

            <div className="social-row">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <span className="ico">in</span>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" aria-label="GitHub">
                <span className="ico">{`{}`}</span>
              </a>
              <a href="mailto:you@example.com" aria-label="Email">
                <span className="ico">@</span>
              </a>
            </div>
          </div>

          <div className="about-text-side">
            <h2 className="about-heading">Biography</h2>
            <div className="underline" />
            <p className="about-body" text-align="center">
              A Computer Science and Engineering student at Saveetha School of Engineering (CGPA 86.7, 4th Year) with a strong interest in full-stack development, artificial intelligence, and data science. Experienced in building projects such as an E-Commerce Website, Secure Data Transmission, and a Portfolio Tracker using modern technologies. Certified in Front-End Development, Python, Data Analysis, and Oracle AI Vector Search, with proven teamwork and problem-solving skills gained through academics and sports. Aspires to contribute as a skilled developer by building innovative and impactful solutions.
            </p>
          </div>
        </motion.div>
      </Element>

      {/* ====== EDUCATION ====== */}
      <Element name="education" className="section">
        <motion.div
          className="content-box"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Education</h2>
          <div className="timeline">
            <div className="t-item">
              <div className="t-dot" />
              <div className="t-content">
                <h3> B.Tech in Computer Science</h3>
                <p> Saveetha School of Engineering — 2026</p>
                <p> Current CGPA - 86.7</p>
              </div>
            </div>
            <div className="t-item">
              <div className="t-dot" />
              <div className="t-content">
                <h3>Intermediate</h3>
                <p>Narayana Junior College — 2022</p>
                <p>Percentage - 93%</p>
              </div>
            </div>
            <div className="t-item">
              <div className="t-dot" />
              <div className="t-content">
                <h3>High School</h3>
                <p>Vijayavani High School — 2020</p>
                <p>Percentage - 84%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Element>

      {/* ====== SKILLS ====== */}
      <Element name="skills" className="section">
        <motion.div
          className="content-box"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Skills</h2>
          <div className="skills-grid">
            {[
              "HTML, CSS, JavaScript",
              "React.js",
              "Node.js",
              "MySQL, PHP",
              "Java, Python",
              "DSA",
              "Cloud Computing",
              "Object-Oriented Programming",
              "Good communication skills",
              "Problem-solving",
              "logical reasoning",
              "Intellij IDLE, Github",
            ].map((s, i) => (
              <motion.div key={i} className="skill-card" whileHover={{ y: -4, scale: 1.03 }}>
                {s}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Element>

      {/* ====== PROJECTS ====== */}
      <Element name="projects" className="section">
        <motion.div
          className="content-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Projects</h2>
          <div className="project-list">
            {[
              {
                title: "E-Commerce Website",
                desc: "Web app for product categories and user login.",
                link: "https://github.com/Poshak123/stylehub-homepage",
              },
              {
                title: "Portfolio Website",
                desc: "Responsive personal site built with React.",
                link: "https://github.com/Poshak123/POSHAK",
              },
              {
                title: "Secure Data Transmission",
                desc: "Secure and reliable data exchange too.",
                link: "https://github.com/Poshak123/Secure-Data-Transmission",
              },
              {
                title: "Bank Management System",
                desc: "Java app for managing customer accounts, transactions and operations.",
                link: "https://github.com/Poshak123/Bank-Management-System",
              },
            ].map((p, i) => (
              <motion.div key={i} className="project-card" whileHover={{ scale: 1.04 }}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link} target="_blank" rel="noreferrer">
                  View GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Element>

      {/* ====== CERTIFICATES ====== */}
      <Element name="certificates" className="section">
        <motion.div
          className="content-box"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Certificates</h2>
          <ul className="cert-list">
            <li>Front End Development — Simplilearn</li>
            <li>Java SE 17 Developer — Oracle</li>
            <li>AI Vector Search — Oracle</li>
            <li>Introduction to IOT — NPTEL</li>
          </ul>
        </motion.div>
      </Element>

      {/* ====== CONTACT ====== */}
      <Element name="contact" className="section">
        <motion.div
          className="content-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required />
            <button type="submit">Send</button>
          </form>

          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </motion.div>

        {/* simple toast notification after send */}
        {sent && (
          <motion.div
            className="toast"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
          >
            ✅ Message sent! (demo)
          </motion.div>
        )}
      </Element>
    </div>
  );
}
