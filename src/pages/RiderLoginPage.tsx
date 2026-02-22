import React from 'react';
import { motion } from 'framer-motion';

const RiderLoginPage: React.FC = () => {
    return (
        <div className="bg-background-light text-accent-dark antialiased font-display min-h-screen flex flex-col pt-24">
            <main className="flex-1 flex flex-col lg:flex-row">
                {/* Left Section - Hero illustration */}
                <div className="hidden lg:flex flex-1 items-center justify-center p-20 relative overflow-hidden bg-primary px-6 lg:px-20">
                    <div className="max-w-xl relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-6xl lg:text-[8rem] font-black leading-[0.85] text-white mb-12 uppercase italic tracking-tighter"
                            style={{ WebkitTextStroke: '2px #1c1c0d' }}
                        >
                            READY TO <br /> <span className="text-accent-dark -rotate-2 inline-block">RIDE?</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative inline-block"
                        >
                            <div className="w-[550px] h-[450px] rounded-[3rem] border-8 border-accent-dark bg-white flex items-center justify-center shadow-chunky overflow-hidden relative">
                                <img
                                    alt="3D illustration of a modern delivery scooter in a stylized city street context"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYNzJiksEk4ET3ouZNfVa5_kmc-DMIiYcFwo77rxDqt3inv1txYYXN46nYy_4PRZoiCwCLWWXr08dgbKcnsAmgSkmdihmd7tRU3DOs3olI0ChumTS3G5_4Cm3jhQ88tuR6V9h5jtXQnQsC2LRdeiCPAILZPhW08IPXiUQrqxEmX8W7OGVWLps-OwQ7TwZmKaQmD3kfVYv6uusAJBy9G6sDN1n1yuMdg_7rydikrDmx7zfqdt1M0ZbSEyer3e9ruq1BNsSxHqtzMyk"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-6 left-6 right-6 bg-primary border-4 border-accent-dark p-4 rounded-2xl shadow-chunky-sm flex items-center gap-4">
                                    <span className="material-symbols-outlined text-4xl font-black">electric_moped</span>
                                    <div className="text-left">
                                        <p className="font-black text-xs uppercase tracking-widest leading-none">Status</p>
                                        <p className="font-black text-lg">Hyper-Speed Delivery</p>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, rotate: 0 }}
                                animate={{ opacity: 1, rotate: 12 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -top-10 -right-10 bg-white border-4 border-accent-dark rounded-3xl p-6 shadow-chunky flex items-center justify-center"
                            >
                                <div className="relative">
                                    <span className="material-symbols-outlined text-6xl text-accent-dark font-black">backpack</span>
                                    <span className="material-symbols-outlined absolute -left-8 top-0 text-4xl text-primary drop-shadow-[2px_2px_0px_#1c1c0d]">skateboarding</span>
                                    <span className="material-symbols-outlined absolute -right-8 top-0 text-4xl text-primary drop-shadow-[2px_2px_0px_#1c1c0d] scale-x-[-1]">skateboarding</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="flex-1 flex items-center justify-center p-6 lg:p-20 bg-background-light">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full max-w-lg"
                    >
                        <div className="bg-white border-4 border-accent-dark rounded-[2.5rem] p-8 lg:p-12 shadow-chunky">
                            <div className="mb-10 text-center lg:text-left">
                                <div className="inline-block bg-primary border-2 border-accent-dark px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                                    Rider Portal
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black text-accent-dark mb-2">Welcome Back!</h2>
                                <p className="text-accent-dark/60 font-bold">Log in to manage your shift and earnings.</p>
                            </div>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-black text-accent-dark uppercase tracking-widest mb-2" htmlFor="email">
                                        EMAIL ADDRESS
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-accent-dark/40">mail</span>
                                        <input
                                            className="w-full pl-14 pr-5 py-5 bg-background-light border-2 border-accent-dark rounded-2xl focus:ring-0 focus:border-primary text-accent-dark font-bold placeholder:text-accent-dark/30 transition-all"
                                            id="email"
                                            placeholder="rider@foodiehero.com"
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="block text-sm font-black text-accent-dark uppercase tracking-widest" htmlFor="password">
                                            PASSWORD
                                        </label>
                                        <a className="text-xs font-black text-accent-dark/40 hover:text-accent-dark transition-colors" href="#">FORGOT?</a>
                                    </div>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-accent-dark/40">lock</span>
                                        <input
                                            className="w-full pl-14 pr-5 py-5 bg-background-light border-2 border-accent-dark rounded-2xl focus:ring-0 focus:border-primary text-accent-dark font-bold placeholder:text-accent-dark/30 transition-all"
                                            id="password"
                                            placeholder="••••••••"
                                            type="password"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <input className="w-5 h-5 rounded border-2 border-accent-dark text-primary focus:ring-offset-0 focus:ring-0" id="remember" type="checkbox" />
                                    <label className="text-sm font-bold text-accent-dark" htmlFor="remember">
                                        Keep me logged in
                                    </label>
                                </div>
                                <button className="w-full bg-primary border-4 border-accent-dark shadow-chunky py-6 rounded-2xl text-xl font-black text-accent-dark hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-[0.98] uppercase tracking-tight">
                                    LOG IN TO DASHBOARD
                                </button>
                            </form>
                            <div className="mt-10 pt-8 border-t-2 border-accent-dark/5 flex flex-col items-center gap-4">
                                <p className="text-sm font-bold text-accent-dark/60">
                                    New to the fleet?
                                    <a className="ml-1 text-accent-dark underline decoration-primary decoration-4 underline-offset-2 hover:text-primary transition-colors font-black" href="#">Sign up here</a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default RiderLoginPage;
