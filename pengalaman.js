(function () {
  const panel = document.getElementById("experience-panel");

  // Perbaikan fungsi escape HTML agar entities-nya valid
  function escapeHtml(value) {
    const s = String(value ?? "");
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Pengaman ekstra untuk attribute src (XSS Attack via javascript: protocol)
  function sanitizeSrc(url) {
    const cleanUrl = String(url ?? "").trim();
    if (cleanUrl.toLowerCase().startsWith("javascript:")) {
      return "images/photo-placeholder.svg";
    }
    return escapeHtml(cleanUrl);
  }

  const params = new URLSearchParams(window.location.search);
  const selectedId = params.get("item");

  if (!panel) return;

  // Catatan perbaikan bug: data.js mendeklarasikan `portfolioData` dengan
  // `const`, sehingga TIDAK pernah menjadi properti `window` (beda dengan
  // deklarasi `var`). Sebelumnya kode ini memeriksa `window.portfolioData`
  // yang akibatnya SELALU undefined walau data.js sudah termuat dengan
  // benar — jadi halaman detail selalu menampilkan "Data belum terbaca".
  // Fix: pakai `typeof portfolioData` untuk mengecek variabel global
  // secara aman tanpa bergantung pada objek `window`.
  if (typeof portfolioData === "undefined" || !portfolioData.timelines) {
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

  const experienceGroup = portfolioData.timelines.find((group) => group && group.title === "PENGALAMAN");

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
  const item = items.find((entry) => entry && entry.id === selectedId);

  if (!item) {
    const availableIds = items.map((i) => i?.id).filter(Boolean).slice(0, 12);

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

  // Mengubah title dokumen secara dinamis
  document.title = `${item.title} | Farhan Rahmadil Arsi Dev`;

  const isGrouped = Array.isArray(item.positions) && item.positions.length > 0;

  function renderPhotos(photos, emptyHint) {
    if (photos && photos.length) {
      return `
        <div class="photo-grid">
          ${photos.map((photo) => `
            <figure class="photo-item">
              <img src="${sanitizeSrc(photo.src)}" 
                   alt="${escapeHtml(photo.alt || item.title)}"
                   loading="lazy" decoding="async"
                   onerror="this.onerror=null; this.src='images/photo-placeholder.svg';">
              ${photo.caption ? `<figcaption>${escapeHtml(photo.caption)}</figcaption>` : ""}
            </figure>
          `).join("")}
        </div>
      `;
    }
    return `
      <div class="photo-empty">
        <span>FOTO BELUM DITAMBAHKAN</span>
        <p>${escapeHtml(emptyHint)}</p>
      </div>
    `;
  }

  if (isGrouped) {
    // Organisasi dengan beberapa jabatan/posisi (mis. Mercu Buana English Club)
    const metaLine = [item.employmentType, item.totalDuration].filter(Boolean).map(escapeHtml).join(" &middot; ");

    panel.innerHTML = `
      <span class="section-tag">// PENGALAMAN</span>
      <h1 class="experience-title">${escapeHtml(item.title)}</h1>
      ${metaLine ? `<div class="experience-meta"><span>${metaLine}</span></div>` : ""}
      ${item.location ? `<p class="experience-desc">${escapeHtml(item.location)}</p>` : ""}
      <div class="position-timeline">
        ${item.positions.map((position) => `
          <div class="position-item">
            <div class="position-dot"></div>
            <div class="position-header">
              <h3 class="position-title">${escapeHtml(position.title)}</h3>
              <span class="position-date">${escapeHtml(position.date)}${position.duration ? ` &middot; ${escapeHtml(position.duration)}` : ""}</span>
            </div>
            ${position.location ? `<p class="position-location">${escapeHtml(position.location)}</p>` : ""}
            ${position.description ? `<p class="position-desc">${escapeHtml(position.description)}</p>` : ""}
            ${position.badges && position.badges.length ? `
              <div class="tl-badges position-badges">
                ${position.badges.map((badge) => `<span class="tl-badge">${escapeHtml(badge)}</span>`).join("")}
              </div>
            ` : ""}
            <div class="experience-photo-section">
              <h4 class="photo-section-title">FOTO ${escapeHtml(position.title.toUpperCase())}</h4>
              ${renderPhotos(position.photos, `Tambahkan foto pada properti photos posisi "${position.title}" di data.js.`)}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  } else {
    // Organisasi/pengalaman dengan satu posisi saja (format lama, tetap didukung)
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
        ${renderPhotos(item.photos, "Tambahkan foto pada properti photos di data.js untuk pengalaman ini.")}
      </div>
    `;
  }
})();