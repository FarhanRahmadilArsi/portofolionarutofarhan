(function () {
  const GUESTBOOK_STORAGE_KEY = "farhan-portfolio:guestbook-messages";

  function loadExtraMessages() {
    try {
      const raw = window.localStorage.getItem(GUESTBOOK_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function saveExtraMessages(extraMessages) {
    try {
      window.localStorage.setItem(GUESTBOOK_STORAGE_KEY, JSON.stringify(extraMessages));
    } catch (error) {
      /* localStorage tidak tersedia (mode privat dsb.) - pesan tetap tampil di sesi ini saja */
    }
  }

  const CONTACT_ICONS = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
  };

  const COPY_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';

  let toastTimer = null;
  function showToast(message) {
    let toast = document.getElementById("jutsu-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "jutsu-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
  }

  const state = {
    activeProjectFilter: "all",
    extraMessages: loadExtraMessages(),
    messages: []
  };
  state.messages = [...state.extraMessages, ...portfolioData.messages];

  const byId = (id) => document.getElementById(id);

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      };
      return entities[char];
    });
  }

  function getInitials(name) {
    return name
      .trim()
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  function renderSkills() {
    const skillsGrid = byId("skills-grid");
    if (!skillsGrid) return;

    skillsGrid.innerHTML = portfolioData.skills
      .map((skill) => `
        <article class="skill-item">
          <div class="skill-top">
            <div class="skill-name"><span class="skill-icon">${escapeHtml(skill.icon)}</span> ${escapeHtml(skill.name)}</div>
            <span class="skill-pct">${skill.level}%</span>
          </div>
          ${skill.tools && skill.tools.length ? `
            <div class="skill-tags">
              ${skill.tools.map((tool) => `<span class="skill-tag">${escapeHtml(tool)}</span>`).join("")}
            </div>
          ` : ""}
          <div class="chakra-bar">
            <div class="chakra-fill ${skill.colorClass}" style="width:${skill.level}%"></div>
          </div>
        </article>
      `)
      .join("");
  }

  function renderProjectFilters() {
    const projectFilters = byId("project-filters");
    if (!projectFilters) return;

    projectFilters.innerHTML = portfolioData.projectFilters
      .map((filter) => `
        <button class="filter-btn ${filter.value === state.activeProjectFilter ? "active" : ""}" type="button" data-filter="${filter.value}">
          ${escapeHtml(filter.label)}
        </button>
      `)
      .join("");
  }

  function renderProjects() {
    const projectsGrid = byId("projects-grid");
    if (!projectsGrid) return;

    const projects = portfolioData.projects.filter((project) => {
      return state.activeProjectFilter === "all" || project.category === state.activeProjectFilter;
    });

    projectsGrid.innerHTML = projects
      .map((project) => {
        const tagName = project.url ? "a" : "article";
        const isExternalLink = project.url && /^https?:\/\//.test(project.url);
        const linkAttrs = project.url ? ` href="${escapeHtml(project.url)}"${isExternalLink ? ' target="_blank" rel="noopener noreferrer"' : ""}` : "";

        return `
        <${tagName} class="project-card card-${project.category}"${linkAttrs}>
          <span class="card-type-tag tag-${project.category}">${escapeHtml(project.categoryLabel)}</span>
          <h3 class="card-title">${escapeHtml(project.title)}</h3>
          <p class="card-desc">${escapeHtml(project.description)}</p>
          <div class="tech-tags">
            ${project.tech.map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join("")}
          </div>
        </${tagName}>
      `;
      })
      .join("");
  }

  function renderTimelineHighlights(highlights) {
    if (!Array.isArray(highlights) || !highlights.length) return "";
    return `
      <p class="tl-highlights-label">// PENGALAMAN ORGANISASI &amp; MAGANG</p>
      <div class="tl-highlights">
        ${highlights.map((highlight) => {
          const isExternalLink = highlight.link && /^https?:\/\//.test(highlight.link);
          return `
          <div class="tl-highlight-card">
            <div class="tl-highlight-head">
              <span class="tl-highlight-title">${escapeHtml(highlight.title)}</span>
              ${highlight.period ? `<span class="tl-highlight-period">${escapeHtml(highlight.period)}</span>` : ""}
            </div>
            ${highlight.role ? `<p class="tl-highlight-role">${escapeHtml(highlight.role)}</p>` : ""}
            ${highlight.desc ? `<p class="tl-highlight-desc">${escapeHtml(highlight.desc)}</p>` : ""}
            ${highlight.link ? `<a class="tl-highlight-link" href="${escapeHtml(highlight.link)}"${isExternalLink ? ' target="_blank" rel="noopener noreferrer"' : ""}>Lihat detail &rarr;</a>` : ""}
          </div>
        `;
        }).join("")}
      </div>
    `;
  }

  function renderTimelineItemHtml(item) {
    const tagName = item.url ? "a" : "article";
    const isExternalLink = item.url && /^https?:\/\//.test(item.url);
    const linkAttrs = item.url ? ` href="${escapeHtml(item.url)}"${isExternalLink ? ' target="_blank" rel="noopener"' : ""}` : "";

    return `
      <${tagName} class="timeline-item ${item.url ? "timeline-link" : ""}"${linkAttrs}>
        <div class="timeline-dot ${item.muted ? "is-muted" : ""}"></div>
        <div class="tl-header">
          <h4 class="tl-title">${escapeHtml(item.title)}</h4>
          <span class="tl-date">${escapeHtml(item.date)}</span>
        </div>
        <p class="tl-sub">${escapeHtml(item.subtitle)}</p>
        <p class="tl-desc">${escapeHtml(item.description)}</p>
        ${Array.isArray(item.badges) && item.badges.length ? `
          <div class="tl-badges">
            ${item.badges.map((badge) => `<span class="tl-badge">${escapeHtml(badge)}</span>`).join("")}
          </div>
        ` : ""}
        ${Array.isArray(item.photos) && item.photos.length ? `
          <div class="tl-photos">
            ${renderPositionPhotos(item.photos)}
          </div>
        ` : ""}
        ${renderTimelineHighlights(item.highlights)}
      </${tagName}>
    `;
  }

  // Merender satu grup timeline (mis. hanya "PENDIDIKAN" atau hanya "PENGALAMAN")
  // ke dalam sebuah container. Dipakai supaya Pendidikan & Pengalaman bisa
  // punya section/halaman sendiri-sendiri, bukan digabung dalam satu kolom.
  function renderTimelineGroup(containerId, groupTitle) {
    const container = byId(containerId);
    if (!container) return;

    const group = portfolioData.timelines.find((g) => g && g.title === groupTitle);
    const items = group ? group.items : [];

    container.innerHTML = `
      <div class="timeline">
        ${items.map(renderTimelineItemHtml).join("")}
      </div>
    `;
  }

  function getExperienceItems() {
    const experienceGroup = portfolioData.timelines.find((group) => group.title === "PENGALAMAN");
    return experienceGroup ? experienceGroup.items : [];
  }

  function renderPositionPhotos(photos) {
    if (!photos || !photos.length) return "";
    return `
      <div class="photo-grid">
        ${photos.map((photo) => `
          <figure class="photo-item">
            <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt || "")}" loading="lazy" decoding="async">
            ${photo.caption ? `<figcaption>${escapeHtml(photo.caption)}</figcaption>` : ""}
          </figure>
        `).join("")}
      </div>
    `;
  }

  function renderOrgPositions(positions) {
    return `
      <div class="position-timeline">
        ${positions.map((position) => `
          <div class="position-item">
            <div class="position-dot"></div>
            <div class="position-header">
              <h4 class="position-title">${escapeHtml(position.title)}</h4>
              <span class="position-date">${escapeHtml(position.date)}${position.duration ? ` &middot; ${escapeHtml(position.duration)}` : ""}</span>
            </div>
            ${position.location ? `<p class="position-location">${escapeHtml(position.location)}</p>` : ""}
            ${position.description ? `<p class="position-desc">${escapeHtml(position.description)}</p>` : ""}
            ${position.badges && position.badges.length ? `
              <div class="tl-badges position-badges">
                ${position.badges.map((badge) => `<span class="tl-badge">${escapeHtml(badge)}</span>`).join("")}
              </div>
            ` : ""}
            ${renderPositionPhotos(position.photos)}
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderExperienceGallery() {
    const gallery = byId("experience-gallery");
    if (!gallery) return;

    gallery.innerHTML = getExperienceItems()
      .map((item) => {
        const isGrouped = Array.isArray(item.positions) && item.positions.length > 0;

        if (isGrouped) {
          // Organisasi dengan beberapa jabatan/posisi (mis. Mercu Buana English Club)
          const metaLine = [item.employmentType, item.totalDuration].filter(Boolean).map(escapeHtml).join(" &middot; ");
          return `
            <article class="gallery-card gallery-card-grouped">
              <div class="gallery-card-header">
                <h3 class="certification-title">${escapeHtml(item.title)}</h3>
                ${metaLine ? `<p class="gallery-role">${metaLine}</p>` : ""}
                ${item.location ? `<p class="certification-desc">${escapeHtml(item.location)}</p>` : ""}
              </div>
              ${renderOrgPositions(item.positions)}
              <a class="gallery-detail-link" href="${escapeHtml(item.url)}">Lihat detail pengalaman</a>
            </article>
          `;
        }

        // Organisasi/pengalaman dengan satu posisi saja (format lama, tetap didukung)
        return `
        <article class="gallery-card">
          <div class="gallery-card-header">
            <span class="certification-issuer">${escapeHtml(item.date)}</span>
            <h3 class="certification-title">${escapeHtml(item.title)}</h3>
            <p class="gallery-role">${escapeHtml(item.subtitle)}</p>
            <p class="certification-desc">${escapeHtml(item.description)}</p>
          </div>
          ${item.photos && item.photos.length ? renderPositionPhotos(item.photos) : `
            <div class="photo-empty">
              <span>FOTO BELUM DITAMBAHKAN</span>
              <p>Isi array photos di data.js untuk pengalaman ini.</p>
            </div>
          `}
          <a class="gallery-detail-link" href="${escapeHtml(item.url)}">Lihat detail pengalaman</a>
        </article>
      `;
      })
      .join("");
  }

  function renderContact() {
    const contactGrid = byId("contact-grid");
    if (!contactGrid || !portfolioData.contact) return;

    contactGrid.innerHTML = portfolioData.contact
      .map((item) => `
        <div class="contact-card">
          <a class="contact-card-link contact-card-link--${escapeHtml(item.type)}" href="${escapeHtml(item.href)}"${item.external ? ' target="_blank" rel="noopener"' : ""}>
            <span class="contact-icon" aria-hidden="true">${CONTACT_ICONS[item.type] || ""}</span>
            <span class="contact-card-text">
              <span class="contact-label">${escapeHtml(item.label)}</span>
              <span class="contact-value">${escapeHtml(item.value)}</span>
            </span>
          </a>
          ${item.copyValue ? `<button type="button" class="contact-copy-btn" data-copy="${escapeHtml(item.copyValue)}" aria-label="Salin ${escapeHtml(item.label)}">${COPY_ICON}</button>` : ""}
        </div>
      `)
      .join("");
  }

  function renderMessages() {
    const messagesList = byId("messages-list");
    if (!messagesList) return;

    messagesList.innerHTML = state.messages
      .map((message) => `
        <article class="msg-item">
          <div class="msg-avatar">${escapeHtml(getInitials(message.name))}</div>
          <div class="msg-body">
            <h3 class="msg-name">${escapeHtml(message.name)}${message.village ? ` <span class="msg-village">\u2014 ${escapeHtml(message.village)}</span>` : ""}</h3>
            <p class="msg-text">${escapeHtml(message.message)}</p>
          </div>
        </article>
      `)
      .join("");
  }

  function bindPhotoFallbacks() {
    document.querySelectorAll(".photo-item img").forEach((image) => {
      image.addEventListener("error", () => {
        image.src = "images/photo-placeholder.svg";
      }, { once: true });
    });
  }

  function bindEvents() {
    const projectFilters = byId("project-filters");
    if (projectFilters) {
      projectFilters.addEventListener("click", (event) => {
        const button = event.target.closest("[data-filter]");
        if (!button) return;

        state.activeProjectFilter = button.dataset.filter;
        renderProjectFilters();
        renderProjects();
      });
    }

    const guestForm = byId("guest-form");
    if (guestForm) {
      guestForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = formData.get("name").trim();
        const village = (formData.get("village") || "").trim();
        const message = formData.get("message").trim();

        if (!name || !message) return;

        const entry = village ? { name, village, message } : { name, message };
        state.extraMessages.unshift(entry);
        state.messages.unshift(entry);
        saveExtraMessages(state.extraMessages);
        form.reset();
        renderMessages();
        showToast("Pesan terkirim! Arigatou, " + name + ".");
      });
    }

    const contactGrid = byId("contact-grid");
    if (contactGrid) {
      contactGrid.addEventListener("click", (event) => {
        const copyBtn = event.target.closest("[data-copy]");
        if (!copyBtn) return;
        event.preventDefault();
        const value = copyBtn.dataset.copy;
        const done = () => {
          showToast("Tersalin: " + value);
          copyBtn.classList.add("is-copied");
          window.setTimeout(() => copyBtn.classList.remove("is-copied"), 1200);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(done).catch(done);
        } else {
          done();
        }
      });
    }

    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = byId("nav-links");
    if (!navToggle || !navLinks) return;

    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }

  function init() {
    renderSkills();
    renderProjectFilters();
    renderProjects();
    renderTimelineGroup("pendidikan-layout", "PENDIDIKAN");
    renderTimelineGroup("pengalaman-overview-layout", "PENGALAMAN");
    renderExperienceGallery();
    renderContact();
    renderMessages();
    bindPhotoFallbacks();
    bindEvents();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
