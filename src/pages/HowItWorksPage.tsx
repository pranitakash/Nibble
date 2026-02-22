import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksPage: React.FC = () => {
    return (
        <div className="bg-background-light text-accent-dark antialiased overflow-x-hidden font-display">
            <main className="pt-0 pb-24 px-6 lg:px-20 relative">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <span className="material-symbols-outlined absolute top-40 left-10 text-primary text-6xl opacity-40 rotate-12">star</span>
                    <span className="material-symbols-outlined absolute top-80 right-20 text-primary text-4xl opacity-30 -rotate-12">star</span>
                    <span className="material-symbols-outlined absolute bottom-40 left-1/4 text-primary text-5xl opacity-40">auto_awesome</span>
                    <div className="absolute top-1/2 -right-10 w-40 h-1 bg-primary rotate-45 opacity-20"></div>
                    <div className="absolute bottom-1/4 -left-10 w-60 h-1 bg-primary -rotate-12 opacity-20"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 pt-32 lg:pt-40">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block bg-primary border-2 border-accent-dark px-6 py-1 rounded-full text-sm font-black uppercase tracking-widest mb-6 shadow-chunky-sm"
                        >
                            The Process
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl lg:text-8xl font-black leading-tight mb-6"
                        >
                            How We <span className="underline decoration-primary decoration-8">Deliver</span> Magic.
                        </motion.h1>
                        <p className="text-xl font-bold text-accent-dark/60 max-w-2xl mx-auto">
                            From your screen to your stomach in record time. We've simplified the journey so you can focus on the flavor.
                        </p>
                    </div>

                    <div className="space-y-32">
                        {/* Step 1 */}
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -50 }}
                                viewport={{ once: true }}
                                className="flex-1 w-full"
                            >
                                <div className="relative group">
                                    <div className="absolute -top-8 -left-8 w-24 h-24 bg-white border-4 border-accent-dark rounded-full flex items-center justify-center z-20 shadow-chunky-sm">
                                        <span className="text-4xl font-black italic">1</span>
                                    </div>
                                    <div className="bg-[#ffedeb] border-[6px] border-accent-dark rounded-[3rem] p-8 lg:p-12 shadow-chunky transition-transform group-hover:-translate-y-2">
                                        <div className="aspect-square lg:aspect-video rounded-2xl border-4 border-accent-dark bg-white overflow-hidden relative shadow-inner">
                                            <img alt="3D smartphone food app" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4" />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                                                <div className="bg-white border-2 border-accent-dark px-4 py-2 rounded-xl shadow-chunky-sm rotate-3 flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-accent-dark">touch_app</span>
                                                    <span className="font-black">Tap to Order</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="flex-1 space-y-6">
                                <h2 className="text-5xl lg:text-6xl font-black leading-none">Pick your favorite meal.</h2>
                                <p className="text-xl font-bold text-accent-dark/70 leading-relaxed">
                                    Browse through thousands of local favorites. From spicy tacos to gourmet salads, your next craving is just a tap away in our super-fast app.
                                </p>
                                <div className="flex gap-4">
                                    <div className="bg-white border-2 border-accent-dark px-4 py-2 rounded-xl font-black text-sm">#HungryHero</div>
                                    <div className="bg-white border-2 border-accent-dark px-4 py-2 rounded-xl font-black text-sm">#FastFoodie</div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 50 }}
                                viewport={{ once: true }}
                                className="flex-1 w-full"
                            >
                                <div className="relative group">
                                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-white border-4 border-accent-dark rounded-full flex items-center justify-center z-20 shadow-chunky-sm">
                                        <span className="text-4xl font-black italic">2</span>
                                    </div>
                                    <div className="bg-[#e7f6ff] border-[6px] border-accent-dark rounded-[3rem] p-8 lg:p-12 shadow-chunky transition-transform group-hover:-translate-y-2">
                                        <div className="aspect-square lg:aspect-video rounded-2xl border-4 border-accent-dark bg-white overflow-hidden relative shadow-inner">
                                            <img alt="3D professional kitchen" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHnMcd2yuIG2PSN3AHQOh7UjCBAkhf4x5JMLUgMkCc3ClZS1fHy6tAms8T0fzcojrtH-5zGgZ2g9RSjcySKatxxxpW9ufq0uRuBXoXwG814YJa-zNpirXcwVfJvvTVUftwEAOIquNk-6c6wdtTdCMSzeNK8jNm5mbLVX8VjGH295CsqUdAFTdwW3xNrZEXTcP7F-dX6fc95jDa_J_fnnxDTNRo-hY9D2Qvpxu3Y0sI1F6549m_nXsA2cXzgHvhoHeIbks0hD5gF5Q" />
                                            <div className="absolute top-4 left-4 bg-primary border-2 border-accent-dark px-4 py-1 rounded-full text-xs font-black uppercase">Chef Status: Active</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="flex-1 space-y-6">
                                <h2 className="text-5xl lg:text-6xl font-black leading-none">Chefs get cooking.</h2>
                                <p className="text-xl font-bold text-accent-dark/70 leading-relaxed">
                                    Our partner restaurants receive your order instantly. Fresh ingredients, high standards, and professional kitchens ensure every bite is a hero experience.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 font-bold"><span className="material-symbols-outlined text-green-500 font-black">check_circle</span> Quality Inspected</li>
                                    <li className="flex items-center gap-3 font-bold"><span className="material-symbols-outlined text-green-500 font-black">check_circle</span> Eco-friendly Packaging</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -50 }}
                                viewport={{ once: true }}
                                className="flex-1 w-full"
                            >
                                <div className="relative group">
                                    <div className="absolute -top-8 -left-8 w-24 h-24 bg-white border-4 border-accent-dark rounded-full flex items-center justify-center z-20 shadow-chunky-sm">
                                        <span className="text-4xl font-black italic">3</span>
                                    </div>
                                    <div className="bg-[#f0fff4] border-[6px] border-accent-dark rounded-[3rem] p-8 lg:p-12 shadow-chunky transition-transform group-hover:-translate-y-2">
                                        <div className="aspect-square lg:aspect-video rounded-2xl border-4 border-accent-dark bg-white overflow-hidden relative shadow-inner">
                                            <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[120px] text-accent-dark">moped</span>
                                            </div>
                                            <div className="absolute bottom-4 right-4 bg-white border-2 border-accent-dark px-4 py-2 rounded-xl shadow-chunky-sm -rotate-2 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary font-black">bolt</span>
                                                <span className="font-black">Sub-20 Min</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="flex-1 space-y-6">
                                <h2 className="text-5xl lg:text-6xl font-black leading-none">Riders fly to you.</h2>
                                <p className="text-xl font-bold text-accent-dark/70 leading-relaxed">
                                    Our fleet of hero riders are already on the move. Real-time tracking keeps you in the loop until your food arrives hot and ready at your doorstep.
                                </p>
                                <motion.button
                                    whileHover={{ x: 10, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-accent-dark text-white px-8 py-4 rounded-full font-black flex items-center gap-3 shadow-chunky-sm transition-all"
                                >
                                    Track Your Order <span className="material-symbols-outlined">map</span>
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        viewport={{ once: true }}
                        className="mt-40 bg-primary border-[6px] border-accent-dark rounded-[4rem] p-12 lg:p-20 text-center shadow-chunky relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className="text-5xl lg:text-7xl font-black mb-8">Ready to eat with Nibble?</h3>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-accent-dark text-white px-12 py-5 rounded-full text-xl font-black shadow-chunky-sm transition-all"
                                >
                                    Get Started Now
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white border-4 border-accent-dark px-12 py-5 rounded-full text-xl font-black shadow-chunky-sm transition-all"
                                >
                                    View Menu
                                </motion.button>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full -mr-24 -mt-24"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-dark/5 rounded-full -ml-16 -mb-16"></div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default HowItWorksPage;
