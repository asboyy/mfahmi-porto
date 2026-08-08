import { Skill, Project, ContactChannel } from "./types";

// Informasi personal utama
export const PERSONAL_INFO = {
  name: "Fahmi",
  fullName: "Fahmi",
  title: "Software Engineering Student",
  subtitle:
    "Hi, I'm Fahmi. A passionate Software Engineering student building digital experiences.",
  avatarUrl: "/images/profile.jpg",
  aboutText:
    "I am a software engineering student focusing on front-end development and UI/UX design. I love creating functional and aesthetically pleasing web and mobile applications. My expertise lies in bridging the gap between design and development, ensuring user-centric solutions.",
};

// Daftar proyek-proyek teknik yang dikerjakan beserta rincian tantangan dan solusi
export const PROJECTS: Project[] = [
  {
    id: "academic portal",
    title: "academic portal",
    category: "Mobile Application",
    description:
      "An academic portal application built with Flutter that enables students and lecturers to manage academic activities such as course registration, schedules, grades, and announcements in one platform.",
    imageUrl: "/images/project_portal_akademi.jpg",
    tags: ["Flutter", "Dart", "PHP", "MySQL"],
    githubUrl: "https://github.com/asboyy/Portal-Akademi-",
    details: {
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
      techStack: ["Flutter", "Dart", "PHP", "MySQL", "REST API"],
    },
  },

  {
    id: "saku-financial-app",
    title: "SAKU Financial App",
    category: "Mobile Application",
    description:
      "A personal finance application developed with Flutter to help users record income, expenses, and monitor daily financial activities.",
    imageUrl: "/images/project_saku.jpg",
    tags: ["Flutter", "Dart"],
    githubUrl: "https://github.com/asboyy/SAKU-financial-app",
    details: {
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
      techStack: ["Flutter", "Dart"],
    },
  },

  {
    id: "website-umkm-talafu-coffee",
    title: "Website UMKM Talafu Coffee",
    category: "Website Development",
    description:
      "A responsive company profile website created to introduce Talafu Coffee, showcase its products, and strengthen its online presence.",
    imageUrl: "/images/project_UMKM.jpg",
    tags: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/asboyy/Website-UMKM-KOPI-",
    details: {
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
      techStack: ["HTML5", "CSS3", "JavaScript"],
    },
  },

  {
    id: "website-cv-talafu",
    title: "CV. Talafu Contractor Website",
    category: "Website Development",
    description:
      "A responsive company profile website developed for CV. Talafu to present company services, portfolio, and business information professionally.",
    imageUrl: "/images/project_cv_talafu.jpg",
    tags: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/asboyy/Website-Perusahaan-Sederhana",
    details: {
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
      techStack: ["HTML5", "CSS3", "JavaScript"],
    },
  },
];

// Saluran kontak media sosial dan email pribadi
export const SKILLS: Skill[] = [
  {
    name: "Figma",
    iconName: "Figma",
    color: "bg-[#F24E1E]",
    category: "Design",
  },
  {
    name: "TypeScript",
    iconName: "FileCode2",
    color: "bg-[#3178C6]",
    category: "Bahasa Pemrograman",
  },
  {
    name: "JavaScript",
    iconName: "Braces",
    color: "bg-[#F7DF1E]",
    category: "Bahasa Pemrograman",
  },
  {
    name: "Dart",
    iconName: "Target",
    color: "bg-[#0175C2]",
    category: "Bahasa Pemrograman",
  },
  {
    name: "PHP",
    iconName: "FileCode",
    color: "bg-[#777BB4]",
    category: "Bahasa Pemrograman",
  },
  {
    name: "SQL",
    iconName: "Database",
    color: "bg-[#00758F]",
    category: "Bahasa Pemrograman",
  },
  {
    name: "CSS",
    iconName: "Layers",
    color: "bg-[#1572B6]",
    category: "Design",
  },
  {
    name: "HTML",
    iconName: "Code2",
    color: "bg-[#E34F26]",
    category: "Web",
  },
  {
    name: "Git",
    iconName: "GitBranch",
    color: "bg-[#F05032]",
    category: "Tools",
  },
  {
    name: "Canva",
    iconName: "Palette",
    color: "bg-[#00C4CC]",
    category: "Editing",
  },
  {
    name: "CapCut",
    iconName: "Clapperboard",
    color: "bg-[#000000]",
    category: "Editing",
  },
];
// Saluran kontak media sosial dan email pribadi
export const CONTACTS: ContactChannel[] = [
  {
    name: "GitHub",
    iconName: "Github",
    url: "https://github.com/asboyy",
    color: "bg-[#24292e]",
  },
  {
    name: "LinkedIn",
    iconName: "Linkedin",
    url: "https://www.linkedin.com/in/muhammad-fahmi-714981265/",
    color: "bg-[#0077b5]",
  },
  {
    name: "Email",
    iconName: "Mail",
    url: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    color: "bg-[#ea4335]",
  },
  {
    name: "Instagram",
    iconName: "Instagram",
    url: "https://www.instagram.com/m.fahmisyhptr/",
    color: "bg-[#e1306c]",
  },
  {
    name: "WhatsApp",
    iconName: "MessageCircle",
    url: "https://wa.me/6283190657857",
    color: "bg-[#25d366]",
  },
];
