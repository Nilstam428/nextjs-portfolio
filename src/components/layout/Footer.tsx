import { Container } from "@/components/layout/Container";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="border-t border-border/80 bg-card/40 py-8">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-border/70 bg-card px-2.5 py-2 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href={siteConfig.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-border/70 bg-card px-2.5 py-2 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href={siteConfig.links.email}
                            className="rounded-lg border border-border/70 bg-card px-2.5 py-2 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
