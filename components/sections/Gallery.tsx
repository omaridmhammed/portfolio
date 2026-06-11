"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Camera, Mic, Radio, Award } from "lucide-react";

const mediaItems = [
    {
        title: "Event Hosting & Sport Operations",
        role: "Event Host & Coordinator",
        description: "Coordinating match operations, live communications, and broadcasting setup for youth leagues and community events.",
        image: "/host.jpg",
        icon: <Radio className="w-5 h-5 text-accent" />,
        tag: "Hosting",
        span: "md:col-span-2"
    },
    {
        title: "Public Speaking & Workshops",
        role: "Speaker & Panelist",
        description: "Sharing learning methodologies, participating in academic panels, and presenting technical structures to peers.",
        image: "/speaker.jpg",
        icon: <Mic className="w-5 h-5 text-accent-secondary" />,
        tag: "Speaking",
        span: "md:col-span-1"
    },
    {
        title: "Action Sports Photography",
        role: "Media Producer",
        description: "Capturing high-speed athletic matches and editorial pictures from the sidelines of professional stadiums.",
        image: "/photographer_stadium.jpg",
        icon: <Camera className="w-5 h-5 text-accent-secondary" />,
        tag: "Media",
        span: "md:col-span-1"
    },
    {
        title: "Sideline Media Coverage",
        role: "Videographer & Photographer",
        description: "Equipped for multi-camera field setups, capturing live matches, and organizing digital media cataloging.",
        image: "/photographer_field.jpg",
        icon: <Camera className="w-5 h-5 text-accent" />,
        tag: "Photography",
        span: "md:col-span-2"
    }
];

export function Gallery() {
    return (
        <Section id="media" className="bg-black/30 backdrop-blur-sm border-b border-white/5 relative">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">BEYOND TECH</h2>
                    <p className="text-muted-foreground text-sm max-w-md">
                        Proof of my active involvement in event hosting, public speaking panels, and digital media production.
                    </p>
                    <div className="w-20 h-1 bg-accent mt-4" />
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-xl border border-border bg-muted/20 hover:border-accent/30 hover:box-glow transition-all duration-500 h-[380px] ${item.span}`}
                            data-cursor-text="EXPAND"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={`/portfolio${item.image}`}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                            </div>

                            {/* Content overlay */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase bg-accent/10 px-2.5 py-1 rounded border border-accent/20">
                                            {item.tag}
                                        </span>
                                        <div className="p-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-accent-secondary font-mono mt-0.5">
                                            {item.role}
                                        </p>
                                    </div>

                                    <p className="text-xs text-muted-foreground leading-relaxed max-w-md opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
