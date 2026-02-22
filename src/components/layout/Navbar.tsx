import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12">
            <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border-2 border-accent-dark rounded-full px-6 py-2 shadow-chunky-sm min-h-[72px]">
                <Link to="/" className="flex items-center gap-2 py-1">
                    <div className="bg-primary p-1.5 rounded-lg border border-accent-dark flex items-center justify-center">
                        <span className="material-symbols-outlined text-accent-dark font-bold text-xl">fastfood</span>
                    </div>
                    <span className="text-xl font-black tracking-tight text-accent-dark">Nibble</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 h-full">
                    <Link to="/explore" className="text-sm font-bold hover:text-primary transition-colors py-2 leading-none">NomNom</Link>
                    <Link to="/about" className="text-sm font-bold hover:text-primary transition-colors py-2 leading-none">About Nibble</Link>
                    <Link to="/how-it-works" className="text-sm font-bold hover:text-primary transition-colors py-2 leading-none">How it Works</Link>
                    <Link to="/restaurant-partner" className="text-sm font-bold hover:text-primary transition-colors py-2 leading-none">Partners</Link>
                    <Link to="/rider" className="text-sm font-bold hover:text-primary transition-colors py-2 leading-none">Riders</Link>
                </div>

                <div className="flex items-center gap-4 h-full">
                    <button className="hidden sm:block text-sm font-bold px-4 py-3 hover:bg-black/5 rounded-full transition-all active:scale-95 leading-none">Log In</button>
                    <button className="bg-primary border-2 border-accent-dark shadow-chunky-sm px-6 py-3 rounded-full text-sm font-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all leading-none">
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
