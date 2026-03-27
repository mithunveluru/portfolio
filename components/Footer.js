const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: 'GitHub',   href: 'https://github.com/mithunveluru' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/mithunveluru' },
    { label: 'Email',    href: 'mailto:mithunveluru7@gmail.com' },
  ];

  return (
    <footer className="footer">
      
      <div className="footer__glow" aria-hidden="true" />

      <div className="container footer__inner">

        
        <div className="footer__left">
          <span className="footer__logo">
            mithun<span>.</span>dev
          </span>
          <p className="footer__tagline">
            Built with intent. Deployed with care.
          </p>
        </div>

        
        <nav className="footer__nav" aria-label="Footer navigation">
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="footer__link"
            >
              {label}
            </a>
          ))}
        </nav>

        
        <div className="footer__right">
          <span className="footer__copy">
            © {year} Mithun Raghu Veluru
          </span>
          <span className="footer__made">
            Made in{' '}
            {' '}India
          </span>
        </div>

      </div>
    </footer>
  );
};
