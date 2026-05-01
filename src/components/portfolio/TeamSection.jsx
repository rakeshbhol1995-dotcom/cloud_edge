import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
    {
        name: "Rakesh Kumar Bhol",
        role: "Full Stack Developer & Team Lead",
        image: "/images/rakesh.png",
        specialization: "Web3, Blockchain & Backend Architecture",
        description: "Expert in building scalable applications with React, Node.js, and Solidity. Passionate about decentralized technologies.",
        skills: ["React", "Node.js", "Solidity", "MongoDB", "AWS"],
        social: {
            github: "#",
            linkedin: "#",
            twitter: "#",
            email: "rakesh@cloudedge.tech"
        }
    },
    {
        name: "Sneha Patel",
        role: "Frontend Developer & UI/UX Designer",
        image: "/images/sneha.png",
        specialization: "Modern UI/UX & Interactive Experiences",
        description: "Creates beautiful, responsive interfaces with attention to detail. Specializes in React, animations, and user experience design.",
        skills: ["React", "TypeScript", "Tailwind", "Figma", "Framer Motion"],
        social: {
            github: "#",
            linkedin: "#",
            twitter: "#",
            email: "sneha@example.com"
        }
    },
    {
        name: "Priya Das",
        role: "Full Stack Developer",
        image: "/images/priya.png",
        specialization: "Mobile Apps & API Development",
        description: "Builds cross-platform mobile applications and robust APIs. Expert in React Native, Node.js, and database optimization.",
        skills: ["React Native", "Node.js", "PostgreSQL", "REST APIs", "Flutter"],
        social: {
            github: "#",
            linkedin: "#",
            twitter: "#",
            email: "priya@example.com"
        }
    }
];

export default function TeamSection() {
    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0f172a] to-[#0a0f1c] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[80px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4">
                        Our Team
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Meet The
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Experts</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Talented developers dedicated to bringing your vision to life.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all overflow-hidden">
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Profile Image - Hidden as per request */}
                                {/* Image container removed */}

                                {/* Info */}
                                <div className="text-center mb-6 relative z-10 mt-4">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-cyan-400 text-sm font-semibold mb-2">{member.role}</p>
                                    <p className="text-slate-500 text-xs mb-4">{member.specialization}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">{member.description}</p>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 justify-center mb-6 relative z-10">
                                    {member.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-xs font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>


                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
