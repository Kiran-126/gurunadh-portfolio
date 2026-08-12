// ============================================================
//  SKILLS DATA  —  grouped by category.
//  Add or remove items here; the Skills section renders them.
//  No fake proficiency bars — skills are shown as clean pills.
// ===================================================

export type SkillCategory = {
  title: string;
  icon: string; // lucide-react icon name (see Skills.tsx for the map)
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code2",
    skills: ["C", "C++", "Python", "Java"],
  },
  {
    title: "AI / ML",
    icon: "BrainCircuit",
    skills: [
      "Machine Learning",
      "TensorFlow",
      "Data Analysis",
      "AI/ML Development",
    ],
  },
  {
    title: "Web Development",
    icon: "Globe",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Database",
    icon: "Database",
    skills: ["SQL", "DBMS"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code"],
  },
];
