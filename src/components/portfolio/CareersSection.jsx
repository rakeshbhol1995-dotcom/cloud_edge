import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Briefcase, Send, Upload, CheckCircle } from "lucide-react";

const jobOpenings = [
    {
        id: 1,
        title: "Frontend Developer",
        type: "Full-time",
        location: "Remote",
        description: "Build beautiful, responsive user interfaces with React and modern web technologies."
    },
    {
        id: 2,
        title: "Backend Developer",
        type: "Full-time",
        location: "Remote",
        description: "Design and implement scalable server-side applications with Node.js and databases."
    },
    {
        id: 3,
        title: "Full Stack Developer",
        type: "Full-time",
        location: "Remote",
        description: "Work across the entire stack, from UI to database, building complete solutions."
    },
    {
        id: 4,
        title: "Blockchain Developer",
        type: "Contract",
        location: "Remote",
        description: "Develop smart contracts and decentralized applications on Ethereum and other chains."
    }
];

export default function CareersSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        coverLetter: '',
        resume: null
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a server
        console.log('Application submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', position: '', coverLetter: '', resume: null });
        }, 3000);
    };

    return (
        <section id="careers" className="py-24 lg:py-32 bg-[#0a0f1c] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4">
                        Careers
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Join Our
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Team</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        We're always looking for talented developers to join our growing team. Apply now!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left - Job Openings */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">Open Positions</h3>
                        <div className="space-y-4">
                            {jobOpenings.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Briefcase className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-semibold text-lg mb-1">{job.title}</h4>
                                            <div className="flex gap-3 text-sm text-slate-400 mb-3">
                                                <span>{job.type}</span>
                                                <span>•</span>
                                                <span>{job.location}</span>
                                            </div>
                                            <p className="text-slate-400 text-sm">{job.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Application Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="p-8 rounded-2xl bg-slate-800/20 border border-slate-700/50 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6">Apply Now</h3>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                                    <h4 className="text-xl font-bold text-white mb-2">Application Submitted!</h4>
                                    <p className="text-slate-400">We'll review your application and get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-slate-300 text-sm font-medium mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 text-sm font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 text-sm font-medium mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                            placeholder="+91 1234567890"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 text-sm font-medium mb-2">
                                            Position *
                                        </label>
                                        <select
                                            name="position"
                                            value={formData.position}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                                        >
                                            <option value="">Select a position</option>
                                            {jobOpenings.map(job => (
                                                <option key={job.id} value={job.title}>{job.title}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 text-sm font-medium mb-2">
                                            Resume/CV *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                onChange={handleFileChange}
                                                required
                                                accept=".pdf,.doc,.docx"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:text-cyan-400 file:cursor-pointer hover:file:bg-cyan-500/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                            />
                                        </div>
                                        <p className="text-slate-500 text-xs mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 text-sm font-medium mb-2">
                                            Cover Letter
                                        </label>
                                        <textarea
                                            name="coverLetter"
                                            value={formData.coverLetter}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                                            placeholder="Tell us why you'd be a great fit..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300"
                                    >
                                        <Send className="mr-2 w-5 h-5" />
                                        Submit Application
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
