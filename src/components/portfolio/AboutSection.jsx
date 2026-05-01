import React from 'react';
import { motion } from 'framer-motion';
import { Film, Video, Clapperboard, Heart, Camera, MonitorPlay, Star } from "lucide-react";

const creations = [
    { icon: Video, title: "Corporate Films", desc: "Turning brands into powerful human stories with cinematic depth." },
    { icon: MonitorPlay, title: "Ad Films", desc: "Visually striking narratives that connect instantly and leave impact." },
    { icon: Heart, title: "NGO & Social", desc: "Purpose-driven storytelling rooted in truth and empathy." },
    { icon: Camera, title: "Documentaries", desc: "Real stories told with authenticity, sensitivity, and depth." },
    { icon: Film, title: "Short Films", desc: "Bold, expressive narratives exploring the human condition." }
];

const works = [
    { title: '"Last Drop" (2020)', desc: 'Documentary on water conservation recognized at international film festivals (USA, Japan).' },
    { title: '"Trapped" (2020)', desc: 'A poignant reflection on life during the COVID-19 lockdown.' },
    { title: '"Zwigato" (2023)', desc: 'Worked as Assistant Director, gaining experience in large-scale feature filmmaking.' },
    { title: '"Jengaburu: The Curse" (Sony LIV)', desc: 'Assisted in direction, coordination, and creative development.' },
    { title: '"The Diddle"', desc: 'Played a key role in production coordination and execution.' },
    { title: '"Baghuni – Dance Like a Tiger" (Upcoming)', desc: 'Multilingual Odia feature film & international co-production (NFDC & Glocal Films).' }
];

export default function AboutSection() {
    return (
        <section className="py-24 lg:py-32 bg-[#0a0f1c] relative overflow-hidden" id="about">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left - About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4"
                            >
                                About — Infinity Light Drawings
                            </motion.span>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Nishith Sahasransu Ray
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-2 text-2xl md:text-3xl">
                                    Storytelling with Soul
                                </span>
                            </h2>
                        </div>

                        <blockquote className="border-l-4 border-cyan-500 pl-6 py-2 my-8">
                            <p className="text-xl md:text-2xl text-slate-300 italic font-light">
                                "Cinema has been a friend, a companion, a guru—everything to me."
                            </p>
                        </blockquote>

                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                            <p>
                                Welcome to <strong className="text-white font-medium">Infinity Light Drawings</strong>—where stories don’t just unfold, they breathe. 
                                I am a filmmaker driven by a simple but powerful belief: cinema isn’t just watched—it’s felt. 
                                It has the power to move people, shift perspectives, and stay with them long after the screen fades to black.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Journey</h3>
                            <p>
                                My cinematic voice is shaped by timeless masters and evolving storytelling—from poetic realism to bold contemporary narratives. 
                                I’ve learned that every frame carries emotion, every silence has meaning, and every story—when told right—can leave a lasting imprint.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Where Vision Meets the Frame</h3>
                            <p>
                                Every project begins with one question: <em className="text-cyan-400">“What story needs to be told?”</em><br/><br/>
                                Cinema is more than visuals—it’s an experience. A harmony of light, emotion, and storytelling crafted with intention. 
                                From films to commercials to digital content, we bring ideas to life with a distinct artistic voice.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right - Skills & Works */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* What I Create Grid */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Clapperboard className="text-cyan-400 w-6 h-6" />
                                What I Create
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {creations.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:bg-slate-800/50 group"
                                    >
                                        <item.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Selected Works */}
                        <div className="p-8 rounded-2xl bg-slate-800/20 border border-slate-700/50 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                <Star className="text-cyan-400 w-6 h-6" />
                                Selected Works & Collaborations
                            </h3>

                            <div className="space-y-6">
                                {works.map((work, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-6 border-l-2 border-slate-700 hover:border-cyan-500 transition-colors"
                                    >
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500" />
                                        <h4 className="text-white font-medium mb-1">{work.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{work.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <p className="text-2xl md:text-3xl font-light text-slate-300 italic">
                        "Every film is an experience, and every experience can be unforgettable."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
