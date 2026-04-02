"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScroll";
import { projects } from "@/data/projects";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
};

interface ProjectsProps {
    mode?: "featured" | "all";
}

export function Projects({ mode = "featured" }: ProjectsProps) {
    const { ref, isVisible } = useScrollReveal();
    const visibleProjects = mode === "featured"
        ? projects.filter((project) => project.featured)
        : projects;

    const headingPrefix = mode === "featured" ? "Featured" : "All";
    const headingDescription = mode === "featured"
        ? "A selection of projects I've built — from AI-powered SaaS platforms to ML pipelines and developer tools."
        : "Everything I've built — from SaaS platforms to ML pipelines and open-source tools.";

    return (
        <section id="projects" className="section-padding">
            <Container>
                <div ref={ref}>
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            {headingPrefix} <span className="accent-text">Projects</span>
                        </h2>
                        <div className="h-1 w-16 accent-bg rounded-full mb-4" />
                        <p className="text-muted-foreground max-w-xl">
                            {headingDescription}
                        </p>
                    </motion.div>

                    {/* Project grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {visibleProjects.map((project) => (
                            <motion.div
                                key={project.slug}
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <Card gradient hover className="h-full flex flex-col overflow-hidden">
                                    {/* Card top panel */}
                                    <CardHeader className="mb-1">
                                        <h3 className="text-xl font-semibold leading-tight mt-2">{project.title}</h3>
                                    </CardHeader>

                                    <CardContent className="flex-1">
                                        <p className="text-base text-muted-foreground leading-relaxed mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="default" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <CardFooter className="mt-5 pt-4 border-t border-border/50 flex-wrap">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="ghost" size="sm">
                                                    <Github className="w-4 h-4" />
                                                    Code
                                                </Button>
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="ghost" size="sm">
                                                    <ExternalLink className="w-4 h-4" />
                                                    Demo
                                                </Button>
                                            </a>
                                        )}
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
