const Navbar = () => {
  const [scrolled,    setScrolled]    = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');
  const [menuOpen,    setMenuOpen]    = React.useState(false);

  const navLinks = [
    { label: 'About',    href: '#about'    },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills',   href: '#skills'   },
    { label: 'Now',      href: '#now'      },
  ];

  // Lock body scroll when menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'now', 'contact'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 80 && rect.bottom >= 80;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <React.Fragment>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">

          
          <a href="#hero" className="navbar-logo">
            mithun<span>.</span>dev
          </a>

          
          <ul className="navbar-links">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === href.slice(1) ? 'active' : ''}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          
          <a href="#contact" className="navbar-cta navbar-cta--desktop">
            Contact
          </a>

          
          <button
            className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="hamburger__line" />
            <span className="hamburger__line" />
            <span className="hamburger__line" />
          </button>

        </div>
      </nav>

      
      <div
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__inner">

          <nav className="mobile-menu__nav">
            {navLinks.map(({ label, href }, i) => (
              <a
                key={href}
                href={href}
                className="mobile-menu__link"
                style={{ '--link-index': i }}
                onClick={handleLinkClick}
              >
                <span className="mobile-menu__link-label">{label}</span>
                <svg width="18" height="18" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </a>
            ))}
          </nav>

          <div className="mobile-menu__footer">
            <a
              href="#contact"
              className="mobile-menu__cta"
              onClick={handleLinkClick}
            >
              Let's talk
              <svg width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <p className="mobile-menu__tagline">
              mithun<span>.</span>dev
            </p>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};
