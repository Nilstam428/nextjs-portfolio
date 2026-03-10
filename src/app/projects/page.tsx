import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore AI, ML, and SaaS projects built by Nilesh.",
};

export default function ProjectsPage() {
    return (
        <div className="pt-16">
            <Projects mode="all" />
        </div>
    );
}
