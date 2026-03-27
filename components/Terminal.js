const Terminal = () => {
  const WAKE_WORD = 'mithun';

  const [open,         setOpen]        = React.useState(false);
  const [outputLines,  setOutputLines]  = React.useState([]);
  const [inputVal,     setInputVal]     = React.useState('');
  const [cmdHistory,   setCmdHistory]   = React.useState([]);
  const [historyIdx,   setHistoryIdx]   = React.useState(-1);
  const [busy,         setBusy]         = React.useState(false);

  const inputRef  = React.useRef(null);
  const bottomRef = React.useRef(null);
  const bufRef    = React.useRef('');
  const timersRef = React.useRef([]);

  /* ── Wake word detector ───────────────────────────── */
  React.useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (open) return;
      if (e.key.length !== 1) return;

      bufRef.current = (bufRef.current + e.key.toLowerCase()).slice(-WAKE_WORD.length);
      if (bufRef.current === WAKE_WORD) {
        setOpen(true);
        bufRef.current = '';
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  /* ── ESC to close ─────────────────────────────────── */
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) closeTerminal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  /* ── Lock body scroll + show welcome ─────────────── */
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      showWelcome();
      setTimeout(() => inputRef.current?.focus(), 120);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* ── Auto-scroll to bottom ────────────────────────── */
  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputLines]);

  /* ── Close + full reset ───────────────────────────── */
  const closeTerminal = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setOpen(false);
    setBusy(false);
    setOutputLines([]);
    setInputVal('');
    setHistoryIdx(-1);
  };

  /* ── Typewriter line printer ──────────────────────── */
  const printLines = (lines) => {
    setBusy(true);
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    lines.forEach((line, i) => {
      const t = setTimeout(() => {
        setOutputLines(prev => [...prev, line]);
        if (i === lines.length - 1) setBusy(false);
      }, i * 42);
      timersRef.current.push(t);
    });
  };

  const addLine = (line) => setOutputLines(prev => [...prev, line]);

  /* ── Welcome screen ───────────────────────────────── */
  const showWelcome = () => printLines([
    { t: '╔════════════════════════════════════════════════╗', c: 'accent' },
    { t: '║   mithun.dev — interactive terminal  v1.0.0   ║', c: 'accent' },
    { t: '╚════════════════════════════════════════════════╝', c: 'accent' },
    { t: '', c: 'dim' },
    { t: "  You found the easter egg. Most people don't.", c: 'success' },
    { t: '  Type help to see what you can do.', c: 'dim' },
    { t: '  Press ESC or type exit to leave.', c: 'dim' },
    { t: '', c: 'dim' },
  ]);

  /* ── Command definitions ──────────────────────────── */
  const CMDS = {

    help: () => [
      { t: '  Available commands:', c: 'title' },
      { t: '', c: 'dim' },
      { t: '  about      ............  who I am + how I think', c: 'default' },
      { t: '  projects   ............  everything I\'ve shipped', c: 'default' },
      { t: '  skills     ............  tech stack by category', c: 'default' },
      { t: '  contact    ............  how to reach me', c: 'default' },
      { t: '  whoami     ............  one line', c: 'default' },
      { t: '  ls         ............  portfolio sections', c: 'default' },
      { t: '  hire       ............  best decision you\'ll make today', c: 'warn' },
      { t: '  clear      ............  clear output', c: 'dim' },
      { t: '  exit       ............  close terminal', c: 'dim' },
      { t: '', c: 'dim' },
      { t: '  Pro tip: ↑ / ↓ for history · Tab to autocomplete', c: 'muted' },
      { t: '', c: 'dim' },
    ],

    whoami: () => [
      { t: '', c: 'dim' },
      { t: '  mithun-raghu-veluru', c: 'title' },
      { t: '  CS student · systems builder · VIT Vellore · India', c: 'dim' },
      { t: '', c: 'dim' },
    ],

    about: () => [
      { t: '', c: 'dim' },
      { t: '  ┌─────────────────────────────────────────────┐', c: 'accent' },
      { t: '  │  Mithun Raghu Veluru                        │', c: 'accent' },
      { t: '  │  B.Tech CS — VIT Vellore                    │', c: 'accent' },
      { t: '  │  Open to SDE internships — 2026             │', c: 'accent' },
      { t: '  └─────────────────────────────────────────────┘', c: 'accent' },
      { t: '', c: 'dim' },
      { t: '  I build systems at the intersection of:', c: 'default' },
      { t: '  → machine learning', c: 'default' },
      { t: '  → distributed computing', c: 'default' },
      { t: '  → cryptography + security', c: 'default' },
      { t: '', c: 'dim' },
      { t: '  My rule: understand the problem deeply before', c: 'dim' },
      { t: '  writing a single line of code.', c: 'dim' },
      { t: '', c: 'dim' },
      { t: '  Every project starts with a system diagram.', c: 'muted' },
      { t: '  Not a blank component.', c: 'muted' },
      { t: '', c: 'dim' },
    ],

    projects: () => [
  { t: '', c: 'dim' },
  { t: '  ── Shipped Projects ──────────────────────────', c: 'accent' },
  { t: '', c: 'dim' },
  { t: '  [01]  Aviation Failure Intelligence System',    c: 'title' },
  { t: '        5,200+ NTSB reports · HDBSCAN + LLM extraction', c: 'dim' },
  { t: '        Python · XGBoost · FastAPI · React · Docker',    c: 'code' },
  { t: '        ~80% accuracy · 650 features · 2,400+ aircraft types', c: 'success' },
  { t: '', c: 'dim' },
  { t: '  [02]  CreditFL — Federated Credit Risk',        c: 'title' },
  { t: '        Privacy-preserving FL across banking silos', c: 'dim' },
  { t: '        PyTorch · Flower FL · FastAPI · React',   c: 'code' },
  { t: '        94% centralized AUC · 18% over silo models', c: 'success' },
  { t: '', c: 'dim' },
  { t: '  [03]  BlockAudit — Network Security Platform',  c: 'title' },
  { t: '        Blockchain-backed tamper-proof audit trail', c: 'dim' },
  { t: '        WebSockets · SHA-256 · Merkle Trees · React', c: 'code' },
  { t: '        2,000+ pkt/sec · sub-10ms threat detection', c: 'success' },
  { t: '', c: 'dim' },
  { t: '  [04]  Data Analytics Pipeline — Techvaria',     c: 'title' },
  { t: '        EDA on 50K+ daily user sessions',         c: 'dim' },
  { t: '        Python · Pandas · SQL · NoSQL · Power BI', c: 'code' },
  { t: '        20% engagement lift · 30% less manual reporting', c: 'success' },
  { t: '', c: 'dim' },
],

    skills: () => [
      { t: '', c: 'dim' },
      { t: '  ── Tech Stack ─────────────────────────────────', c: 'accent' },
      { t: '', c: 'dim' },
      { t: '  Languages    python · javascript · go · java · sql · bash', c: 'default' },
      { t: '  Frontend     react · html · css', c: 'default' },
      { t: '  Backend      fastapi · flask · rest apis', c: 'default' },
      { t: '  ML / AI      tensorflow · scikit-learn · flower-fl · pandas', c: 'default' },
      { t: '  Infra        docker · postgresql · sqlite · linux · git', c: 'default' },
      { t: '  Security     rsa · aes · sha-256 · ecc · cryptography', c: 'default' },
      { t: '  Cloud        vercel · render · aws (in progress)', c: 'default' },
      { t: '', c: 'dim' },
    ],

    contact: () => [
      { t: '', c: 'dim' },
      { t: '  ── Contact ─────────────────────────────────────', c: 'accent' },
      { t: '', c: 'dim' },
      { t: '  email      mithunveluru7@gmail.com', c: 'default' },
      { t: '  github     github.com/mithunveluru', c: 'default' },
      { t: '  linkedin   linkedin.com/in/mithunveluru', c: 'default' },
      { t: '  web        mithun.dev', c: 'default' },
      { t: '', c: 'dim' },
      { t: '  → Usually responds within 24 hours.', c: 'success' },
      { t: '', c: 'dim' },
    ],

    hire: () => {
      setTimeout(() => {
        window.location.href =
          "mailto:mithunveluru7@gmail.com" +
          "?subject=Let's talk — I found your terminal" +
          "&body=Hi Mithun,%0A%0A" +
          "I was impressed enough to type 'mithun' on your portfolio " +
          "and run the hire command.%0A%0ALet's talk.";
      }, 2600);

      return [
        { t: '', c: 'dim' },
        { t: '  $ executing: hire mithun-raghu-veluru...', c: 'warn' },
        { t: '', c: 'dim' },
        { t: '  ✓  Checking availability .............. open', c: 'success' },
        { t: '  ✓  Verifying skill set ............... exceptional', c: 'success' },
        { t: '  ✓  Confirming system thinking ......... verified', c: 'success' },
        { t: '  ✓  Reviewing shipped projects ......... impressive', c: 'success' },
        { t: '  ✓  Assessing communication ............ clear', c: 'success' },
        { t: '', c: 'dim' },
        { t: '  All checks passed. Proceeding...', c: 'accent' },
        { t: '', c: 'dim' },
        { t: '  → Opening your email client in 3 seconds.', c: 'accent' },
        { t: "    Subject: \"Let's talk — I found your terminal\"", c: 'dim' },
        { t: '', c: 'dim' },
        { t: "  Best decision you've made today. 🚀", c: 'title' },
        { t: '', c: 'dim' },
      ];
    },

    ls: () => [
      { t: '', c: 'dim' },
      { t: '  drwxr-xr-x   hero/', c: 'default' },
      { t: '  drwxr-xr-x   about/', c: 'default' },
      { t: '  drwxr-xr-x   projects/', c: 'default' },
      { t: '  drwxr-xr-x   skills/', c: 'default' },
      { t: '  drwxr-xr-x   now/', c: 'default' },
      { t: '  drwxr-xr-x   contact/', c: 'default' },
      { t: '  -rw-r--r--   resume.pdf', c: 'success' },
      { t: '  -rw-r--r--   README.md', c: 'dim' },
      { t: '', c: 'dim' },
    ],

    'sudo hire-mithun': () => [
      { t: '', c: 'dim' },
      { t: '  [sudo] password for recruiter: ••••••••', c: 'warn' },
      { t: '', c: 'dim' },
      { t: '  ✓  Password accepted.', c: 'success' },
      { t: '  ✓  Elevated privileges granted.', c: 'success' },
      { t: '', c: 'dim' },
      { t: '  Running with root access...', c: 'accent' },
      { t: '  → mithun-raghu-veluru has been hired.', c: 'title' },
      { t: '  → Onboarding scheduled for next Monday.', c: 'dim' },
      { t: '  → HR notified. Champagne ordered.', c: 'dim' },
      { t: '  → Stock options pending board approval.', c: 'muted' },
      { t: '', c: 'dim' },
    ],
  };

  /* ── Execute command ──────────────────────────────── */
  const runCmd = (raw) => {
    const cmd = raw.trim();
    addLine({ t: `  $ ${cmd}`, c: 'prompt' });
    if (!cmd) return;

    setCmdHistory(prev => [cmd, ...prev].slice(0, 50));
    setHistoryIdx(-1);

    const key = cmd.toLowerCase();

    if (key === 'clear' || key === 'cls') {
      setOutputLines([]);
      return;
    }

    if (key === 'exit' || key === 'quit' || key === 'close') {
      addLine({ t: '  Goodbye. 👋', c: 'dim' });
      setTimeout(closeTerminal, 700);
      return;
    }

    const handler = CMDS[key];
    if (handler) {
      printLines(handler());
    } else {
      printLines([
        { t: `  bash: ${cmd}: command not found`, c: 'error' },
        { t: '  Type help to see available commands.', c: 'dim' },
        { t: '', c: 'dim' },
      ]);
    }
  };

  /* ── Keyboard handling ────────────────────────────── */
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (busy) return;
      runCmd(inputVal);
      setInputVal('');
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(idx);
      setInputVal(cmdHistory[idx] || '');
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(idx);
      setInputVal(idx === -1 ? '' : cmdHistory[idx]);
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      const partial = inputVal.toLowerCase();
      if (!partial) return;
      const match = Object.keys(CMDS).find(c => c.startsWith(partial));
      if (match) setInputVal(match);
      return;
    }

    // Ctrl+L = clear
    if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setOutputLines([]);
    }
  };

  if (!open) return null;

  return (
    <div
      className="term-overlay"
      onClick={closeTerminal}
      role="dialog"
      aria-modal="true"
      aria-label="Terminal"
    >
      <div
        className="term-window"
        onClick={e => e.stopPropagation()}
      >
        {/* ── Title bar ── */}
        <div className="term-bar">
          <div className="term-bar__dots">
            <button
              className="term-dot term-dot--red"
              onClick={closeTerminal}
              aria-label="Close terminal"
              title="Close"
            />
            <span className="term-dot term-dot--yellow" />
            <span className="term-dot term-dot--green"  />
          </div>
          <span className="term-bar__title">
            mithun@portfolio — bash
          </span>
          <span className="term-bar__hint">ESC to close</span>
        </div>

        {/* ── Output ── */}
        <div
          className="term-body"
          onClick={() => inputRef.current?.focus()}
        >
          {outputLines.map((line, i) => (
            <div key={i} className={`term-line term-line--${line.c}`}>
              {line.t || '\u00A0'}
            </div>
          ))}

          {/* ── Input row ── */}
          <div className="term-input-row">
            <span className="term-ps1">
              <span className="term-ps1__user">mithun</span>
              <span className="term-ps1__at">@</span>
              <span className="term-ps1__host">portfolio</span>
              <span className="term-ps1__sep">:</span>
              <span className="term-ps1__path">~</span>
              <span className="term-ps1__dollar"> $&nbsp;</span>
            </span>
            <input
              ref={inputRef}
              className="term-input"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={onKeyDown}
              disabled={busy}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              aria-label="Terminal input"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};
