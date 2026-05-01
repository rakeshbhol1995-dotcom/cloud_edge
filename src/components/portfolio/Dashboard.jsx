import React from 'react';
import { motion } from 'framer-motion';
import { useWeb3 } from '@/components/web3/Web3Context';
import { ShieldCheck, Coins, Activity, Box, ArrowUpRight } from 'lucide-react';

export default function Dashboard() {
    const { account } = useWeb3();

    const mockStats = [
        { label: "Total Audits", value: "3", icon: ShieldCheck, color: "text-emerald-400" },
        { label: "Tokens Created", value: "7", icon: Coins, color: "text-blue-400" },
        { label: "Active Contracts", value: "12", icon: Activity, color: "text-purple-400" },
        { label: "Total Transactions", value: "148", icon: Box, color: "text-orange-400" }
    ];

    const recentActivities = [
        { action: "Smart Contract Audit", target: "DeFi Protocol V2", status: "Completed", date: "2 days ago" },
        { action: "Token Creation", target: "MemeCoin (MEME)", status: "Deployed", date: "5 days ago" },
        { action: "Liquidity Lock", target: "MEME / ETH", status: "Active", date: "5 days ago" }
    ];

    return (
        <div className="pt-24 min-h-screen container mx-auto px-6 lg:px-12 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-3xl font-bold text-white mb-2">
                    Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'User'}</span>
                </h1>
                <p className="text-slate-400">Manage your smart contracts, audits, and deployed tokens.</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {mockStats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <stat.icon className={`w-8 h-8 ${stat.color}`} />
                            <span className="text-slate-500 text-xs font-mono bg-slate-800 px-2 py-1 rounded">Last 30d</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-slate-400 text-sm">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-800/20 border border-slate-700/50 rounded-2xl p-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Recent Activity</h2>
                    <button className="text-cyan-400 text-sm hover:underline flex items-center gap-1">
                        View All <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-slate-800/40 border border-slate-700/30 hover:border-slate-600 transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center">
                                    <Activity className="w-5 h-5 text-slate-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">{activity.action}</h4>
                                    <p className="text-slate-400 text-sm">{activity.target}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1">
                                    {activity.status}
                                </span>
                                <p className="text-slate-500 text-xs">{activity.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
