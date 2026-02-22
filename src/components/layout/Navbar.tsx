import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12">
            <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border-2 border-accent-dark rounded-full px-6 py-3 shadow-chunky-sm">
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-primary p-1 rounded-lg border border-accent-dark">
                        <span className="material-symbols-outlined text-accent-dark font-bold">fastfood</span>
                    </div>
                    <span className="text-xl font-black tracking-tight text-accent-dark">FoodieHero</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/explore" className="text-sm font-bold hover:text-primary transition-colors">Explore</Link>
                    <Link to="/restaurant-partner" className="text-sm font-bold hover:text-primary transition-colors">Partners</Link>
                    <Link to="/rider" className="text-sm font-bold hover:text-primary transition-colors">Riders</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-sm font-bold px-4 py-2">Log In</button>
                    <button className="bg-primary border-2 border-accent-dark shadow-chunky-sm px-6 py-2 rounded-full text-sm font-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
