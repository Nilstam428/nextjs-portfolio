import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "tap-hover inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all cursor-pointer",
                "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background",
                // Variants
                variant === "primary" &&
                "bg-primary text-primary-foreground hover:bg-primary/90",
                variant === "outline" &&
                "border border-border bg-card text-foreground hover:border-primary/45",
                variant === "ghost" &&
                "bg-transparent text-foreground hover:bg-muted",
                // Sizes
                size === "sm" && "px-4 py-2 text-sm",
                size === "md" && "px-6 py-3 text-sm",
                size === "lg" && "px-8 py-4 text-base",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
