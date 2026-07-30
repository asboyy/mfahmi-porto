// Definisikan struktur translasi multi-bahasa (Inggris & Indonesia)
export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    viewProjects: string;
    contactMe: string;
  };
  about: {
    heading: string;
    bio: string;
    student: string;
    frontend: string;
    uiux: string;
    problemSolver: string;
  };
  skills: {
    heading: string;
  };
  projects: {
    heading: string;
    description: string;
    viewDetails: string;
    challenge: string;
    solution: string;
    keyFeatures: string;
    techStack: string;
    sourceCode: string;
    items: {
      [id: string]: {
        title: string;
        category: string;
        description: string;
        problem: string;
        solution: string;
        features: string[];
      };
    };
  };
  contact: {
    heading: string;
    dropLine: string;
    yourName: string;
    yourEmail: string;
    yourMessage: string;
    sendButton: string;
    sending: string;
    successTitle: string;
    successDesc: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMsg: string;
  };
  footer: {
    text: string;
  };
}

export const translations: Record<"en" | "id", TranslationSchema> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      subtitle:
        "Hi, I'm Muhammad Fahmi. A passionate Software Engineering student building digital experiences.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    about: {
      heading: "About",
      bio: "I am a Software Engineering student focused on Backend Development. I build functional systems and applications with an understanding of Front-End Development, UI/UX Design, and Video Editing to create more complete digital solutions.",
      student: "🎓 Student",
      frontend: "💻 Front-End Dev",
      uiux: "🎨 UI/UX Design",
      problemSolver: "⚡ Problem Solver",
    },
    skills: {
      heading: "Skills",
    },
    projects: {
      heading: "Projects & Works",
      description:
        "Swipe or scroll horizontally to explore my engineering projects.",
      viewDetails: "View Details",
      challenge: "⚠️ The Challenge",
      solution: "✅ The Solution",
      keyFeatures: "⭐ Key Features",
      techStack: "🔧 Tech Stack",
      sourceCode: "Source Code",
      items: {
        "portal-akademi": {
          title: "Portal Akademi",
          category: "Mobile Application",
          description:
            "An academic portal application built with Flutter that enables students and lecturers to manage academic activities such as course registration, schedules, grades, and announcements in one platform.",
          problem:
            "Managing academic information through separate systems makes it difficult for students and lecturers to access important data efficiently.",
          solution:
            "Developed a Flutter-based academic portal that centralizes academic services into a single, user-friendly mobile application.",
          features: [
            "Student & lecturer authentication",
            "Course registration (KRS)",
            "Grade and transcript viewing",
            "Academic schedules",
            "Admin management dashboard",
          ],
        },
        "saku-financial-app": {
          title: "SAKU Financial App",
          category: "Mobile Application",
          description:
            "A personal finance application developed with Flutter to help users record income, expenses, and monitor daily financial activities.",
          problem:
            "Many users still manage personal finances manually, making it difficult to monitor spending habits.",
          solution:
            "Built a simple and intuitive financial management application for recording transactions and tracking expenses.",
          features: [
            "Income & expense tracking",
            "Transaction history",
            "Financial dashboard",
            "Expense categorization",
          ],
        },
        "website-umkm-talafu-coffee": {
          title: "Website UMKM Talafu Coffee",
          category: "Website Development",
          description:
            "A responsive company profile website created to introduce Talafu Coffee, showcase its products, and strengthen its online presence.",
          problem:
            "The business lacked an online platform to introduce its products and reach a wider audience.",
          solution:
            "Designed and developed a responsive company profile website with product information and contact details.",
          features: [
            "Responsive landing page",
            "Product showcase",
            "About section",
            "Contact page",
          ],
        },
        "website-cv-talafu": {
          title: "CV. Talafu Contractor Website",
          category: "Website Development",
          description:
            "A responsive company profile website developed for CV. Talafu to present company services, portfolio, and business information professionally.",
          problem:
            "The company needed a professional online presence to improve credibility and introduce its services.",
          solution:
            "Created a responsive company profile website highlighting the company's services, completed projects, and contact information.",
          features: [
            "Company profile",
            "Services section",
            "Project portfolio",
            "Responsive design",
          ],
        },
      },
    },
    contact: {
      heading: "Contact",
      dropLine: "Drop me a line",
      yourName: "Your Name",
      yourEmail: "Your Email",
      yourMessage: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent Successfully!",
      successDesc:
        "Thanks for reaching out! I will respond to your email shortly.",
      placeholderName: "Enter your name",
      placeholderEmail: "name@example.com",
      placeholderMsg: "What would you like to build together?",
    },
    footer: {
      text: "Fahmi.",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      subtitle:
        "Hai, saya Muhammad Fahmi. Seorang mahasiswa Rekayasa Perangkat Lunak yang berdedikasi tinggi dalam membangun pengalaman digital.",
      viewProjects: "Lihat Proyek",
      contactMe: "Hubungi Saya",
    },
    about: {
      heading: "Tentang",
      bio: "Saya adalah mahasiswa Rekayasa Perangkat Lunak yang berfokus pada Backend Development. Saya membangun sistem dan aplikasi yang fungsional dengan pemahaman pada Front-End Development, UI/UX Design, serta Video Editing untuk menciptakan solusi digital yang lebih lengkap.",
      student: "🎓 Mahasiswa",
      frontend: "💻 Developer Front-End",
      uiux: "🎨 Desain UI/UX",
      problemSolver: "⚡ Pemecah Masalah",
    },
    skills: {
      heading: "Keahlian",
    },
    projects: {
      heading: "Proyek & Karya",
      description:
        "Geser atau gulir secara horizontal untuk menjelajahi proyek rekayasa saya.",
      viewDetails: "Lihat Detail",
      challenge: "⚠️ Tantangan",
      solution: "✅ Solusi",
      keyFeatures: "⭐ Fitur Utama",
      techStack: "🔧 Teknologi",
      sourceCode: "Kode Sumber",
      items: {
        "portal-akademi": {
          title: "Portal Akademi",
          category: "Aplikasi Mobile",
          description:
            "Aplikasi portal akademik yang dibangun dengan Flutter, memungkinkan mahasiswa dan dosen mengelola kegiatan akademik seperti KRS, jadwal, nilai, dan pengumuman dalam satu platform.",
          problem:
            "Mengelola informasi akademik melalui sistem yang terpisah-pisah membuat mahasiswa dan dosen kesulitan mengakses data penting secara efisien.",
          solution:
            "Mengembangkan portal akademik berbasis Flutter yang memusatkan layanan akademik ke dalam satu aplikasi mobile yang mudah digunakan.",
          features: [
            "Autentikasi mahasiswa & dosen",
            "Kartu Rencana Studi (KRS)",
            "Lihat nilai dan transkrip",
            "Jadwal akademik",
            "Dashboard manajemen admin",
          ],
        },
        "saku-financial-app": {
          title: "Aplikasi Keuangan SAKU",
          category: "Aplikasi Mobile",
          description:
            "Aplikasi keuangan pribadi yang dikembangkan dengan Flutter untuk membantu pengguna mencatat pemasukan, pengeluaran, dan memantau aktivitas keuangan harian.",
          problem:
            "Banyak pengguna masih mengelola keuangan pribadi secara manual, sehingga sulit memantau kebiasaan pengeluaran.",
          solution:
            "Membangun aplikasi manajemen keuangan yang sederhana dan intuitif untuk mencatat transaksi dan melacak pengeluaran.",
          features: [
            "Pelacakan pemasukan & pengeluaran",
            "Riwayat transaksi",
            "Dashboard keuangan",
            "Kategorisasi pengeluaran",
          ],
        },
        "website-umkm-talafu-coffee": {
          title: "Website UMKM Talafu Coffee",
          category: "Pengembangan Website",
          description:
            "Website company profile responsif yang dibuat untuk memperkenalkan Talafu Coffee, menampilkan produk, dan memperkuat kehadiran online-nya.",
          problem:
            "Usaha ini belum memiliki platform online untuk memperkenalkan produknya dan menjangkau audiens yang lebih luas.",
          solution:
            "Merancang dan mengembangkan website company profile responsif yang berisi informasi produk dan kontak.",
          features: [
            "Landing page responsif",
            "Etalase produk",
            "Bagian tentang kami",
            "Halaman kontak",
          ],
        },
        "website-cv-talafu": {
          title: "Website CV. Talafu Contractor",
          category: "Pengembangan Website",
          description:
            "Website company profile responsif yang dikembangkan untuk CV. Talafu guna menampilkan layanan, portofolio, dan informasi bisnis secara profesional.",
          problem:
            "Perusahaan membutuhkan kehadiran online yang profesional untuk meningkatkan kredibilitas dan memperkenalkan layanannya.",
          solution:
            "Membuat website company profile responsif yang menonjolkan layanan perusahaan, proyek yang telah diselesaikan, dan informasi kontak.",
          features: [
            "Profil perusahaan",
            "Bagian layanan",
            "Portofolio proyek",
            "Desain responsif",
          ],
        },
      },
    },
    contact: {
      heading: "Hubungi",
      dropLine: "Hubungi Saya",
      yourName: "Nama Anda",
      yourEmail: "Email Anda",
      yourMessage: "Pesan Anda",
      sendButton: "Kirim Pesan",
      sending: "Mengirim...",
      successTitle: "Pesan Berhasil Terkirim!",
      successDesc:
        "Terima kasih telah menghubungi! Saya akan segera membalas email Anda.",
      placeholderName: "Masukkan nama Anda",
      placeholderEmail: "nama@contoh.com",
      placeholderMsg: "Apa yang ingin Anda bangun bersama?",
    },
    footer: {
      text: "Fahmi.",
    },
  },
};
