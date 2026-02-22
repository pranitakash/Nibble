import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RiderLoginPage: React.FC = () => {
    return (
        <div className="bg-background-light text-accent-dark antialiased font-display min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col lg:flex-row">
                {/* Left Section - Hero illustration */}
                <div className="hidden lg:flex flex-1 items-start justify-center p-20 pt-32 lg:pt-40 relative overflow-hidden bg-primary px-6 lg:px-20">
                    <div className="max-w-xl relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-6xl lg:text-8xl font-black leading-[0.9] text-accent-dark mb-12"
                        >
                            Ready to <br /> <span className="text-accent-dark -rotate-2 inline-block">Ride?</span>
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
                <div className="flex-1 flex items-start justify-center p-6 lg:p-20 pt-32 lg:pt-40 bg-background-light">
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
                                <h2 className="text-3xl font-black text-accent-dark mb-2">Welcome Back!</h2>
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
                                            placeholder="rider@nibble.com"
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
                                <button className="w-full bg-primary border-4 border-accent-dark shadow-chunky-sm py-4 rounded-2xl text-lg font-black text-accent-dark hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-[0.98] mt-2">
                                    Login to Dashboard
                                </button>
                            </form>

                            <div className="relative my-8 text-center">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t-2 border-accent-dark/10"></div>
                                </div>
                                <span className="relative px-4 bg-white text-xs font-black text-accent-dark/30 uppercase tracking-widest">
                                    Or continue with
                                </span>
                            </div>
                            <div className="flex justify-center gap-6">
                                {[
                                    { icon: 'google', isCustom: true },
                                    { icon: 'phone_iphone', isCustom: false },
                                    { icon: 'person', isCustom: false },
                                ].map((social, idx) => (
                                    <button key={idx} className="w-14 h-14 rounded-full border-4 border-accent-dark flex items-center justify-center bg-white hover:bg-primary transition-all shadow-chunky hover:translate-y-1 hover:shadow-none">
                                        {social.isCustom ? (
                                            <svg className="w-6 h-6" viewBox="0 0 24 24">
                                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                            </svg>
                                        ) : (
                                            <span className="material-symbols-outlined text-3xl font-black">{social.icon}</span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-10 pt-8 border-t-2 border-accent-dark/5 flex flex-col items-center gap-4">
                                <p className="text-sm font-bold text-accent-dark/60">
                                    New to the fleet?
                                    <Link className="ml-1 text-accent-dark underline decoration-primary decoration-4 underline-offset-2 hover:text-primary transition-colors font-black" to="/rider-signup">Sign up here</Link>
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
