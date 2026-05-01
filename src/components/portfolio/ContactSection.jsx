import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Mail,
    MapPin,
    Phone,
    Send,
    Github,
    Linkedin,
    Twitter,
    MessageSquare,
    MessageCircle
} from "lucide-react";

const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@cloudedge.tech", href: "mailto:contact@cloudedge.tech" },
    { icon: Phone, label: "Phone", value: "+91 77900 09355", href: "tel:+917790009355" },
    { icon: MessageCircle, label: "WhatsApp", value: "+91 77900 09355", href: "https://wa.me/917790009355" },
    { icon: MapPin, label: "Location", value: "Bhubaneswar, Odisha, India" }
];

const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Request sent successfully! We will contact you shortly.');
    };

    return (
        <section className="py-24 lg:py-32 bg-[#0a0f1c] relative overflow-hidden">
            {/* Background */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4">
                        Get Started
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Contact Our
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Team</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Tell us about your project, and we will get back to you with a plan and quote.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.href || "#"}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors group block"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                                        <info.icon className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-sm">{info.label}</p>
                                        <p className="text-white font-medium">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* WhatsApp Quick Button */}
                        <motion.a
                            href="https://wa.me/917790009355?text=Hi!%20I'm%20interested%20in%20your%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="block"
                        >
                            <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white py-6 text-lg font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all">
                                <MessageCircle className="mr-2 w-5 h-5" />
                                Chat on WhatsApp
                            </Button>
                        </motion.a>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
                        >
                            <MessageSquare className="w-10 h-10 text-cyan-400 mb-4" />
                            <h4 className="text-white font-bold text-lg mb-2">Quick Response</h4>
                            <p className="text-slate-400 text-sm">
                                We typically respond within 24 hours. For urgent projects, feel free to call or WhatsApp directly.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-slate-400 text-sm mb-2">Your Name</label>
                                    <Input
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 h-12 rounded-xl"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-400 text-sm mb-2">Your Email</label>
                                    <Input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 h-12 rounded-xl"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-slate-400 text-sm mb-2">Project Type</label>
                                <Input
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    placeholder="e.g. Business Website, E-commerce, Portfolio..."
                                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 h-12 rounded-xl"
                                    required
                                />
                            </div>

                            <div className="mb-8">
                                <label className="block text-slate-400 text-sm mb-2">Project Details</label>
                                <Textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Describe your requirements, features you need, etc..."
                                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 rounded-xl min-h-[150px] resize-none"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-6 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending Request...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center gap-2">
                                        <Send className="w-5 h-5" />
                                        Send Request
                                    </div>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
