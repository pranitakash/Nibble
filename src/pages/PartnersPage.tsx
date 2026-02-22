import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PartnersPage: React.FC = () => {
    return (
        <div className="bg-background-light text-accent-dark antialiased font-display">
            <section className="pt-0 pb-20 px-6 lg:px-20 bg-primary border-b-4 border-accent-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1c1c0d 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-32 lg:pt-40">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block bg-accent-dark text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            Restaurant Partners
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black leading-[1] text-accent-dark mb-8">
                            Scale Your Kitchen <br />with <span className="underline decoration-8 underline-offset-8 decoration-white">Nibble</span>
                        </h1>
                        <p className="text-xl lg:text-2xl font-bold text-accent-dark/80 mb-10 leading-relaxed max-w-lg">
                            Reach more hungry customers, streamline your operations, and grow your revenue by 35% in your first quarter.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/partner-signup">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-accent-dark text-white text-xl font-black px-10 py-6 rounded-2xl shadow-chunky-sm transition-all"
                                >
                                    Register Now
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-accent-dark text-xl font-black px-10 py-6 rounded-2xl border-4 border-accent-dark shadow-chunky-sm transition-all"
                            >
                                View Demo
                            </motion.button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 2 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-white border-4 border-accent-dark rounded-[3rem] p-4 shadow-chunky-lg overflow-hidden">
                            <img alt="Vibrant Restaurant" className="w-full h-auto rounded-[2.5rem] object-cover aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4" />
                            <div className="absolute -top-6 -left-6 bg-accent-dark text-primary p-6 rounded-3xl border-4 border-white shadow-chunky-sm -rotate-6">
                                <span className="material-symbols-outlined text-4xl">storefront</span>
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white border-4 border-accent-dark px-6 py-4 rounded-2xl shadow-chunky-sm rotate-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-green-500 fill-1 font-black">trending_up</span>
                                <span className="font-black text-lg">+124% Orders</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 lg:px-20 bg-background-light">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black text-accent-dark mb-6">Why Partner With Us?</h2>
                        <p className="text-xl font-bold text-accent-dark/60 max-w-2xl mx-auto">We provide the tools and the traffic. You focus on what you do best: making incredible food.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Greater Reach', desc: 'Access our massive network of over 5 million active foodies looking for their next favorite meal.', icon: 'public', color: 'bg-primary' },
                            { title: 'Seamless Logistics', desc: 'Our hero fleet handles every delivery with care. Track orders in real-time from prep to porch.', icon: 'moped', color: 'bg-orange-400', iconColor: 'text-white' },
                            { title: 'Powerful Analytics', desc: 'Get deep insights into your sales, popular items, and customer feedback to optimize your menu.', icon: 'monitoring', color: 'bg-blue-400', iconColor: 'text-white' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white border-4 border-accent-dark rounded-3xl p-8 shadow-chunky cursor-default group"
                            >
                                <div className={`w-20 h-20 ${item.color} border-4 border-accent-dark rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-6 transition-transform`}>
                                    <span className={`material-symbols-outlined text-4xl font-black ${item.iconColor || ''}`}>{item.icon}</span>
                                </div>
                                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                                <p className="font-medium text-accent-dark/70 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 lg:px-20 bg-accent-dark text-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-5xl font-black mb-6">Partner Success Stories</h2>
                            <p className="text-xl text-white/60 font-medium">Real kitchens, real growth. See how Nibble transformed these businesses.</p>
                        </div>
                        <div className="flex gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: '#f9f506', color: '#1c1c0d' }}
                                whileTap={{ scale: 0.9 }}
                                className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center transition-all"
                            >
                                <span className="material-symbols-outlined">arrow_back</span>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: '#e6df00' }}
                                whileTap={{ scale: 0.9 }}
                                className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-white text-accent-dark transition-all"
                            >
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </motion.button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { name: 'Noodle House Central', since: '2021', text: '"Switching to Nibble was the best decision we made. Our delivery volume doubled in three months, and the analytics dashboard helped us realize our lunch specials were the real winners."', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHnMcd2yuIG2PSN3AHQOh7UjCBAkhf4x5JMLUgMkCc3ClZS1fHy6tAms8T0fzcojrtH-5zGgZ2g9RSjcySKatxxxpW9ufq0uRuBXoXwG814YJa-zNpirXcwVfJvvTVUftwEAOIquNk-6c6wdtTdCMSzeNK8jNm5mbLVX8VjGH295CsqUdAFTdwW3xNrZEXTcP7F-dX6fc95jDa_J_fnnxDTNRo-hY9D2Qvpxu3Y0sI1F6549m_nXsA2cXzgHvhoHeIbks0hD5gF5Q' },
                            { name: 'The Burger Lab', since: '2022', text: '"The logistics are seamless. We no longer worry about late deliveries or cold food. Nibble\'s fleet is professional, fast, and our customers love them."', icon: 'restaurant' },
                        ].map((story, idx) => (
                            <div key={idx} className="bg-white/5 border-2 border-white/20 rounded-[2.5rem] p-10 relative">
                                <span className="material-symbols-outlined text-6xl text-primary/40 absolute top-8 right-10">format_quote</span>
                                <div className="flex items-center gap-6 mb-8">
                                    {story.img ? (
                                        <img alt="Partner" className="w-20 h-20 rounded-2xl object-cover border-2 border-primary" src={story.img} />
                                    ) : (
                                        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center border-2 border-white overflow-hidden">
                                            <span className="material-symbols-outlined text-4xl text-accent-dark font-black">{story.icon}</span>
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="text-2xl font-black">{story.name}</h4>
                                        <p className="text-primary font-bold">Partner since {story.since}</p>
                                    </div>
                                </div>
                                <p className="text-xl italic font-medium leading-relaxed text-white/80">{story.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32 px-6 lg:px-20 text-center">
                <motion.div
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    className="max-w-4xl mx-auto bg-primary border-4 border-accent-dark rounded-[4rem] p-16 shadow-chunky-lg relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h2 className="text-6xl font-black text-accent-dark mb-8">Ready to Level Up?</h2>
                        <p className="text-2xl font-bold text-accent-dark/70 mb-12 max-w-xl mx-auto">
                            Join 15,000+ restaurants already thriving on the Nibble platform.
                        </p>
                        <Link to="/partner-signup">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-accent-dark text-white text-4xl font-black px-16 py-8 rounded-[2rem] shadow-chunky transition-all flex items-center gap-4 mx-auto"
                            >
                                Partner Now
                                <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
                            </motion.button>
                        </Link>
                    </div>
                    <span className="material-symbols-outlined absolute -top-10 -left-10 text-[200px] text-accent-dark/5 rotate-12">restaurant_menu</span>
                    <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-accent-dark/5 -rotate-12">shopping_bag</span>
                </motion.div>
            </section>
        </div>
    );
};

export default PartnersPage;
