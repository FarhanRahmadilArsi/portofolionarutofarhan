(function () {
  const container = document.getElementById("certifications-container");

  // 1. Fungsi sanitasi teks untuk mencegah error rendering HTML
  function escapeHtml(value) {
    const s = String(value ?? "");
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 2. Anti-Human Error: Pembersih otomatis jika user tidak sengaja memasukkan path 'file:///'
  function sanitizeUrl(url) {
    let cleanUrl = String(url ?? "").trim();
    
    if (cleanUrl.toLowerCase().startsWith("file:///")) {
      // Mengambil nama file asli dari ujung path lokal komputer Anda
      const fileName = cleanUrl.substring(cleanUrl.lastIndexOf('/') + 1);
      // Mengarahkan otomatis ke dalam folder 'documents' di dalam project root Anda
      return `documents/${fileName}`;
    }
    
    return escapeHtml(cleanUrl);
  }

  if (!container) return;

  // Cek validitas objek portfolioData
  if (!window.portfolioData || !window.portfolioData.timelines) {
    container.innerHTML = `<p class="certification-desc">Data portofolio tidak ditemukan. Pastikan data.js dimuat dengan benar.</p>`;
    return;
  }

  // Mengambil grup 'PENGALAMAN' di mana sertifikat DigiBuild kamu berada
  const experienceGroup = portfolioData.timelines.find(group => group && group.title === "PENGALAMAN");
  const experienceItems = experienceGroup ? experienceGroup.items : [];

  // Data sertifikasi statis awal yang ada di HTML Anda sebelumnya (agar tidak hilang)
  const hardcodedCerts = [
    { issuer: "DataCamp", title: "AI Fundamentals", desc: "Dasar Artificial Intelligence, machine learning, dan penerapan model AI sederhana.", year: "2024", url: "certificates/datacamp-ai-fundamentals-2024.pdf" },
    { issuer: "Oracle Academy", title: "Database Programming with PL/SQL", desc: "Trigger, cursor, function, dan pengolahan data pada sistem database.", year: "2024", url: "certificates/oracle-academy-database-programming-plsql-2024.pdf" },
    { issuer: "Cisco Academy", title: "Introduction to Network", desc: "Konsep dasar jaringan komputer, LAN, routing dasar, dan simulasi Packet Tracer.", year: "2023", url: "certificates/cisco-introduction-to-network-2023.pdf" },
    { issuer: "BEM UNJ", title: "Digital Design", desc: "Desain grafis menggunakan Canva dan Figma untuk kebutuhan promosi digital.", year: "2024", url: "certificates/bem-unj-digital-design-2024.pdf" },
    { issuer: "PMM Belajar Digital", title: "Diklat Modul Ajar Digital", desc: "Pembuatan modul ajar interaktif berbasis teknologi digital.", year: "2024", url: "certificates/pmm-belajar-digital-modul-ajar-2024.pdf" },
    { issuer: "Sudin Walikota Jakarta Barat", title: "Pelatihan SIM A", desc: "Pelatihan berkendara dan keselamatan lalu lintas sebagai persyaratan SIM A.", year: "2025", url: "certificates/sudin-walikota-jakarta-barat-sim-a-2025.pdf" }
  ];

  // Tempat menampung seluruh daftar sertifikat yang siap dirender
  let allCertifications = [...hardcodedCerts];

  // Ekstraksi otomatis data dari data.js (Mencari item yang punya file .pdf atau link eksternal)
  experienceItems.forEach(item => {
    if (item.url && (item.url.includes(".pdf") || item.url.includes("file:///"))) {
      allCertifications.push({
        issuer: item.title,         // Menggunakan nama perusahaan/event sebagai issuer
        title: item.subtitle,       // Menggunakan bagian sub-judul sebagai nama sertifikasi
        desc: item.description,
        year: item.date.match(/\d{4}/) ? item.date.match(/\d{4}/)[0] : "2026", // Ambil angka tahun saja
        url: item.url
      });
    }
  });

  // Render semua kartu sertifikat ke dalam grid HTML
  container.innerHTML = allCertifications.map(cert => {
    const targetUrl = sanitizeUrl(cert.url);
    return `
      <a class="certification-card" href="${targetUrl}" target="_blank" rel="noopener noreferrer">
        <span class="certification-issuer">${escapeHtml(cert.issuer)}</span>
        <h3 class="certification-title">${escapeHtml(cert.title)}</h3>
        <p class="certification-desc">${escapeHtml(cert.desc)}</p>
        <span class="certification-year">${escapeHtml(cert.year)}</span>
      </a>
    `;
  }).join("");

})();