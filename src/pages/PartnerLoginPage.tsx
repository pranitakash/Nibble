import React from 'react';
import { motion } from 'framer-motion';

const PartnerLoginPage: React.FC = () => {
    return (
        <div className="bg-background-light text-accent-dark antialiased font-display min-h-screen flex flex-col pt-24">
            <main className="flex-1 flex flex-col lg:flex-row">
                {/* Left Section - Hero illustration */}
                <div className="hidden lg:flex flex-1 items-center justify-center p-20 relative overflow-hidden bg-primary border-r-4 border-accent-dark px-6 lg:px-20">
                    <div className="max-w-xl relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-6xl lg:text-7xl font-black leading-[0.9] text-accent-dark mb-12"
                        >
                            Welcome back, <span className="bg-white px-4 py-1 inline-block mt-2 border-4 border-accent-dark shadow-chunky-sm -rotate-2">partner!</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative inline-block mt-8"
                        >
                            <div className="w-[450px] h-[320px] bg-white border-8 border-accent-dark rounded-3xl shadow-chunky overflow-hidden relative">
                                <div className="absolute inset-0 opacity-30" style={{ background: 'repeating-linear-gradient(45deg, #ffffff, #ffffff 10px, #f3f4f6 10px, #f3f4f6 20px)' }}></div>
                                <div className="absolute inset-0 flex items-end justify-center">
                                    <img
                                        alt="Stylized 3D illustration of a modern restaurant kitchen with a friendly chef character"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-ds0O9jjNdJ-UG2PhW9Du-Iah5eSZVRNo9FFt6W8rqM_wQo5AoVIC331P4OnJq9eHfynsx2WxdP0LAzMTqz_pOBYYHSYx_KretnPINGpMxFHLvDsqvC_vv3PRS1A-ANoxr014LFg1UwD9YcHRN6OIv5ejv3wEGWbyKwvbBul8_bMjMpUEDpQn_yNF_h8KpcgYnLP2Lu538xw1-rRFW71jtnUf5jc93t0pAqdWFUWGL_xE2ZeL062wsdGF5KlFwFPKPATV9oQkoy4"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-12 bg-white border-t-4 border-accent-dark flex items-center justify-around px-8">
                                    <div className="w-8 h-2 bg-accent-dark/10 rounded-full"></div>
                                    <div className="w-12 h-2 bg-accent-dark/10 rounded-full"></div>
                                    <div className="w-8 h-2 bg-accent-dark/10 rounded-full"></div>
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, rotate: 0 }}
                                animate={{ opacity: 1, rotate: 12 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -top-10 -right-10 bg-[#FF6B6B] border-4 border-accent-dark rounded-full w-24 h-24 flex items-center justify-center shadow-chunky-sm"
                            >
                                <span className="material-symbols-outlined text-4xl font-black text-white">bolt</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, rotate: -6 }}
                                animate={{ opacity: 1, rotate: -6 }}
                                className="absolute -bottom-6 -left-12 bg-[#4ECDC4] border-4 border-accent-dark rounded-2xl p-4 shadow-chunky-sm"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined font-black text-accent-dark">trending_up</span>
                                    <span className="text-sm font-black text-accent-dark uppercase tracking-tighter">Orders +124%</span>
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
                        className="w-full max-w-md"
                    >
                        <div className="bg-white border-4 border-accent-dark rounded-3xl p-8 lg:p-10 shadow-chunky">
                            <div className="mb-10 text-center lg:text-left">
                                <div className="inline-block bg-primary/20 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest text-accent-dark mb-4">
                                    Partner Portal
                                </div>
                                <h2 className="text-3xl font-black text-accent-dark mb-2">Login to Account</h2>
                                <p className="text-accent-dark/60 font-bold">Manage your restaurant orders and growth.</p>
                            </div>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-black text-accent-dark uppercase tracking-wider mb-2" htmlFor="restaurant-email">
                                        Restaurant Email
                                    </label>
                                    <input
                                        className="w-full px-5 py-4 bg-background-light border-2 border-accent-dark rounded-2xl focus:ring-0 focus:border-primary text-accent-dark font-bold placeholder:text-accent-dark/30 transition-all"
                                        id="restaurant-email"
                                        placeholder="owner@restaurant.com"
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-black text-accent-dark uppercase tracking-wider" htmlFor="password">
                                            Password
                                        </label>
                                        <a className="text-xs font-black text-accent-dark/40 hover:text-accent-dark transition-colors" href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <input
                                        className="w-full px-5 py-4 bg-background-light border-2 border-accent-dark rounded-2xl focus:ring-0 focus:border-primary text-accent-dark font-bold placeholder:text-accent-dark/30 transition-all"
                                        id="password"
                                        placeholder="••••••••"
                                        type="password"
                                    />
                                </div>
                                <div className="flex items-center gap-3 py-2">
                                    <input className="w-5 h-5 rounded border-2 border-accent-dark text-primary focus:ring-offset-0 focus:ring-0" id="remember" type="checkbox" />
                                    <label className="text-sm font-bold text-accent-dark" htmlFor="remember">
                                        Remember this device
                                    </label>
                                </div>
                                <button className="w-full bg-primary border-4 border-accent-dark shadow-chunky py-4 rounded-2xl text-lg font-black text-accent-dark hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-[0.98]">
                                    Login to Partner Portal
                                </button>
                            </form>
                            <div className="mt-10 pt-8 border-t-2 border-accent-dark/5">
                                <div className="flex flex-col gap-4">
                                    <a className="flex items-center justify-between group" href="#">
                                        <span className="text-sm font-bold text-accent-dark/60 group-hover:text-accent-dark transition-colors">Need help accessing your account?</span>
                                        <span className="material-symbols-outlined text-accent-dark/40 group-hover:text-primary transition-colors">help</span>
                                    </a>
                                    <a className="flex items-center justify-between group" href="#">
                                        <span className="text-sm font-bold text-accent-dark/60 group-hover:text-accent-dark transition-colors">Register a new restaurant branch</span>
                                        <span className="material-symbols-outlined text-accent-dark/40 group-hover:text-primary transition-colors">add_business</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p className="mt-8 text-center text-sm font-bold text-accent-dark/60">
                            Not a partner yet?
                            <a className="ml-1 text-accent-dark underline decoration-primary decoration-4 underline-offset-2 hover:text-primary transition-colors font-black" href="#">Start selling today</a>
                        </p>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default PartnerLoginPage;
