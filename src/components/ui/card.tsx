import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    hover?: boolean;
    gradient?: boolean;
}

export function Card({
    children,
    hover = true,
    gradient = false,
    className,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl p-5 md:p-6 transition-all bg-card/95",
                gradient
                    ? "accent-border"
                    : "border border-border bg-card",
                hover && "lift-hover",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardContent({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return <div className={cn("", className)}>{children}</div>;
}

export function CardFooter({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("mt-4 flex items-center gap-3", className)}>
            {children}
        </div>
    );
}
