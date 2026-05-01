import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const cryptoData = [
    { symbol: "BTC", price: "64,231.50", change: "+2.4%", up: true },
    { symbol: "ETH", price: "3,452.12", change: "+1.8%", up: true },
    { symbol: "SOL", price: "148.90", change: "-0.5%", up: false },
    { symbol: "MATIC", price: "0.85", change: "+0.2%", up: true },
    { symbol: "BNB", price: "590.20", change: "+1.1%", up: true },
    { symbol: "DOT", price: "7.45", change: "-1.2%", up: false },
    { symbol: "ADA", price: "0.45", change: "+0.5%", up: true },
    { symbol: "XRP", price: "0.62", change: "-0.8%", up: false },
];

export default function CryptoTicker() {
    return (
        <div className="w-full bg-[#060912] border-b border-slate-800/50 overflow-hidden py-2 relative z-50">
            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex items-center gap-12 whitespace-nowrap px-4"
                >
                    {/* Duplicate list for seamless loop */}
                    {[...cryptoData, ...cryptoData, ...cryptoData].map((crypto, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <span className="text-cyan-400 font-bold text-sm">{crypto.symbol}</span>
                            <span className="text-white text-sm font-mono">${crypto.price}</span>
                            <span className={`text-xs flex items-center gap-1 ${crypto.up ? 'text-green-400' : 'text-red-400'}`}>
                                {crypto.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                {crypto.change}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
