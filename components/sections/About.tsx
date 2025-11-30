"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Code, Palette, Terminal, Cpu } from "lucide-react";

const skills = [
    { name: "Frontend Dev", icon: <Code />, level: 90 },
    { name: "UI/UX Design", icon: <Palette />, level: 85 },
    { name: "Backend", icon: <Terminal />, level: 75 },
    { name: "Prototyping", icon: <Cpu />, level: 80 },
];

const timeline = [
    { year: "2024", title: "Senior Designer", company: "TechCorp", description: "Leading the design system initiative." },
    { year: "2022", title: "Frontend Developer", company: "WebStudio", description: "Building high-performance web apps." },
    { year: "2020", title: "Freelance", company: "Self-Employed", description: "Working with global clients." },
];

export function About() {
    return (
        <Section id="about">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">ABOUT ME</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            I am a multidisciplinary creative based in the digital realm. With a background in both design and engineering, I bridge the gap between aesthetics and functionality. My mission is to build digital products that look futuristic and feel natural.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {skills.map((skill, index) => (
                                <div key={index} className="bg-white/5 border border-white/10 p-4 hover:border-accent transition-colors">
                                    <div className="text-accent mb-3">{skill.icon}</div>
                                    <h4 className="font-bold mb-2">{skill.name}</h4>
                                    <div className="h-1 bg-white/10 w-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-accent"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 ml-4" />
                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative pl-12">
                                    <div className="absolute left-0 top-1 w-9 h-9 bg-black border border-accent rounded-full flex items-center justify-center z-10">
                                        <div className="w-2 h-2 bg-accent rounded-full" />
                                    </div>
                                    <span className="text-accent font-mono text-sm mb-1 block">{item.year}</span>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-1">{item.company}</p>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
