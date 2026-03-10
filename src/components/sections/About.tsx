"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Rocket, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScroll";

const highlights = [
    { icon: Brain, label: "AI/ML Engineering", desc: "Model building, NLP, practical AI workflows." },
    { icon: Code2, label: "Full-Stack Delivery", desc: "Frontend, backend, APIs, and production deployment." },
    { icon: Rocket, label: "Product Focus", desc: "Fast iteration with clear business outcomes." },
    { icon: ShieldCheck, label: "Engineering Quality", desc: "Readable code, strong architecture, maintainability." },
];

const aboutSkills = [
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "FastAPI",
    "Django",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
];

export function About() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="about" className="section-padding">
            <Container>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            About <span className="accent-text">Me</span>
                        </h2>
                        <div className="h-1 w-16 accent-bg rounded-full" />
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="rounded-2xl border border-border/80 bg-card/90 p-6 md:p-8">
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                I build at the intersection of AI and software engineering. I
                                enjoy taking ideas from exploration to production with strong
                                technical foundations.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                My work includes training and integrating ML models, building
                                scalable web platforms, and designing systems that teams can
                                extend safely over time.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                I care about clean abstractions, reliable delivery, and product
                                decisions grounded in user value.
                            </p>

                            <div>
                                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                    Core Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {aboutSkills.map((skill) => (
                                        <Badge key={skill} variant="outline">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {highlights.map(({ icon: Icon, label, desc }) => (
                                <div
                                    key={label}
                                    className="rounded-2xl border border-border/80 bg-card/90 p-5"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-lg border border-border/70 bg-muted/50 p-2.5">
                                            <Icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium mb-1">{label}</p>
                                            <p className="text-sm text-muted-foreground">{desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
