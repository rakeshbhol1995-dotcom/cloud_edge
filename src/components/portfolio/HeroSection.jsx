import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1c]">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-[150px]" />
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="order-2 lg:order-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-cyan-400 text-sm font-medium">Accepting New Projects</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
                        >
                            Hi, We are
                            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl">
                                Rakesh, Sneha & Priya
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-slate-400 max-w-xl mb-8 leading-relaxed"
                        >
                            Senior Full Stack Developers specializing in Web3, Smart Contract Audits, Token Creation, and modern web technologies. Transforming ideas into elegant, scalable digital solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4 mb-10"
                        >
                            <Button
                                size="lg"
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 group"
                            >
                                Get a Quote
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                                className="border-2 border-slate-700 hover:border-cyan-500/50 text-white hover:bg-cyan-500/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                            >
                                Our Work
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-6"
                        >
                            <span className="text-slate-500 text-sm">Follow us</span>
                            <div className="flex gap-4">
                                {[
                                    { icon: Github, href: "#" },
                                    { icon: Linkedin, href: "#" },
                                    { icon: Twitter, href: "#" }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors cursor-default"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Glowing Ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl opacity-30 animate-pulse" />

                            {/* Image Container */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
                                <img
                                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop"
                                    alt="Team Collaboration"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ 
                                    y: [0, -15, 0],
                                    x: [0, 5, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                                className="absolute -top-6 -right-6 px-5 py-3 rounded-2xl bg-slate-800/90 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/10 z-20"
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-cyan-400 font-black text-xl leading-none">5+</span>
                                    <span className="text-slate-400 text-[10px] uppercase tracking-widest mt-1 font-bold">Years Exp</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ 
                                    y: [0, 15, 0],
                                    x: [0, -5, 0],
                                    rotate: [0, -2, 0]
                                }}
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity, 
                                    ease: "easeInOut",
                                    delay: 0.5 
                                }}
                                className="absolute -bottom-6 -left-6 px-5 py-3 rounded-2xl bg-slate-800/90 border border-blue-500/30 backdrop-blur-md shadow-lg shadow-blue-500/10 z-20"
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-blue-400 font-black text-xl leading-none">50+</span>
                                    <span className="text-slate-400 text-[10px] uppercase tracking-widest mt-1 font-bold">Projects</span>
                                </div>
                            </motion.div>

                            {/* Orbiting Particles Animation */}
                            <div className="absolute inset-[-40px] pointer-events-none">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-full h-full relative"
                                >
                                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full blur-[2px] shadow-[0_0_10px_#22d3ee]" />
                                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full blur-[1px] shadow-[0_0_8px_#3b82f6]" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2"
                >
                    <div className="w-1.5 h-3 rounded-full bg-cyan-400" />
                </motion.div>
            </motion.div>
        </section>
    );
}
