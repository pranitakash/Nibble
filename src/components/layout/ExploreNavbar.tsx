import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const ExploreNavbar: React.FC = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12">
            <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border-2 border-accent-dark rounded-full px-6 py-3 shadow-chunky-sm">
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-primary p-1 rounded-lg border border-accent-dark">
                        <span className="material-symbols-outlined text-accent-dark font-bold">fastfood</span>
                    </div>
                    <span className="text-xl font-black tracking-tight text-accent-dark">Nibble</span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    <Link to="/dashboard" className="text-sm font-black text-accent-dark hover:text-primary transition-colors uppercase tracking-tight">Dashboard</Link>

                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="flex items-center gap-2 text-sm font-black text-accent-dark hover:text-primary transition-colors group"
                    >
                        <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">search</span>
                        <span className="uppercase tracking-tight">Search</span>
                    </button>

                    <Link to="/contact" className="text-sm font-black text-accent-dark hover:text-primary transition-colors uppercase tracking-tight">Contact Us</Link>
                </div>

                <div className="flex items-center gap-4">
                    {/* Location Field */}
                    <div className="hidden lg:flex items-center gap-2 bg-accent-dark/5 px-4 py-2 rounded-full border border-accent-dark/10 group cursor-pointer hover:border-accent-dark/30 transition-colors">
                        <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                        <span className="text-xs font-bold text-accent-dark/60 max-w-[150px] truncate">123 Food Street, Manhattan</span>
                    </div>

                    <button className="bg-primary border-2 border-accent-dark shadow-chunky-sm px-6 py-2 rounded-full text-sm font-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase">
                        Log Out
                    </button>
                </div>
            </nav>

            {/* Search Popup Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-accent-dark/40 backdrop-blur-sm flex items-start justify-center pt-32 px-6"
                        onClick={() => setIsSearchOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: -20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: -20 }}
                            className="w-full max-w-2xl bg-white border-4 border-accent-dark rounded-3xl p-8 shadow-chunky relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="absolute top-6 right-6 text-accent-dark/40 hover:text-accent-dark transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            <h3 className="text-3xl font-black mb-6 uppercase italic text-accent-dark">Find your craving</h3>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-accent-dark/30 text-3xl">search</span>
                                <input
                                    autoFocus
                                    className="w-full bg-accent-dark/5 border-4 border-transparent focus:border-primary rounded-2xl py-6 pl-16 pr-8 text-xl font-bold text-accent-dark placeholder:text-accent-dark/20 transition-all outline-none"
                                    placeholder="Burgers, Sushi, Tacos..."
                                    type="text"
                                />
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <span className="text-xs font-black text-accent-dark/40 uppercase w-full">Quick suggestions:</span>
                                {['Pizza', 'Burger', 'Healthy', 'Japanese'].map((tag) => (
                                    <button
                                        key={tag}
                                        className="bg-accent-dark/5 hover:bg-primary px-4 py-2 rounded-full text-sm font-bold text-accent-dark transition-colors border border-accent-dark/10"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default ExploreNavbar;
