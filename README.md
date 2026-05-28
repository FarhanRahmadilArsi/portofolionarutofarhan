<div align="center">

```
███████╗██╗  ██╗██╗███╗   ██╗ ██████╗ ██████╗ ██╗    ██████╗ ███████╗██╗   ██╗
██╔════╝██║  ██║██║████╗  ██║██╔═══██╗██╔══██╗██║    ██╔══██╗██╔════╝██║   ██║
███████╗███████║██║██╔██╗ ██║██║   ██║██████╔╝██║    ██║  ██║█████╗  ██║   ██║
╚════██║██╔══██║██║██║╚██╗██║██║   ██║██╔══██╗██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝
███████║██║  ██║██║██║ ╚████║╚██████╔╝██████╔╝██║    ██████╔╝███████╗ ╚████╔╝
╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚═╝    ╚═════╝ ╚══════╝  ╚═══╝
```

# ⚡ Farhan Rahmadil Arsy — Shinobi Digital Portfolio

**`Informatics Engineering Student & IT Architecture Intern`**

[![Vercel](https://img.shields.io/badge/Live%20Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://farhan.dev)
[![Next.js](https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)

<br/>

> *"Dalam dunia ninja digital, setiap baris kode adalah jutsu — dan aku baru saja mulai."*

<br/>

![Portfolio Preview](https://via.placeholder.com/900x450/0D1117/F6AD55?text=Shinobi+Digital+Portfolio+Preview)

</div>

---

## 📋 Daftar Isi

- [✨ Tentang Project](#-tentang-project)
- [🎯 Fitur Utama](#-fitur-utama)
- [🛠️ Tech Stack](#️-tech-stack)
- [🗂️ Struktur Folder](#️-struktur-folder)
- [🚀 Cara Menjalankan](#-cara-menjalankan)
- [🗄️ Setup Database](#️-setup-database)
- [🌐 Deployment](#-deployment)
- [📊 GitHub Stats](#-github-stats)
- [📬 Kontak](#-kontak)

---

## ✨ Tentang Project

**Shinobi Digital** adalah portofolio personal yang dirancang dengan tema perpaduan **Roblox Low-Poly** dan **Naruto Ninja Interface** — terasa seperti sebuah *Dashboard Ninja* yang canggih namun tetap menyenangkan.

Project ini dibangun sebagai showcase kemampuan full-stack development sekaligus sebagai representasi digital identitas saya sebagai mahasiswa Teknik Informatika di **Universitas Mercu Buana** dan **IT Architecture Intern** di **BPJS Ketenagakerjaan**.

---

## 🎯 Fitur Utama

| Fitur | Deskripsi | Status |
|-------|-----------|--------|
| **Hero Terminal** | Intro berbasis tampilan terminal zsh interaktif | ✅ Done |
| **Chakra Skill Gauge** | Visualisasi skill sebagai bar energi berdenyut | ✅ Done |
| **Ninja Tool Inventory** | Grid proyek dengan filter kategori dinamis | ✅ Done |
| **Ninja Rank Timeline** | Timeline pendidikan & pengalaman kerja | ✅ Done |
| **Guestbook Realtime** | Pesan pengunjung via Supabase real-time | 🔨 In Progress |
| **Dark Mode Uchiha** | Toggle tema gelap merah-hitam ala Akatsuki | 🔨 In Progress |

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![Next.js](https://img.shields.io/badge/Next.js%2015-000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/shadcn%2Fui-000?style=flat-square&logo=shadcnui&logoColor=white)

### Backend & Database
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)

### DevOps & Tools
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000?style=flat-square&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

</div>

---

## 🗂️ Struktur Folder

```
shinobi-portfolio/
├── 📁 app/
│   ├── 📁 (routes)/
│   │   ├── page.tsx              # Home / Hero
│   │   ├── projects/page.tsx     # Ninja Tool Inventory
│   │   └── guestbook/page.tsx    # Guestbook
│   ├── layout.tsx
│   └── globals.css
│
├── 📁 components/
│   ├── 📁 ui/                    # shadcn/ui components
│   ├── HeroTerminal.tsx          # Terminal intro section
│   ├── ChakraGauge.tsx           # Skill bar components
│   ├── ProjectCard.tsx           # Project grid card
│   ├── TimelineItem.tsx          # Education & experience
│   └── GuestbookForm.tsx         # Real-time guestbook
│
├── 📁 lib/
│   ├── supabase.ts               # Supabase client
│   ├── prisma.ts                 # Prisma client
│   └── utils.ts
│
├── 📁 prisma/
│   └── schema.prisma             # Database schema
│
├── 📁 public/
│   └── 📁 assets/
│       └── avatar-roblox.png     # Karakter Roblox Naruto
│
├── tailwind.config.ts            # Konfigurasi warna Konoha
├── next.config.ts
└── .env.local                    # Environment variables
```

---

## 🚀 Cara Menjalankan

### Prerequisites

Pastikan sudah terinstall:
- **Node.js** v18+
- **npm** / **pnpm** / **yarn**
- **Docker** (opsional, untuk dev database lokal)

### Instalasi

```bash
# 1. Clone repository ini
git clone https://github.com/farhan-ramadhan/shinobi-portfolio.git
cd shinobi-portfolio

# 2. Install dependencies
pnpm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Jalankan development server
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Environment Variables

Buat file `.env.local` dan isi dengan konfigurasi berikut:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Database (Prisma)
DATABASE_URL=postgresql://user:password@localhost:5432/shinobi_db

# Cloudinary (Image Hosting)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
```

---

## 🗄️ Setup Database

### Schema Prisma

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Project {
  id          String   @id @default(cuid())
  title       String
  description String
  techStack   String[]
  category    String   // "infra" | "frontend" | "auto"
  repoUrl     String?
  liveUrl     String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Message {
  id        String   @id @default(cuid())
  name      String
  village   String?
  content   String
  createdAt DateTime @default(now())
}
```

### Migrasi Database

```bash
# Generate Prisma client
pnpx prisma generate

# Jalankan migrasi
pnpx prisma migrate dev --name init

# (Opsional) Buka Prisma Studio
pnpx prisma studio
```

---

## 🌐 Deployment

Project ini di-deploy ke **Vercel** dengan konfigurasi otomatis via GitHub Actions.

### Deploy ke Vercel

```bash
# Install Vercel CLI
pnpm install -g vercel

# Deploy
vercel --prod
```

### CI/CD Pipeline

Setiap push ke branch `main` akan otomatis men-trigger deployment ke Vercel melalui **GitHub Actions**. Lihat konfigurasi di [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

---

## 📊 GitHub Stats

<div align="center">

![Farhan's GitHub Stats](https://github-readme-stats.vercel.app/api?username=farhan-ramadhan&show_icons=true&theme=dark&bg_color=0D1117&title_color=F6AD55&icon_color=ED8936&text_color=E6EDF3&border_color=30363D)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=farhan-ramadhan&layout=compact&theme=dark&bg_color=0D1117&title_color=F6AD55&text_color=E6EDF3&border_color=30363D)

![GitHub Streak](https://streak-stats.demolab.com?user=farhan-ramadhan&theme=dark&background=0D1117&border=30363D&ring=F6AD55&fire=ED8936&currStreakLabel=F6AD55)

</div>

---

## 🎓 Tentang Saya

```yaml
name: Farhan Ramadhan
role:
  - Informatics Engineering Student
  - IT Architecture Intern @ BPJS Ketenagakerjaan
education: Universitas Mercu Buana (2022 - Present)
ninja_rank: Chunin ⚡
chakra_level: 72/100

skills:
  infrastructure: [Docker, Kubernetes, Grafana, Prometheus]
  backend:        [Python, PostgreSQL, Prisma, Supabase]
  frontend:       [Next.js, TypeScript, Tailwind CSS, Framer Motion]
  automation:     [GitHub Actions, Bash, Airflow]

currently_learning:
  - Kubernetes advanced orchestration
  - Cloud architecture (AWS/GCP)
  - System design patterns
```

---

## 📬 Kontak

<div align="center">

[![Email](https://img.shields.io/badge/Email-farhan@email.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:farhan@email.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Farhan%20Ramadhan-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/farhan-ramadhan)
[![GitHub](https://img.shields.io/badge/GitHub-farhan--ramadhan-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/farhan-ramadhan)
[![Portfolio](https://img.shields.io/badge/Portfolio-farhan.dev-F6AD55?style=for-the-badge&logo=vercel&logoColor=black)](https://farhan.dev)

<br/>

---

<sub>Dibuat dengan ⚡ dan semangat ninja oleh <strong>Farhan Ramadhan</strong> — Konoha Digital Village, 2025</sub>

</div>
