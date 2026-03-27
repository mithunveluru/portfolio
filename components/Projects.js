const Projects = () => {
  const FLAGSHIP = {
    title: 'Aviation Failure Intelligence System',
    badge: 'Featured Project',
    description:
      'Processed 5,200+ real NTSB incident reports using HDBSCAN clustering and LLM-based extraction to automatically classify crash cause, flight phase, and contributing factors — eliminating manual triage across 4 severity categories.',
    longDescription:
      'Built a 650-feature XGBoost classifier with TF-IDF bigrams and target-encoded aircraft/operator data across 2,400+ unique types. Deployed full-stack via FastAPI REST API and React dashboard with Docker Compose.',
    stack: ['Python', 'XGBoost', 'FastAPI', 'React', 'Docker', 'scikit-learn', 'HDBSCAN', 'TF-IDF'],
    metrics: [
      { label: 'Accuracy',       value: '~83.1%'   },
      { label: 'NTSB Reports',   value: '5,200+' },
      { label: 'Features',       value: '650'    },
      { label: 'Aircraft Types', value: '2,400+' },
    ],
    links: {
      github: 'https://github.com/mithunveluru/aviation-failure-intelligence',
      live:   null,
    },
  };

  const PROJECTS = [
    {
      title:       'CreditFL — Federated Credit Risk',
      description: 'Privacy-preserving federated learning framework across simulated banking silos. Trains distributed PyTorch models without raw data exchange — achieving 94% of centralized AUC and 18% improvement over independently trained silo models.',
      stack:       ['PyTorch', 'Flower FL', 'FastAPI', 'React', 'Non-IID', 'FedAvg'],
      metrics:     '94% centralized AUC · 18% silo improvement',
      links: {
        github: 'https://github.com/mithunveluru/creditfl',
        live:   null,
      },
    },
    {
      title:       'BlockAudit — Network Security Platform',
      description: 'High-throughput blockchain-backed network monitor processing 2,000+ packets/sec with sub-10ms threat detection. SHA-256 hashing with Merkle Tree verification guarantees tamper-proof audit trails and real-time detection of unauthorized log modifications.',
      stack:       ['WebSockets', 'SHA-256', 'Merkle Trees', 'Python', 'React'],
      metrics:     '2,000+ pkt/sec · sub-10ms detection',
      links: {
        github: 'https://github.com/mithunveluru/blockaudit',
        live:   null,
      },
    },
    {
      title:       'Data Analytics Pipeline — Techvaria',
      description: 'Built SQL and NoSQL analytics pipelines performing EDA on 50K+ daily user sessions. Designed KPI dashboards for traffic, logistics, and SEO metrics — reducing manual reporting by 30% and improving engagement by 20%.',
      stack:       ['Python', 'Pandas', 'NumPy', 'SQL', 'NoSQL', 'Power BI'],
      metrics:     '50K+ sessions/day · 30% less reporting',
      links: {
        github: null,
        live:   null,
      },
    },
  ];

  const [activeProject, setActiveProject] = React.useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">

        
        <div className="projects-header">
          <span className="section-label">02 / projects</span>
          <h2 className="section-title">Things I've shipped.</h2>
          <p className="projects-subtitle">
            Each project starts with a problem worth solving —
            not a technology worth trying.
          </p>
        </div>

        
        <div className="project-flagship">
          <div className="project-flagship__inner">

            
            <div className="project-flagship__left">
              <div className="project-flagship__badges">
                <span className="project-badge project-badge--flagship">
                  ★ {FLAGSHIP.badge}
                </span>
              </div>

              <h3 className="project-flagship__title">{FLAGSHIP.title}</h3>
              <p className="project-flagship__desc">{FLAGSHIP.description}</p>
              <p className="project-flagship__desc" style={{ marginTop: '12px', opacity: 0.75 }}>
                {FLAGSHIP.longDescription}
              </p>

              <div className="project-tech">
                {FLAGSHIP.stack.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-actions">
                {FLAGSHIP.links.github && (
                  <a
                    href={FLAGSHIP.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--primary"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
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
                    View on GitHub
                  </a>
                )}
              </div>
            </div>

            
            <div className="project-flagship__right">
              <div className="metrics-panel">
                <span className="metrics-panel__label">Key Outcomes</span>
                {FLAGSHIP.metrics.map(m => (
                  <div key={m.label} className="metric-item">
                    <span className="metric-item__dot" />
                    <span className="metric-item__label">{m.label}:&nbsp;</span>
                    <span className="metric-item__value">{m.value}</span>
                  </div>
                ))}
              </div>

              
              <div className="terminal-block">
                <div className="terminal-block__bar">
                  <span className="terminal-dot terminal-dot--red"    />
                  <span className="terminal-dot terminal-dot--yellow" />
                  <span className="terminal-dot terminal-dot--green"  />
                  <span className="terminal-block__title">inference.py</span>
                </div>
                <div className="terminal-block__body">
                  <div className="terminal-line">
                    <span className="t-dim">$</span>
                    <span className="t-cmd"> python inference.py</span>
                  </div>
                  <div className="terminal-line">
                    <span className="t-green">✓</span>
                    <span className="t-dim"> Model loaded — ~83.1% acc</span>
                  </div>
                  <div className="terminal-line">
                    <span className="t-green">✓</span>
                    <span className="t-dim"> 5,200 NTSB reports indexed</span>
                  </div>
                  <div className="terminal-line">
                    <span className="t-accent">→</span>
                    <span className="t-dim"> Cause: </span>
                    <span className="t-warn">ENGINE FAILURE · Phase 3</span>
                  </div>
                  <div className="terminal-line">
                    <span className="t-accent">→</span>
                    <span className="t-dim"> Classified in </span>
                    <span className="t-green">94ms</span>
                  </div>
                  <div className="terminal-line terminal-line--blink">
                    <span className="t-dim">█</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className={`project-card ${activeProject === i ? 'project-card--active' : ''}`}
              onMouseEnter={() => setActiveProject(i)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="project-card__top">
                <span className="project-badge project-badge--status">
                  {project.metrics}
                </span>
                <div className="project-card__links">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__icon-link"
                      aria-label="GitHub"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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
                    </a>
                  )}
                  <svg
                    className="project-card__arrow"
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__footer">
                <div className="project-tech project-tech--sm">
                  {project.stack.slice(0, 4).map(t => (
                    <span key={t} className="tech-tag tech-tag--sm">{t}</span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="tech-tag tech-tag--sm tech-tag--more">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};