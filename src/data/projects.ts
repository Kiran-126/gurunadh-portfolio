// ============================================================
//  PROJECTS DATA
//  - `github` / `demo`: set to a real URL when you have one.
//    Leave as empty string ("") to show a disabled placeholder.
//  - `tags`: technology labels shown on the card.
//  - `highlight`: the one-line "why it matters" shown on hover.
// ===================================================

export type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  highlight: string;
  github: string; // "" => disabled "link to be added"
  demo: string; // "" => hidden (no fake demos)
  icon: string; // lucide-react icon name (see Projects.tsx)
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Smart Road Stud System",
    description:
      "A smart road safety system designed to improve visibility during night-time driving. The system uses ESP32 and sensors to detect approaching movement and activates LED road studs sequentially to guide vehicles along the road.",
    tags: [
      "ESP32",
      "Arduino",
      "PlatformIO",
      "PIR Sensor",
      "Ultrasonic Sensor",
      "LDR",
      "LEDs",
    ],
    highlight: "Smart road safety with sequential LED activation.",
    github: "",
    demo: "",
    icon: "Route",
  },
  {
    number: "02",
    title: "Plant Stress Dashboard",
    description:
      "An AI/ML-based dashboard designed to analyze plant health and stress conditions and present the results through an intuitive interface for easier interpretation.",
    tags: ["Python", "AI/ML", "Data Analysis", "Dashboard"],
    highlight: "AI-assisted plant health monitoring and visualization.",
    github: "",
    demo: "",
    icon: "Leaf",
  },
];
