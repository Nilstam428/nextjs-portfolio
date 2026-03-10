export interface Project {
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    image?: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

export interface Skill {
    name: string;
    icon?: string;
    category: "language" | "framework" | "tool" | "cloud" | "database" | "ai";
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}
