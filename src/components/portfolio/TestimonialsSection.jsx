import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Priya Das",
        role: "Project Manager, TechSolutions",
        content: "Rakesh is an exceptional developer. He delivered our complex web application well before the deadline. His understanding of React and Node.js is top-notch.",
        rating: 5
    },
    {
        id: 2,
        name: "Rahul Verma",
        role: "Founder, StartupHub",
        content: "I hired Rakesh for a full-stack project, and I am amazed by his dedication. He fixed bugs quickly and optimized our database queries for better performance.",
        rating: 5
    },
    {
        id: 3,
        name: "Anjali Sharma",
        role: "CTO, InnovateX",
        content: "Working with Rakesh was a great experience. He wrote clean, maintainable code and implemented the UI designs perfectly. Highly recommended!",
        rating: 5
    },
    {
        id: 4,
        name: "Amit Singh",
        role: "Product Owner, DigitalFlow",
        content: "Rakesh's technical skills are impressive. He built a secure blockchain integration for our platform that works flawlessly. A very talented developer.",
        rating: 5
    },
    {
        id: 5,
        name: "Sneha Patel",
        role: "Lead Designer, CreativeStudio",
        content: "Rakesh successfully translated our complex designs into a responsive, interactive website. His attention to detail and animations make him stand out.",
        rating: 5
    }
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            if (newDirection === 1) {
                return prev === testimonials.length - 1 ? 0 : prev + 1;
            }
            return prev === 0 ? testimonials.length - 1 : prev - 1;
        });
    };

    useEffect(() => {
        const timer = setInterval(() => paginate(1), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0f172a] to-[#0a0f1c] relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Client
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Reviews</span>
                    </h2>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center z-20">
                        <Quote className="w-8 h-8 text-white" />
                    </div>

                    {/* Main Card */}
                    <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 md:p-12 pt-16 overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="text-center"
                            >
                                {/* Rating */}
                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 italic">
                                    "{testimonials[currentIndex].content}"
                                </p>

                                {/* Author */}
                                <div className="flex flex-col items-center">
                                    {/* Removed Image container */}
                                    <h4 className="text-white font-bold text-lg">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    {/* Role hidden as per request */}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={() => paginate(-1)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "w-8 bg-gradient-to-r from-cyan-500 to-blue-500"
                                    : "bg-slate-600 hover:bg-slate-500"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
