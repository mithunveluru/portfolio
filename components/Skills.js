const Skills = () => {
  const skillGroups = [
    {
      id: 'languages',
      label: 'Languages',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      skills: [
        { name: 'Python',     level: 95 },
        { name: 'JavaScript', level: 85 },
        { name: 'Go',         level: 75 },
        { name: 'Java',       level: 78 },
        { name: 'SQL',        level: 82 },
        { name: 'Bash',       level: 80 },
      ],
    },
    {
      id: 'frameworks',
      label: 'Frameworks & Tools',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      skills: [
        { name: 'React',      level: 85 },
        { name: 'FastAPI',    level: 90 },
        { name: 'Flask',      level: 85 },
        { name: 'Docker',     level: 88 },
        { name: 'TensorFlow', level: 80 },
        { name: 'Flower FL',  level: 78 },
      ],
    },
    {
      id: 'domains',
      label: 'Domains',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10
            15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      skills: [
        { name: 'Machine Learning',       level: 85 },
        { name: 'Federated Learning',     level: 80 },
        { name: 'Cryptography',           level: 82 },
        { name: 'System Design',          level: 78 },
        { name: 'REST API Design',        level: 90 },
        { name: 'Embedded Systems',       level: 72 },
      ],
    },
    {
      id: 'infra',
      label: 'Infrastructure',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      ),
      skills: [
        { name: 'PostgreSQL', level: 82 },
        { name: 'SQLite',     level: 88 },
        { name: 'Git/GitHub', level: 92 },
        { name: 'Linux',      level: 88 },
        { name: 'Vercel',     level: 80 },
        { name: 'Render',     level: 78 },
      ],
    },
  ];

  const timeline = [
    {
      period: 'Jan 2026 — Present',
      title: 'Aviation Failure Intelligence System',
      type: 'Project',
      description:
        'Full-stack ML platform for predictive aircraft maintenance. ' +
        'FastAPI backend, React dashboard, PostgreSQL, WebSocket streams.',
    },
    {
      period: 'Nov 2025 — Jan 2026',
      title: 'Credit Risk Federated Learning',
      type: 'Research Project',
      description:
        'Multi-node federated learning system using Flower framework. ' +
        'FedAvg aggregation across isolated client nodes. Privacy-preserving by design.',
    },
    {
      period: 'Sep 2025 — Nov 2025',
      title: 'Blockchain Security Log Auditor',
      type: 'Project',
      description:
        'Tamper-proof audit trail system using SHA-256 chain linking and AES-256 encryption. ' +
        'Flask API, React frontend, real-time alert engine.',
    },
    {
      period: 'Jul 2025 — Sep 2025',
      title: 'Hot Reload CLI — Go',
      type: 'Dev Tool',
      description:
        'Zero-config file watcher and build tool for Go projects. ' +
        'Debounce logic, sub-200ms restart, cross-platform.',
    },
    {
      period: '2024 — Present',
      title: 'B.Tech Computer Science — VIT Vellore',
      type: 'Education',
      description:
        'Coursework: Embedded Systems, Cryptography, Networking, ' +
        'Data Science, Software Engineering, Cloud Computing.',
    },
  ];

  const [activeGroup, setActiveGroup] = React.useState('languages');

  return (
    <section id="skills" className="section">
      <div className="container">

        
        <div className="skills-header">
          <span className="section-label">03 / skills</span>
          <h2 className="section-title">
            Tools I think with.
          </h2>
          <p className="skills-subtitle">
            Depth over breadth — every skill here has been used
            to ship something real.
          </p>
        </div>

        
        <div className="skills-layout">

          
          <div className="skills-left">

            
            <div className="skills-tabs" role="tablist">
              {skillGroups.map(group => (
                <button
                  key={group.id}
                  role="tab"
                  aria-selected={activeGroup === group.id}
                  className={`skills-tab ${activeGroup === group.id ? 'skills-tab--active' : ''}`}
                  onClick={() => setActiveGroup(group.id)}
                >
                  <span className="skills-tab__icon">{group.icon}</span>
                  {group.label}
                </button>
              ))}
            </div>

            
            {skillGroups
              .filter(g => g.id === activeGroup)
              .map(group => (
                <div key={group.id} className="skills-bars">
                  {group.skills.map(({ name, level }) => (
                    <SkillBar key={name} name={name} level={level} />
                  ))}
                </div>
              ))}
          </div>

          
          <div className="skills-right">
            <span className="skills-timeline-heading">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Timeline
            </span>

            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-item__dot">
                    <div className="timeline-item__dot-inner" />
                  </div>
                  <div className="timeline-item__content">
                    <div className="timeline-item__meta">
                      <span className="timeline-item__period">{item.period}</span>
                      <span className={`timeline-item__type timeline-item__type--${item.type.toLowerCase().replace(/\s+/g, '-')}`}>
                        {item.type}
                      </span>
                    </div>
                    <h4 className="timeline-item__title">{item.title}</h4>
                    <p className="timeline-item__desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* -- Animated skill bar (separate component) -- */
const SkillBar = ({ name, level }) => {
  const [animated, setAnimated] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Reset animation when tab changes
  React.useEffect(() => {
    setAnimated(false);
    const t = setTimeout(() => setAnimated(true), 80);
    return () => clearTimeout(t);
  }, [name]);

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
};
