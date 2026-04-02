import type { Skill } from "@/types/project";

export const skills: Skill[] = [
    // Languages
    { name: "C", category: "language" },
    { name: "Python", category: "language" },
    { name: "SQL", category: "language" },
    { name: "HTML", category: "language" },
    { name: "CSS", category: "language" },
    { name: "JavaScript", category: "language" },

    // Frameworks & Libraries
    { name: "Pandas", category: "framework" },
    { name: "NumPy", category: "framework" },
    { name: "Matplotlib", category: "framework" },
    { name: "Seaborn", category: "framework" },

    // AI
    { name: "Scikit-learn", category: "ai" },

    // Tools
    { name: "Jupyter Notebook", category: "tool" },
    { name: "Kaggle", category: "tool" },
    { name: "Google Colab", category: "tool" },
    { name: "Git", category: "tool" },
    { name: "GitHub", category: "tool" },
];
