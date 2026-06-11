"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Hero() {
    return (
        <Section className="min-h-screen flex items-center justify-center pt-0">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-12 relative inline-flex items-center justify-center">
                        {/* Background Glowing Circles */}
                        <div className="absolute w-[140%] h-[140%] rounded-full border border-accent/20 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute w-[120%] h-[120%] rounded-full border border-accent/40" />
                        <div className="absolute w-[110%] h-[110%] rounded-full bg-accent/5 blur-xl" />

                        {/* Main Image Container */}
                        <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-black shadow-[0_0_30px_rgba(0,240,255,0.3)] overflow-hidden">
                            <img
                                src="/portfolio/profile.jpg"
                                alt="Omar Idmhammed"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="text-accent font-mono text-xs md:text-sm tracking-[0.2em] mb-4 uppercase">
                        Software & Web Developer
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight select-none">
                        DESIGNING THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 relative">
                            FUTURE
                            <motion.span
                                className="absolute -inset-1 bg-accent/25 blur-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.4, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                            />
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        I build responsive user interfaces, manage complex database systems, and solve real-world technical problems.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#projects" data-cursor-text="WORK" className="w-full sm:w-auto">
                            <Button size="lg" className="group w-full">
                                View Projects
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <a href="#contact" data-cursor-text="TALK" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full">
                                Contact Me
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
