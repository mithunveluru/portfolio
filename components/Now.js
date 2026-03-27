const Now = () => {
  const currentFocus = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      ),
      label: 'Building',
      title: 'Aviation Failure Intelligence System',
      detail: 'Improving model accuracy past 96% — experimenting with ensemble methods and better feature engineering on sensor telemetry.',
      status: 'active',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
      label: 'Learning',
      title: 'AWS Cloud Architecture',
      detail: 'Working through AWS Solutions Architect concepts — IAM, VPC, EC2, S3, and deploying containerized apps to ECS.',
      status: 'active',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"/>
          <line x1="12" y1="19" x2="20" y2="19"/>
        </svg>
      ),
      label: 'Exploring',
      title: 'LLM-Based System Design',
      detail: 'Researching how LLMs can be integrated into backend pipelines — prompt engineering, RAG architectures, and tool-use patterns.',
      status: 'exploring',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
      label: 'Reading',
      title: 'Designing Data-Intensive Applications',
      detail: 'Martin Kleppmann — understanding distributed systems fundamentals: replication, partitioning, consistency, and consensus.',
      status: 'reading',
    },
  ];

  const recentWins = [
    { text: 'Shipped federated learning system with 5-node simulation', date: 'Jan 2026' },
    { text: 'Hot reload CLI reached sub-200ms restart time',            date: 'Sep 2025' },
    { text: 'Blockchain auditor passed tamper-detection stress tests',  date: 'Nov 2025' },
  ];

  return (
    <section id="now" className="section">
      <div className="container">

        
        <div className="now-header">
          <span className="section-label">04 / now</span>
          <h2 className="section-title">
            What I'm working on.
          </h2>
          <p className="now-subtitle">
            A live snapshot of where my head is at —
            updated as things change.
          </p>
        </div>

        <div className="now-layout">

          
          <div className="now-left">
            <div className="now-cards">
              {currentFocus.map(({ icon, label, title, detail, status }) => (
                <div key={title} className={`now-card now-card--${status}`}>
                  <div className="now-card__header">
                    <div className="now-card__icon-wrap">
                      {icon}
                    </div>
                    <div className="now-card__meta">
                      <span className={`now-card__label now-card__label--${status}`}>
                        {label}
                      </span>
                    </div>
                    <div className={`now-card__status-dot now-card__status-dot--${status}`} />
                  </div>
                  <h4 className="now-card__title">{title}</h4>
                  <p className="now-card__detail">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          
          <div className="now-right">

            
            <div className="now-wins">
              <div className="now-wins__header">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Recent Wins
              </div>
              <div className="now-wins__list">
                {recentWins.map(({ text, date }) => (
                  <div key={text} className="win-item">
                    <div className="win-item__check">
                      <svg width="11" height="11" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor"
                        strokeWidth="3" strokeLinecap="round"
                        strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div className="win-item__content">
                      <p className="win-item__text">{text}</p>
                      <span className="win-item__date">{date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="now-open">
              <div className="now-open__header">
                <span className="now-open__dot" />
                Open To
              </div>
              <div className="now-open__items">
                {[
                  'SDE Internships — 2026',
                  'Backend / Full-stack roles',
                  'ML Engineering projects',
                  'Open source collaboration',
                ].map(item => (
                  <div key={item} className="now-open__item">
                    <svg width="12" height="12" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <a href="#contact" className="now-open__cta">
                Let's talk
                <svg width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>

            
            <div className="now-updated">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Last updated: March 2026
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
