// types/skill.ts (optionnel si tu veux séparer les types)
export interface Skill {
  name: string;
  level: number; // pourcentage de maîtrise
  color: string; // dégradé de couleur pour affichage
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 92, color: 'from-pointer to-gradient-start/70' },
      { name: 'Next.js', level: 87, color: 'from-gray-600 to-gray-400' },
      { name: 'TypeScript', level: 90, color: 'from-yellow-500 to-yellow-300' },
      { name: 'Tailwind CSS', level: 93, color: 'from-teal-500 to-cyan-400' },
      { name: 'Vue.js', level: 86, color: 'from-green-500 to-emerald-400' },
      { name: 'Angular', level: 83, color: 'from-amber-500 to-amber-300' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 92, color: 'from-green-600 to-green-400' },
      { name: 'Python', level: 95, color: 'from-yellow-500 to-yellow-300' },
      { name: 'MySql', level: 93, color: 'from-orange-600 to-orange-400' },
      { name: 'PostgreSQL', level: 88, color: 'from-blue-700 to-blue-500' },
      { name: 'Express.js', level: 90, color: 'from-gray-700 to-gray-500' },
      { name: 'Laravel', level: 91, color: 'from-purple-500 to-purple-400' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Docker', level: 83, color: 'from-blue-600 to-blue-400' },
    ],
  },
];
