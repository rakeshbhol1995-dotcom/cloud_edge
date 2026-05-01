import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    Smartphone,
    Blocks,
    ShoppingCart,
    Server,
    Search,
    Coins,
    LayoutDashboard,
    ShieldCheck,
    ArrowUpRight
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies for optimal performance and scalability.",
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: ShieldCheck,
        title: "Smart Contract Audit",
        description: "Comprehensive security analysis and auditing of smart contracts to ensure safety and reliability.",
        gradient: "from-emerald-500 to-green-500",
        highlight: true,
        badge: "High Demand"
    },
    {
        icon: Coins,
        title: "Token Creation",
        description: "End-to-end token development across multi-chains (ERC20, SPL, etc.) with custom tokenomics.",
        gradient: "from-yellow-400 to-orange-500",
        highlight: true,
        badge: "Popular"
    },
    {
        icon: Blocks,
        title: "DEX Development",
        description: "Building decentralized exchanges with AMM protocols, liquidity pools, and swap interfaces.",
        gradient: "from-violet-500 to-purple-600",
        highlight: true,
        badge: "Trending"
    },
    {
        icon: ArrowUpRight, // Need to make sure this is imported or use existing icon
        title: "Bonding Curve",
        description: "Advanced bonding curve implementations for dynamic token pricing and automated market making.",
        gradient: "from-pink-500 to-rose-600",
        highlight: true,
        badge: "Hot"
    },
    {
        icon: ShoppingCart,
        title: "eCommerce Development",
        description: "Full-featured online stores with payment integration, inventory management, and analytics.",
        gradient: "from-green-500 to-teal-500"
    },
    {
        icon: LayoutDashboard,
        title: "UI/UX Design",
        description: "User-centered design with intuitive interfaces that enhance user experience and engagement.",
        gradient: "from-pink-500 to-rose-500"
    }
];

export default function ServicesSection({ onServiceClick }) {
    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0a0f1c] to-[#0f172a] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4">
                        What We Offer
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Services We
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Provide</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        From simple landing pages to complex e-commerce stores, we build everything you need to succeed online.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            onClick={() => onServiceClick && onServiceClick(service)}
                            className="group relative p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-transparent overflow-hidden cursor-pointer"
                        >
                            {/* Hover Gradient Border */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            {/* Card Background */}
                            <div className="absolute inset-[1px] bg-[#0f172a] rounded-2xl" />

                            <div className="relative z-10">
                                {/* Badge if available */}
                                {service.highlight && (
                                    <div className="absolute top-0 right-0">
                                        <span className={`inline-block px-3 py-1 rounded-bl-xl rounded-tr-xl bg-gradient-to-r ${service.gradient} text-[10px] font-bold text-white uppercase tracking-wider shadow-lg`}>
                                            {service.badge}
                                        </span>
                                    </div>
                                )}

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} p-0.5 mb-5`}>
                                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Arrow - Removed as per request */}
                                {/* <div className="mt-5 flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-sm font-medium">Learn More</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
