"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/constants";

const heroTechStack = [
    "Next.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "AWS",
    "Docker",
];

const quickFacts = [
    { label: "Experience", value: "3+ years" },
    { label: "Focus", value: "AI + SaaS" },
    { label: "Delivery", value: "Full lifecycle" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
};

export function Hero() {
    return (
        <section className="relative section-padding pt-24 md:pt-32">
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute -top-28 left-1/2 h-[30rem] w-[48rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <Container>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]"
                >
                    <div>
                        <motion.div variants={itemVariants}>
                            <Badge variant="outline" className="mb-6 gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                Open to opportunities
                            </Badge>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] mb-6"
                        >
                            Hi, I&apos;m <span className="accent-text">{siteConfig.name}</span>
                            <br />
                            <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl">
                                AI &amp; Full Stack Developer
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
                        >
                            I build intelligent products and scalable SaaS platforms with a
                            strong focus on clean architecture, performance, and shipping
                            practical solutions.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-3 mb-8"
                        >
                            <a href="#projects">
                                <Button variant="primary" size="lg">
                                    View Projects
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg">
                                    <Download className="w-4 h-4" />
                                    Resume
                                </Button>
                            </a>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center gap-3 mb-8"
                        >
                            <a
                                href={siteConfig.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                            <a
                                href={siteConfig.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                            <a
                                href={siteConfig.links.email}
                                className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40"
                            >
                                <Mail className="w-4 h-4" />
                                Email
                            </a>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-2"
                        >
                            {heroTechStack.map((tech) => (
                                <Badge key={tech} variant="default">
                                    {tech}
                                </Badge>
                            ))}
                        </motion.div>
                    </div>

                    <motion.aside
                        variants={itemVariants}
                        className="rounded-2xl border border-border/80 bg-card/90 p-6 md:p-7"
                    >
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
                            Quick Snapshot
                        </p>
                        <div className="space-y-4">
                            {quickFacts.map((fact) => (
                                <div
                                    key={fact.label}
                                    className="rounded-xl border border-border/70 bg-muted/35 px-4 py-3"
                                >
                                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                        {fact.label}
                                    </p>
                                    <p className="text-base font-medium mt-1">{fact.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.aside>
                </motion.div>
            </Container>
        </section>
    );
}
