"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Neon Cyberpunk UI",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        description: "A futuristic user interface design for a gaming platform.",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "AI Analytics Dashboard",
        category: "Development",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        description: "Real-time data visualization dashboard powered by AI.",
        tags: ["React", "D3.js", "Python"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "E-Commerce Redesign",
        category: "UX/UI",
        image: "https://images.unsplash.com/photo-1607799275518-d58665d099db?q=80&w=2070&auto=format&fit=crop",
        description: "Modernizing the shopping experience for a luxury brand.",
        tags: ["Figma", "Shopify", "Liquid"],
        links: { demo: "#", github: "#" },
    },
];

export function Projects() {
    return (
        <Section id="projects" className="bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">SELECTED WORK</h2>
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
                            className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-accent/50 transition-colors"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                            </div>

                            <div className="p-6 relative z-20">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-accent text-xs font-mono tracking-widest uppercase mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                                        <a href={project.links.github} className="hover:text-accent transition-colors"><Github size={18} /></a>
                                        <a href={project.links.demo} className="hover:text-accent transition-colors"><ExternalLink size={18} /></a>
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-muted-foreground">
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
