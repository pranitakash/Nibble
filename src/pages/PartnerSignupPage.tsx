import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PartnerSignupPage: React.FC = () => {
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
                            Grow your <span className="bg-white px-4 py-1 inline-block mt-2 border-4 border-accent-dark shadow-chunky-sm -rotate-2">business</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative inline-block mt-8"
                        >
                            <div className="w-[500px] h-[350px] bg-white border-8 border-accent-dark rounded-3xl shadow-chunky overflow-hidden relative">
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1c1c0d 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        alt="3D illustration of a cozy friendly restaurant storefront with an outdoor patio"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-ds0O9jjNdJ-UG2PhW9Du-Iah5eSZVRNo9FFt6W8rqM_wQo5AoVIC331P4OnJq9eHfynsx2WxdP0LAzMTqz_pOBYYHSYx_KretnPINGpMxFHLvDsqvC_vv3PRS1A-ANoxr014LFg1UwD9YcHRN6OIv5ejv3wEGWbyKwvbBul8_bMjMpUEDpQn_yNF_h8KpcgYnLP2Lu538xw1-rRFW71jtnUf5jc93t0pAqdWFUWGL_xE2ZeL062wsdGF5KlFwFPKPATV9oQkoy4"
                                    />
                                </div>
                                <div className="absolute top-0 left-0 right-0 h-8 bg-red-500 border-b-4 border-accent-dark flex">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className={`flex-1 ${i < 5 ? 'border-r-4 border-accent-dark' : ''} ${i % 2 === 0 ? 'bg-red-400' : 'bg-white'}`}></div>
                                    ))}
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, rotate: -12 }}
                                animate={{ opacity: 1, rotate: -12 }}
                                className="absolute -top-10 -left-10 bg-[#FF6B6B] border-4 border-accent-dark rounded-full w-24 h-24 flex items-center justify-center shadow-chunky-sm"
                            >
                                <span className="material-symbols-outlined text-4xl font-black text-white">storefront</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, rotate: 6 }}
                                animate={{ opacity: 1, rotate: 6 }}
                                className="absolute -bottom-6 -right-12 bg-[#4ECDC4] border-4 border-accent-dark rounded-2xl p-4 shadow-chunky-sm"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined font-black text-accent-dark">star</span>
                                    <span className="text-sm font-black text-accent-dark uppercase tracking-tighter">Top Rated Partner</span>
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
                        className="w-full max-w-md"
                    >
                        <div className="bg-white border-4 border-accent-dark rounded-3xl p-8 lg:p-10 shadow-chunky">
                            <div className="mb-10 text-center lg:text-left">
                                <div className="inline-block bg-primary/20 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest text-accent-dark mb-4">
                                    Become a Partner
                                </div>
                                <h2 className="text-3xl font-black text-accent-dark mb-2">Let's Get Started</h2>
                                <p className="text-accent-dark/60 font-bold">Reach thousands of new customers with Nibble.</p>
                            </div>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-black text-accent-dark uppercase tracking-wider mb-2" htmlFor="restaurant-name">
                                        Restaurant Name
                                    </label>
                                    <input
                                        className="w-full px-5 py-4 bg-background-light border-2 border-accent-dark rounded-2xl focus:ring-0 focus:border-primary text-accent-dark font-bold placeholder:text-accent-dark/30 transition-all"
                                        id="restaurant-name"
                                        placeholder="The Tasty Bistro"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-black text-accent-dark uppercase tracking-wider mb-2" htmlFor="owner-name">
                                        Owner Name
                                    </label>
                                    <input
                                        className="w-full px-5 py-4 bg-background-light border-2 border-accent-dark rounded-2xl focus:ring-0 focus:border-primary text-accent-dark font-bold placeholder:text-accent-dark/30 transition-all"
                                        id="owner-name"
                                        placeholder="John Doe"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-black text-accent-dark uppercase tracking-wider mb-2" htmlFor="business-email">
                                        Business Email
                                    </label>
                                    <input
                                        className="w-full px-5 py-4 bg-background-light border-2 border-accent-dark rounded-2xl focus:ring-0 focus:border-primary text-accent-dark font-bold placeholder:text-accent-dark/30 transition-all"
                                        id="business-email"
                                        placeholder="contact@restaurant.com"
                                        type="email"
                                    />
                                </div>
                                <div className="flex items-start gap-3 py-2">
                                    <input className="mt-1 w-5 h-5 rounded border-2 border-accent-dark text-primary focus:ring-offset-0 focus:ring-0" id="terms" type="checkbox" />
                                    <label className="text-sm font-bold text-accent-dark leading-tight" htmlFor="terms">
                                        I agree to the Partner Terms of Service and Privacy Policy
                                    </label>
                                </div>
                                <button className="w-full bg-primary border-4 border-accent-dark shadow-chunky-sm py-4 rounded-2xl text-lg font-black text-accent-dark hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-[0.98] mt-2">
                                    Register My Restaurant
                                </button>
                            </form>

                            <div className="relative my-8 text-center">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t-2 border-accent-dark/10"></div>
                                </div>
                                <span className="relative px-4 bg-white text-xs font-black text-accent-dark/30 uppercase tracking-widest">
                                    Or sign up with
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
                                    Already have an account?
                                    <Link className="ml-1 text-accent-dark underline decoration-primary decoration-4 underline-offset-2 hover:text-primary transition-colors font-black" to="/partner-login">Log in here</Link>
                                </p>
                            </div>
                        </div>
                        <p className="mt-8 text-center text-sm font-bold text-accent-dark/60">
                            Want to deliver instead?
                            <Link className="ml-1 text-accent-dark underline decoration-primary decoration-4 underline-offset-2 hover:text-primary transition-colors font-black" to="/rider-signup">Become a Rider</Link>
                        </p>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default PartnerSignupPage;
