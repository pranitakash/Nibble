import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 px-6 pt-2 pb-4 lg:px-12 transition-all">
            <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border-2 border-accent-dark rounded-full px-6 py-2 shadow-chunky-sm min-h-[72px]">
                {/* Branding */}
                <Link to="/" className="flex items-center gap-2 py-1">
                    <div className="bg-primary p-1.5 rounded-lg border border-accent-dark flex items-center justify-center">
                        <span className="material-symbols-outlined text-accent-dark font-bold text-xl">fastfood</span>
                    </div>
                    <span className="text-xl font-black tracking-tight text-accent-dark">Nibble</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 h-full">
                    <Link to="/nomnom" className="text-sm font-bold hover:text-primary transition-colors py-2 leading-none">NomNom</Link>
                    <Link to="/about" className="text-sm font-bold hover:text-primary transition-colors py-2 leading-none">About Nibble</Link>
                    <Link to="/how-it-works" className="text-sm font-bold hover:text-primary transition-colors py-2 leading-none">How it Works</Link>
                    <Link to="/partners" className="text-sm font-bold hover:text-primary transition-colors py-2 leading-none">Partners</Link>
                    <Link to="/riders" className="text-sm font-bold hover:text-primary transition-colors py-2 leading-none">Riders</Link>
                </div>

                <div className="flex items-center gap-4 h-full">
                    <Link to="/login">
                        <motion.button
                            whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)', scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95, y: 0 }}
                            className="hidden sm:block text-sm font-bold px-4 py-3 rounded-full transition-all leading-none"
                        >
                            Log In
                        </motion.button>
                    </Link>
                    <Link to="/signup">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95, y: 0 }}
                            className="bg-primary border-2 border-accent-dark shadow-chunky-sm px-6 py-3 rounded-full text-sm font-black transition-all leading-none"
                        >
                            Sign Up
                        </motion.button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
