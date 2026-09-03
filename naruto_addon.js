(function () {
  "use strict";

  /**
   * Photo Lightbox
   * Membuat foto di .photo-grid (gallery.html & pengalaman.html) bisa
   * diklik untuk dilihat lebih besar (object-fit: contain, tanpa dipotong/crop),
   * lengkap dengan navigasi prev/next antar foto dalam grup yang sama.
   *
   * Dibuat generik lewat event delegation supaya tetap jalan walau
   * .photo-grid di-render ulang secara dinamis oleh script.js / pengalaman.js.
   */

  let lightboxEl = null;
  let currentGroup = [];
  let currentIndex = 0;

  function buildLightbox() {
    if (lightboxEl) return lightboxEl;

    const el = document.createElement("div");
    el.className = "photo-lightbox";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-label", "Pratinjau foto");
    el.innerHTML = `
      <div class="photo-lightbox-inner">
        <button type="button" class="photo-lightbox-close" aria-label="Tutup pratinjau">&times;</button>
        <button type="button" class="photo-lightbox-prev" aria-label="Foto sebelumnya">&#8249;</button>
        <img src="" alt="">
        <button type="button" class="photo-lightbox-next" aria-label="Foto berikutnya">&#8250;</button>
        <p class="photo-lightbox-caption"></p>
      </div>
    `;
    document.body.appendChild(el);
    lightboxEl = el;

    el.addEventListener("click", (event) => {
      if (event.target === el) closeLightbox();
    });
    el.querySelector(".photo-lightbox-close").addEventListener("click", closeLightbox);
    el.querySelector(".photo-lightbox-prev").addEventListener("click", () => step(-1));
    el.querySelector(".photo-lightbox-next").addEventListener("click", () => step(1));

    document.addEventListener("keydown", (event) => {
      if (!lightboxEl.classList.contains("is-open")) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    });

    return el;
  }

  function renderCurrent() {
    if (!lightboxEl || !currentGroup.length) return;
    const item = currentGroup[currentIndex];
    const img = lightboxEl.querySelector("img");
    const caption = lightboxEl.querySelector(".photo-lightbox-caption");
    img.src = item.src;
    img.alt = item.alt || "";
    caption.textContent = item.caption || "";

    const showNav = currentGroup.length > 1;
    lightboxEl.querySelector(".photo-lightbox-prev").style.display = showNav ? "flex" : "none";
    lightboxEl.querySelector(".photo-lightbox-next").style.display = showNav ? "flex" : "none";
  }

  function step(direction) {
    if (!currentGroup.length) return;
    currentIndex = (currentIndex + direction + currentGroup.length) % currentGroup.length;
    renderCurrent();
  }

  function openLightbox(group, index) {
    buildLightbox();
    currentGroup = group;
    currentIndex = index;
    renderCurrent();
    lightboxEl.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function collectGroup(container) {
    return Array.from(container.querySelectorAll(".photo-item img")).map((img) => {
      const figcaption = img.closest(".photo-item").querySelector("figcaption");
      return {
        src: img.currentSrc || img.src,
        alt: img.alt,
        caption: figcaption ? figcaption.textContent : ""
      };
    });
  }

  function handleClick(event) {
    const img = event.target.closest(".photo-item img");
    if (!img) return;

    // Jangan buka lightbox untuk placeholder "foto belum ditambahkan"
    if (img.src.indexOf("photo-placeholder.svg") !== -1) return;

    const container = img.closest(".photo-grid");
    if (!container) return;

    const group = collectGroup(container);
    const index = Array.from(container.querySelectorAll(".photo-item img")).indexOf(img);

    openLightbox(group, index);
  }

  function makeFocusable() {
    document.querySelectorAll(".photo-item").forEach((item) => {
      const img = item.querySelector("img");
      if (!img || img.src.indexOf("photo-placeholder.svg") !== -1) return;
      item.setAttribute("tabindex", "0");
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", "Perbesar foto");
    });
  }

  document.addEventListener("click", handleClick);

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const item = event.target.closest(".photo-item");
    if (!item) return;
    event.preventDefault();
    item.querySelector("img")?.click();
  });

  // Foto di-render secara dinamis (script.js / pengalaman.js), jadi kita
  // observe perubahan DOM untuk menambahkan tabindex/aria-label secara terus-menerus.
  const observer = new MutationObserver(() => makeFocusable());
  document.addEventListener("DOMContentLoaded", () => {
    makeFocusable();
    const gallery = document.getElementById("experience-gallery");
    const panel = document.getElementById("experience-panel");
    if (gallery) observer.observe(gallery, { childList: true, subtree: true });
    if (panel) observer.observe(panel, { childList: true, subtree: true });
  });
})();
