(function () {
  const state = {
    activeProjectFilter: "all",
    messages: [...portfolioData.messages]
  };

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

  function renderTimeline() {
    const timelineLayout = byId("timeline-layout");
    if (!timelineLayout) return;

    timelineLayout.innerHTML = portfolioData.timelines
      .map((group) => `
        <div>
          <h3 class="timeline-group-title">${escapeHtml(group.title)}</h3>
          <div class="timeline">
            ${group.items.map((item) => {
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
                ${item.badges.length ? `
                  <div class="tl-badges">
                    ${item.badges.map((badge) => `<span class="tl-badge">${escapeHtml(badge)}</span>`).join("")}
                  </div>
                ` : ""}
              </${tagName}>
            `;
            }).join("")}
          </div>
        </div>
      `)
      .join("");
  }

  function getExperienceItems() {
    const experienceGroup = portfolioData.timelines.find((group) => group.title === "PENGALAMAN");
    return experienceGroup ? experienceGroup.items : [];
  }

  function renderExperienceGallery() {
    const gallery = byId("experience-gallery");
    if (!gallery) return;

    gallery.innerHTML = getExperienceItems()
      .map((item) => `
        <article class="gallery-card">
          <div class="gallery-card-header">
            <span class="certification-issuer">${escapeHtml(item.date)}</span>
            <h3 class="certification-title">${escapeHtml(item.title)}</h3>
            <p class="certification-desc">${escapeHtml(item.subtitle)}</p>
          </div>
          ${item.photos && item.photos.length ? `
            <div class="photo-grid">
              ${item.photos.map((photo) => `
                <figure class="photo-item">
                  <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt || item.title)}">
                  ${photo.caption ? `<figcaption>${escapeHtml(photo.caption)}</figcaption>` : ""}
                </figure>
              `).join("")}
            </div>
          ` : `
            <div class="photo-empty">
              <span>FOTO BELUM DITAMBAHKAN</span>
              <p>Isi array photos di data.js untuk pengalaman ini.</p>
            </div>
          `}
          <a class="gallery-detail-link" href="${escapeHtml(item.url)}">Lihat detail pengalaman</a>
        </article>
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
            <h3 class="msg-name">${escapeHtml(message.name)}</h3>
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
        const message = formData.get("message").trim();

        if (!name || !message) return;

        state.messages.unshift({ name, message });
        form.reset();
        renderMessages();
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
    renderTimeline();
    renderExperienceGallery();
    renderMessages();
    bindPhotoFallbacks();
    bindEvents();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
