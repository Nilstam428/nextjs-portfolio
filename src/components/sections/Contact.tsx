"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScroll";
import { siteConfig } from "@/lib/constants";

const contactLinks = [
    {
        label: "Email",
        href: siteConfig.links.email,
        icon: Mail,
        description: "nilesh@example.com",
    },
    {
        label: "GitHub",
        href: siteConfig.links.github,
        icon: Github,
        description: "github.com/nilesh",
    },
    {
        label: "LinkedIn",
        href: siteConfig.links.linkedin,
        icon: Linkedin,
        description: "linkedin.com/in/nilesh",
    },
];

export function Contact() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="contact" className="section-padding">
            <Container>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                    className="rounded-2xl border border-border/80 bg-card/90 p-6 md:p-8"
                >
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                                Let&apos;s <span className="accent-text">Connect</span>
                            </h2>
                            <div className="h-1 w-16 accent-bg rounded-full mb-5" />
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Interested in collaborating or discussing a project? Reach out
                                and I&apos;ll get back to you.
                            </p>
                            <a href={siteConfig.links.email}>
                                <Button variant="primary" size="lg">
                                    <Mail className="w-4 h-4" />
                                    Get In Touch
                                    <ArrowUpRight className="w-4 h-4" />
                                </Button>
                            </a>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                            {contactLinks.map(({ label, href, icon: Icon, description }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("mailto") ? undefined : "_blank"}
                                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                    className="group rounded-xl border border-border/80 bg-muted/30 p-4 hover:border-primary/40 hover:bg-muted/55 transition-colors"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <p className="font-medium mb-1">{label}</p>
                                            <p className="text-xs text-muted-foreground break-all">{description}</p>
                                        </div>
                                        <div className="rounded-lg border border-border/70 bg-card p-2">
                                            <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
