import React from 'react';
import { motion } from 'framer-motion';

const RiderLandingPage: React.FC = () => {
    return (
        <div className="bg-background-light text-accent-dark antialiased font-display">
            <main className="min-h-screen flex flex-col lg:flex-row pt-24">
                {/* Left Section - Split Background logic handled by parent or inline */}
                <div className="flex-1 flex items-center px-6 lg:px-20 py-12 bg-primary">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block bg-accent-dark text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6"
                        >
                            Join the 10,000+ Hero Fleet
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-black leading-[1.1] text-accent-dark mb-8"
                        >
                            Earn on Your <span className="bg-white px-2">Terms.</span> Be a Hero.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg lg:text-xl font-medium text-accent-dark/80 mb-10 leading-relaxed"
                        >
                            Turn your spare time into extra cash. Whether you're on a bike, scooter, or car, you're the engine that keeps our city fed.
                        </motion.p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-accent-dark text-white px-10 py-5 rounded-full text-xl font-black shadow-chunky transition-transform hover:-translate-y-1 active:translate-y-0">
                                Start Your Application
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 relative flex items-center justify-center min-h-[500px] lg:min-h-0 overflow-hidden bg-background-light">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 w-full max-w-lg px-6"
                    >
                        <div className="aspect-square rounded-full border-8 border-accent-dark bg-white shadow-chunky overflow-hidden flex items-center justify-center">
                            <img
                                className="w-full h-full object-cover"
                                alt="3D illustration of a delivery rider on a sleek yellow scooter"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20, rotate: 6 }}
                            animate={{ opacity: 1, x: 0, rotate: 6 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -top-4 right-0 bg-primary border-2 border-accent-dark rounded-2xl px-6 py-4 shadow-chunky-sm"
                        >
                            <p className="font-black text-lg">Up to $25/hr</p>
                            <p className="text-xs font-bold uppercase opacity-70">Average Earnings</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20, rotate: -6 }}
                            animate={{ opacity: 1, x: 0, rotate: -6 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-10 -left-4 bg-white border-2 border-accent-dark rounded-2xl px-6 py-4 shadow-chunky-sm"
                        >
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-green-500 font-bold">verified_user</span>
                                <span className="font-black">Fully Insured</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </main>

            <section className="py-24 px-6 lg:px-20 bg-background-light">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black mb-4">Why Ride with FoodieHero?</h2>
                        <p className="text-xl font-medium text-accent-dark/60">The best perks in the delivery game.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: 'Flexible Hours', desc: "You're the boss. Work for an hour or a whole day. It's completely up to you and your schedule.", icon: 'schedule', color: 'bg-primary' },
                            { title: 'Instant Payouts', desc: "Don't wait for payday. Cash out your earnings whenever you want, directly to your bank account.", icon: 'payments', color: 'bg-blue-400', iconColor: 'text-white' },
                            { title: 'Hero Insurance', desc: "Stay protected while you're on the road with our comprehensive accident and health coverage.", icon: 'security', color: 'bg-red-400', iconColor: 'text-white' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white border-4 border-accent-dark p-8 rounded-3xl shadow-chunky"
                            >
                                <div className={`w-16 h-16 ${item.color} rounded-2xl border-2 border-accent-dark flex items-center justify-center mb-6`}>
                                    <span className={`material-symbols-outlined text-3xl font-bold ${item.iconColor || ''}`}>{item.icon}</span>
                                </div>
                                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                                <p className="text-accent-dark/70 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 lg:px-20 bg-primary/10 border-y-4 border-accent-dark">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-black text-center mb-20">How to Become a Hero</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 border-t-4 border-dashed border-accent-dark/20 -z-0"></div>
                        {[
                            { step: 1, title: 'Apply Online', desc: 'Fill out the form in minutes. Just tell us who you are and what you drive.', icon: 'app_registration' },
                            { step: 2, title: 'Get Verified', desc: 'Upload your docs. Our team will review everything and get you ready to ride.', icon: 'verified' },
                            { step: 3, title: 'Start Earning', desc: 'Log in to the app, accept your first order, and start your hero journey.', icon: 'directions_bike' },
                        ].map((item, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-white border-4 border-accent-dark rounded-full flex items-center justify-center mb-8 shadow-chunky-sm">
                                    <span className="material-symbols-outlined text-5xl text-accent-dark">{item.icon}</span>
                                </div>
                                <div className="bg-accent-dark text-primary w-8 h-8 rounded-full flex items-center justify-center font-black mb-4">{item.step}</div>
                                <h4 className="text-2xl font-black mb-2">{item.title}</h4>
                                <p className="font-medium text-accent-dark/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 lg:px-20">
                <motion.div
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    className="max-w-5xl mx-auto bg-accent-dark rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-chunky"
                >
                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">Ready to Hit the Road?</h2>
                        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join the community of thousands of riders who choose FoodieHero for its flexibility and top-tier benefits.
                        </p>
                        <button className="bg-primary text-accent-dark px-12 py-6 rounded-full text-2xl font-black hover:scale-105 transition-transform shadow-[0_0_40px_rgba(249,245,6,0.3)] border-2 border-accent-dark">
                            Apply to Ride
                        </button>
                        <p className="mt-8 text-white/40 font-bold">Applications take less than 5 minutes.</p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default RiderLandingPage;
