import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutNavbar: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12">
            <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border-2 border-accent-dark rounded-full px-6 py-2 shadow-chunky-sm min-h-[72px]">
                {/* Branding */}
                <Link to="/" className="flex items-center gap-2 py-1">
                    <div className="bg-primary p-1.5 rounded-lg border border-accent-dark flex items-center justify-center">
                        <span className="material-symbols-outlined text-accent-dark font-bold text-xl">fastfood</span>
                    </div>
                    <span className="text-xl font-black tracking-tight text-accent-dark">Nibble</span>
                </Link>

                {/* Secure Checkout Indicator */}
                <div className="flex items-center gap-4">
                    <span className="text-xl font-bold text-accent-dark/60 tracking-tight">Secure Checkout</span>
                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center border border-accent-dark/10">
                        <span className="material-symbols-outlined text-accent-dark font-link text-2xl">lock</span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default CheckoutNavbar;
