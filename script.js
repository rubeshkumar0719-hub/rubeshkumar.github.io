/* ===================================================================
   RUBESH — PORTFOLIO CONTENT & BEHAVIOUR

   To add/replace a project: edit the PROJECTS array below.
   Each entry only needs a title, category, description, videoUrl,
   and an optional tag (shown top-left on the thumbnail placeholder).
   No HTML/CSS editing required.
   =================================================================== */

const PROJECTS = [
  {
    title: "YouTube Long-form 01",
    category: "YouTube Long-form",
    tag: "LONG-FORM",
    description: "Raw footage trimmed and paced into a finished long-form upload for a recurring client.",
    videoUrl: "https://youtu.be/47-zQqrxH3I?si=oYnKMwdPvjP3Jiq4",
    accentA: "#211A10",
    accentB: "#0F1013"
  },
  {
    title: "YouTube Long-form 02",
    category: "YouTube Long-form",
    tag: "LONG-FORM",
    description: "Second sample from the same channel — clip selection, pacing, and subtitle work.",
    videoUrl: "https://youtu.be/bSuAW1v_Ai0?si=kK89qPqPdcs6YVQL",
    accentA: "#1B1D22",
    accentB: "#0F1013"
  },
  {
    title: "Gaming Tryout 01",
    category: "Gaming",
    tag: "GAMING",
    description: "Roughly two hours of co-op gameplay footage cut into a memes-and-highlights reel for a team tryout.",
    videoUrl: "https://drive.google.com/file/d/131TOOeGxyLYL03hfvVh4wf0HcX2TSDq4/view?usp=sharing",
    accentA: "#1E1712",
    accentB: "#0F1013"
  },
  {
    title: "Gaming Tryout 02",
    category: "Gaming",
    tag: "GAMING",
    description: "A second highlight cut from the same gameplay footage, built for a different team tryout.",
    videoUrl: "https://drive.google.com/file/d/1aJuEj3DR-NHDQKq-rLRyzkE_s9aiq0cT/view?usp=sharing",
    accentA: "#191B1F",
    accentB: "#0F1013"
  },
  {
    title: "Book Launch Promo",
    category: "Promotional",
    tag: "PROMO",
    description: "Vertical and square deliverables cut for a book launch campaign across Instagram, Facebook, and YouTube.",
    videoUrl: "https://drive.google.com/file/d/1eilxrwad1MrZW00Mj4YBF1jhraYfBjHs/view?usp=sharing",
    accentA: "#201A12",
    accentB: "#0F1013"
  },
  {
    title: "Short Form 01",
    category: "Short-form",
    tag: "SHORT",
    description: "A long-form moment re-cut for vertical, built for the first three seconds to hold attention.",
    videoUrl: "https://youtube.com/shorts/GWRE3Srp-mQ?si=VkOuCBjGJEqeHeD2",
    accentA: "#191D1B",
    accentB: "#0F1013"
  },
  {
    title: "Short Form 02",
    category: "Short-form",
    tag: "SHORT",
    description: "A second vertical cut, paced for a fast scroll-stopping open and a quick payoff.",
    videoUrl: "https://youtube.com/shorts/XA99a1K5eko?si=lAJG_bBnJ2t0mQXa",
    accentA: "#1D1712",
    accentB: "#0F1013"
  },
  {
    title: "What I Actually Do to a Talking-Head Video",
    category: "Talking-head Content",
    tag: "BEFORE/AFTER",
    description: "A before-and-after breakdown of a talking-head edit for a long-form channel — raw footage next to the finished cut.",
    videoUrl: "https://drive.google.com/file/d/1s5nn0X3IuV5ZF8bIeX5_lSoFD0fnQEGw/view?usp=sharing",
    accentA: "#1C1E20",
    accentB: "#0F1013"
  },
  {
    title: "Mystery Video 1",
    category: "Storytelling",
    tag: "AI-GENERATED",
    description: "AI-scripted mystery story — AI-generated imagery, ElevenLabs voiceover, and music compiled into a finished narrative video.",
    videoUrl: "https://drive.google.com/file/d/1mQTwykZwKZbY3AzU1eIjsXYELoS-PYSI/view?usp=drive_link",
    accentA: "#17191E",
    accentB: "#0F1013"
  },
  {
    title: "Mystery Video 2",
    category: "Storytelling",
    tag: "AI-GENERATED",
    description: "A second AI-scripted mystery piece, built the same way — AI imagery, voiceover, and music compiled into one edit.",
    videoUrl: "https://drive.google.com/file/d/1kaz8dCLrUlzgQdeWHws72Rgaj149lRy9/view?usp=drive_link",
    accentA: "#191A1F",
    accentB: "#0F1013"
  },
  {
    title: "Doctors vs. Entrepreneurs — Comparison Edit",
    category: "Storytelling",
    tag: "COMPARISON",
    description: "A comparison-style video weighing doctors' salaries against entrepreneurs' lifestyle and motivation.",
    videoUrl: "https://drive.google.com/file/d/1amWFFC4UG5_bDHAywLm9sl4UaeVfH2O_/view?usp=sharing",
    accentA: "#1E1B12",
    accentB: "#0F1013"
  },
  {
    title: "Adrena Sports Agency Launch Video",
    category: "Promotional",
    tag: "LAUNCH",
    description: "A launch announcement edit for a sports agency, cut for a confident, high-energy first impression.",
    videoUrl: "https://drive.google.com/file/d/1-1K-lgNjC5k3Fa2Mhut4BqsuGvw_eJ4u/view?usp=drive_link",
    accentA: "#221912",
    accentB: "#0F1013"
  }
];

const CATEGORIES = [
  {
    title: "YouTube Long-form",
    desc: "Full raw-footage edits — trimming, pacing, and structuring a video so it holds attention start to finish.",
    icon: "play"
  },
  {
    title: "Talking-head Content",
    desc: "Cutting dead air, tightening delivery, and keeping a single-speaker video moving without losing the message.",
    icon: "mic"
  },
  {
    title: "Short-form",
    desc: "Vertical cuts built from long-form footage or shot fresh, edited for a fast, scroll-stopping first few seconds.",
    icon: "phone"
  },
  {
    title: "Storytelling",
    desc: "Structuring footage into a clear arc — setup, build, payoff — so the edit carries a narrative, not just a sequence of clips.",
    icon: "book"
  },
  {
    title: "Gaming",
    desc: "Gameplay and face-cam sync, meme and SFX placement, and pulling the funniest moments out of long sessions.",
    icon: "gamepad"
  },
  {
    title: "Promotional Content",
    desc: "Campaign-ready vertical and square deliverables for launches and announcements across platforms.",
    icon: "megaphone"
  },
  {
    title: "Basic Motion Graphics",
    desc: "Typography, charts, maps, and simple UI animation — working knowledge, built one technique at a time.",
    icon: "shapes"
  }
];

const WHY = [
  {
    title: "Attention to detail",
    desc: "Frame-accurate cuts, clean audio, and a pass to catch what the first watch missed.",
    icon: "target"
  },
  {
    title: "Pacing that holds",
    desc: "A feel for when a clip has run its course and when a scene needs another second to land.",
    icon: "pulse"
  },
  {
    title: "Strong clip selection",
    desc: "Picking the moment that matters out of hours of raw footage — especially for Shorts.",
    icon: "scissors"
  },
  {
    title: "Adapts to your style",
    desc: "I match the tone and rhythm a client already has, rather than editing everything the same way.",
    icon: "layers"
  },
  {
    title: "Willing to learn",
    desc: "If a job needs a technique I haven't used yet, I'll learn it properly rather than fake it.",
    icon: "book"
  },
  {
    title: "Reliable communication",
    desc: "Clear updates, honest timelines, and revisions until the cut actually works for you.",
    icon: "chat"
  }
];

const CONTACT = [
  {
    label: "Email",
    value: "rubeshkumar719@gmail.com",
    href: "mailto:rubeshkumar719@gmail.com"
  },
  {
    label: "Phone",
    value: "+91 89253 07194",
    href: "tel:+918925307194"
  },
  {
    label: "Discord",
    value: "soul07.",
    href: null
  }
];

/* ---------------------------------------------------------------
   Icons (minimal line-art, self-contained SVG strings)
   --------------------------------------------------------------- */
const ICONS = {
  play: `<svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8V4z" stroke-linejoin="round"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24"><path d="M6 8h12l2 9a2.5 2.5 0 0 1-4.4 2L14 17h-4l-1.6 2A2.5 2.5 0 0 1 4 17l2-9z" stroke-linejoin="round"/><path d="M9 11v3M7.5 12.5h3M16 11.5h.01M18.5 13.5h.01"/></svg>`,
  phone: `<svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/></svg>`,
  mic: `<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6"/></svg>`,
  megaphone: `<svg viewBox="0 0 24 24"><path d="M4 10v4a1 1 0 0 0 1 1h2l8 4V5l-8 4H5a1 1 0 0 0-1 1z"/><path d="M18 9a4 4 0 0 1 0 6"/></svg>`,
  shapes: `<svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="3.2"/><rect x="13" y="5" width="6" height="6" rx="1"/><path d="M6 20l3-6 3 6z" stroke-linejoin="round"/></svg>`,
  target: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/></svg>`,
  pulse: `<svg viewBox="0 0 24 24"><path d="M3 12h4l2 6 4-14 2 8h6" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
  scissors: `<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><path d="M8 7.5L20 19M8 16.5L20 5"/></svg>`,
  layers: `<svg viewBox="0 0 24 24"><path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" stroke-linejoin="round"/><path d="M4 12l8 4.5 8-4.5M4 16.5L12 21l8-4.5" stroke-linejoin="round"/></svg>`,
  book: `<svg viewBox="0 0 24 24"><path d="M4 5.5A2 2 0 0 1 6 4h6v16H6a2 2 0 0 0-2 1.5z"/><path d="M20 5.5A2 2 0 0 0 18 4h-6v16h6a2 2 0 0 1 2 1.5z"/></svg>`,
  chat: `<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-4 4V5z" stroke-linejoin="round"/></svg>`,
  external: `<svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"/></svg>`
};

/* ---------------------------------------------------------------
   Render helpers
   --------------------------------------------------------------- */
function renderProjects(){
  const grid = document.getElementById("workGrid");
  grid.innerHTML = PROJECTS.map(p => {
    const isPlaceholder = p.videoUrl.startsWith("PLACEHOLDER");
    const href = isPlaceholder ? "https://drive.google.com/drive/folders/1gELYybXj_yuTqgtXm9m1BJ4sITygjYiB?usp=sharing" : p.videoUrl;
    return `
    <article class="project-card">
      <a href="${href}" target="_blank" rel="noopener" class="project-card__thumb" style="--thumb-a:${p.accentA};--thumb-b:${p.accentB}">
        <span class="project-card__tag">${p.tag}</span>
        <span class="project-card__play">${ICONS.play}</span>
      </a>
      <div class="project-card__body">
        <p class="project-card__category">${p.category}</p>
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.description}</p>
        <a href="${href}" target="_blank" rel="noopener" class="project-card__watch">
          ${isPlaceholder ? "View in archive" : "Watch"} ${ICONS.external}
        </a>
      </div>
    </article>`;
  }).join("");
}

function renderCategories(){
  const grid = document.getElementById("categoriesGrid");
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="category-card">
      <div class="category-card__icon">${ICONS[c.icon]}</div>
      <h3 class="category-card__title">${c.title}</h3>
      <p class="category-card__desc">${c.desc}</p>
    </div>
  `).join("");
}

function renderWhy(){
  const grid = document.getElementById("whyGrid");
  grid.innerHTML = WHY.map(w => `
    <div class="why-item">
      <div class="why-item__icon">${ICONS[w.icon]}</div>
      <h3 class="why-item__title">${w.title}</h3>
      <p class="why-item__desc">${w.desc}</p>
    </div>
  `).join("");
}

function renderContact(){
  const wrap = document.getElementById("contactLinks");
  wrap.innerHTML = CONTACT.map(c => {
    if (c.href) {
      return `
      <a class="contact-link" href="${c.href}">
        <span>
          <span class="contact-link__label">${c.label}</span>
          <span class="contact-link__value">${c.value}</span>
        </span>
        <span class="contact-link__go">${ICONS.external}</span>
      </a>`;
    }
    return `
      <button class="contact-link" type="button" data-copy="${c.value}">
        <span>
          <span class="contact-link__label">${c.label} — tap to copy</span>
          <span class="contact-link__value">${c.value}</span>
        </span>
        <span class="contact-link__go">${ICONS.external}</span>
      </button>`;
  }).join("");

  wrap.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const val = btn.getAttribute("data-copy");
      const label = btn.querySelector(".contact-link__label");
      const original = label.textContent;
      try {
        await navigator.clipboard.writeText(val);
        label.textContent = "Copied to clipboard";
      } catch (e) {
        label.textContent = val;
      }
      setTimeout(() => { label.textContent = original; }, 1800);
    });
  });
}

/* ---------------------------------------------------------------
   Nav (mobile menu)
   --------------------------------------------------------------- */
function initNav(){
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------------
   Scroll-linked timeline rail + timecode readout
   Treats the full page scroll as a timeline (mm:ss:ff at 24fps)
   over an arbitrary 3-minute "reel" length — purely a visual/
   navigational cue, not a real video duration.
   --------------------------------------------------------------- */
function initTimelineRail(){
  const playhead = document.getElementById("playhead");
  const readout = document.getElementById("timecodeReadout");
  if (!playhead || !readout) return;

  const REEL_SECONDS = 180;
  const FPS = 24;
  let ticking = false;

  function format(t){
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = Math.floor(t % 60);
    const f = Math.floor((t * FPS) % FPS);
    const pad = n => String(n).padStart(2, "0");
    return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
  }

  function update(){
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    playhead.style.top = `${progress * 100}%`;
    readout.textContent = format(progress * REEL_SECONDS);
    ticking = false;
  }

  update();
  window.addEventListener("scroll", () => {
    if (!ticking){
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  window.addEventListener("resize", update);
}

/* ---------------------------------------------------------------
   Init
   --------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderCategories();
  renderWhy();
  renderContact();
  initNav();
  initTimelineRail();

  const yearEl = document.getElementById("footerYear");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});
