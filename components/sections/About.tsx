"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { 
    Code, 
    Database, 
    BookOpen, 
    Briefcase, 
    Award, 
    Users, 
    CheckCircle, 
    MapPin, 
    Mail, 
    Phone, 
    Terminal, 
    HeartHandshake, 
    Globe, 
    Sparkles,
    UserCheck,
    Compass
} from "lucide-react";

// Personal Info Details
const personalInfo = [
    { label: "Email", value: "oidmhammed@gmail.com", icon: <Mail className="w-4 h-4" />, href: "mailto:oidmhammed@gmail.com" },
    { label: "Location", value: "Ottawa, Canada", icon: <MapPin className="w-4 h-4" />, href: null },
    { label: "Status", value: "Open to Tech & IT Roles", icon: <CheckCircle className="w-4 h-4" />, href: null },
];

// Software & Technical Skills
const techSkills = [
    { name: "Web Dev (HTML/CSS/JS)", score: 90 },
    { name: "Software Eng. Fundamentals", score: 85 },
    { name: "SQL & Databases", score: 80 },
    { name: "C# Programming Basics", score: 75 },
    { name: "IT Support & Networking", score: 85 },
    { name: "UI/UX Design", score: 80 }
];

// Professional Skills
const profSkills = [
    { name: "Leadership & Team Management", score: 90 },
    { name: "Communication", score: 90 },
    { name: "Coaching & Training", score: 95 },
    { name: "Event Coordination", score: 85 },
    { name: "Research & Analysis", score: 80 },
    { name: "Customer Interaction", score: 90 }
];

// Languages List
const languagesList = [
    { name: "French", level: "Native / C2 (TCF certified)" },
    { name: "Arabic", level: "Native" },
    { name: "English", level: "C1 Professional level" },
    { name: "Spanish", level: "B1 Intermediate" }
];

// Education List
const educationList = [
    {
        school: "Collège La Cité",
        degree: "Diploma Completed (Graduated)",
        location: "Ottawa, Ontario, Canada",
        details: [
            "Studied computer programming with focus on software engineering and web development.",
            "Gained hands-on experience in coding, system development, and applied IT projects.",
            "Developed foundational skills in software development and problem-solving."
        ]
    },
    {
        school: "Al Akhawayn University in Ifrane (AUI)",
        degree: "Preparatory Year Completed",
        location: "Ifrane, Morocco",
        details: [
            "One-year preparatory academic program.",
            "English-language, American-style university system.",
            "Foundation studies in communication, critical thinking, and interdisciplinary subjects."
        ]
    }
];

// Tech Experience List
const techExperienceList = [
    {
        company: "Web Software Developer",
        role: "Full-time, Hybrid Role",
        location: "Ottawa, Canada",
        period: "Aug 2025 – Present",
        details: [
            "Front-end development and UI design.",
            "Web application development using multiple software tools and technologies.",
            "Building and maintaining web-based systems."
        ]
    },
    {
        company: "Fiverr",
        role: "Freelance Software Engineer",
        location: "Remote",
        period: "Jan 2023 – Present",
        details: [
            "Freelance software and web development projects.",
            "Client-based coding and development work.",
            "Hands-on experience in front-end and backend basics."
        ]
    },
    {
        company: "Techcorner",
        role: "Assistant IT Manager (Internship)",
        location: "Casablanca, Morocco",
        period: "Jul 2023 – Dec 2023",
        details: [
            "IT support and network administration tasks.",
            "SQL database work and system maintenance.",
            "Technical assistance in IT operations."
        ]
    },
    {
        company: "Webstudio",
        role: "Web Designer",
        location: "Remote",
        period: "Jan 2022 – Dec 2023",
        details: [
            "Web design and UI creation.",
            "Front-end design work and layout building.",
            "Remote collaboration on web projects."
        ]
    }
];

// Community & Other Experience List
const communityExperienceList = [
    {
        company: "Neo Financial",
        role: "Financial Sales Representative",
        location: "Ottawa, Canada",
        period: "Feb 2026 – Present",
        details: [
            "Financial sales and customer support responsibilities.",
            "Exposure to financial products and client interaction.",
            "Communication and problem-solving in a professional environment."
        ]
    },
    {
        company: "Social Planning Council of Ottawa",
        role: "Senior Social Worker & Researcher",
        location: "Ottawa, Canada",
        period: "Oct 2025 – Present",
        details: [
            "Community support and research-related activities.",
            "Educational support and mentoring for local programs.",
            "Involvement in social programs and community development."
        ]
    },
    {
        company: "MIFO",
        role: "Event Animator",
        location: "Ottawa, Canada",
        period: "Aug 2025 – Present",
        details: [
            "Event coordination and animation activities.",
            "Public interaction and community engagement.",
            "Support for cultural and community events."
        ]
    },
    {
        company: "Active Newcomer Youth Ottawa",
        role: "Match Official",
        location: "Ottawa, Canada",
        period: "Aug 2025 – Present",
        details: [
            "Officiating youth sports matches.",
            "Sports analytics and rule enforcement.",
            "Ensuring fair play and structured competition."
        ]
    },
    {
        company: "Active Newcomer Youth Ottawa",
        role: "Camera Assistant (On-Call)",
        location: "Ottawa, Canada",
        period: "Aug 2025 – Present",
        details: [
            "Video recording and camera operation.",
            "Technical support for media production.",
            "Experience with video equipment handling."
        ]
    },
    {
        company: "Ontario Soccer",
        role: "Soccer Coach (U8–U16)",
        location: "Ottawa, Canada",
        period: "Jul 2025 – Present",
        details: [
            "Coaching youth soccer teams.",
            "Training development and performance improvement.",
            "Leadership and sports education."
        ]
    }
];

// Certifications List
const techCertifications = [
    { title: "Google IT Support Certificate", issuer: "Google (2026)" },
    { title: "SQL Fundamentals", issuer: "Udemy (2024)" },
    { title: "C# Fundamentals", issuer: "SoloLearn" }
];

const leadershipCertifications = [
    { title: "Applied Sport Psychology & Leadership in Sport", issuer: "Udemy (2025)" },
    { title: "Leading & Managing People", issuer: "Udemy" },
    { title: "Pedagogy in Teaching & Classroom Management", issuer: "Udemy" }
];

// Interests List
const interests = [
    "Software Engineering",
    "Web Development",
    "IT Systems & Networking",
    "Freelance Development",
    "Sports Coaching & Leadership",
    "Community Development"
];

export function About() {
    const [activeTab, setActiveTab] = useState<"education" | "skills" | "certifications" | "interests">("education");
    const [experienceToggle, setExperienceToggle] = useState<"tech" | "community">("tech");

    const tabs = [
        { id: "education", label: "Education & History", icon: <BookOpen className="w-4 h-4" /> },
        { id: "skills", label: "Skills & Languages", icon: <Terminal className="w-4 h-4" /> },
        { id: "certifications", label: "Certificates", icon: <Award className="w-4 h-4" /> },
        { id: "interests", label: "Interests", icon: <Compass className="w-4 h-4" /> }
    ];

    return (
        <Section id="about" className="relative border-b border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">ABOUT ME</h2>
                    <div className="w-20 h-1 bg-accent" />
                </motion.div>

                {/* Info and Core Bio Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="lg:col-span-2 space-y-6">
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            I am a software and web developer with experience in IT support, freelance development, and multidisciplinary professional roles. I specialize in web development, software engineering fundamentals, and practical technical problem-solving. I also have experience in leadership, coaching, research, and community-based work.
                        </p>
                        
                        <div className="border border-border/40 p-4 rounded-lg bg-accent/5 flex items-start gap-3">
                            <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent">Career Focus Area</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                                    Strongest Identity: **Software & Web Developer + IT Support + Freelance Experience**. Focusing on writing clean, maintainable web systems and database query structures.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Personal Stats sidebar */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-mono tracking-widest text-accent uppercase mb-4">Quick Details</h3>
                        <div className="space-y-3">
                            {personalInfo.map((info, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-muted/10 border border-border/60 rounded-lg hover:border-accent/20 transition-all">
                                    <div className="text-accent">{info.icon}</div>
                                    <div>
                                        <p className="text-[10px] text-muted-foreground uppercase font-mono tracking-wider">{info.label}</p>
                                        {info.href ? (
                                            <a href={info.href} className="text-xs font-semibold hover:text-accent transition-colors" data-cursor-text="CONTACT">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-xs font-semibold">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Interactive Tabbed Interface */}
                <div className="border border-border bg-muted/10 rounded-xl overflow-hidden backdrop-blur-md">
                    {/* Tab Navigation */}
                    <div className="flex border-b border-border bg-muted/20 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-6 py-4 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 border-b-2 outline-none whitespace-nowrap ${
                                    activeTab === tab.id
                                        ? "text-accent border-accent bg-accent/5"
                                        : "text-muted-foreground border-transparent hover:text-white hover:bg-white/5"
                                }`}
                                data-cursor-text="SELECT"
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content Panels */}
                    <div className="p-6 md:p-8 min-h-[420px]">
                        <AnimatePresence mode="wait">
                            {activeTab === "education" && (
                                <motion.div
                                    key="education"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                                >
                                    {/* Education Column */}
                                    <div className="lg:col-span-5 space-y-6">
                                        <h4 className="text-sm font-mono tracking-widest text-accent uppercase mb-4 flex items-center gap-2">
                                            <BookOpen className="w-4 h-4" /> Academic Timeline
                                        </h4>
                                        <div className="space-y-6 relative pl-4 border-l border-border">
                                            {educationList.map((edu, idx) => (
                                                <div key={idx} className="relative group">
                                                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-4 border-background group-hover:box-glow transition-all" />
                                                    <h5 className="font-bold text-foreground text-sm">{edu.school}</h5>
                                                    <p className="text-[10px] text-accent-secondary font-mono mt-0.5">{edu.degree}</p>
                                                    <p className="text-[9px] text-muted-foreground mt-0.5">{edu.location}</p>
                                                    <ul className="mt-2 space-y-1 pl-4 list-disc text-xs text-muted-foreground leading-relaxed">
                                                        {edu.details.map((detail, dIdx) => (
                                                            <li key={dIdx}>{detail}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Experience Column */}
                                    <div className="lg:col-span-7 space-y-6">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-2">
                                            <h4 className="text-sm font-mono tracking-widest text-accent uppercase flex items-center gap-2">
                                                <Briefcase className="w-4 h-4" /> Professional Experience
                                            </h4>
                                            
                                            {/* Sub-toggle buttons */}
                                            <div className="flex bg-black/45 border border-border p-0.5 rounded">
                                                <button
                                                    onClick={() => setExperienceToggle("tech")}
                                                    className={`px-3 py-1 text-[10px] font-mono font-semibold rounded uppercase tracking-wider transition-all ${
                                                        experienceToggle === "tech"
                                                            ? "bg-accent text-black font-bold"
                                                            : "text-muted-foreground hover:text-white"
                                                    }`}
                                                    data-cursor-text="TECH"
                                                >
                                                    Tech Roles
                                                </button>
                                                <button
                                                    onClick={() => setExperienceToggle("community")}
                                                    className={`px-3 py-1 text-[10px] font-mono font-semibold rounded uppercase tracking-wider transition-all ${
                                                        experienceToggle === "community"
                                                            ? "bg-accent text-black font-bold"
                                                            : "text-muted-foreground hover:text-white"
                                                    }`}
                                                    data-cursor-text="COMMUNITY"
                                                >
                                                    Other Roles
                                                </button>
                                            </div>
                                        </div>

                                        <div className="space-y-6 relative pl-4 border-l border-border max-h-[380px] overflow-y-auto pr-2">
                                            <AnimatePresence mode="wait">
                                                {experienceToggle === "tech" ? (
                                                    <motion.div
                                                        key="tech-exp"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="space-y-6"
                                                    >
                                                        {techExperienceList.map((exp, idx) => (
                                                            <div key={idx} className="relative group">
                                                                <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-4 border-background group-hover:box-glow transition-all" />
                                                                <div className="flex justify-between items-start flex-wrap gap-1">
                                                                    <h5 className="font-bold text-foreground text-sm">{exp.company}</h5>
                                                                    <span className="text-[10px] font-mono text-accent bg-accent/5 px-2 py-0.5 border border-accent/10 rounded">{exp.period}</span>
                                                                </div>
                                                                <p className="text-xs text-accent-secondary font-mono mt-0.5">{exp.role}</p>
                                                                <p className="text-[9px] text-muted-foreground mt-0.5">{exp.location}</p>
                                                                <ul className="mt-2 space-y-1 pl-4 list-disc text-xs text-muted-foreground leading-relaxed">
                                                                    {exp.details.map((detail, dIdx) => (
                                                                        <li key={dIdx}>{detail}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="comm-exp"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="space-y-6"
                                                    >
                                                        {communityExperienceList.map((exp, idx) => (
                                                            <div key={idx} className="relative group">
                                                                <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-secondary border-4 border-background group-hover:box-glow-purple transition-all" />
                                                                <div className="flex justify-between items-start flex-wrap gap-1">
                                                                    <h5 className="font-bold text-foreground text-sm">{exp.company}</h5>
                                                                    <span className="text-[10px] font-mono text-accent-secondary bg-accent-secondary/5 px-2 py-0.5 border border-accent-secondary/10 rounded">{exp.period}</span>
                                                                </div>
                                                                <p className="text-xs text-accent-secondary font-mono mt-0.5">{exp.role}</p>
                                                                <p className="text-[9px] text-muted-foreground mt-0.5">{exp.location}</p>
                                                                <ul className="mt-2 space-y-1 pl-4 list-disc text-xs text-muted-foreground leading-relaxed">
                                                                    {exp.details.map((detail, dIdx) => (
                                                                        <li key={dIdx}>{detail}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "skills" && (
                                <motion.div
                                    key="skills"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                                >
                                    {/* Software & Technical Skills */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-mono tracking-widest text-accent uppercase mb-2 flex items-center gap-2">
                                            <Terminal className="w-4 h-4" /> Technical Skills
                                        </h4>
                                        <div className="space-y-3">
                                            {techSkills.map((skill, idx) => (
                                                <div key={idx} className="p-3 bg-muted/20 border border-border rounded-lg">
                                                    <span className="text-xs font-semibold text-foreground block mb-2">{skill.name}</span>
                                                    <div className="h-1 bg-border rounded-full overflow-hidden">
                                                        <motion.div
                                                            className="h-full bg-accent"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${skill.score}%` }}
                                                            transition={{ duration: 1, delay: idx * 0.05 }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Professional Skills */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-mono tracking-widest text-accent-secondary uppercase mb-2 flex items-center gap-2">
                                            <UserCheck className="w-4 h-4" /> Professional Skills
                                        </h4>
                                        <div className="space-y-3">
                                            {profSkills.map((skill, idx) => (
                                                <div key={idx} className="p-3 bg-muted/20 border border-border rounded-lg">
                                                    <span className="text-xs font-semibold text-foreground block mb-2">{skill.name}</span>
                                                    <div className="h-1 bg-border rounded-full overflow-hidden">
                                                        <motion.div
                                                            className="h-full bg-accent-secondary"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${skill.score}%` }}
                                                            transition={{ duration: 1, delay: idx * 0.05 }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Languages Spoken */}
                                    <div className="space-y-6">
                                        <h4 className="text-sm font-mono tracking-widest text-accent uppercase mb-2 flex items-center gap-2">
                                            <Globe className="w-4 h-4" /> Languages Spoken
                                        </h4>
                                        <div className="space-y-3">
                                            {languagesList.map((lang, idx) => (
                                                <div key={idx} className="p-3 bg-muted/20 border border-border rounded-lg flex justify-between items-center">
                                                    <span className="text-xs font-bold text-foreground">{lang.name}</span>
                                                    <span className="text-[9px] font-mono text-accent-secondary uppercase tracking-wider bg-accent-secondary/10 px-2 py-0.5 rounded border border-accent-secondary/20">{lang.level}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "certifications" && (
                                <motion.div
                                    key="certifications"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                >
                                    {/* Technical Credentials */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-mono tracking-widest text-accent uppercase mb-2 flex items-center gap-2">
                                            <Award className="w-4 h-4" /> Technical Credentials
                                        </h4>
                                        <div className="space-y-3">
                                            {techCertifications.map((cert, idx) => (
                                                <div key={idx} className="p-4 bg-muted/20 border border-border rounded-lg flex items-start gap-3 hover:border-accent/30 transition-colors">
                                                    <Award className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <h5 className="text-xs font-bold text-foreground">{cert.title}</h5>
                                                        <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{cert.issuer}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Development & Leadership Credentials */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-mono tracking-widest text-accent-secondary uppercase mb-2 flex items-center gap-2">
                                            <Users className="w-4 h-4" /> Leadership & Methods
                                        </h4>
                                        <div className="space-y-3">
                                            {leadershipCertifications.map((cert, idx) => (
                                                <div key={idx} className="p-4 bg-muted/20 border border-border rounded-lg flex items-start gap-3 hover:border-accent-secondary/30 transition-colors">
                                                    <Award className="w-5 h-5 text-accent-secondary mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <h5 className="text-xs font-bold text-foreground">{cert.title}</h5>
                                                        <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{cert.issuer}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "interests" && (
                                <motion.div
                                    key="interests"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col justify-center items-center py-6 text-center space-y-6"
                                >
                                    <Compass className="w-12 h-12 text-accent animate-pulse" />
                                    <div>
                                        <h4 className="text-sm font-mono tracking-widest text-accent uppercase mb-2">Interests & Drives</h4>
                                        <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                                            Areas where I focus my energy, continue learning, and invest creative and professional efforts.
                                        </p>
                                    </div>
                                    
                                    <div className="flex flex-wrap justify-center gap-3 max-w-xl">
                                        {interests.map((interest, idx) => (
                                            <span 
                                                key={idx} 
                                                className="px-4 py-2 bg-muted/30 border border-border hover:border-accent/40 rounded-full text-xs font-semibold text-white/95 transition-all duration-300"
                                            >
                                                {interest}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Section>
    );
}
