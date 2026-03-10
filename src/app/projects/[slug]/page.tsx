import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};
    return {
        title: project.title,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    return (
        <div className="pt-16">
            <Container>
                <div className="section-padding">
                    {/* Back link */}
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to projects
                    </Link>

                    {/* Hero area */}
                    <div className="mb-12">
                        <div className="w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 via-muted to-cyan-500/10 flex items-center justify-center text-7xl mb-8">
                            {project.title.includes("AI") ? "🤖" :
                                project.title.includes("ML") ? "🧠" :
                                    project.title.includes("Analytics") ? "📊" :
                                        project.title.includes("Restaurant") ? "🍽️" :
                                            project.title.includes("Vision") ? "👁️" :
                                                "⚡"}
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            {project.title}
                        </h1>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                                <Badge key={tag} variant="outline">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <div className="flex gap-3 mb-8">
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="md">
                                        <Github className="w-4 h-4" />
                                        View Code
                                    </Button>
                                </a>
                            )}
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="md">
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.longDescription || project.description}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
