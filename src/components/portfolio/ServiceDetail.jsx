import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Zap, Shield } from "lucide-react";

export default function ServiceDetail({ service, onBack }) {
    if (!service) return null;

    // Placeholder content features based on service type
    const features = [
        "Custom Architecture Design",
        "High Performance Optimization",
        "Secure & Scalable Solutions",
        "24/7 Ongoing Support",
        "Advanced Integration Capabilities"
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#0a0f1c] pt-24 pb-12 px-6"
        >
            <div className="container mx-auto max-w-5xl">
                <Button
                    onClick={onBack}
                    variant="ghost"
                    className="mb-8 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 -ml-4 gap-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to All Services
                </Button>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Header & Description */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                            <service.icon className="w-8 h-8 text-white" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {service.title}
                        </h1>

                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            {service.description}
                            <br /><br />
                            Our {service.title} service is designed to transform your vision into reality.
                            We leverage cutting-edge technologies and industry best practices to deliver
                            exceptional results that drive growth and innovation for your business.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl px-8 py-6 text-lg shadow-lg shadow-cyan-500/20">
                                Get Started
                            </Button>
                            <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 rounded-xl px-8 py-6 text-lg">
                                View Portfolio
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Features & Benefits */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">What We Deliver</h3>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800"
                                >
                                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                    <span className="text-slate-300 font-medium detail-feature">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-700/50">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 rounded-xl bg-slate-900/50">
                                    <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                                    <div className="text-white font-bold">Fast Delivery</div>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-slate-900/50">
                                    <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                                    <div className="text-white font-bold">Secure Code</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
