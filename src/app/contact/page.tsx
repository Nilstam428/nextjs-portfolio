import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Nilesh for collaborations, projects, or just a chat about tech.",
};

export default function ContactPage() {
    return (
        <div className="pt-16">
            <Contact />
        </div>
    );
}
