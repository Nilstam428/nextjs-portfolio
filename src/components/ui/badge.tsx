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
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
                variant === "default" && "border border-border/70 bg-muted/70 text-muted-foreground",
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
