"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScroll";
import { skills } from "@/data/skills";

const categoryTitle: Record<string, string> = {
    language: "Languages",
    framework: "Frameworks",
    ai: "AI / ML",
    tool: "Tools",
    cloud: "Cloud",
    database: "Databases",
};

const categoryOrder = ["language", "framework", "ai", "tool", "cloud", "database"];

export function TechStack() {
    const { ref, isVisible } = useScrollReveal();

    const groupedSkills = categoryOrder
        .map((category) => ({
            category,
            items: skills.filter((skill) => skill.category === category),
        }))
        .filter((group) => group.items.length > 0);

    return (
        <section className="section-padding">
            <Container>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                >
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            Tech <span className="accent-text">Stack</span>
                        </h2>
                        <div className="h-1 w-16 accent-bg rounded-full mb-4" />
                        <p className="text-muted-foreground max-w-xl">
                            Tools I use regularly to build and ship reliable products.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {groupedSkills.map((group) => (
                            <div
                                key={group.category}
                                className="rounded-2xl border border-border/80 bg-card/90 p-5"
                            >
                                <p className="text-sm font-semibold mb-3">
                                    {categoryTitle[group.category] ?? group.category}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((skill) => (
                                        <Badge key={skill.name} variant="default">
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
