import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const categories = ["All", "Web3", "eCommerce", "Mobile", "Web App"];

const projects = [
    {
        id: 1,
        title: "DeFi Exchange Platform",
        category: "Web3",
        description: "Decentralized exchange with liquidity pools and yield farming features",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
        tags: ["Solidity", "React", "Ethereum"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "NFT Marketplace",
        category: "Web3",
        description: "Full-featured NFT marketplace with minting, trading, and auctions",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=600&fit=crop",
        tags: ["Web3.js", "IPFS", "Next.js"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Fashion eCommerce",
        category: "eCommerce",
        description: "Modern online store with AR try-on feature and AI recommendations",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        tags: ["Shopify", "React", "Node.js"],
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Crypto Wallet App",
        category: "Mobile",
        description: "Multi-chain cryptocurrency wallet with DeFi integration",
        image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&h=600&fit=crop",
        tags: ["React Native", "Web3", "TypeScript"],
        link: "#",
        github: "#"
    },
    {
        id: 5,
        title: "SaaS Dashboard",
        category: "Web App",
        description: "Analytics dashboard with real-time data visualization",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        tags: ["React", "D3.js", "PostgreSQL"],
        link: "#",
        github: "#"
    },
    {
        id: 6,
        title: "Food Delivery App",
        category: "Mobile",
        description: "On-demand food delivery platform with real-time tracking",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
        tags: ["Flutter", "Firebase", "Maps"],
        link: "#",
        github: "#"
    }
];

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section className="py-24 lg:py-32 bg-[#0a0f1c] relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4">
                        Our Portfolio
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Featured
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Projects</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        A selection of our recent work delivering high-impact solutions across different technologies and industries.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                                : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700/50"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                layout
                                className="group relative rounded-2xl overflow-hidden bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent opacity-60" />

                                    {/* Overlay Actions - Removed as per request */}
                                    <div className="absolute inset-0 bg-cyan-500/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        {/* Icons removed */}
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-sm text-cyan-400 text-xs font-medium border border-cyan-500/30">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-lg bg-slate-800/50 text-slate-400 text-xs border border-slate-700/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-slate-700 hover:border-cyan-500/50 text-white hover:bg-cyan-500/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                    >
                        View All Projects
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
