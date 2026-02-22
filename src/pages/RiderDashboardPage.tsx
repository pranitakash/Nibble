import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DashboardNavbar from '../components/layout/DashboardNavbar';
import DashboardHeader from '../components/layout/DashboardHeader';

const RiderDashboardPage: React.FC = () => {
    const navItems = [
        { icon: 'account_balance_wallet', label: 'Wallet', href: '/rider/wallet', active: true },
    ];

    const riderStatus = (
        <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-accent-dark animate-pulse"></div>
            <span className="text-xs font-black uppercase tracking-widest">Online & Active</span>
        </div>
    );

    const riderActions = (
        <div className="flex items-center gap-2">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-accent-dark shadow-chunky-sm px-8 py-3 rounded-full text-xs font-black transition-all uppercase leading-none"
            >
                Offline
            </motion.button>
            <Link to="/">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary border-2 border-accent-dark shadow-chunky-sm px-8 py-3 rounded-full text-xs font-black transition-all uppercase leading-none"
                >
                    Logout
                </motion.button>
            </Link>
        </div>
    );

    return (
        <div className="bg-background-light text-accent-dark min-h-screen font-display flex flex-col">
            <DashboardNavbar
                items={navItems}
                statusSection={riderStatus}
                rightSection={riderActions}
                profileName="Marco Ross"
            />

            {/* Main Content Area */}
            <main className="flex-1 p-6 lg:p-10 pt-32 lg:pt-32 overflow-y-auto">
                <DashboardHeader
                    title="Ready to Roll, Marco!"
                    subtitle="You're currently Online & winning."
                    icon="moped"
                />

                {/* Unified Stats Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { label: "Today's Earnings", value: '$142.50', sub: '+15% Boost', icon: 'payments', iconColor: 'text-green-500' },
                        { label: 'Completed Deliveries', value: '18', sub: 'Target: 25', icon: 'package_2', iconColor: 'text-blue-500' },
                        { label: 'Power Rating', value: '4.9', sub: 'Top 5% Rider', icon: 'star', iconColor: 'text-primary' },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[2.5rem] border-4 border-accent-dark shadow-chunky transition-transform group relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="bg-accent-dark/5 p-4 rounded-2xl border-2 border-accent-dark shadow-chunky-sm group-hover:bg-primary transition-colors flex items-center justify-center">
                                    <span className={`material-symbols-outlined text-4xl font-black ${stat.iconColor}`} style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>{stat.icon}</span>
                                </div>
                                <span className="bg-accent-dark text-white px-4 py-1 rounded-full text-[10px] font-black border-2 border-accent-dark uppercase shadow-chunky-sm">
                                    {stat.sub}
                                </span>
                            </div>
                            <h2 className="text-6xl font-black italic tracking-tighter mb-1">{stat.value}</h2>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent-dark/40">{stat.label}</p>

                            <div className="absolute -bottom-8 -right-8 size-24 bg-accent-dark/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                        </motion.div>
                    ))}
                </section>
                {/* ... (rest of the content) */}

                <section className="mb-16">
                    <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-8 flex items-center gap-3">
                        <span className="bg-primary p-2 border-4 border-[#1c1c0d] rounded-2xl shadow-chunky-sm rotate-3">
                            <span className="material-symbols-outlined block text-3xl font-black">delivery_dining</span>
                        </span>
                        Active Order Console
                    </h3>
                    <div className="border-4 border-[#1c1c0d] shadow-chunky bg-white rounded-[3rem] overflow-hidden flex flex-col xl:flex-row min-h-[500px]">
                        {/* Map View Container */}
                        <div className="xl:w-3/5 relative min-h-[400px] border-b-4 xl:border-b-0 xl:border-r-4 border-[#1c1c0d] bg-slate-100 overflow-hidden group">
                            <img
                                alt="Map View"
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[10s] ease-linear"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO4AnyGQ0FAuqqqnPMh6iACmITNLLvZ0n0XuT21kcpu1rc-IHL2YOkavJgnKCtbnt4U9yiJ86aw-y0QM3Ogso0D0AvwI5t96S5PrqsvJ1wt2xWXucBbLhYJoqw7wAI8BpXi5URAuDwsNQ0kbiwVhyDrx9UvpmkpGTncOnZED49xsOXiNs_CwFEnznseReevNpqywZnS8yEGJGrOQH8kWlF2rPuQmx8_h_9R7SCr8yawrUZYk2oDZU-FVL6VioQ0E5LKZhRWOmE90Q"
                            />
                            <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>

                            {/* Route Indicator Overlay */}
                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <path d="M20,80 Q50,20 80,40" fill="none" stroke="#f9f506" strokeWidth="4" strokeDasharray="10,5" className="animate-[dash_20s_linear_infinite]" />
                                </svg>
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="bg-primary border-4 border-[#1c1c0d] p-4 rounded-full shadow-chunky animate-bounce">
                                    <span className="material-symbols-outlined text-4xl font-black">electric_scooter</span>
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 bg-accent-dark text-white border-4 border-[#1c1c0d] px-6 py-3 rounded-2xl shadow-chunky font-black text-sm italic tracking-tighter">
                                2.4 km to Drop-off • 8 mins
                            </div>
                        </div>

                        {/* Order Details Container */}
                        <div className="xl:w-2/5 p-8 xl:p-12 flex flex-col justify-between bg-white relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div>
                                        <span className="bg-green-400 border-2 border-[#1c1c0d] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-chunky-sm italic">Pickup Ready</span>
                                        <h4 className="text-4xl font-black mt-4 italic tracking-tighter">Burger King #402</h4>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-[#1c1c0d]/30 uppercase tracking-[0.2em] mb-1">Mission ID</p>
                                        <p className="text-2xl font-black italic tracking-tighter">#NB-9921</p>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="flex flex-col items-center pt-2">
                                            <div className="size-8 rounded-full border-4 border-[#1c1c0d] bg-primary shadow-chunky-sm flex items-center justify-center">
                                                <div className="size-2 bg-accent-dark rounded-full"></div>
                                            </div>
                                            <div className="w-1.5 flex-1 bg-accent-dark/10 my-2 rounded-full border-l-4 border-dotted border-[#1c1c0d]"></div>
                                            <div className="size-8 rounded-full border-4 border-[#1c1c0d] bg-red-400 shadow-chunky-sm flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white text-sm font-black text-xs">location_on</span>
                                            </div>
                                        </div>
                                        <div className="space-y-10 flex-1">
                                            <div className="group">
                                                <p className="text-[10px] font-black text-[#1c1c0d]/30 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Pickup Hub</p>
                                                <p className="font-black text-xl italic tracking-tighter leading-tight">123 Market Street, Downtown Commercial Zone</p>
                                            </div>
                                            <div className="group">
                                                <p className="text-[10px] font-black text-[#1c1c0d]/30 uppercase tracking-widest mb-1 group-hover:text-red-400 transition-colors">Drop-off Zone</p>
                                                <p className="font-black text-xl italic tracking-tighter leading-tight">456 Pine Ave, Apartment 4B • Door Code: 1234</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: '#f9f506', rotate: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-primary border-4 border-[#1c1c0d] shadow-chunky py-8 rounded-[2rem] font-black text-3xl uppercase tracking-tighter mt-12 transition-all flex items-center justify-center gap-4 italic group"
                                >
                                    <span className="material-symbols-outlined text-5xl group-hover:translate-x-2 transition-transform">near_me</span>
                                    Start Mission
                                </motion.button>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-0"></div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-black uppercase tracking-tighter italic flex items-center gap-3">
                            <span className="bg-blue-400 p-2 border-4 border-[#1c1c0d] rounded-2xl shadow-chunky-sm -rotate-3">
                                <span className="material-symbols-outlined block text-3xl font-black text-white">history</span>
                            </span>
                            Shift History
                        </h3>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="font-black text-sm uppercase tracking-widest underline underline-offset-8 decoration-primary decoration-4"
                        >
                            View All Logs
                        </motion.button>
                    </div>
                    <div className="space-y-6">
                        {[
                            { title: 'Sushi Zen Garden', time: 'Today • 12:45 PM • 3.2 km', amount: '+$12.40', sub: 'Includes $4.00 Tip', icon: 'fastfood', color: 'bg-amber-100' },
                            { title: 'Pizza Planet', time: 'Today • 11:20 AM • 1.8 km', amount: '+$8.50', sub: 'Base Fare', icon: 'local_pizza', color: 'bg-rose-100' },
                            { title: 'Gelato Dreams', time: 'Yesterday • 8:15 PM • 4.5 km', amount: '+$15.20', sub: 'Double Trip Bonus', icon: 'icecream', color: 'bg-green-100', opacity: 'opacity-80' },
                        ].map((activity, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 15 }}
                                className={`group border-4 border-[#1c1c0d] shadow-chunky bg-white p-8 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 transition-all ${activity.opacity || ''}`}
                            >
                                <div className="flex items-center gap-8 w-full sm:w-auto">
                                    <div className={`${activity.color} size-20 border-4 border-[#1c1c0d] rounded-[1.5rem] flex items-center justify-center shadow-chunky-sm group-hover:rotate-6 transition-transform`}>
                                        <span className="material-symbols-outlined text-4xl font-black">{activity.icon}</span>
                                    </div>
                                    <div>
                                        <h5 className="font-black text-2xl italic tracking-tighter text-[#1c1c0d]">{activity.title}</h5>
                                        <p className="text-sm font-black text-[#1c1c0d]/40 uppercase tracking-widest mt-1">{activity.time}</p>
                                    </div>
                                </div>
                                <div className="text-right w-full sm:w-auto flex sm:flex-col justify-between items-end border-t-2 sm:border-t-0 border-accent-dark/5 pt-4 sm:pt-0">
                                    <p className="text-4xl font-black italic tracking-tighter text-accent-dark">{activity.amount}</p>
                                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] mt-2 px-3 py-1 rounded-full border-2 border-accent-dark shadow-chunky-sm ${activity.sub.includes('Tip') || activity.sub.includes('Bonus') ? 'bg-green-400' : 'bg-primary'}`}>{activity.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default RiderDashboardPage;
