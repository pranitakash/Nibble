import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutFooter: React.FC = () => {
    return (
        <footer className="bg-white border-t border-accent-dark/10 py-8 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Branding */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-primary p-1 rounded-lg border border-accent-dark flex items-center justify-center">
                        <span className="material-symbols-outlined text-accent-dark font-bold text-lg">fastfood</span>
                    </div>
                    <span className="text-lg font-black tracking-tight text-accent-dark">Nibble</span>
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-8 text-[11px] font-black tracking-[0.1em] text-accent-dark/40">
                    <Link to="/support" className="hover:text-accent-dark transition-colors uppercase">Support</Link>
                    <Link to="/privacy" className="hover:text-accent-dark transition-colors uppercase">Privacy</Link>
                    <Link to="/secure-payment" className="hover:text-accent-dark transition-colors uppercase">Secure Payment</Link>
                </div>

                {/* Copyright */}
                <p className="text-[11px] font-bold text-accent-dark/30 tracking-wider">
                    © 2026 Nibble Inc.
                </p>
            </div>
        </footer>
    );
};

export default CheckoutFooter;
