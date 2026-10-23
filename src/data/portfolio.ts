import type { Localized } from '@/i18n/config'

export const profile = {
  name: 'Ario Budi Widagdo',
  role: 'Senior Frontend Engineer',
  email: 'ariobwidagdo@gmail.com',
  location: 'Jakarta, Indonesia',
  headline: {
    en: 'I build fast, reliable web & mobile apps — from enterprise banking platforms to consumer apps for Telkomsel.',
    id: 'Saya membangun aplikasi web & mobile yang cepat dan andal — dari platform perbankan enterprise hingga aplikasi konsumen untuk Telkomsel.',
  } satisfies Localized,
  summary: {
    en: '5+ years shipping production code with React.js, Next.js, TypeScript and React Native. I’ve built a Wealth Management System used by multiple banks in Indonesia, worked on Telkomsel’s MyOrbit, and I’m comfortable going beyond the frontend — Go backend features, deployments, and production troubleshooting included.',
    id: '5+ tahun membangun aplikasi production dengan React.js, Next.js, TypeScript, dan React Native. Saya pernah membangun Wealth Management System yang digunakan beberapa bank di Indonesia, mengerjakan MyOrbit Telkomsel, dan terbiasa bekerja di luar frontend — mulai dari fitur backend Go, deployment, hingga troubleshooting di production.',
  } satisfies Localized,
}

export const stats: { value: string; label: Localized }[] = [
  { value: '5+', label: { en: 'Years of experience', id: 'Tahun pengalaman' } },
  { value: '3', label: { en: 'Companies', id: 'Perusahaan' } },
  { value: 'Web + Mobile', label: { en: 'Platforms shipped', id: 'Platform dikerjakan' } },
]

export const strengths: { icon: 'layers' | 'gauge' | 'rocket'; title: Localized; text: Localized }[] = [
  {
    icon: 'layers',
    title: { en: 'Frontend Architecture', id: 'Arsitektur Frontend' },
    text: {
      en: 'Scalable React & Next.js architecture with reusable, maintainable components — built for complex, enterprise-scale workflows.',
      id: 'Arsitektur React & Next.js yang skalabel dengan komponen reusable dan mudah dirawat — siap untuk alur kerja kompleks skala enterprise.',
    },
  },
  {
    icon: 'gauge',
    title: { en: 'Performance & Reliability', id: 'Performa & Keandalan' },
    text: {
      en: 'Code splitting, lazy loading and lean state management for fast apps — plus quick, calm fixes when production issues hit.',
      id: 'Code splitting, lazy loading, dan state management yang ramping untuk aplikasi yang cepat — serta penanganan sigap saat ada masalah di production.',
    },
  },
  {
    icon: 'rocket',
    title: { en: 'Web, Mobile & Backend', id: 'Web, Mobile & Backend' },
    text: {
      en: 'React Native for Android, Go for backend services, and hands-on deployments — I can carry a feature from UI all the way to release.',
      id: 'React Native untuk Android, Go untuk layanan backend, dan pengalaman deployment langsung — saya bisa membawa fitur dari UI hingga rilis.',
    },
  },
]

export const skillGroups: { label: Localized; items: string[] }[] = [
  { label: { en: 'Frontend', id: 'Frontend' }, items: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'React Native', 'HTML', 'CSS'] },
  { label: { en: 'Backend', id: 'Backend' }, items: ['Go', 'REST API'] },
  { label: { en: 'State Management', id: 'State Management' }, items: ['Redux', 'Context API'] },
  { label: { en: 'UI & Data Visualization', id: 'UI & Visualisasi Data' }, items: ['Material UI', 'Highcharts'] },
  { label: { en: 'Testing', id: 'Testing' }, items: ['Jest.js'] },
  { label: { en: 'Tools', id: 'Tools' }, items: ['GitLab', 'Git', 'NPM', 'Vite', 'Axios', 'VS Code', 'Terminal'] },
]

export type Experience = {
  role: string
  company: string
  period: Localized
  description: Localized[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'PT Praisindo Teknologi',
    period: { en: 'May 2025 – Aug 2026', id: 'Mei 2025 – Agu 2026' },
    description: [
      {
        en: 'Built and maintained a Wealth Management System (WMS) used by multiple banks in Indonesia, engineered for performance, reliability and enterprise scale.',
        id: 'Membangun dan memelihara Wealth Management System (WMS) yang digunakan beberapa bank di Indonesia, dirancang untuk performa, keandalan, dan skala enterprise.',
      },
      {
        en: 'Designed a scalable React.js & Next.js frontend architecture for complex financial workflows.',
        id: 'Merancang arsitektur frontend React.js & Next.js yang skalabel untuk alur kerja keuangan yang kompleks.',
      },
      {
        en: 'Developed Go backend features for WMS and owned end-to-end deployments — builds, environment config, server coordination and release monitoring.',
        id: 'Mengembangkan fitur backend WMS dengan Go dan menangani deployment end-to-end — build, konfigurasi environment, koordinasi server, hingga monitoring rilis.',
      },
      {
        en: 'Boosted app performance with code splitting, lazy loading and efficient state management.',
        id: 'Meningkatkan performa aplikasi melalui code splitting, lazy loading, dan state management yang efisien.',
      },
      {
        en: 'Resolved production issues quickly to keep high availability for banking users.',
        id: 'Menyelesaikan masalah production dengan cepat untuk menjaga ketersediaan layanan bagi pengguna perbankan.',
      },
    ],
    stack: ['React.js', 'Next.js', 'TypeScript', 'React Native', 'Redux', 'Axios', 'Highcharts', 'Material UI', 'Vite', 'Jest.js', 'Go'],
  },
  {
    role: 'Associate Frontend Engineer',
    company: 'Packet Systems Indonesia · Crampas.ai',
    period: { en: 'Apr 2024 – May 2025', id: 'Apr 2024 – Mei 2025' },
    description: [
      {
        en: 'Developed the Crampas.ai website with React.js and Next.js for an AI-driven business information management product.',
        id: 'Mengembangkan website Crampas.ai dengan React.js dan Next.js untuk produk manajemen informasi bisnis berbasis AI.',
      },
      {
        en: 'Turned UI/UX designs into responsive, cross-browser interfaces.',
        id: 'Mengubah desain UI/UX menjadi antarmuka yang responsif dan kompatibel lintas browser.',
      },
      {
        en: 'Built reusable, scalable components and state management with Redux and Context API.',
        id: 'Membangun komponen reusable yang skalabel serta state management dengan Redux dan Context API.',
      },
      {
        en: 'Optimized images, scripts and frontend assets for faster load times.',
        id: 'Mengoptimalkan gambar, script, dan aset frontend agar waktu muat lebih cepat.',
      },
    ],
    stack: ['React.js', 'Next.js', 'TypeScript', 'React Native', 'Redux', 'Axios', 'Highcharts', 'Material UI', 'Jest.js'],
  },
  {
    role: 'Middle Frontend Developer',
    company: 'SALT · PT Ako Media Asia · MyOrbit Telkomsel',
    period: { en: 'Apr 2023 – Feb 2024', id: 'Apr 2023 – Feb 2024' },
    description: [
      {
        en: 'Designed Redux patterns for state management shared across React.js and React Native apps.',
        id: 'Merancang pola Redux untuk state management yang dipakai bersama di aplikasi React.js dan React Native.',
      },
      {
        en: 'Built the MyOrbit Web UI and integrated MyOrbit CMS for dynamic content across platforms.',
        id: 'Membangun UI MyOrbit Web dan mengintegrasikan MyOrbit CMS untuk konten dinamis lintas platform.',
      },
      {
        en: 'Adapted MyOrbit designs for Android with React Native.',
        id: 'Mengadaptasi desain MyOrbit untuk Android dengan React Native.',
      },
      {
        en: 'Improved tracker features on web and Android for better performance and accuracy.',
        id: 'Meningkatkan fitur tracker di web dan Android agar lebih cepat dan akurat.',
      },
    ],
    stack: ['React.js', 'React Native', 'TypeScript', 'Redux', 'Axios', 'Highcharts', 'Jest.js'],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'SALT · PT Ako Media Asia · MyOrbit Telkomsel',
    period: { en: 'Nov 2021 – Mar 2023', id: 'Nov 2021 – Mar 2023' },
    description: [
      {
        en: 'Sliced and integrated UI designs into MyOrbit CMS with React.js and React Native.',
        id: 'Melakukan slicing dan integrasi desain UI ke MyOrbit CMS dengan React.js dan React Native.',
      },
      {
        en: 'Connected apps to CMS services and REST APIs to render dynamic content on web and mobile.',
        id: 'Menghubungkan aplikasi ke layanan CMS dan REST API untuk menampilkan konten dinamis di web dan mobile.',
      },
      {
        en: 'Implemented React Hooks and tested features across React Native Web and React.js.',
        id: 'Mengimplementasikan React Hooks dan menguji fitur di React Native Web dan React.js.',
      },
    ],
    stack: ['React.js', 'React Native', 'Redux', 'Axios', 'Jest.js'],
  },
]

export const education: { school: string; major: Localized; period: string }[] = [
  { school: 'Universitas Amikom Yogyakarta', major: { en: 'Information System', id: 'Sistem Informasi' }, period: '2016 – 2021' },
  { school: 'Gama Senior High School', major: { en: 'Social Science', id: 'IPS (Ilmu Pengetahuan Sosial)' }, period: '2014 – 2016' },
]

export type Project = {
  title: string
  description: Localized
  link?: string
  tech: string[]
  category: 'Web' | 'Mobile' | 'Enterprise'
  /** Two CSS colors for the card banner gradient */
  colors: [string, string]
  isNew?: boolean
}

export const projects: Project[] = [
  {
    title: 'Kampung Wisata Bersemi',
    description: {
      en: 'Website for an award-winning eco & educational tourism village in Magelang — tour packages, photo gallery, achievements and one-tap WhatsApp booking, plus an admin panel to manage packages.',
      id: 'Website untuk kampung wisata edukasi & lingkungan berprestasi di Magelang — paket wisata, galeri foto, prestasi, dan pemesanan sekali klik via WhatsApp, dilengkapi panel admin untuk mengelola paket.',
    },
    link: 'https://kampung-wisata-bersemi.vercel.app/',
    tech: ['React', 'Vite', 'Supabase', 'Swiper'],
    category: 'Web',
    colors: ['#10b981', '#84cc16'],
    isNew: true,
  },
  {
    title: 'Sertifikat HMI',
    description: {
      en: 'Certificate download portal: participants type their name and instantly get a personalized PDF certificate. Includes an admin panel for bulk participant import (Excel/CSV/Word), template upload with live preview, and download stats.',
      id: 'Portal unduh sertifikat: peserta cukup mengetik nama dan langsung mendapat sertifikat PDF dengan namanya. Dilengkapi panel admin untuk impor peserta massal (Excel/CSV/Word), unggah template dengan preview, dan statistik unduhan.',
    },
    tech: ['React', 'Vite', 'Express', 'Turso', 'pdf-lib'],
    category: 'Web',
    colors: ['#16a34a', '#14532d'],
  },
  {
    title: 'Wealth Management System',
    description: {
      en: 'Enterprise wealth-management platform used by multiple banks in Indonesia. Built the React/Next.js frontend architecture and Go backend features, and handled deployments.',
      id: 'Platform wealth management skala enterprise yang digunakan beberapa bank di Indonesia. Membangun arsitektur frontend React/Next.js, fitur backend Go, dan menangani deployment.',
    },
    tech: ['Next.js', 'TypeScript', 'Go', 'Highcharts'],
    category: 'Enterprise',
    colors: ['#6366f1', '#0ea5e9'],
  },
  {
    title: 'Crampas.ai Website',
    description: {
      en: 'Website for an AI-driven business information management product — responsive, cross-browser and optimized for fast load times.',
      id: 'Website untuk produk manajemen informasi bisnis berbasis AI — responsif, kompatibel lintas browser, dan dioptimalkan agar cepat dimuat.',
    },
    link: 'https://crampas.ai',
    tech: ['React.js', 'Next.js', 'Redux', 'AI'],
    category: 'Web',
    colors: ['#3b82f6', '#06b6d4'],
  },
  {
    title: 'MyOrbit App & Web',
    description: {
      en: 'Telkomsel’s MyOrbit on web and Android — shared Redux architecture, CMS-driven content and an improved tracker feature.',
      id: 'MyOrbit Telkomsel di web dan Android — arsitektur Redux bersama, konten berbasis CMS, dan fitur tracker yang lebih baik.',
    },
    link: 'https://myorbit.id',
    tech: ['React Native', 'React.js', 'Redux', 'CMS'],
    category: 'Mobile',
    colors: ['#a855f7', '#ec4899'],
  },
  {
    title: 'Private Tutoring Service App',
    description: {
      en: 'Mobile app for booking private tutors, with Firebase authentication and notifications.',
      id: 'Aplikasi mobile untuk memesan guru les privat, dengan autentikasi dan notifikasi Firebase.',
    },
    tech: ['React Native', 'Firebase', 'Authentication'],
    category: 'Mobile',
    colors: ['#f59e0b', '#ef4444'],
  },
]
