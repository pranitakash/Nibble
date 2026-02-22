import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './RewardsPopup.css';

interface RewardsPopupProps {
    isOpen: boolean;
    onClose: () => void;
    promoCode?: string;
    discountValue?: string;
}

const RewardsPopup: React.FC<RewardsPopupProps> = ({
    isOpen,
    onClose,
    promoCode = "HERO50",
    discountValue = "50% OFF"
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="rewards-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="rewards-modal"
                        initial={{ scale: 0.5, y: 100, rotate: -5 }}
                        animate={{ scale: 1, y: 0, rotate: 0 }}
                        exit={{ scale: 0.5, opacity: 0, y: 100 }}
                        transition={{ type: "spring", damping: 15, stiffness: 200 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-slate-400 hover:text-[#1c1c0d] transition-colors"
                        >
                            <span className="material-symbols-outlined text-4xl font-black">close</span>
                        </button>

                        {/* Headline */}
                        <div className="mb-8">
                            <h1 className="rewards-title">CONGRATS!</h1>
                            <div className="title-underline"></div>
                        </div>

                        {/* Illustration */}
                        <div className="reward-image-container">
                            <motion.div
                                className="reward-glow"
                                animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 180, 270, 360] }}
                                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                            />
                            <div className="reward-illustration shadow-chunky"></div>
                            <motion.div
                                className="promo-badge"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <span className="material-symbols-outlined text-[#1c1c0d] font-black text-3xl">celebration</span>
                            </motion.div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-3 mb-10">
                            <h2 className="text-2xl font-black text-[#1c1c0d] uppercase italic">Legendary Feast Unlocked!</h2>
                            <p className="text-lg font-bold text-[#1c1c0d]/40 italic">Enjoy a massive discount on your next hero-level order.</p>
                        </div>

                        {/* Promo Code Box */}
                        <div className="promo-code-box">
                            <div className="promo-label">Your Hero Code</div>
                            <div className="flex items-center justify-center gap-4">
                                <span className="promo-code uppercase italic">{promoCode}</span>
                                <button
                                    className="hover:scale-125 transition-transform"
                                    onClick={() => navigator.clipboard.writeText(promoCode)}
                                >
                                    <span className="material-symbols-outlined font-black text-[#1c1c0d]">content_copy</span>
                                </button>
                            </div>
                            <div className="mt-4 pt-4 border-t-4 border-[#1c1c0d]/10">
                                <p className="text-[#1c1c0d] font-black text-3xl italic uppercase">{discountValue}</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="claim-btn">
                            CLAIM NOW
                            <span className="material-symbols-outlined font-black">arrow_forward</span>
                        </button>

                        {/* Footer Link */}
                        <button
                            onClick={onClose}
                            className="mt-8 text-slate-400 font-bold text-sm uppercase tracking-widest hover:text-[#1c1c0d] transition-colors underline underline-offset-8 decoration-4"
                        >
                            Maybe later
                        </button>
                    </motion.div>

                    {/* Decorative Confetti Placeholders */}
                    <motion.div
                        animate={{ y: [-20, 20, -20], rotate: 45 }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#f9f506] border-4 border-[#1c1c0d] pointer-events-none"
                    />
                    <motion.div
                        animate={{ y: [20, -20, 20], scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                        className="absolute top-1/3 right-1/4 w-5 h-5 bg-[#1c1c0d] rounded-full pointer-events-none"
                    />
                    <motion.div
                        animate={{ x: [-10, 10, -10], rotate: -12 }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute bottom-1/4 left-1/3 w-10 h-3 bg-[#f9f506] border-4 border-[#1c1c0d] pointer-events-none"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RewardsPopup;
