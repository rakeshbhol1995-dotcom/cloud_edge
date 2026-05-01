import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const pricingPlans = [
    {
        name: "Basic",
        icon: Zap,
        price: "₹25,000",
        duration: "/project",
        description: "Perfect for small projects and startups",
        features: [
            "Responsive Website Design",
            "Up to 5 Pages",
            "Basic SEO Optimization",
            "Contact Form Integration",
            "1 Month Support",
            "Mobile Responsive",
            "Fast Loading Speed"
        ],
        popular: false,
        gradient: "from-slate-600 to-slate-700"
    },
    {
        name: "Professional",
        icon: Crown,
        price: "₹75,000",
        duration: "/project",
        description: "Ideal for growing businesses",
        features: [
            "Everything in Basic",
            "Up to 15 Pages",
            "Advanced SEO & Analytics",
            "CMS Integration",
            "E-commerce Functionality",
            "Payment Gateway Setup",
            "3 Months Support",
            "Custom Animations",
            "Database Integration"
        ],
        popular: true,
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        name: "Enterprise",
        icon: Rocket,
        price: "Custom",
        duration: "pricing",
        description: "For complex applications and enterprises",
        features: [
            "Everything in Professional",
            "Unlimited Pages",
            "Custom Web/Mobile App",
            "Blockchain Integration",
            "Smart Contract Development",
            "Advanced Security Features",
            "6 Months Support",
            "Dedicated Team",
            "Priority Support",

            "Custom Features",
            "Smart Contract Audit",
            "Multi-Chain Token Creation"
        ],
        popular: false,
        gradient: "from-purple-500 to-pink-500"
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 lg:py-32 bg-[#0a0f1c] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4">
                        Pricing
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Choose Your
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Perfect Plan</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Transparent pricing for every project size. No hidden fees.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border transition-all ${plan.popular
                                ? 'bg-gradient-to-b from-slate-800/50 to-slate-900/50 border-cyan-500/50 scale-105 shadow-2xl shadow-cyan-500/20'
                                : 'bg-slate-800/30 border-slate-700/50 hover:border-cyan-500/30'
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-6`}>
                                <plan.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Plan Name */}
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-slate-400 text-sm">{plan.duration}</span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Button
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className={`w-full py-6 text-lg font-semibold rounded-xl transition-all ${plan.popular
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/25'
                                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                                    }`}
                            >
                                Get Started
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-slate-400 mt-12"
                >
                    Need a custom solution? <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-cyan-400 hover:text-cyan-300 font-semibold underline">Contact us</button> for a personalized quote.
                </motion.p>
            </div>
        </section>
    );
}
