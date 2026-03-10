import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        title: "AI Content Platform",
        slug: "ai-content-platform",
        description:
            "A SaaS platform powered by GPT-4 for automated content generation, SEO optimization, and multi-channel publishing.",
        longDescription:
            "Built a full-stack SaaS application that leverages GPT-4 to generate, optimize, and publish content across multiple channels. Features include AI-powered SEO analysis, content scheduling, team collaboration, and analytics dashboards. Built with Next.js, Python FastAPI, and PostgreSQL.",
        tags: ["Next.js", "Python", "GPT-4", "PostgreSQL", "Redis"],
        liveUrl: "https://ai-content.example.com",
        githubUrl: "https://github.com/nilesh/ai-content-platform",
        featured: true,
    },
    {
        title: "ML Model Marketplace",
        slug: "ml-model-marketplace",
        description:
            "A marketplace for deploying, sharing, and monetizing machine learning models with one-click API endpoints.",
        longDescription:
            "Designed and built a platform where ML engineers can deploy models and expose them as REST APIs. Includes auto-scaling inference, usage-based billing, model versioning, and A/B testing. Handles 10K+ requests/minute.",
        tags: ["React", "FastAPI", "Docker", "Kubernetes", "TensorFlow"],
        liveUrl: "https://ml-market.example.com",
        githubUrl: "https://github.com/nilesh/ml-marketplace",
        featured: true,
    },
    {
        title: "Real-time Analytics Dashboard",
        slug: "realtime-analytics",
        description:
            "A high-performance dashboard for monitoring real-time metrics with WebSocket streaming and interactive charts.",
        tags: ["TypeScript", "D3.js", "WebSocket", "Node.js", "ClickHouse"],
        githubUrl: "https://github.com/nilesh/analytics-dash",
        featured: true,
    },
    {
        title: "Smart Restaurant Management",
        slug: "restaurant-management",
        description:
            "Full-stack restaurant management system with QR ordering, table management, and live kitchen display.",
        tags: ["Next.js", "Django", "PostgreSQL", "WebSocket", "Stripe"],
        liveUrl: "https://restaurant.example.com",
        githubUrl: "https://github.com/nilesh/restaurant-mgmt",
        featured: false,
    },
    {
        title: "Computer Vision Pipeline",
        slug: "cv-pipeline",
        description:
            "An end-to-end computer vision pipeline for object detection, image segmentation, and automated labeling.",
        tags: ["Python", "PyTorch", "OpenCV", "AWS S3", "Docker"],
        githubUrl: "https://github.com/nilesh/cv-pipeline",
        featured: false,
    },
    {
        title: "DevOps Automation Toolkit",
        slug: "devops-toolkit",
        description:
            "A CLI toolkit for automating CI/CD pipelines, infrastructure provisioning, and monitoring setup.",
        tags: ["Go", "Terraform", "GitHub Actions", "Prometheus", "Grafana"],
        githubUrl: "https://github.com/nilesh/devops-toolkit",
        featured: false,
    },
];
