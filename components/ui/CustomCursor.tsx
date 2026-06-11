"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [cursorText, setCursorText] = useState("");

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Disable on touch devices
        if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;

            // Check if element or any of its parents is a link/button/input
            const interactiveEl = target.closest("a, button, input, textarea, [data-hover='true']");
            
            if (interactiveEl) {
                setIsHovered(true);
                
                // Read custom cursor text if exists
                const text = interactiveEl.getAttribute("data-cursor-text");
                if (text) {
                    setCursorText(text);
                } else {
                    setCursorText("");
                }
            } else {
                setIsHovered(false);
                setCursorText("");
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 rounded-full border border-accent pointer-events-none z-50 flex items-center justify-center text-[8px] font-mono font-bold uppercase tracking-widest text-accent"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovered ? (cursorText ? 56 : 40) : 24,
                    height: isHovered ? (cursorText ? 56 : 40) : 24,
                    backgroundColor: isHovered ? "rgba(0, 240, 255, 0.1)" : "rgba(0, 240, 255, 0)",
                    borderColor: isHovered ? "rgba(0, 240, 255, 1)" : "rgba(0, 240, 255, 0.4)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 0.2
                }}
            >
                {isHovered && cursorText && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="pointer-events-none"
                    >
                        {cursorText}
                    </motion.span>
                )}
            </motion.div>
        </>
    );
}
