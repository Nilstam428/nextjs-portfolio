"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        // Hide default cursor globally
        document.body.style.cursor = "none";

        // Add style to ensure links don't show cursor either
        const style = document.createElement("style");
        style.innerHTML = `* { cursor: none !important; }`;
        document.head.appendChild(style);

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateHoverState = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") !== null ||
                target.closest("button") !== null;

            setIsHovering(isClickable);
            setIsPointer(isClickable);
        };

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mouseover", updateHoverState);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mouseover", updateHoverState);
            document.body.style.cursor = "auto";
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999]"
                animate={{
                    x: position.x - 6,
                    y: position.y - 6,
                    scale: isHovering ? 0 : 1,
                    opacity: 1
                }}
                transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-primary bg-primary/10 rounded-full pointer-events-none z-[9998]"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(var(--primary), 0.2)" : "rgba(var(--primary), 0.1)"
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
            />
        </>
    );
}
