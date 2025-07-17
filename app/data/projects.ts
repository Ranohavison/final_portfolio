// types/project.ts (optionnel, si tu veux séparer les types)
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  date: string;
  featured: boolean;
}

export interface ProjectFilter {
  key: string;
  label: string;
}

export const projects: Project[] = [
  {
    title: "Gestion d'Examen CEPE",
    description:
      "Application simple et sécurisée pour la gestion des résultats du CEPE.",
    image: "/images/screenshoot_3.png",
    technologies: ["Codeigniter", "Angular", "MySql", "TailwindCSS"],
    category: "backend",
    demoUrl: "#",
    githubUrl: "https://github.com/Ranohavison/cepeProject",
    date: "2024",
    featured: true,
  },
  {
    title: "Gestion d'Employées",
    description:
      "Plateforme d'analyse et de gestion intelligente d'employées avec visualisation en temps réel.",
    image: "/images/employe_acceil.png",
    technologies: ["Laravel", "VueJs", "MySql", "TailwindCSS", "Daisyui"],
    category: "fullstack",
    demoUrl: "#",
    githubUrl: "https://github.com/Ranohavison/vueJs_employe",
    date: "2024",
    featured: true,
  },
  {
    title: "Gestion de bibliothèque",
    description:
      "Gérez facilement auteurs, membres et ouvrages grâce à une application intuitive qui révolutionne la gestion de votre bibliothèque.",
    image: "/images/biblioApp.jpeg",
    technologies: ["Qt", "C++", "MySql"],
    category: "fullstack",
    demoUrl: "#",
    githubUrl: "https://github.com/Ranohavison/biblioApp_qt",
    date: "2023",
    featured: false,
  },
];

export const filters: ProjectFilter[] = [
  { key: 'all', label: 'Tous les projets' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'devops', label: 'DevOps' },
];
