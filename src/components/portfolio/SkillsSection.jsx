import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Palette, Wrench, Smartphone } from 'lucide-react';

const techStack = [
    {
        category: "Frontend",
        icon: Code2,
        color: "from-cyan-500 to-blue-500",
        technologies: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 92 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Framer Motion", level: 88 }
        ]
    },
    {
        category: "Backend",
        icon: Database,
        color: "from-blue-500 to-purple-500",
        technologies: [
            { name: "Node.js", level: 90 },
            { name: "Express", level: 88 },
            { name: "MongoDB", level: 85 },
            { name: "PostgreSQL", level: 82 },
            { name: "Python", level: 80 }
        ]
    },
    {
        category: "Blockchain",
        icon: Globe,
        color: "from-purple-500 to-pink-500",
        technologies: [
            { name: "Solidity", level: 85 },
            { name: "Ethers.js", level: 88 },
            { name: "Web3.js", level: 85 },
            { name: "Hardhat", level: 82 },
            { name: "Smart Contracts", level: 87 }
        ]
    },
    {
        category: "Mobile",
        icon: Smartphone,
        color: "from-pink-500 to-red-500",
        technologies: [
            { name: "React Native", level: 85 },
            { name: "Flutter", level: 75 },
            { name: "Capacitor", level: 80 },
            { name: "PWA", level: 90 }
        ]
    },
    {
        category: "Tools & Others",
        icon: Wrench,
        color: "from-orange-500 to-yellow-500",
        technologies: [
            { name: "Git & GitHub", level: 95 },
            { name: "Docker", level: 80 },
            { name: "AWS", level: 78 },
            { name: "Figma", level: 85 },
            { name: "VS Code", level: 98 }
        ]
    }
];

export default function SkillsSection() {
    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0a0f1c] to-[#0f172a] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Tech Stack &
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Skills</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        We master modern technologies to build cutting-edge solutions for your business.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techStack.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all group"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <category.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.category}</h3>
                            </div>

                            {/* Technologies List */}
                            <div className="space-y-4">
                                {category.technologies.map((tech, techIndex) => (
                                    <div key={techIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-300 text-sm font-medium">{tech.name}</span>
                                            <span className="text-cyan-400 text-sm font-semibold">{tech.level}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${tech.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.1 + techIndex * 0.05, ease: "easeOut" }}
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
                >
                    {[
                        { value: "25+", label: "Technologies" },
                        { value: "100+", label: "Projects" },
                        { value: "50+", label: "Happy Clients" },
                        { value: "5+", label: "Years Experience" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-xl bg-slate-800/20 border border-slate-700/50"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-slate-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
