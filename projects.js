(function () {
  const gridContainer = document.getElementById("projects-grid");
  const filtersContainer = document.getElementById("project-filters");

  function escapeHtml(value) {
    const s = String(value ?? "");
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  if (!gridContainer) return;

  if (!window.portfolioData || !window.portfolioData.projects) {
    gridContainer.innerHTML = `<p>Data proyek tidak ditemukan.</p>`;
    return;
  }

  const { projects, projectFilters } = window.portfolioData;

  // 1. RENDER FILTER BUTTONS
  if (filtersContainer && projectFilters && filtersContainer.children.length === 0) {
    filtersContainer.innerHTML = projectFilters.map((filter, index) => {
      const activeClass = index === 0 ? "filter-btn active" : "filter-btn";
      return `<button class="${activeClass}" data-filter="${escapeHtml(filter.value)}">${escapeHtml(filter.label)}</button>`;
    }).join("");
  }

  // 2. RENDER PROJECT CARDS
  function renderProjects(filterValue = "all") {
    const filteredProjects = filterValue === "all" 
      ? projects 
      : projects.filter(p => p.category === filterValue);

    gridContainer.innerHTML = filteredProjects.map(project => {
      const targetUrl = project.url ? project.url.trim() : "#";
      const isExternal = targetUrl.startsWith("http");

      return `
        <a class="project-card" 
           data-category="${escapeHtml(project.category)}" 
           href="${escapeHtml(targetUrl)}" 
           target="${isExternal ? '_blank' : '_self'}" 
           rel="${isExternal ? 'noopener noreferrer' : ''}"
           style="display: block; cursor: pointer; text-decoration: none; color: inherit;">
           
          <span class="project-category">// ${escapeHtml(project.categoryLabel)}</span>
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-description">${escapeHtml(project.description)}</p>
          
          <div class="project-tech-stack" style="pointer-events: none;">
            ${project.tech.map(t => `<span class="tech-badge">#${escapeHtml(t)}</span>`).join("")}
          </div>
        </a>
      `;
    }).join("");
  }

  renderProjects("all");

  // 3. EVENT FILTER
  if (filtersContainer) {
    filtersContainer.addEventListener("click", function (e) {
      const clickedBtn = e.target.closest(".filter-btn");
      if (!clickedBtn) return;
      filtersContainer.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      clickedBtn.classList.add("active");
      renderProjects(clickedBtn.getAttribute("data-filter"));
    });
  }

  // 4. FORCE OPEN LINK (SOLUSI UTAMA BUG FIGMA)
  // Menangkap klik sebelum script.js bawaan sempat memblokirnya
  gridContainer.addEventListener("click", function (e) {
    const card = e.target.closest(".project-card");
    if (!card) return;

    const url = card.getAttribute("href");
    
    // Jika link mengarah ke figma/http luar, bypass total script lain!
    if (url && url.startsWith("http")) {
      e.preventDefault(); // Hentikan aksi bawaan yang rusak
      e.stopPropagation(); // Hentikan script.js mengintip klik ini
      window.open(url, "_blank", "noopener,noreferrer"); // Paksa buka tab baru
    }
  }, true); // Menggunakan "true" (Capturing phase) agar dieksekusi paling pertama!
})();