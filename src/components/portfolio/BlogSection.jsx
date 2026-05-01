import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X, User, Tag, ChevronRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Web3 Development",
        excerpt: "Learn the fundamentals of blockchain development and how to build your first dApp.",
        content: "Web3 development opens a new frontier of internet applications. In this comprehensive guide, we explore the core concepts of blockchain technology, smart contracts, and decentralized applications (dApps). We'll walk through setting up your development environment with Hardhat, writing your first Solidity contract, and deploying it to a testnet.",
        category: "Web3",
        author: "Alex Morgan",
        tags: ["Blockchain", "Solidity", "dApp", "Ethereum"],
        date: "Dec 20, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop"
    },
    {
        id: 2,
        title: "Building Scalable React Applications",
        excerpt: "Best practices and patterns for creating maintainable React apps at scale.",
        content: "Scaling React applications requires a solid architectural foundation. We delve into advanced patterns like Compound Components, Custom Hooks for logic separation, and effective state management strategies using Context API and Redux Toolkit. Learn how to optimize performance with memoization and code-splitting.",
        category: "React",
        author: "Sarah Jenkins",
        tags: ["React", "Frontend", "JavaScript", "Architecture"],
        date: "Dec 15, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
    },
    {
        id: 3,
        title: "The Future of Mobile Development",
        excerpt: "Exploring cross-platform frameworks and the evolution of mobile apps.",
        content: "The line between native and cross-platform development is blurring. With frameworks like React Native and Flutter maturing, developers can now deliver native-like experiences with a single codebase. We discuss the pros and cons of each approach and predict upcoming trends in the mobile ecosystem.",
        category: "Mobile",
        author: "David Chen",
        tags: ["Mobile", "React Native", "Flutter", "iOS/Android"],
        date: "Dec 10, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
    }
];

export default function BlogSection() {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0f172a] to-[#0a0f1c] relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4">
                        Blog & Insights
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Latest
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Articles</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Sharing knowledge and insights about development, technology, and innovation.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedPost(post)}
                            layoutId={`card-${post.id}`}
                            className="group rounded-2xl overflow-hidden bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all cursor-pointer h-full flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <motion.img
                                    layoutId={`image-${post.id}`}
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent opacity-60" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-sm text-cyan-400 text-xs font-medium border border-cyan-500/30">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-slate-500 text-xs mb-3">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <motion.h3 layoutId={`title-${post.id}`} className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {post.title}
                                </motion.h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <button className="text-cyan-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedPost && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPost(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`card-${selectedPost.id}`}
                            className="relative w-full max-w-4xl bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl border border-slate-700 max-h-[90vh] overflow-y-auto no-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-md"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Modal Image */}
                            <div className="relative h-64 md:h-80 lg:h-96">
                                <motion.img
                                    layoutId={`image-${selectedPost.id}`}
                                    src={selectedPost.image}
                                    alt={selectedPost.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex flex-wrap gap-2 mb-4"
                                    >
                                        <span className="px-3 py-1 rounded-full bg-cyan-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/20">
                                            {selectedPost.category}
                                        </span>
                                    </motion.div>
                                    <motion.h2
                                        layoutId={`title-${selectedPost.id}`}
                                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight"
                                    >
                                        {selectedPost.title}
                                    </motion.h2>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 md:p-8 lg:p-10 grid md:grid-cols-[1fr_300px] gap-8">

                                {/* Main Text */}
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="prose prose-invert prose-lg max-w-none pt-8"
                                    >
                                        <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                            {selectedPost.content}
                                        </p>
                                        <p className="text-slate-400 leading-relaxed mb-6">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>
                                        <ul className="list-disc list-outside text-slate-400 space-y-2 pl-4 mb-6">
                                            <li>Understanding the core architecture principles</li>
                                            <li>Implementing best practices for performance</li>
                                            <li>Future-proofing your application stack</li>
                                        </ul>
                                        <p className="text-slate-400 leading-relaxed">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Sidebar */}
                                <div className="space-y-6">
                                    <div className="bg-slate-800/20 rounded-2xl p-6 border border-slate-700/50">
                                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                            <Tag className="w-4 h-4 text-cyan-400" />
                                            Related Tags
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedPost.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-sm hover:text-cyan-400 hover:bg-slate-700 transition-colors cursor-pointer">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20">
                                        <h4 className="text-white font-bold mb-2">Subscribe to Newsletter</h4>
                                        <p className="text-slate-400 text-sm mb-4">Get the latest articles delivered to your inbox.</p>
                                        <div className="space-y-3">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                                            />
                                            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-2 rounded-xl transition-all shadow-lg shadow-cyan-500/20">
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
