import type { Locale } from './config'

const en = {
  meta: {
    description: 'Senior Frontend Engineer portfolio — React.js, Next.js, TypeScript, React Native & Go.',
  },
  nav: {
    home: 'Home',
    projects: 'Projects',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleTheme: 'Toggle color theme',
    language: 'Language',
  },
  home: {
    badge: 'Open to new opportunities',
    viewProjects: 'View projects',
    getInTouch: 'Get in touch',
    strengthsEyebrow: 'What I do',
    strengthsTitle: 'How I can help your team',
    featuredEyebrow: 'Selected work',
    featuredTitle: 'Featured Projects',
    allProjects: 'All projects',
    skillsEyebrow: 'Toolbox',
    skillsTitle: 'Skills & Tools',
    careerEyebrow: 'Career',
    experienceTitle: 'Experience',
    educationEyebrow: 'Background',
    educationTitle: 'Education',
    ctaTitle: "Let's build something together",
    ctaText: 'Looking for a frontend engineer who can own features from UI to release? Let’s talk.',
    ctaButton: 'Contact me',
  },
  projects: {
    eyebrow: 'Portfolio',
    title: 'My Projects',
    subtitle: 'From enterprise banking platforms to consumer apps and community websites — here’s what I’ve built.',
    privateProject: 'Private / internal project',
    new: 'New',
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's work together",
    subtitle: 'Hiring, a freelance project, or just want to say hello? Send me a message.',
    emailDirect: 'Email me directly',
    name: 'Full Name',
    namePlaceholder: 'Enter your full name',
    email: 'Email Address',
    emailPlaceholder: 'your.email@example.com',
    message: 'Your Message',
    messagePlaceholder: 'Tell me about your project or just say hello...',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Thank you for your message! I will get back to you soon.',
    error: 'Failed to send message. Please try again later.',
    confirmSubject: 'Thank you for contacting me - Message received',
    // {message} is replaced with the visitor's message
    confirmBody:
      'Thank you for contacting me! I have received your message:\n\n"{message}"\n\nI will get back to you as soon as possible.\n\nBest regards,\nArio Bwidagdo',
  },
  footer: {
    rights: 'All rights reserved.',
  },
}

export type Dictionary = typeof en

const id: Dictionary = {
  meta: {
    description: 'Portofolio Senior Frontend Engineer — React.js, Next.js, TypeScript, React Native & Go.',
  },
  nav: {
    home: 'Beranda',
    projects: 'Proyek',
    contact: 'Kontak',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    toggleTheme: 'Ganti tema warna',
    language: 'Bahasa',
  },
  home: {
    badge: 'Terbuka untuk peluang baru',
    viewProjects: 'Lihat proyek',
    getInTouch: 'Hubungi saya',
    strengthsEyebrow: 'Yang saya kerjakan',
    strengthsTitle: 'Bagaimana saya bisa membantu tim Anda',
    featuredEyebrow: 'Karya pilihan',
    featuredTitle: 'Proyek Unggulan',
    allProjects: 'Semua proyek',
    skillsEyebrow: 'Perangkat',
    skillsTitle: 'Keahlian & Tools',
    careerEyebrow: 'Karier',
    experienceTitle: 'Pengalaman',
    educationEyebrow: 'Latar belakang',
    educationTitle: 'Pendidikan',
    ctaTitle: 'Mari bangun sesuatu bersama',
    ctaText: 'Butuh frontend engineer yang bisa menangani fitur dari UI hingga rilis? Mari ngobrol.',
    ctaButton: 'Hubungi saya',
  },
  projects: {
    eyebrow: 'Portofolio',
    title: 'Proyek Saya',
    subtitle: 'Dari platform perbankan enterprise hingga aplikasi konsumen dan website komunitas — inilah yang sudah saya bangun.',
    privateProject: 'Proyek privat / internal',
    new: 'Baru',
  },
  contact: {
    eyebrow: 'Kontak',
    title: 'Mari bekerja sama',
    subtitle: 'Ingin merekrut, punya proyek freelance, atau sekadar menyapa? Kirimi saya pesan.',
    emailDirect: 'Email saya langsung',
    name: 'Nama Lengkap',
    namePlaceholder: 'Masukkan nama lengkap Anda',
    email: 'Alamat Email',
    emailPlaceholder: 'email.anda@contoh.com',
    message: 'Pesan Anda',
    messagePlaceholder: 'Ceritakan tentang proyek Anda atau sekadar menyapa...',
    send: 'Kirim Pesan',
    sending: 'Mengirim...',
    success: 'Terima kasih atas pesan Anda! Saya akan segera membalasnya.',
    error: 'Gagal mengirim pesan. Silakan coba lagi nanti.',
    confirmSubject: 'Terima kasih telah menghubungi saya - Pesan diterima',
    confirmBody:
      'Terima kasih telah menghubungi saya! Saya sudah menerima pesan Anda:\n\n"{message}"\n\nSaya akan membalas secepatnya.\n\nSalam hangat,\nArio Bwidagdo',
  },
  footer: {
    rights: 'Hak cipta dilindungi.',
  },
}

const dictionaries: Record<Locale, Dictionary> = { en, id }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
