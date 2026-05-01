import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Download, Code2, Palette, Database, Globe } from "lucide-react";

const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "Node.js / Express", level: 90 },
    { name: "Solidity / Web3", level: 85 },
    { name: "TypeScript", level: 92 },
    { name: "MongoDB / PostgreSQL", level: 88 },
    { name: "AWS / Cloud", level: 82 }
];

const expertise = [
    { icon: Code2, title: "Frontend Dev", desc: "React, Vue, Angular" },
    { icon: Database, title: "Backend Dev", desc: "Node, Python, Go" },
    { icon: Globe, title: "Web3 / Blockchain", desc: "Solidity, Ethereum" },
    { icon: Palette, title: "UI/UX Design", desc: "Figma, Adobe XD" }
];

export default function AboutSection() {
    return (
        <section className="py-24 lg:py-32 bg-[#0a0f1c] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left - About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4"
                        >
                            About Me
                        </motion.span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Crafting Digital Experiences
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                That Matter
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            I am a passionate developer and designer specializing in building
                            cutting-edge applications across Web3, Blockchain, Cryptocurrency, and eCommerce platforms.
                            My mission is to transform complex ideas into elegant, user-friendly solutions.
                        </p>

                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            From decentralized applications (dApps) to scalable enterprise solutions,
                            I bring technical expertise and creative problem-solving to every project.
                            Let's build something extraordinary together.
                        </p>

                        {/* Expertise Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {expertise.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors group"
                                >
                                    <item.icon className="w-6 h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                                    <p className="text-slate-500 text-xs">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="p-8 rounded-2xl bg-slate-800/20 border border-slate-700/50 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-8">Technical Skills</h3>

                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-300 font-medium">{skill.name}</span>
                                            <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { value: "100+", label: "Projects" },
                                { value: "50+", label: "Clients" },
                                { value: "5+", label: "Years" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/50"
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                        {stat.value}
                                    </div>
                                    <div className="text-slate-500 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
