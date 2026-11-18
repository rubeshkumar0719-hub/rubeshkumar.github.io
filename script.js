/* Portfolio content and interactions. Working titles can be refined later. */
const PROJECTS = [
  { title: "Tech Talking head video edit", category: "Talking-head Sample", description: "Tech talking-head video edit shaped for clean pacing, clarity and engagement.", videoUrl: "https://drive.google.com/file/d/1mruTm_azQE_BaMH0wEMNaOXUq8F1n6l3/view?usp=sharing", accentA: "#3D4C5C", accentB: "#15191E" },
  { title: "Rowan Atkinson’s Funniest Interview Moments", category: "Interview Highlights", client: "11-11 Things", description: "Interview moments shaped around comic timing, reactions and pacing.", videoUrl: "https://drive.google.com/file/d/1RZ3tvGY-LcMu-BmZ9eawy99fcwpuF1wk/view?usp=drive_link", accentA: "#4B3A2A", accentB: "#191613" },
  { title: "25 Insane Goals in FIFA 26", category: "Gaming", client: "11-11 Things", description: "A fast-paced selection of memorable FIFA goals.", videoUrl: "https://drive.google.com/file/d/18smF08hlW4tOt4Mi5bE-taFpW06H0b3m/view?usp=drive_link", accentA: "#253C38", accentB: "#11191D" },
  { title: "NFL 2026: Best Plays & Big Moments", category: "Sports Highlights", client: "11-11 Things", description: "Sports highlights cut for pace, impact and a clear payoff.", videoUrl: "https://drive.google.com/file/d/1raz7088NFrWUgqmFku7KkonkTIbQHrGo/view?usp=drive_link", accentA: "#364254", accentB: "#12151D" },
  { title: "The Growth Behind a Personal Brand", category: "Short-form", client: "Media B Agency", description: "A short-form profile about personal-brand growth; full edit using supplied footage and voiceover.", videoUrl: "https://drive.google.com/file/d/1ksd770_LF2oRhbBe5Lzj15Wv3LqJCEdK/view?usp=drive_link", accentA: "#6B5346", accentB: "#1D1918" },
  { title: "A Veteran Reflects on Life During Deployment — Part 1", category: "Podcast Short-form", description: "A veteran shares deployment experiences in a podcast short.", videoUrl: "https://drive.google.com/file/d/12jtiapn0TbKi_MLmC6aFqXWpYzSFBwFZ/view?usp=sharing", accentA: "#49545A", accentB: "#171A1D" },
  { title: "A Veteran Reflects on Life During Deployment — Part 2", category: "Podcast Short-form", description: "Continuation of the deployment conversation, edited as a separate video.", videoUrl: "https://drive.google.com/file/d/1hB07X0ReQh0Rjrk_-M23v5lXyiQ3vVVk/view?usp=drive_link", accentA: "#5D4B43", accentB: "#191515" },
  { title: "A2Z Fintech — Podcast Short 1", category: "Podcast Short-form", client: "Utkarsh Agency", description: "A podcast moment shaped into a standalone short-form edit.", videoUrl: "https://drive.google.com/file/d/1uWKTa9-ZY1Vn9KQrY75ifT-wGV6nksVY/view?usp=drive_link", accentA: "#465A69", accentB: "#17191C" },
  { title: "A2Z Fintech — Podcast Short 2", category: "Podcast Short-form", client: "Utkarsh Agency", description: "A second podcast moment edited as its own short-form video.", videoUrl: "https://drive.google.com/file/d/1Cz_ZdfY_PHhscXjstcP2IReg93WDEIFo/view?usp=drive_link", accentA: "#69564C", accentB: "#1A1717" },
  { title: "Keystone Financial — Short 1", category: "Short-form", client: "Utkarsh Agency", description: "Short-form edit for Keystone Financial.", videoUrl: "https://drive.google.com/file/d/1gANkwjzQGQBiLoE1Mlu5lCZESOxfJMO-/view?usp=drive_link", accentA: "#4B625F", accentB: "#171B1B" },
  { title: "Keystone Financial — Short 2", category: "Short-form", client: "Utkarsh Agency", description: "A second, separately edited Keystone Financial video.", videoUrl: "https://drive.google.com/file/d/1S9O2ratZ9DqXefqR_XFKlP9nS9jKozFJ/view?usp=drive_link", accentA: "#56475E", accentB: "#18151B" },
  { title: "Keystone Financial — Short 3", category: "Short-form", client: "Utkarsh Agency", description: "A third, separately edited Keystone Financial video.", videoUrl: "https://drive.google.com/file/d/1j1fD2227bnOZR5r5bKP4Zo-6cbCWDYE4/view?usp=drive_link", accentA: "#6A5140", accentB: "#1C1715" },
  { title: "Ryan Reynolds’ Funniest Interview Moments", category: "Interview Highlights", client: "11-11 Things", description: "A comedy interview edit shaped around the strongest moments and reactions.", videoUrl: "https://drive.google.com/file/d/1Ozqejo8xrIKJ3aRqdl1HQ_2851AnyVVF/view?usp=sharing", accentA: "#604C43", accentB: "#1B1716" },
  { title: "Sameer Somal: A Documentary Story", category: "Documentary", description: "Documentary sample about Sameer Somal; sourcing and edit by Rubesh, with client-provided voiceover.", videoUrl: "https://drive.google.com/file/d/1i7iJVV_MsZCQ1-DoZi_lszYp10WMVLHq/view?usp=sharing", accentA: "#48585E", accentB: "#15191B" },
  { title: "Jho Low — Documentary Sample", category: "Documentary", description: "Documentary sample on Jho Low; visuals sourced and edited by Rubesh, with supplied voiceover.", videoUrl: "https://drive.google.com/file/d/1DsyR6sT-4s55rpTNXn6JQs-QyfTYFXkK/view?usp=sharing", accentA: "#454D50", accentB: "#151719" },
  { title: "From Sermon Footage to Final Cut", category: "Talking-head Sample", client: "JASJEMI", description: "A one-minute before-and-after sample showing raw talking-head footage beside the finished Christian sermon edit.", videoUrl: "https://drive.google.com/file/d/1s5nn0X3IuV5ZF8bIeX5_lSoFD0fnQEGw/view?usp=sharing", accentA: "#4B5C52", accentB: "#161B18" },
  { title: "Real Estate Showreel", category: "Showreel", client: "Media B Agency", description: "A real estate showreel edit.", videoUrl: "https://drive.google.com/file/d/1s_6Cjqb8vQ8sYaZ-ckmw-vMp0VgL0H3g/view?usp=sharing", accentA: "#7A6251", accentB: "#1C1917" },
  { title: "Gaming Long-form Sample 1", category: "Gaming Long-form", client: "GabesTheGame", description: "A long-form gaming sample edited from supplied gameplay footage.", videoUrl: "https://drive.google.com/file/d/131TOOeGxyLYL03hfvVh4wf0HcX2TSDq4/view?usp=sharing", accentA: "#3F4B48", accentB: "#151818" },
  { title: "Gaming Long-form Sample 2", category: "Gaming Long-form", client: "GabesTheGame", description: "A second gaming sample, presented as its own long-form edit.", videoUrl: "https://drive.google.com/file/d/1aJuEj3DR-NHDQKq-rLRyzkE_s9aiq0cT/view?usp=sharing", accentA: "#4A4358", accentB: "#17151B" },
  { title: "Adrena Sports Academy — Launch Film", category: "Brand Campaign", client: "Adrena Sports Academy", description: "Launch film with footage sourced by Rubesh; the agency supplied the logo.", videoUrl: "https://drive.google.com/file/d/1-1K-lgNjC5k3Fa2Mhut4BqsuGvw_eJ4u/view?usp=sharing", accentA: "#5B493B", accentB: "#191715" },
  { title: "JASJEMI — Long-form Video 1", category: "YouTube Long-form", client: "JASJEMI", description: "Long-form Christian sermon channel edit; raw footage supplied.", videoUrl: "https://youtu.be/rXevhUJ-lNU?si=5cQBUS-lbsmxaN64", accentA: "#4D5B50", accentB: "#151916" },
  { title: "JASJEMI — Long-form Video 2", category: "YouTube Long-form", client: "JASJEMI", description: "A second long-form channel edit; raw footage supplied.", videoUrl: "https://youtu.be/3wtu7ErKRJc?si=YOQPau7z9d3nCn7_", accentA: "#5B5145", accentB: "#191715" },
  { title: "JASJEMI — Short-form Video 1", category: "Short-form", client: "JASJEMI", description: "Short-form edit for the JASJEMI channel.", videoUrl: "https://youtube.com/shorts/GWRE3Srp-mQ?si=VBASKlmonh6tD0En", accentA: "#4B5C52", accentB: "#161B18" },
  { title: "JASJEMI — Short-form Video 2", category: "Short-form", client: "JASJEMI", description: "A second short-form edit for the JASJEMI channel.", videoUrl: "https://youtube.com/shorts/Ya3OBd8kHwM?si=btHi_yBE77pJAct_", accentA: "#5B5145", accentB: "#191715" }
];

const CATEGORIES = [
  { title: "Long-form YouTube", desc: "Story-led edits with a clear structure, thoughtful pacing and a clean finish.", icon: "play" },
  { title: "Podcast editing", desc: "Full conversations and short clips, shaped around the moments worth staying for.", icon: "mic" },
  { title: "Short-form video", desc: "Focused vertical edits built for quick discovery and a strong opening.", icon: "phone" },
  { title: "Documentary", desc: "Research, visual sourcing and editing assembled into a clear narrative.", icon: "book" },
  { title: "Gaming", desc: "Gameplay edits paced for reactions, highlights and story.", icon: "gamepad" },
  { title: "Brand films", desc: "Launch and promotional videos built around a brand’s message.", icon: "megaphone" },
  { title: "Talking-head content", desc: "Raw speech shaped into an easy-to-follow, polished final edit.", icon: "mic" },
  { title: "Motion graphics", desc: "Typography, graphic accents and simple motion to support the story.", icon: "shapes" }
];

const CONTACT = [
  { label: "Email", value: "rubeshkumar719@gmail.com", href: "mailto:rubeshkumar719@gmail.com" },
  { label: "Phone", value: "+91 89253 07194", href: "tel:+918925307194" },
  { label: "Discord", value: "soul07.", href: null }
];

const ICONS = {
  play: `<svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8V4z" stroke-linejoin="round"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24"><path d="M6 8h12l2 9a2.5 2.5 0 0 1-4.4 2L14 17h-4l-1.6 2A2.5 2.5 0 0 1 4 17l2-9z"/><path d="M9 11v3M7.5 12.5h3M16 11.5h.01M18.5 13.5h.01"/></svg>`,
  phone: `<svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/></svg>`,
  mic: `<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6"/></svg>`,
  megaphone: `<svg viewBox="0 0 24 24"><path d="M4 10v4a1 1 0 0 0 1 1h2l8 4V5l-8 4H5a1 1 0 0 0-1 1zM18 9a4 4 0 0 1 0 6"/></svg>`,
  shapes: `<svg viewBox="0 0 24 24"><circle cx="8" cy="8" r="3.2"/><rect x="13" y="5" width="6" height="6" rx="1"/><path d="M6 20l3-6 3 6z"/></svg>`,
  book: `<svg viewBox="0 0 24 24"><path d="M4 5.5A2 2 0 0 1 6 4h6v16H6a2 2 0 0 0-2 1.5zM20 5.5A2 2 0 0 0 18 4h-6v16h6a2 2 0 0 1 2 1.5z"/></svg>`,
  external: `<svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"/></svg>`
};

function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([a-zA-Z0-9_-]{6,})/);
  return match ? match[1] : null;
}

function getThumbnail(url) {
  const youtubeId = getYouTubeId(url);
  if (youtubeId) return { src: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` };
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  return driveMatch ? { src: `https://drive.google.com/thumbnail?id=${driveMatch[1]}&sz=w1000` } : null;
}

function renderProjectCard(project, index) {
  const thumbnail = getThumbnail(project.videoUrl);
  const image = thumbnail ? `<img class="project-card__thumb-img" src="${thumbnail.src}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : "";
  const client = project.client ? `<p class="project-card__client">${project.client}</p>` : "";
  return `
    <article class="project-card" data-category="${project.category}">
      <span class="project-card__number">${String(index + 1).padStart(2, "0")}</span>
      <div class="project-card__body">
        <p class="project-card__category">${project.category}</p>
        <h3 class="project-card__title">${project.title}</h3>
        ${client}
        <p class="project-card__desc">${project.description}</p>
      </div>
      <a href="${project.videoUrl}" target="_blank" rel="noopener noreferrer" class="project-card__thumb" style="--thumb-a:${project.accentA};--thumb-b:${project.accentB}" aria-label="Open ${project.title}">
        ${image}<span class="project-card__thumb-overlay"></span>
      </a>
      <a href="${project.videoUrl}" target="_blank" rel="noopener noreferrer" class="project-card__watch">Watch video ${ICONS.external}</a>
    </article>`;
}

function renderProjects() {
  const grid = document.getElementById("workGrid");
  const filters = document.getElementById("workFilters");
  const count = document.getElementById("workCount");
  const categories = [...new Set(PROJECTS.map(project => project.category))];
  const options = [{ label: "All videos", value: "all" }, ...categories.map(category => ({ label: category, value: category }))];

  grid.innerHTML = PROJECTS.map(renderProjectCard).join("");
  filters.innerHTML = options.map((option, index) => `<button class="work-filter${index === 0 ? " is-active" : ""}" type="button" data-filter="${option.value}" aria-pressed="${index === 0}">${option.label}</button>`).join("");

  const applyFilter = value => {
    let visible = 0;
    grid.querySelectorAll(".project-card").forEach(card => {
      const show = value === "all" || card.dataset.category === value;
      card.hidden = !show;
      if (show) visible++;
    });
    filters.querySelectorAll(".work-filter").forEach(button => {
      const active = button.dataset.filter === value;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    count.textContent = `${visible} video${visible === 1 ? "" : "s"}`;
  };

  filters.querySelectorAll(".work-filter").forEach(button => button.addEventListener("click", () => applyFilter(button.dataset.filter)));
  applyFilter("all");
}

function renderCategories() {
  const grid = document.getElementById("categoriesGrid");
  grid.innerHTML = CATEGORIES.map(category => `
    <article class="category-card">
      <div class="category-card__icon">${ICONS[category.icon]}</div>
      <h3 class="category-card__title">${category.title}</h3>
      <p class="category-card__desc">${category.desc}</p>
    </article>`).join("");
}

function renderContact() {
  const wrap = document.getElementById("contactLinks");
  wrap.innerHTML = CONTACT.map(contact => {
    const content = `<span><span class="contact-link__label">${contact.label}</span><span class="contact-link__value">${contact.value}</span></span><span class="contact-link__go">${ICONS.external}</span>`;
    return contact.href
      ? `<a class="contact-link" href="${contact.href}">${content}</a>`
      : `<button class="contact-link" type="button" data-copy="${contact.value}"><span><span class="contact-link__label">${contact.label} · tap to copy</span><span class="contact-link__value">${contact.value}</span></span><span class="contact-link__go">${ICONS.external}</span></button>`;
  }).join("");
  wrap.querySelectorAll("[data-copy]").forEach(button => button.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(button.dataset.copy); } catch (error) { /* The visible value remains available to copy manually. */ }
  }));
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }));
}

function initScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) { targets.forEach(target => target.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  }), { threshold: 0.15, rootMargin: "0px 0px -35px 0px" });
  targets.forEach(target => observer.observe(target));
}

function initNavHighlight() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav__links a");
  if (!sections.length || !links.length || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
  }), { rootMargin: "-45% 0px -45% 0px" });
  sections.forEach(section => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderCategories();
  renderContact();
  initNav();
  initScrollReveal();
  initNavHighlight();
  const year = document.getElementById("footerYear");
  if (year) year.textContent = String(new Date().getFullYear());
});
