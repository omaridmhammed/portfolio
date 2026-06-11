"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ExternalLink, Github, Filter } from "lucide-react";

const categories = ["All", "Web Apps", "Sports & Events", "Media & Databases"];

const projects = [
    {
        title: "Coaching Management App ⚽",
        category: "Sports & Events",
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop",
        description: "Directly connected to soccer coaching experience. Track youth player profiles (U8–U16), add performance drills/notes, and organize match lineups.",
        tags: ["React", "Sports Tech", "Data Dashboard", "Local Storage"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "Match Statistics App 📊",
        category: "Sports & Events",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
        description: "Built for match officials to track goals, assists, fouls, and card bookings. Supports exporting matches analytics to CSV formats.",
        tags: ["JavaScript", "DOM Manipulation", "Data Export", "CSS Grid"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "Job Tracker App",
        category: "Web Apps",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
        description: "Track jobs you apply to with status updates (Applied, Interview, Rejected) and log details/notes per job application.",
        tags: ["React", "TailwindCSS", "State Management", "Framer Motion"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "Mini E-commerce Website",
        category: "Web Apps",
        image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop",
        description: "Responsive product grid featuring filter categories, dynamic persistent cart item count, and full checkout page layouts.",
        tags: ["Next.js", "React Context", "CSS Grid", "Checkout UI"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "Learning Tracker App 📚",
        category: "Web Apps",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
        description: "Perfect for tracking upskilling progress (HTML, JS, SQL, C#). Configured with goal-oriented progress bars and persistent checkmarks.",
        tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "Appointment Booking System",
        category: "Web Apps",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
        description: "Interactive availability slot booking engine with built-in time range conflicts checking and local calendar layouts.",
        tags: ["JavaScript", "HTML/CSS", "Date Validation", "Clean UI"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "Event Management App 🎉",
        category: "Sports & Events",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
        description: "Create events, log details, and verify guest attendee counts inside an administrative control panel dashboard.",
        tags: ["Next.js", "Operations", "Admin Board", "Responsive Grid"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "Media Logger App 🎥",
        category: "Media & Databases",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop",
        description: "Index recorded media clips, apply descriptive tagging systems, and record precise timestamp references for editing templates.",
        tags: ["SQL Basics", "Database Schema", "Metadata Tagging", "React"],
        links: { demo: "#", github: "#" },
    }
];

export function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <Section id="projects" className="bg-black/40 backdrop-blur-sm relative border-y border-white/5">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">PROJECTS</h2>
                        <div className="w-20 h-1 bg-accent" />
                    </motion.div>

                    {/* Filter categories */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-wrap gap-2 bg-black/45 border border-border p-1 rounded-lg"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded transition-all duration-300 ${
                                    selectedCategory === cat
                                        ? "bg-accent text-black font-bold box-glow"
                                        : "text-muted-foreground hover:text-white"
                                }`}
                                data-cursor-text="FILTER"
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative overflow-hidden bg-muted/30 border border-border hover:border-accent/30 hover:box-glow transition-all duration-500 rounded-lg flex flex-col justify-between"
                                data-cursor-text="VIEW"
                            >
                                <div>
                                    <div className="aspect-video relative overflow-hidden">
                                        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <span className="text-accent text-[10px] font-mono tracking-widest uppercase mb-1.5 block">
                                                    {project.category}
                                                </span>
                                                <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                                <a href={project.links.github} className="hover:text-accent transition-colors" data-cursor-text="CODE"><Github size={18} /></a>
                                                <a href={project.links.demo} className="hover:text-accent transition-colors" data-cursor-text="LIVE"><ExternalLink size={18} /></a>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="px-6 pb-6 pt-0">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-[9px] px-2 py-1 bg-white/5 border border-white/5 text-muted-foreground font-mono">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </Section>
    );
}
