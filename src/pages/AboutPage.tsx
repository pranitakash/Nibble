import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-cream text-accent-dark antialiased font-display">
            <main>
                <section className="pt-0 pb-20 lg:pb-32 bg-primary relative overflow-hidden border-b-4 border-accent-dark">
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1c1c0d 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10 pt-32 lg:pt-40">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="inline-block bg-accent-dark text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                                    Our Mission
                                </span>
                                <h1 className="text-6xl lg:text-8xl font-black leading-[1] text-accent-dark mb-8">
                                    We’re on a Mission to <span className="bg-white px-3">Feed Heroes</span>
                                </h1>
                                <p className="text-xl lg:text-2xl font-bold text-accent-dark/80 leading-relaxed max-w-lg">
                                    Behind every order is a local hero. Whether you're the chef, the rider, or the hungry neighbor—we're here to power your day.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="bg-white p-4 rounded-[3rem] border-4 border-accent-dark shadow-chunky-lg overflow-hidden">
                                    <img
                                        alt="Community sharing a meal"
                                        className="w-full aspect-video lg:aspect-square object-cover rounded-[2rem]"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-accent-dark text-white p-6 rounded-2xl shadow-chunky-sm -rotate-6 hidden lg:block">
                                    <p className="text-3xl font-black italic">EST. 2024</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-24 px-6 lg:px-20 bg-cream">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6">The Nibble Story</h2>
                            <p className="text-xl font-bold text-accent-dark/60 max-w-2xl mx-auto">
                                From a single delivery to a nationwide community, we've always put people and flavor first.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: 'Innovation', desc: "We're rethinking the tech behind food. Faster routes, smarter kitchens, and a seamless experience for every hero.", icon: 'bolt', color: 'bg-blue-100', iconColor: 'text-blue-600' },
                                { title: 'Community', desc: 'Supporting local restaurants and creating fair opportunities for our riders is at the core of everything we do.', icon: 'groups', color: 'bg-pink-100', iconColor: 'text-pink-600' },
                                { title: 'Quality', desc: 'No lukewarm meals on our watch. We ensure every bite arrives just as the chef intended—fresh, hot, and delicious.', icon: 'verified', color: 'bg-green-100', iconColor: 'text-green-600' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className="bg-white p-10 rounded-[2.5rem] border-4 border-accent-dark shadow-chunky transition-transform"
                                >
                                    <div className={`w-16 h-16 ${item.color} border-2 border-accent-dark rounded-2xl flex items-center justify-center mb-8`}>
                                        <span className={`material-symbols-outlined text-4xl ${item.iconColor}`}>{item.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 uppercase italic">{item.title}</h3>
                                    <p className="text-lg font-medium text-accent-dark/70 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="pb-24 px-6 lg:px-20">
                    <div className="max-w-7xl mx-auto bg-accent-dark rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
                            {[
                                { val: '50M+', label: 'Meals Delivered' },
                                { val: '12k+', label: 'Partner Heroes' },
                                { val: '350+', label: 'Cities Reached' },
                                { val: '4.9/5', label: 'Hero Rating' },
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <p className="text-5xl lg:text-6xl font-black text-primary mb-2">{stat.val}</p>
                                    <p className="text-sm font-bold uppercase tracking-widest text-white/60">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 px-6 lg:px-20 bg-primary/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl lg:text-6xl font-black mb-8">Ready to join the movement?</h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-accent-dark text-white px-10 py-5 rounded-full font-black text-xl shadow-chunky transition-all"
                            >
                                Become a Partner
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white border-4 border-accent-dark px-10 py-5 rounded-full font-black text-xl shadow-chunky-sm transition-all"
                            >
                                Download App
                            </motion.button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;
