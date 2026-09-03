# Nama File Foto Pengalaman

Taruh foto asli di folder `images/` ini dengan nama file **persis seperti di bawah**
(huruf besar/kecil ikut berpengaruh) supaya otomatis muncul di `gallery.html` dan `pengalaman.html`.
Daftar ini sudah dicocokkan langsung dengan `data.js`, jadi tidak akan ada nama yang meleset lagi.

## ✅ Sudah ada fotonya (tidak perlu diganti, kecuali mau update)
- `day1.jpeg`, `day2.jpeg` → BPJS Ketenagakerjaan
- `dpm-fasilkom-umb-1.jpeg`, `dpm-fasilkom-umb-2.jpeg`, `dpm-fasilkom-umb-3.jpeg` → DPM Fasilkom UMB
- `Dokum.jpeg`, `moderator.jpeg`, `sertif.jpeg` → Webinar DigiBuild 2025

## ❌ Belum ada fotonya — tambahkan file dengan nama ini

### Mercu Buana English Club (1 organisasi, 5 posisi/jabatan)
Sesuai struktur baru, organisasi ini punya beberapa sub-jabatan seperti tampilan LinkedIn.
Setiap posisi punya foto sendiri:

- **Warehouse Staff**: `mbec-warehouse-staff-1.jpg`
- **Staff Lapangan ( English Event 2026 )**: `mbec-english-event-2026-1.jpg` s/d `mbec-english-event-2026-6.jpg`
  (kalau kamu punya lebih dari 6 foto, tambahkan `-7.jpg`, `-8.jpg` di `data.js` bagian `photos` posisi ini)
- **Warehouse and Technician Staff Leadership Training Program 2026**: `mbec-leadership-training-2026-1.jpg` s/d `mbec-leadership-training-2026-5.jpg`
- **Technician Staff (OPREC & OPEN HOUSE 2025)**: `mbec-technician-oprec-2025-1.jpg`
- **Technical Staff (English Event 2025)**: `mbec-technical-staff-english-event-2025-1.jpg`, `mbec-technical-staff-english-event-2025-2.jpg`
  (kalau ada foto sertifikat tambahan, tambahkan `-3.jpg` dst di `data.js`)

### Pengalaman lain
- `komite-kpps-1.jpg`
- `komite-kpps-2.jpg`
- `komite-kpps-3.jpg`
- `karang-taruna-rt-005-1.jpg`
- `karang-taruna-rt-005-2.jpg`
- `karang-taruna-rt-005-3.jpg`

Selama nama file belum ada, gallery akan otomatis menampilkan kotak placeholder
"FOTO BELUM DITAMBAHKAN" — ini normal, bukan error.

## Struktur "1 organisasi, banyak posisi" (seperti LinkedIn)
Kalau kamu punya organisasi lain yang juga punya beberapa jabatan berbeda dari waktu ke waktu,
kamu bisa pakai pola yang sama seperti "Mercu Buana English Club" di `data.js`: ganti field
`date`/`subtitle`/`description`/`photos`/`badges` langsung di item, dengan field `positions: [...]`
berisi array sub-jabatan (masing-masing punya `title`, `date`, `duration`, `location`, `description`,
`badges`, `photos` sendiri). Kalau organisasi cuma punya 1 jabatan saja, format lama (tanpa `positions`)
tetap didukung, tidak perlu diubah.

## Cara mengganti foto
1. Simpan foto kamu, lalu **ganti nama filenya** persis seperti daftar di atas.
2. Drag file tersebut ke folder `images/` ini (timpa/replace jika nama sama).
3. Refresh halaman `gallery.html` — foto langsung tampil, tidak perlu ubah kode apa pun.
4. Kalau format aslimu `.png` atau `.webp`, ganti juga ekstensi di `data.js` pada
   properti `src` untuk item terkait (cth: `mbec-warehouse-staff-1.jpg` → `mbec-warehouse-staff-1.png`).

## Supaya hasilnya HD / tidak blur
Foto yang tampil blur/pecah **hampir selalu karena file sumbernya beresolusi kecil**,
lalu dipaksa melebar oleh CSS untuk mengisi kotak galeri. Untuk hasil tajam:

- Upload foto dengan **lebar minimal ±1000–1600 px** (foto dari kamera HP modern sudah lebih dari cukup,
  jangan pakai hasil screenshot/kompresi ulang dari WhatsApp berkali-kali).
- Hindari upscale: jangan perbesar foto kecil pakai editor sebelum upload — itu tidak menambah detail,
  hasilnya tetap blur, hanya ukuran filenya jadi lebih besar.
- File-file berikut ini sumbernya masih kecil (di bawah standar HD) sehingga tampak agak pecah saat diperbesar:
  `moderator.jpeg` (160×160 px) dan `sertif.jpeg` (160×112 px). Kalau punya versi resolusi lebih besar,
  timpa file ini dengan nama yang sama.
- Sekarang setiap foto galeri bisa **diklik untuk memperbesar (lightbox)** — ini membantu foto beresolusi
  cukup terlihat maksimal, tapi tidak bisa "menyulap" foto kecil menjadi HD.
