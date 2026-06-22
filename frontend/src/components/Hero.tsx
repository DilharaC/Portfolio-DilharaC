export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-centered-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Full-Stack Engineer &nbsp;·&nbsp; Kandy, Sri Lanka
        </div>
        <h1 className="hero-h1">
          Building digital foundations
          <em>with technical precision.</em>
        </h1>
        <p className="hero-p-centered">
          Specializing in the nexus between robust system architecture and
          human-centric interfaces. I transform complex backend logic into
          refined, performant digital experiences that endure.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-hero-main">
            <span>View Selected Works</span>
            <i className="bx bx-right-arrow-alt"></i>
          </a>
          <a href="#contact" className="btn-hero-outline">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}
