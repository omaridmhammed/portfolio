import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold tracking-tighter mb-2 uppercase">
                        OMAR IDMHAMMED<span className="text-accent">.</span>
                    </h3>
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="https://twitter.com" className="text-muted-foreground hover:text-accent transition-colors">
                        <Twitter size={20} />
                    </Link>
                    <Link href="https://linkedin.com" className="text-muted-foreground hover:text-accent transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://instagram.com/omar_____or" className="text-muted-foreground hover:text-accent transition-colors">
                        <Instagram size={20} />
                    </Link>
                    <Link href="mailto:hello@example.com" className="text-muted-foreground hover:text-accent transition-colors">
                        <Mail size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
