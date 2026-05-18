(function () {
  const panel = document.getElementById("experience-panel");

  // Escape HTML untuk teks dinamis (tanpa key objek yang berpotensi rusak encoding)
  function escapeHtml(value) {
    const s = String(value);
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "<")
      .replace(/>/g, ">")
      .replace(/\"/g, """)
      .replace(/'/g, "&#039;");
  }

  const params = new URLSearchParams(window.location.search);
  const selectedId = params.get("item");

  if (!panel) return;

  if (!window.portfolioData || !window.portfolioData.timelines) {
    panel.innerHTML = `
      <span class="section-tag">// PENGALAMAN</span>
      <h1 class="experience-title">Data belum terbaca</h1>
      <p class="experience-desc">
        <strong>portfolioData</strong> tidak ditemukan atau format <code>timelines</code> tidak ada.
        Pastikan <code>data.js</code> ter-load sebelum <code>pengalaman.js</code>.
      </p>
    `;
    return;
  }

  const experienceGroup = portfolioData.timelines.find((group) => group.title === "PENGALAMAN");

  if (!experienceGroup) {
    const availableTitles = portfolioData.timelines
      .map((g) => g?.title)
      .filter(Boolean)
      .slice(0, 10);

    panel.innerHTML = `
      <span class="section-tag">// PENGALAMAN</span>
      <h1 class="experience-title">Group PENGALAMAN tidak ditemukan</h1>
      <p class="experience-desc">
        Titik masalah: tidak ada <code>timelines</code> dengan <code>title</code> = <code>PENGALAMAN</code>.
      </p>
      <p class="experience-desc"><strong>Judul yang tersedia:</strong> ${availableTitles.map(escapeHtml).join(", ")}</p>
    `;
    return;
  }

  const items = experienceGroup.items || [];
  const item = items.find((entry) => entry.id === selectedId);

  if (!item) {
    const availableIds = items.map((i) => i.id).filter(Boolean).slice(0, 12);

    panel.innerHTML = `
      <span class="section-tag">// PENGALAMAN</span>
      <h1 class="experience-title">Pengalaman tidak ditemukan</h1>
      <p class="experience-desc">
        <strong>selectedId</strong> yang dicari: <code>${escapeHtml(selectedId || "(null)")}</code>
      </p>
      <p class="experience-desc">Cek apakah URL kamu sesuai dengan <code>id</code> di <code>data.js</code>.</p>
      <p class="experience-desc"><strong>Contoh id yang tersedia:</strong> ${availableIds.map(escapeHtml).join(", ")}</p>
    `;
    return;
  }

  document.title = `${item.title} | Farhan Rahmadil Arsi Dev`;

  panel.innerHTML = `
    <span class="section-tag">// PENGALAMAN</span>
    <h1 class="experience-title">${escapeHtml(item.title)}</h1>
    <div class="experience-meta">
      <span>${escapeHtml(item.date)}</span>
      <span>${escapeHtml(item.subtitle)}</span>
    </div>
    <p class="experience-desc">${escapeHtml(item.description)}</p>
    ${item.badges && item.badges.length ? `
      <div class="tl-badges experience-badges">
        ${item.badges.map((badge) => `<span class="tl-badge">${escapeHtml(badge)}</span>`).join("")}
      </div>
    ` : ""}
    <div class="experience-photo-section">
      <h2 class="photo-section-title">FOTO PENGALAMAN</h2>
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
          <p>Tambahkan foto pada properti photos di data.js untuk pengalaman ini.</p>
        </div>
      `}
    </div>
  `;

  document.querySelectorAll(".photo-item img").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        image.src = "images/photo-placeholder.svg";
      },
      { once: true }
    );
  });
})();

