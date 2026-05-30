import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Menu, X, Wallet, LogOut, Copy, Check, Globe, LayoutDashboard, Home as HomeIcon } from "lucide-react";
import { useWeb3 } from '@/components/web3/Web3Context';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/translations';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Navbar({ currentView, onNavigate }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const { account, isConnecting, error, connectWallet, disconnectWallet, getShortAddress } = useWeb3();
    const { language, changeLanguage } = useLanguage();
    const t = useTranslation(language);

    // Dynamic nav links based on language
    const navLinks = [
        { label: t('nav.home'), href: "#home" },
        { label: t('nav.services'), href: "#services" },
        { label: t('nav.projects'), href: "#projects" },
        { label: t('nav.nfts'), href: "#nfts" },
        { label: t('nav.careers'), href: "#careers" },
        { label: t('nav.contact'), href: "#contact" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const copyAddress = () => {
        if (account) {
            navigator.clipboard.writeText(account);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        if (currentView === 'dashboard') {
            onNavigate('home');
            // Use setTimeout to allow render before scrolling
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.querySelector(href);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentView === 'dashboard'
                    ? 'bg-[#0a0f1c]/80 backdrop-blur-lg border-b border-slate-800/50'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.button
                            onClick={() => onNavigate('home')}
                            className="flex items-center gap-3"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center overflow-hidden border border-slate-700/50">
                                <img src="/logo.png" alt="CloudEdge Tech Logo" className="w-8 h-8 object-contain" />
                            </div>
                            <span className="text-white font-bold text-xl hidden sm:block">CloudEdge Tech</span>
                        </motion.button>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {/* If on Dashboard, show Home link only, else show all */}
                            {currentView === 'dashboard' ? (
                                <button
                                    onClick={() => onNavigate('home')}
                                    className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium flex items-center gap-2"
                                >
                                    <HomeIcon className="w-4 h-4" />
                                    Back to Home
                                </button>
                            ) : (
                                navLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium relative group"
                                        whileHover={{ y: -2 }}
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                                    </motion.a>
                                ))
                            )}
                        </nav>

                        {/* ... Language Selector ... */}
                        <div className="hidden lg:flex items-center gap-3">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="px-3 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-all">
                                        <Globe className="w-4 h-4" />
                                        <span className="text-sm font-medium">{language.toUpperCase()}</span>
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-slate-900 border-slate-700">
                                    <DropdownMenuItem onClick={() => changeLanguage('en')} className="text-slate-300 hover:text-cyan-400 cursor-pointer">
                                        English
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => changeLanguage('or')} className="text-slate-300 hover:text-cyan-400 cursor-pointer">
                                        ଓଡ଼ିଆ (Odia)
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => changeLanguage('hi')} className="text-slate-300 hover:text-cyan-400 cursor-pointer">
                                        हिंदी (Hindi)
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/* Wallet & CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            {!account ? (
                                <>
                                    <Button
                                        onClick={connectWallet}
                                        disabled={isConnecting}
                                        className="bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-white px-6 py-2.5 font-semibold rounded-xl transition-all"
                                    >
                                        {isConnecting ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Connecting...
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <Wallet className="w-4 h-4" />
                                                Connect Wallet
                                            </div>
                                        )}
                                    </Button>
                                    {/* Collaborate Button - Hide on Dashboard */}
                                    {currentView !== 'dashboard' && (
                                        <Button
                                            onClick={() => document.getElementById('careers').scrollIntoView({ behavior: 'smooth' })}
                                            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-2.5 font-semibold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
                                        >
                                            Collaborate with Us
                                        </Button>
                                    )}
                                </>
                            ) : (
                                <>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 hover:border-cyan-500/50 text-white px-6 py-2.5 font-semibold rounded-xl transition-all">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                                    {getShortAddress(account)}
                                                </div>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="bg-slate-800 border-slate-700 text-white">
                                            {currentView === 'home' ? (
                                                <DropdownMenuItem
                                                    onClick={() => onNavigate('dashboard')}
                                                    className="cursor-pointer hover:bg-slate-700"
                                                >
                                                    <LayoutDashboard className="w-4 h-4 mr-2 text-cyan-400" />
                                                    Dashboard
                                                </DropdownMenuItem>
                                            ) : (
                                                <DropdownMenuItem
                                                    onClick={() => onNavigate('home')}
                                                    className="cursor-pointer hover:bg-slate-700"
                                                >
                                                    <HomeIcon className="w-4 h-4 mr-2 text-cyan-400" />
                                                    Home
                                                </DropdownMenuItem>
                                            )}

                                            <DropdownMenuItem
                                                onClick={copyAddress}
                                                className="cursor-pointer hover:bg-slate-700"
                                            >
                                                {copied ? (
                                                    <>
                                                        <Check className="w-4 h-4 mr-2 text-green-400" />
                                                        Copied!
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-4 h-4 mr-2" />
                                                        Copy Address
                                                    </>
                                                )}
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator className="bg-slate-700" />
                                            <DropdownMenuItem
                                                onClick={() => {
                                                    disconnectWallet();
                                                    onNavigate('home');
                                                }}
                                                className="cursor-pointer hover:bg-slate-700 text-red-400"
                                            >
                                                <LogOut className="w-4 h-4 mr-2" />
                                                Disconnect
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    {/* Hide Collaborate button on Dashboard */}
                                    {currentView !== 'dashboard' && (
                                        <Button
                                            onClick={() => document.getElementById('careers').scrollIntoView({ behavior: 'smooth' })}
                                            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-2.5 font-semibold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
                                        >
                                            Collaborate with Us
                                        </Button>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-white"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Error Toast */}
                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-24 left-1/2 -translate-x-1/2 bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-3 rounded-xl backdrop-blur-sm max-w-md"
                        >
                            {error}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="absolute right-0 top-0 h-full w-72 bg-[#0a0f1c] border-l border-slate-800 p-6 pt-24"
                        >
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="text-slate-300 hover:text-cyan-400 transition-colors text-lg font-medium py-2 border-b border-slate-800/50"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </nav>

                            {!account ? (
                                <Button
                                    onClick={() => {
                                        connectWallet();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    disabled={isConnecting}
                                    className="w-full mt-6 bg-slate-800 border border-slate-700 text-white py-6 font-semibold rounded-xl"
                                >
                                    {isConnecting ? 'Connecting...' : (
                                        <>
                                            <Wallet className="mr-2 w-5 h-5" />
                                            Connect Wallet
                                        </>
                                    )}
                                </Button>
                            ) : (
                                <div className="mt-6 space-y-3">
                                    <div className="p-4 rounded-xl bg-slate-800/50 border border-cyan-500/30">
                                        <p className="text-slate-400 text-xs mb-1">Connected</p>
                                        <p className="text-white font-mono text-sm">{getShortAddress(account)}</p>
                                    </div>
                                    <Button
                                        onClick={() => {
                                            disconnectWallet();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        variant="outline"
                                        className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 py-6"
                                    >
                                        <LogOut className="mr-2 w-5 h-5" />
                                        Disconnect
                                    </Button>
                                </div>
                            )}

                            <Button
                                onClick={() => {
                                    document.getElementById('careers').scrollIntoView({ behavior: 'smooth' });
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-6 font-semibold rounded-xl"
                            >
                                Collaborate with Us
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
