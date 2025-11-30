"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="bg-black/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">GET IN TOUCH</h2>
                    <p className="text-muted-foreground">
                        Have a project in mind? Let's build something extraordinary together.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-mono text-muted-foreground uppercase">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent focus:outline-none focus:bg-white/10 transition-colors text-white"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-mono text-muted-foreground uppercase">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent focus:outline-none focus:bg-white/10 transition-colors text-white"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-mono text-muted-foreground uppercase">Message</label>
                        <textarea
                            id="message"
                            rows={6}
                            className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent focus:outline-none focus:bg-white/10 transition-colors text-white resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <div className="text-center">
                        <Button size="lg" className="w-full md:w-auto">
                            Send Message
                            <Send className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </motion.form>
            </div>
        </Section>
    );
}
