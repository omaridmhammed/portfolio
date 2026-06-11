"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Personal Portfolio Website",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
        description: "Responsive layout built with modern web technologies. Displays personal education, experience, skills, and certifications with stunning visual effects.",
        tags: ["HTML", "CSS", "JavaScript", "Next.js", "TailwindCSS"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "JavaScript Practice Projects",
        category: "Software Development",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop",
        description: "Small interactive exercises and logic-based programs designed to master DOM manipulation, ES6 features, and problem-solving.",
        tags: ["JavaScript", "Algorithms", "DOM", "Clean Code"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "SQL Practice Projects",
        category: "Database Management",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
        description: "Interactive learning models utilizing basic to advanced database queries, relational structures, and relational schema designs.",
        tags: ["SQL", "Relational Database", "Queries", "Data Structures"],
        links: { demo: "#", github: "#" },
    },
];

export function Projects() {
    return (
        <Section id="projects" className="bg-black/40 backdrop-blur-sm relative border-y border-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">SELECTED WORK</h2>
                    <div className="w-20 h-1 bg-accent" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative overflow-hidden bg-muted/30 border border-border hover:border-accent/30 hover:box-glow transition-all duration-500 rounded-lg"
                            data-cursor-text="VIEW"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                            </div>

                            <div className="p-6 relative z-20">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-accent text-xs font-mono tracking-widest uppercase mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                        <a href={project.links.github} className="hover:text-accent transition-colors" data-cursor-text="CODE"><Github size={18} /></a>
                                        <a href={project.links.demo} className="hover:text-accent transition-colors" data-cursor-text="LIVE"><ExternalLink size={18} /></a>
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 text-muted-foreground font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

