import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
];

const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#060912] border-t border-slate-800/50 relative">
            <div className="container mx-auto px-6 lg:px-12 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center overflow-hidden border border-slate-700/50">
                            <img src="/logo.png" alt="CloudEdge Tech Logo" className="w-8 h-8 object-contain" />
                        </div>
                        <span className="text-white font-bold text-xl">CloudEdge Tech</span>
                    </motion.div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-8">
                        {footerLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default"
                            >
                                <social.icon className="w-4 h-4" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-8" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-500 text-sm flex items-center gap-1"
                    >
                        © {new Date().getFullYear()} CloudEdge Tech. Made with
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        in India
                    </motion.p>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                        Back to top
                        <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </motion.button>
                </div>

                {/* Additional Footer Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 pt-8 border-t border-slate-800/30 text-center"
                >
                    <p className="text-slate-400 text-sm mb-2">
                        Designed & Developed by <span className="text-cyan-400">CloudEdge Tech</span>.
                    </p>
                    <p className="text-slate-500 text-xs max-w-2xl mx-auto leading-relaxed">
                        Transforming ideas into digital reality. Specializing in high-performance web applications, blockchain solutions, and modern user interfaces.
                        Committed to delivering excellence and driving innovation in every project.
                    </p>
                </motion.div>
            </div >
        </footer >
    );
}
