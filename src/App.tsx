import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          Ashwini<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="contact-btn">
            Contact Me
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="greeting">HELLO, WELCOME TO MY WORLD ✨</p>

            <h1>
              Hi, I'm <span>Ashwini</span>
            </h1>

            <h2>Aspiring Full Stack Developer</h2>

            <p className="description">
              I love building beautiful websites and turning ideas into
              real-world web applications using modern technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Work ↗
              </a>
              <a href="#about" className="secondary-btn">
                About Me
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot"></span>
              Learning. Building. Growing.
            </div>
          </div>

          <div className="hero-visual">
            <div className="decor decor-one">✦</div>
            <div className="decor decor-two">✧</div>

            <div className="profile-card">
              <div className="profile-icon">A</div>
              <p className="card-small">HELLO, I'M</p>
              <h3>Ashwini</h3>
              <p className="card-role">Developer in progress 💻</p>
              <div className="card-divider"></div>
              <p className="card-message">
                Creating something meaningful, one line of code at a time.
              </p>
              <div className="mini-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-content">
            <p className="section-label">GET TO KNOW ME</p>
            <h2>
              A little about <span>me.</span>
            </h2>
            <p>
              Hi, I'm Ashwini! I'm an aspiring Full Stack Developer passionate
              about building useful and beautiful web applications.
            </p>
            <p>
              I've been learning the MERN stack and working on projects like a
              URL Shortener. I also practise backend development and database
              integration through my e-commerce project.
            </p>
            <p>
              My goal is to keep learning, improve my coding skills, and build
              applications that solve real-world problems.
            </p>
            <a href="#skills" className="primary-btn">
              Explore My Skills ↗
            </a>
          </div>

          <div className="about-highlight">
            <div className="highlight-icon">✿</div>
            <h3>Always learning.</h3>
            <p>Every project is a new opportunity to grow as a developer.</p>
            <div className="highlight-line"></div>
            <p className="highlight-bottom">
              Curiosity · Creativity · Consistency
            </p>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <p className="section-label">WHAT I WORK WITH</p>
          <h2>
            My <span>Skills</span>
          </h2>
          <p className="skills-description">
            Technologies I'm learning and using to build web applications.
          </p>

          <div className="skill-list">
            <div className="skill-card">
              <span className="skill-icon">🌐</span>
              <h3>HTML & CSS</h3>
              <p>Web structure and styling</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">⚡</span>
              <h3>JavaScript</h3>
              <p>Interactive web experiences</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">⚛️</span>
              <h3>React</h3>
              <p>Component-based UI</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">🟢</span>
              <h3>Node.js</h3>
              <p>Server-side JavaScript</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">🚀</span>
              <h3>Express.js</h3>
              <p>Backend APIs and routing</p>
            </div>

            <div className="skill-card">
              <span className="skill-icon">🍃</span>
              <h3>MongoDB</h3>
              <p>Database and data storage</p>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <section className="section projects" id="projects">
            <p className="section-label">A FEW THINGS I'VE BUILT</p>
            <h2>
              My <span>Projects</span>
            </h2>

            <div className="project-grid">
              <article className="project-card">
                <div className="project-top">
                  <span className="project-number">01 / WEB APP</span>
                  <span className="project-icon">↗</span>
                </div>

                <h3>URL Shortener</h3>
                <p>
                  A full-stack application that converts long URLs into short
                  links and tracks the number of clicks.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                </div>

                <a
                  href="https://adventurous-victory-production-0363.up.railway.app"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Open Live App ↗
                </a>
              </article>

              <article className="project-card">
                <div className="project-top">
                  <span className="project-number">02 / E-COMMERCE</span>
                  <span className="project-icon">↗</span>
                </div>

                <h3>E-commerce Platform</h3>
                <p>
                  An online shopping project built to practise backend
                  development, API integration and database management.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MySQL</span>
                </div>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub ↗
                </a>
              </article>
            </div>
          </section>

          <p className="section-label">A FEW THINGS I'VE BUILT</p>
          <h2>
            My <span>Projects</span>
          </h2>
          <div className="project-grid">
            <article className="project-card">
              <span className="project-number">01 / WEB APP</span>
              <h3>URL Shortener</h3>
              <p>
                A web application that converts long URLs into short links and
                tracks clicks.
              </p>
              <div className="project-tags">React · Express · MongoDB</div>
            </article>
            <article className="project-card">
              <span className="project-number">02 / E-COMMERCE</span>
              <h3>E-commerce Platform</h3>
              <p>
                An online shopping project built to practise backend development
                and database integration.
              </p>
              <div className="project-tags">React · Node.js · MySQL</div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-label">LET'S CONNECT</p>
          <h2>
            Let's create something <span>amazing.</span>
          </h2>
          <p>
            Have a project idea or an opportunity to discuss? I'd love to hear
            from you.
          </p>

          <div className="contact-details">
            <a href="mailto:ashwiniwagh050@gmail.com" className="contact-item">
              <span className="contact-icon">✉</span>
              <span>
                <small>EMAIL ME</small>
                <strong>Send me an email ↗</strong>
              </span>
            </a>

            <a
              href="https://github.com/ashwini-waghmare"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">⌘</span>
              <span>
                <small>GITHUB</small>
                <strong>Explore my code ↗</strong>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/ashwini-waghmare-40147a277/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">in</span>
              <span>
                <small>LINKEDIN</small>
                <strong>Connect with me ↗</strong>
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">
          Ashwini<span>.</span>
        </a>
        <p>Designed with ♡ and built with code.</p>
        <p>© 2026 Ashwini</p>
      </footer>
    </div>
  );
}

export default App;
