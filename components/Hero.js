const Hero = () => {
  const [displayText, setDisplayText] = React.useState('');
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [charIndex,   setCharIndex]   = React.useState(0);
  const [isDeleting,  setIsDeleting]  = React.useState(false);

  const phrases = [
    'systems that scale.',
    'ML pipelines that ship.',
    'security-first backends.',
    'tools engineers love.',
    'distributed architectures.',
    'things that actually work.',
  ];

  React.useEffect(() => {
    const current = phrases[phraseIndex];
    const speed   = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setCharIndex(0);
          setPhraseIndex(i => (i + 1) % phrases.length);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section id="hero" className="hero-section">

      
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob--1" />
        <div className="hero-blob hero-blob--2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-container">

        
        <div className="hero-badge">
          <span className="hero-badge__dot" />
          <span>Available for internships · Summer 2026</span>
        </div>

        
        <h1 className="hero-headline">
          <span className="hero-headline__line1">I build systems</span>
          <br />
          <span className="hero-headline__line2">that solve real</span>
          <br />
          <span className="hero-headline__gradient">problems.</span>
        </h1>

        
        <p className="hero-tagline">
          Currently working on{' '}
          <span className="hero-tagline__typed">
            {displayText}
            <span className="hero-cursor" aria-hidden="true">|</span>
          </span>
        </p>

        
        <p className="hero-description">
          CS student at VIT Vellore (GPA 9.26) with internship experience
          at <strong>Techvaria</strong> and <strong>Hanco Automotive</strong>.
          I build end-to-end ML systems, data pipelines, and security-aware
          backends — things that hold up under real load and real users.
        </p>

        
        <div className="hero-actions">
          <a href="#projects" className="btn btn--primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            View Projects
          </a>
          <a
            href="https://github.com/mithunveluru"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            <svg width="16" height="16" viewBox="0 0 24 24"
              fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425
                2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343
                -.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
                1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088
                2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113
                -4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446
                -1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1
                12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027
                2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595
                1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92
                .678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688
                .482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
        </div>

        
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat__number">9.26</span>
            <span className="hero-stat__label">GPA / 10</span>
          </div>
          <div className="hero-stat__divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat__number">2</span>
            <span className="hero-stat__label">Internships</span>
          </div>
          <div className="hero-stat__divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat__number">3</span>
            <span className="hero-stat__label">Shipped Projects</span>
          </div>
          <div className="hero-stat__divider" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat__number">6</span>
            <span className="hero-stat__label">Languages</span>
          </div>
        </div>

      </div>

      
      <div className="hero-scroll-hint" aria-hidden="true">
        <span className="hero-scroll-hint__text">scroll</span>
        <div className="hero-scroll-hint__line" />
      </div>

    </section>
  );
};