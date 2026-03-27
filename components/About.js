const About = () => {
  const traits = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: 'Systems Thinker',
      description:
        'I design from the architecture down — not the UI up. Every decision traces back to constraints, scale, and correctness.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83
            2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
        </svg>
      ),
      title: 'End-to-End Builder',
      description:
        'From raw data pipelines to deployed interfaces — I own the full stack. Not because I have to, but because the seams matter.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Security-Aware',
      description:
        'I treat security as a design constraint, not an afterthought — RSA, AES, blockchain audit trails, federated privacy.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6"  y1="20" x2="6"  y2="14"/>
        </svg>
      ),
      title: 'Data-Driven',
      description:
        'ML pipelines, federated training, real-time analytics — I build systems that learn and improve over time, not just run once.',
    },
  ];

  const stack = [
    'Python', 'React', 'Go', 'Java',
    'FastAPI', 'Docker', 'PostgreSQL', 'SQLite',
    'Flower (FL)', 'TensorFlow', 'Flask', 'Bash',
  ];

  return (
    <section id="about" className="section">
      <div className="container">

        {/* Header */}
        <div className="about-header">
          <span className="section-label">01 / about</span>
          <h2 className="section-title">
            Engineered to build.<br />
            <span className="about-title-dim">Wired to understand.</span>
          </h2>
        </div>

        {/* Split layout */}
        <div className="about-grid">

          {/* LEFT — Text block */}
          <div className="about-left">
            <p className="about-lead">
              I'm Mithun — a CS student at VIT Vellore who builds systems
              at the intersection of <strong>machine learning</strong>,{' '}
              <strong>distributed computing</strong>, and{' '}
              <strong>security</strong>.
            </p>

            <p className="about-body">
              My approach is simple: understand the problem deeply before
              writing a single line. I've shipped full-stack ML platforms,
              federated learning systems, cryptographic audit tools, and
              developer productivity CLIs — each one starting from a
              clear system diagram, not a blank component.
            </p>

            <p className="about-body">
              Right now I'm focused on building things that don't
              just work in demos — they hold up under real load,
              real adversaries, and real users.
            </p>

            {/* Stack pills */}
            <div className="about-stack">
              <span className="about-stack__label">Daily stack</span>
              <div className="about-stack__pills">
                {stack.map(item => (
                  <span key={item} className="stack-pill">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Trait cards */}
          <div className="about-right">
            {traits.map(({ icon, title, description }) => (
              <div key={title} className="trait-card">
                <div className="trait-card__icon">{icon}</div>
                <div className="trait-card__content">
                  <h4 className="trait-card__title">{title}</h4>
                  <p className="trait-card__desc">{description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
