"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Terminal as TerminalIcon, Send, ShieldAlert, Check } from "lucide-react";

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");
    const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) return;

        setFormStatus("sending");
        setTerminalLogs(["guest@omar:~$ run send_message.sh"]);

        const logs = [
            "Initializing secure uplink to host...",
            "Encrypting packet payloads (AES-256)...",
            `Sending payload from: ${email}...`,
            "Awaiting response from remote gateway...",
            "Uplink established. Connection code 200 OK.",
            "Transfer complete. Status: SUCCESS"
        ];

        logs.forEach((log, idx) => {
            setTimeout(() => {
                setTerminalLogs(prev => [...prev, `[system]: ${log}`]);
                if (idx === logs.length - 1) {
                    setTimeout(() => {
                        setFormStatus("success");
                    }, 500);
                }
            }, (idx + 1) * 600);
        });
    };

    const handleReset = () => {
        setName("");
        setEmail("");
        setMessage("");
        setFormStatus("idle");
        setTerminalLogs([]);
    };

    return (
        <Section id="contact" className="bg-black/50 relative border-t border-white/5 overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">GET IN TOUCH</h2>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                        Have a question, job opening, or want to collaborate? Initialize a connection below.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="border border-border bg-muted/20 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md"
                >
                    {/* Terminal Header */}
                    <div className="bg-[#0b0b12] px-4 py-3 border-b border-border flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground select-none">
                            <TerminalIcon className="w-3.5 h-3.5 text-accent" />
                            <span>guest@portfolio:~ - bash</span>
                        </div>
                        <div className="w-12" /> {/* spacer */}
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 md:p-8 font-mono text-xs md:text-sm text-foreground min-h-[360px] flex flex-col justify-between">
                        <AnimatePresence mode="wait">
                            {formStatus === "idle" && (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* Name Input */}
                                    <div className="space-y-2">
                                        <label className="text-accent flex items-center gap-1.5 select-none">
                                            <span>visitor@portfolio:~$</span>
                                            <span className="text-white">export VISITOR_NAME=</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="w-full bg-black/40 border border-border focus:border-accent p-3 focus:outline-none focus:bg-black/60 transition-all text-white rounded font-mono"
                                            placeholder='"John Doe"'
                                            data-cursor-text="WRITE"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label className="text-accent flex items-center gap-1.5 select-none">
                                            <span>visitor@portfolio:~$</span>
                                            <span className="text-white">export VISITOR_EMAIL=</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full bg-black/40 border border-border focus:border-accent p-3 focus:outline-none focus:bg-black/60 transition-all text-white rounded font-mono"
                                            placeholder='"john@example.com"'
                                            data-cursor-text="WRITE"
                                        />
                                    </div>

                                    {/* Message Input */}
                                    <div className="space-y-2">
                                        <label className="text-accent flex items-center gap-1.5 select-none">
                                            <span>visitor@portfolio:~$</span>
                                            <span className="text-white">cat &lt;&lt;EOF &gt; message.txt</span>
                                        </label>
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                            rows={5}
                                            className="w-full bg-black/40 border border-border focus:border-accent p-3 focus:outline-none focus:bg-black/60 transition-all text-white rounded font-mono resize-none leading-relaxed"
                                            placeholder="Write your message here... Then finish with EOF"
                                            data-cursor-text="WRITE"
                                        />
                                        <div className="text-[10px] text-muted-foreground select-none">EOF</div>
                                    </div>

                                    <div className="text-right pt-2">
                                        <Button 
                                            size="md" 
                                            variant="primary" 
                                            type="submit" 
                                            data-cursor-text="SEND"
                                            className="w-full sm:w-auto"
                                        >
                                            Submit Request
                                            <Send className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </motion.form>
                            )}

                            {formStatus === "sending" && (
                                <motion.div
                                    key="sending"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex-grow flex flex-col justify-start space-y-2 font-mono text-xs text-green-400 overflow-y-auto max-h-[300px]"
                                >
                                    {terminalLogs.map((log, index) => (
                                        <div key={index} className="leading-relaxed">
                                            {log}
                                        </div>
                                    ))}
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="inline-block w-2 h-4 bg-green-400"
                                    />
                                </motion.div>
                            )}

                            {formStatus === "success" && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex-grow flex flex-col items-center justify-center text-center space-y-6 py-8"
                                >
                                    <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                                        <Check className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-white uppercase tracking-wider">Uplink Confirmed</h3>
                                        <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
                                            Your message has successfully bypassed the firewall and landed in my inbox. I will reply shortly.
                                        </p>
                                    </div>
                                    <Button 
                                        size="sm" 
                                        variant="outline" 
                                        onClick={handleReset}
                                        data-cursor-text="RESET"
                                    >
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
