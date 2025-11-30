import { HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={twMerge("py-20 md:py-32 relative overflow-hidden", className)}
                {...props}
            >
                {children}
            </section>
        );
    }
);

Section.displayName = "Section";
