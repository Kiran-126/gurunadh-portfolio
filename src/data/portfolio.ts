// ============================================================
//  PORTFOLIO CONFIG  —  edit everything about you here.
//  Every section of the site reads from this single file.
// ===================================================

export const profile = {
  name: "Gurunadh",
  // Short tagline shown in the hero availability badge
  role: "AI/ML Developer • Problem Solver • Builder",
  // Hero headline (the line under the name)
  headline: "Building intelligent solutions for real-world problems.",
  // Hero description (2-3 lines, keep it grounded)
  description:
    "I'm a B.Tech CSE (AI & ML) student interested in Artificial Intelligence, Machine Learning, and software development. I enjoy learning new technologies, building projects, and turning ideas into working solutions.",
  // Footer tagline
  footerRole: "AI/ML Developer • Builder • Learner",
};

export const links = {
  github: "https://github.com/Kiran-126",
  linkedin: "https://www.linkedin.com/in/gurunadha-gumpa-17507434b",
  email: "mailto:gurunadhgumpa@gmail.com",
};
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// Hero "focus areas" — shown as a small stat row in About.
// Meaningful labels only; no invented numbers.
export const focusAreas = [
  { label: "AI/ML", icon: "BrainCircuit" },
  { label: "Software Development", icon: "Code2" },
  { label: "IoT Projects", icon: "Cpu" },
  { label: "Continuous Learning", icon: "GraduationCap" },
];

// About copy — your own words.
export const about = {
  // Paragraphs render in order. Keep them natural and recruiter-friendly.
  paragraphs: [
    "I am a B.Tech CSE (AI & ML) student interested in Artificial Intelligence, Machine Learning, software development, and building practical technology solutions for real-world problems.",
    "I enjoy learning new technologies, developing projects, and turning ideas into working solutions.",
  ],
};

export const education = [
  {
    degree: "B.Tech — Computer Science and Engineering (AI & ML)",
    institution: "Lendi Institute of Engineering and Technology",
    period: "[ START YEAR: 2024 ] — [ EXPECTED GRADUATION: 2028 ]",
    description:
      "Undergraduate program focused on core computer science with a specialization in Artificial Intelligence and Machine Learning — covering algorithms, data systems, and applied ML.",
  },
];

// ============================================================
//  ACHIEVEMENTS
//  Add new entries to the arrays below. Each item is a card.
//  `icon` maps to a lucide-react icon name (see Achievements.tsx).
// ===================================================

export const achievements = {
  hackathons: [
    {
      title: "More achievements and certifications will be added here.",
      context: "",
      description:
        "This space is ready for hackathons, technical competitions, certifications, and project showcases as they happen.",
      icon: "Trophy",
    },
  ],
  competitions: [],
  certifications: [],
  activities: [],
  showcases: [],
};
