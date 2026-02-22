import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-background-light text-accent-dark antialiased min-h-screen">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 lg:px-20 pt-40 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Side: Content */}
                    <div>
                        <div className="inline-block bg-primary text-accent-dark px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-accent-dark">
                            GET IN TOUCH
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                            We're Here <br />
                            <span className="bg-white px-2">To Help.</span>
                        </h1>
                        <p className="text-xl font-bold text-accent-dark/60 mb-12 leading-relaxed">
                            Have a question about your order, interested in partnering with us, or just want to say hi? We'd love to hear from you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="bg-white border-4 border-accent-dark rounded-2xl p-4 shadow-chunky-sm group-hover:-translate-y-1 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">mail</span>
                                </div>
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest text-accent-dark/40 mb-1">Email Us</h3>
                                    <p className="text-2xl font-black">hello@nibble.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="bg-white border-4 border-accent-dark rounded-2xl p-4 shadow-chunky-sm group-hover:-translate-y-1 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">call</span>
                                </div>
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest text-accent-dark/40 mb-1">Call Us</h3>
                                    <p className="text-2xl font-black">+1 (555) 000-0000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="bg-white border-4 border-accent-dark rounded-2xl p-4 shadow-chunky-sm group-hover:-translate-y-1 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">location_on</span>
                                </div>
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest text-accent-dark/40 mb-1">Office</h3>
                                    <p className="text-2xl font-black">123 Food Street, Manhattan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-white border-4 border-accent-dark rounded-[2.5rem] p-10 shadow-chunky relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8">
                            <span className="material-symbols-outlined text-primary/20 text-8xl font-black">chat</span>
                        </div>

                        <form className="relative z-10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-accent-dark/40 ml-4">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-background-light border-4 border-accent-dark rounded-2xl px-6 py-4 font-bold outline-none focus:ring-0 focus:border-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-accent-dark/40 ml-4">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-background-light border-4 border-accent-dark rounded-2xl px-6 py-4 font-bold outline-none focus:ring-0 focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-accent-dark/40 ml-4">Subject</label>
                                <select className="w-full bg-background-light border-4 border-accent-dark rounded-2xl px-6 py-4 font-bold outline-none focus:ring-0 focus:border-primary transition-colors appearance-none">
                                    <option>General Inquiry</option>
                                    <option>Order Support</option>
                                    <option>Partner Request</option>
                                    <option>Rider Application</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-accent-dark/40 ml-4">Message</label>
                                <textarea
                                    rows={5}
                                    className="w-full bg-background-light border-4 border-accent-dark rounded-2xl px-6 py-4 font-bold outline-none focus:ring-0 focus:border-primary transition-colors resize-none"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: '#f9f506' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary border-4 border-accent-dark py-5 rounded-2xl text-xl font-black uppercase shadow-chunky transition-colors"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;
