import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "gradient" | "outline";
    children: ReactNode;
}

export function Badge({
    variant = "default",
    children,
    className,
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-xs font-medium leading-none transition-colors whitespace-nowrap",
                variant === "default" && "border border-primary/20 bg-primary/10 text-primary",
                variant === "gradient" &&
                "accent-bg text-white",
                variant === "outline" &&
                "border border-border text-muted-foreground hover:text-foreground hover:border-primary/45",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
