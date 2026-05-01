import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! How can we help you today?", sender: "bot" }
    ]);

    const handleSend = () => {
        if (!message.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { id: Date.now(), text: message, sender: "user" }]);
        setMessage('');

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now(),
                text: "Thanks for your message! We'll get back to you soon. For immediate assistance, please call us or use WhatsApp.",
                sender: "bot"
            }]);
        }, 1000);
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                            <h3 className="font-bold text-lg">Chat with Us</h3>
                            <p className="text-sm opacity-90">We typically reply within minutes</p>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-xl ${msg.sender === 'user'
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                                            : 'bg-slate-800 text-slate-200'
                                            }`}
                                    >
                                        <p className="text-sm">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-slate-700">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                                />
                                <Button
                                    onClick={handleSend}
                                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-4 rounded-xl"
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
