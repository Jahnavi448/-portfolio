import {
  ArrowDown,
  ArrowRight,
  Mail,
  Code2,
  ExternalLink,
} from "lucide-react";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-logo">
          <span className="logo-dot"></span>
          Jahnavi
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
        href="tel:+917780791952"
        className="nav-button"
        title="Call +91 7780791952"
        onClick={(e) => {
          if (!/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
            e.preventDefault();
            navigator.clipboard.writeText("+91 7780791952");
            alert("Phone number copied: +91 7780791952");
          }
        }}
      >
        Let's Talk
      </a>
      </nav>


      {/* ================= HERO ================= */}
      <main className="hero">

        {/* Left side */}
        <div className="hero-content">

          <div className="availability">
            <span></span>
            Open to opportunities
          </div>

          <p className="hello">
            HELLO, I'M
          </p>

          <h1>
            Sutraaye <span>Jahnavi</span>
          </h1>

          <h2>
            Computer Science Undergraduate
            <br />
            <span>Developer & Problem Solver</span>
          </h2>

          <p className="hero-description">
            I enjoy building software, solving challenging problems,
            and exploring modern technologies including full-stack
            development and Generative AI.
          </p>


          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
            href="#contact"
            className="secondary-button"
          >
            Contact Me
          </a>

          </div>


          {/* Social links */}
          <div className="social-links">

            <a
            href="https://github.com/Jahnavi448"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

            <a
            href="https://www.linkedin.com/in/s-jahnavi-b058432a3/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jahnavisutrayee@gmail.com"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send Me an Email
        </a>

          </div>

        </div>


        {/* ================= HERO VISUAL ================= */}
        <div className="hero-visual">

          <div className="glow"></div>

          <div className="code-card">

            <div className="code-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`const developer = {
  name: "Jahnavi",
  role: "Software Developer",

  skills: [
    "Java",
    "DSA",
    "SQL",
    "React",
    "AI"
  ],

  passion: "Building & Learning"
};`}
            </pre>

            <div className="code-icon">
              <Code2 size={28} />
            </div>

          </div>

        </div>

      </main>


      {/* ================= SCROLL INDICATOR ================= */}
      <div className="scroll-indicator">

        <span>
          Scroll to explore
        </span>

        <ArrowDown size={18} />

      </div>


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="section about-section"
      >

        <p className="section-label">
          01 — ABOUT ME
        </p>

        <h2>
          Turning curiosity into
          <span> real projects.</span>
        </h2>

        <p className="section-description">
          I'm a Computer Science undergraduate with strong
          foundations in programming, data structures, databases,
          and software development. I enjoy learning new
          technologies and applying them to practical projects.
        </p>

      </section>


      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="section skills-section"
      >

        <p className="section-label">
          02 — SKILLS
        </p>

        <h2>
          Technologies I
          <span> work with.</span>
        </h2>


        <div className="skills-grid">

          <div className="skill-card">

            <h3>
              Programming
            </h3>

            <p>
              Java · C · SQL
            </p>

          </div>


          <div className="skill-card">

            <h3>
              Computer Science
            </h3>

            <p>
              DSA · OOP · DBMS · Computer Networks
            </p>

          </div>


          <div className="skill-card">

            <h3>
              Development
            </h3>

            <p>
              HTML · CSS 
            </p>

          </div>


          <div className="skill-card">

            <h3>
              AI & ML
            </h3>

            <p>
              Machine Learning · Deep Learning · Generative AI
            </p>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
<section
  id="projects"
  className="section projects-section"
>
  <p className="section-label">
    03 — PROJECTS
  </p>

  <h2>
    Things I've
    <span> built.</span>
  </h2>

  <div className="projects-grid">

    {/* Project 1 */}
    <div className="project-card">

      <div className="project-number">
        01
      </div>

      <h3>
        AI Image Generator
      </h3>

      <p>
        Built a Java-based AI image generation application
        that accepts user prompts and integrates with the
        Hugging Face FLUX text-to-image API using Java
        HttpClient.
      </p>

      <div className="project-tags">
        <span>Java</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>REST API</span>
        <span>FLUX</span>
      </div>

      <a
  href="https://github.com/Jahnavi448/AI-Image-Generator-Java"
  className="project-link"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project
  <ExternalLink size={16} />
</a>

    </div>


    {/* Project 2 */}
    <div className="project-card">

      <div className="project-number">
        02
      </div>

      <h3>
        Leave Management System
      </h3>

      <p>
        Developed a ServiceNow-based leave management
        application with manager-based approval workflows,
        automated status updates, notifications, reports,
        and dashboards.
      </p>

      <div className="project-tags">
        <span>ServiceNow</span>
        <span>Flow Designer</span>
        <span>UI Policies</span>
        <span>Workflows</span>
      </div>

      <a
  href="https://github.com/Jahnavi448/Leave-Management-System-ServiceNow"
  className="project-link"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project
  <ExternalLink size={16} />
</a>

    </div>


    {/* Project 3 */}
    <div className="project-card">

      <div className="project-number">
        03
      </div>

      <h3>
        Smart URL Shortener
      </h3>

      <p>
        Developed a Java-based URL shortening and analytics
        platform supporting custom aliases, validation,
        duplicate detection, redirection, and click tracking
        for 1000+ URL mappings.
      </p>

      <div className="project-tags">
        <span>Java</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>HashMap</span>
        <span>OOP</span>
      </div>

      <a
  href="https://github.com/Jahnavi448/smart-url-shortener"
  className="project-link"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project
  <ExternalLink size={16} />
</a>

    </div>


    {/* Project 4 */}
    <div className="project-card">

      <div className="project-number">
        04
      </div>

      <h3>
        Expense Tracker
      </h3>

      <p>
        Developed a Java-based expense management application
        for recording, categorizing, filtering, and reporting
        daily expenses while managing 500+ records using
        Java Collections and OOP.
      </p>

      <div className="project-tags">
        <span>Java</span>
        <span>OOP</span>
        <span>Collections</span>
        <span>Data Management</span>
      </div>
<a
  href="https://github.com/Jahnavi448/expense-tracker"
  className="project-link"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project
  <ExternalLink size={16} />
</a>

    </div>

  </div>
</section>


      {/* ================= PROBLEM SOLVING ================= */}
      <section className="section coding-section">

        <p className="section-label">
          04 — PROBLEM SOLVING
        </p>

        <h2>
          I enjoy
          <span> solving problems.</span>
        </h2>


        <div className="coding-card">

          <div className="coding-number">
            440+
          </div>

          <div>

            <h3>
              LeetCode Problems Solved
            </h3>

            <p>
              Practicing Data Structures and Algorithms
              to strengthen problem-solving and coding skills.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      
<section
  id="contact"
  className="section contact-section"
>
  <div className="contact-actions">

  <a
    href="mailto:jahnavisutrayee@gmail.com"
    className="primary-button"
  >
    <Mail size={18} />
    Send Me an Email
  </a>

  <a
    href="https://github.com/Jahnavi448"
    className="secondary-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
    <ExternalLink size={16} />
  </a>

  <a
    href="tel:+917780791952"
    className="secondary-button"
  >
     7780791952
  </a>

</div>
</section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <p>
          © 2026 S. Jahnavi. Built with React.
        </p>

      </footer>

    </div>
  );
}

export default App;