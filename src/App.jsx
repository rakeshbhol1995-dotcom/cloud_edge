import React, { useState, useEffect } from 'react';
import { Web3Provider, useWeb3 } from '@/components/web3/Web3Context';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/portfolio/Navbar';
import Dashboard from '@/components/portfolio/Dashboard';
import ServiceDetail from '@/components/portfolio/ServiceDetail';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import TeamSection from '@/components/portfolio/TeamSection';
import ServicesSection from '@/components/portfolio/ServicesSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import NFTSection from '@/components/portfolio/NFTSection';
import PricingSection from '@/components/portfolio/PricingSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import BlogSection from '@/components/portfolio/BlogSection';
import CareersSection from '@/components/portfolio/CareersSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import ChatWidget from '@/components/portfolio/ChatWidget';

function MainContent() {
    const { account } = useWeb3();
    const [currentView, setCurrentView] = useState('home');
    const [selectedService, setSelectedService] = useState(null);

    // Automatic redirection logic
    useEffect(() => {
        if (account) {
            setCurrentView('dashboard');
        } else {
            setCurrentView('home');
        }
    }, [account]);

    // Function to handle navigation
    const navigateTo = (view) => {
        setCurrentView(view);
        window.scrollTo(0, 0);
    };

    return (
        <div className="min-h-screen bg-[#0a0f1c]">
            <Navbar currentView={currentView} onNavigate={navigateTo} />



            <main>
                {currentView === 'dashboard' ? (
                    <Dashboard />
                ) : currentView === 'service-detail' ? (
                    <ServiceDetail
                        service={selectedService}
                        onBack={() => {
                            setCurrentView('home');
                            window.scrollTo(0, 0);
                        }}
                    />
                ) : (
                    <>
                        <section id="home">
                            <HeroSection />
                        </section>

                        <section id="about">
                            <AboutSection />
                        </section>

                        {/* Team Profiles */}
                        <TeamSection />

                        <section id="services">
                            <ServicesSection onServiceClick={(service) => {
                                setSelectedService(service);
                                setCurrentView('service-detail');
                                window.scrollTo(0, 0);
                            }} />
                        </section>

                        <section id="projects">
                            <ProjectsSection />
                        </section>

                        <section id="nfts">
                            <NFTSection />
                        </section>

                        {/* Pricing Packages */}
                        <PricingSection />

                        <section id="testimonials">
                            <TestimonialsSection />
                        </section>

                        {/* Blog Articles */}
                        <BlogSection />

                        {/* Careers section already has id="careers" in component */}
                        <CareersSection />

                        <section id="contact">
                            <ContactSection />
                        </section>
                    </>
                )}
            </main>

            <Footer />

            {/* Floating Chat Widget */}
            <ChatWidget />
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Web3Provider>
                    <MainContent />
                </Web3Provider>
            </LanguageProvider>
        </ThemeProvider>
    );
}
