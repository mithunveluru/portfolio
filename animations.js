/**
 * animations.js
 * Portfolio animation system — Phases 8 + 9
 * Plain JS, no framework, no dependencies.
 */
(function () {
  'use strict';
  

  /* ============================================================
     UTILITY
  ============================================================ */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  /* ============================================================
   CONSOLE EASTER EGG
============================================================ */
function initConsoleEasterEgg() {
  const styles = {
    big:   'color:#6366f1;font-family:monospace;font-size:13px;font-weight:700;line-height:2;',
    small: 'color:#a78bfa;font-family:monospace;font-size:11px;line-height:2;',
    green: 'color:#4ade80;font-family:monospace;font-size:11px;line-height:2;',
    muted: 'color:#4a4a6a;font-family:monospace;font-size:10px;line-height:2;',
  };

  console.clear();

  console.log(
    '\n%c  ███╗   ███╗██╗████████╗██╗  ██╗██╗   ██╗███╗   ██╗\n' +
    '%c  ████╗ ████║██║╚══██╔══╝██║  ██║██║   ██║████╗  ██║\n' +
    '%c  ██╔████╔██║██║   ██║   ███████║██║   ██║██╔██╗ ██║\n' +
    '%c  ██║╚██╔╝██║██║   ██║   ██╔══██║██║   ██║██║╚██╗██║\n' +
    '%c  ██║ ╚═╝ ██║██║   ██║   ██║  ██║╚██████╔╝██║ ╚████║\n' +
    '%c  ╚═╝     ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝\n',
    styles.big, styles.big, styles.big, styles.big, styles.big, styles.big
  );

  console.log(
    '%c  👾 Hey — you opened DevTools.\n' +
    '%c  I see you\'re one of us.\n\n' +
    '%c  ┌─────────────────────────────────────────┐\n' +
    '%c  │  Mithun Raghu Veluru                    │\n' +
    '%c  │  CS Engineer · VIT Vellore · India      │\n' +
    '%c  ├─────────────────────────────────────────┤\n' +
    '%c  │  ✉  mithunveluru7@gmail.com             │\n' +
    '%c  │  ⬡  github.com/mithunveluru            │\n' +
    '%c  │  ◈  linkedin.com/in/mithunveluru        │\n' +
    '%c  ├─────────────────────────────────────────┤\n' +
    '%c  │  Type  mithun  on the page              │\n' +
    '%c  │  for a surprise 👀                      │\n' +
    '%c  └─────────────────────────────────────────┘\n',
    styles.big,
    styles.small,
    styles.muted,
    styles.small,
    styles.small,
    styles.muted,
    styles.green,
    styles.green,
    styles.green,
    styles.muted,
    styles.muted,
    styles.muted,
    styles.muted
  );
}


  /* ============================================================
     1. SCROLL REVEAL
  ============================================================ */
  function initScrollReveal() {
    const staggerGroups = [
      { selector: '.projects-grid .project-card',    delay: 90 },
      { selector: '.about-right .trait-card',        delay: 75 },
      { selector: '.now-cards .now-card',            delay: 65 },
      { selector: '.contact-links .contact-link',   delay: 70 },
      { selector: '.timeline .timeline-item',        delay: 85 },
      { selector: '.now-wins__list .win-item',       delay: 65 },
      { selector: '.about-stack__pills .stack-pill', delay: 30 },
    ];

    staggerGroups.forEach(({ selector, delay }) => {
      $$(selector).forEach((el, i) => {
        el.style.setProperty('--reveal-delay', `${i * delay}ms`);
      });
    });

    const selectors = [
      '.section-label', '.section-title',
      '.projects-subtitle', '.skills-subtitle',
      '.now-subtitle', '.contact-subtitle',
      '.about-lead', '.about-body', '.about-stack',
      '.project-flagship', '.project-card',
      '.trait-card', '.now-card',
      '.now-wins', '.now-open', '.now-updated',
      '.timeline-item',
      '.contact-availability', '.contact-link',
      '.contact-note', '.contact-form-wrap',
      '.skills-tabs', '.skills-bars',
      '.skills-timeline-heading',
      '.win-item', '.metrics-panel', '.terminal-block',
    ];

    const elements = $$(selectors.join(', '));
    elements.forEach(el => el.classList.add('reveal'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('reveal--visible');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => io.observe(el));
  }

  /* ============================================================
     2. SCROLL PROGRESS BAR
  ============================================================ */
  function initScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        const scrolled  = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = docHeight > 0
          ? `${(scrolled / docHeight) * 100}%`
          : '0%';
        ticking = false;
      });
      ticking = true;
    }, { passive: true });
  }

  /* ============================================================
     3. SMOOTH ANCHOR SCROLL
  ============================================================ */
  function initSmoothAnchors() {
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }

  /* ============================================================
     4. CARD CURSOR GLOW
  ============================================================ */
  function initCursorGlow() {
    const glowTargets = '.project-card, .trait-card, .now-card';

    document.addEventListener('mousemove', (e) => {
      const card = e.target.closest(glowTargets);
      if (!card) return;

      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width)  * 100}%`);
      card.style.setProperty('--mouse-y', `${((e.clientY - rect.top)  / rect.height) * 100}%`);
    }, { passive: true });
  }

  /* ============================================================
     5. ACTIVE NAV HIGHLIGHTING
  ============================================================ */
  function initActiveNav() {
    const sections = $$('section[id]');
    const navLinks = $$('.navbar-links a');

    if (!sections.length || !navLinks.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${id}`
            );
          });
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach(s => io.observe(s));
  }

  /* ============================================================
     6. CUSTOM CURSOR (desktop only)
  ============================================================ */
  function initCustomCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot  = document.createElement('div');
    const ring = document.createElement('div');
    dot.className  = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    document.body.style.cursor = 'none';
    $$('a, button, input, textarea, [role="tab"]')
      .forEach(el => (el.style.cursor = 'none'));

    let mouseX = window.innerWidth  / 2;
    let mouseY = window.innerHeight / 2;
    let ringX  = mouseX;
    let ringY  = mouseY;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';
    }, { passive: true });

    (function lerp() {
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      requestAnimationFrame(lerp);
    })();

    const interactiveSelector =
      'a, button, input, textarea, [role="tab"], ' +
      '.project-card, .trait-card, .now-card, ' +
      '.contact-link, .stack-pill, .tech-tag, .skills-tab';

    document.addEventListener('mouseover', (e) => {
      if (!e.target.closest(interactiveSelector)) return;
      dot.classList.add('is-hovering');
      ring.classList.add('is-hovering');
    });

    document.addEventListener('mouseout', (e) => {
      if (!e.target.closest(interactiveSelector)) return;
      dot.classList.remove('is-hovering');
      ring.classList.remove('is-hovering');
    });

    document.addEventListener('mousedown', () => {
      dot.classList.add('is-clicking');
      ring.classList.add('is-clicking');
    });

    document.addEventListener('mouseup', () => {
      dot.classList.remove('is-clicking');
      ring.classList.remove('is-clicking');
    });

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = ring.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      dot.style.opacity = ring.style.opacity = '1';
    });
  }

  /* ============================================================
     7. PAGE LOADED CLASS
     Triggers body fade-in after React renders.
  ============================================================ */
  function initPageTransition() {
    document.body.classList.add('page-loaded');
  }
  function initCounterAnimation() {
    const statNumbers = document.querySelectorAll('.hero-stat__number');                                                                                                     
    if (statNumbers.length === 0) return;                                                                                                                                    
                                                                                                                                                                             
    const heroStats = document.querySelector('.hero-stats');                                                                                                                 
    if (!heroStats) return;
                                                                                                                                                                             
    const duration = 1400;                                                                                                                                                   
    const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
                                                                                                                                                                             
    statNumbers.forEach(element => {                                                                                                                                         
      const text = element.textContent;                                                                                                                                      
      const match = text.match(/^(\d+)(.*)$/);                                                                                                                               
      if (!match) return;                                                                                                                                                    
                                                                                                                                                                             
      const target = parseInt(match[1], 10);                                                                                                                                 
      const suffix = match[2];                                                                                                                                               
                                                                                                                                                                             
      const animate = () => {
        const startTime = performance.now();                                                                                                                                 
                                                                                                                                                                             
        const tick = (currentTime) => {
          const elapsed = currentTime - startTime;                                                                                                                           
          const progress = Math.min(elapsed / duration, 1);                                                                                                                  
          const eased = easeOutExpo(progress);
          const current = Math.floor(eased * target);                                                                                                                        
                                                                                                                                                                             
          element.textContent = current + suffix;                                                                                                                            
                                                                                                                                                                             
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {                                                                                                                                                           
            element.textContent = target + suffix;
          }                                                                                                                                                                  
        };        

        requestAnimationFrame(tick);                                                                                                                                         
      };
                                                                                                                                                                             
      element.__counterStart = animate;
    });

    const observer = new IntersectionObserver((entries) => {                                                                                                                 
      entries.forEach(entry => {
        if (entry.isIntersecting) {                                                                                                                                          
          statNumbers.forEach(el => {                                                                                                                                        
            if (el.__counterStart) el.__counterStart();
          });                                                                                                                                                                
          observer.unobserve(entry.target);
        }                                                                                                                                                                    
      });         
    }, { threshold: 0.5 });
                                                                                                                                                                             
    observer.observe(heroStats);
  }
  /* ============================================================
   MAGNETIC BUTTONS
============================================================ */
function initMagneticButtons() {
  // Touch devices — skip entirely
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const SELECTOR = '.btn--primary, .btn--ghost, .form-submit, .now-open__cta, .navbar-cta';
  const MAX_SHIFT  = 7;    // max px the button moves toward cursor
  const PULL_ZONE  = 0.65; // how far outside button edge the magnet activates (% of dimension)

  function attachMagnet(btn) {
    let rafId = null;
    let currentX = 0;
    let currentY = 0;
    let targetX  = 0;
    let targetY  = 0;
    let isActive = false;

    // Smooth lerp loop — runs only while hovering
    function lerp() {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      btn.style.transform = `translate(${currentX}px, ${currentY}px)`;

      // Keep running until settled
      if (Math.abs(targetX - currentX) > 0.01 ||
          Math.abs(targetY - currentY) > 0.01 || isActive) {
        rafId = requestAnimationFrame(lerp);
      } else {
        // Fully settled — clean up
        currentX = 0;
        currentY = 0;
        btn.style.transform = '';
        rafId = null;
      }
    }

    function onMouseMove(e) {
      const rect   = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;

      // Distance from cursor to button center
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      // Normalize to -1 → 1 range relative to button size
      const normX = distX / (rect.width  * (0.5 + PULL_ZONE));
      const normY = distY / (rect.height * (0.5 + PULL_ZONE));

      // Clamp to max shift distance
      targetX = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, normX * MAX_SHIFT));
      targetY = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, normY * MAX_SHIFT));
    }

    function onMouseEnter() {
      isActive = true;
      // Start lerp loop if not already running
      if (!rafId) rafId = requestAnimationFrame(lerp);
    }

    function onMouseLeave() {
      isActive = false;
      targetX  = 0;
      targetY  = 0;
      // Lerp loop continues until values settle to 0
      if (!rafId) rafId = requestAnimationFrame(lerp);
    }

    btn.addEventListener('mouseenter', onMouseEnter);
    btn.addEventListener('mousemove',  onMouseMove, { passive: true });
    btn.addEventListener('mouseleave', onMouseLeave);
  }

  // Attach to all matching buttons
  $$(SELECTOR).forEach(attachMagnet);

  // Re-attach to dynamically rendered buttons (React may render late)
  // Small safety net — runs once after 800ms
  setTimeout(() => {
    $$(SELECTOR).forEach(btn => {
      if (btn.dataset.magnetAttached) return;
      btn.dataset.magnetAttached = 'true';
      attachMagnet(btn);
    });
  }, 800);
}
     

  /* ============================================================
     INIT
     Waits for React to finish its first render (~350ms),
     then initialises all systems in priority order.
  ============================================================ */
  function init() {
    initConsoleEasterEgg();
    initCustomCursor();    // first — cursor must exist before any hover
    initScrollReveal();    // observer setup
    initScrollProgress();  // lightweight, passive scroll
    initSmoothAnchors();   // delegate, zero cost
    initCursorGlow();      // delegate, passive
    initActiveNav();       // observer setup
    initPageTransition();                                                                                                                                                      
    initCounterAnimation(); 
    initMagneticButtons(); 
  }

  const REACT_RENDER_DELAY = 380;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () =>
      setTimeout(init, REACT_RENDER_DELAY)
    );
  } else {
    setTimeout(init, REACT_RENDER_DELAY);
  }

})();
