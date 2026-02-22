import React from 'react';
import { motion } from 'framer-motion';

const RiderDashboardPage: React.FC = () => {
    return (
        <div className="bg-background-light text-[#1c1c0d] min-h-screen font-display flex flex-col md:flex-row h-screen overflow-hidden">
            <aside className="w-full md:w-72 border-b-4 md:border-b-0 md:border-r-4 border-[#1c1c0d] bg-background-light flex flex-col p-6 z-50">
                <div className="flex items-center gap-3 mb-10 md:mb-12">
                    <div className="bg-primary border-4 border-[#1c1c0d] p-2 rounded-xl shadow-chunky">
                        <span className="material-symbols-outlined text-3xl font-bold">electric_scooter</span>
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-tight">FoodieHero</h1>
                </div>
                <nav className="flex-1 space-y-4">
                    <a className="flex items-center gap-4 px-4 py-4 bg-primary border-4 border-[#1c1c0d] rounded-xl shadow-chunky font-extrabold" href="#">
                        <span className="material-symbols-outlined font-bold">dashboard</span>
                        Dashboard
                    </a>
                    {[
                        { icon: 'account_balance_wallet', label: 'Wallet' },
                        { icon: 'calendar_month', label: 'Schedule' },
                        { icon: 'contact_support', label: 'Support' },
                    ].map((item, idx) => (
                        <a key={idx} className="flex items-center gap-4 px-4 py-4 hover:bg-primary/20 border-4 border-transparent rounded-xl transition-all font-bold text-[#1c1c0d]/70" href="#">
                            <span className="material-symbols-outlined font-bold">{item.icon}</span>
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="mt-auto pt-6 border-t-4 border-[#1c1c0d] space-y-4 hidden md:block">
                    <div className="flex items-center gap-3 p-2 bg-white border-4 border-[#1c1c0d] rounded-xl shadow-chunky">
                        <div className="size-12 rounded-full border-2 border-[#1c1c0d] bg-amber-100 overflow-hidden shrink-0">
                            <img
                                alt="Rider Profile"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf1Iho9QW2E2YchA2Gx_5_BSfi9k7mIsI8_ap4O-WB9YUvvITcVC_yp008g5z22csruIZSH3vHZzMEwvwFUr_PimTQp8MU8phgISunTEsPcCHwMbOdcM1RaDwg1HAqxSbBtXNt0YcT4Bt7xfvqBgMaUWDVsy0QWY2MxtLZHtr1yXuGKsqTZjn1gCvdP2phlZnAZzX5hdcgQ9p-f2o7Wj_Ynpyo2YhmOOIvuD8fHvHD59IHsB4_MPWhbj-EPbjbAe-rNgKWbGq3DSU"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-black">Marco Ross</p>
                            <p className="text-xs font-bold text-[#1c1c0d]/50">Pro Rider • Level 4</p>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-background-light">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">Ready to Roll, Marco! 🛵</h2>
                        <p className="text-lg md:text-xl font-bold text-[#1c1c0d]/60">You're currently <span className="text-green-600">Online</span> & looking for orders.</p>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <button className="flex-1 md:flex-none border-4 border-[#1c1c0d] shadow-chunky bg-white px-6 py-3 rounded-xl font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                            <span className="material-symbols-outlined font-bold">settings</span>
                            Settings
                        </button>
                        <button className="flex-1 md:flex-none border-4 border-[#1c1c0d] shadow-chunky bg-[#ff4d4d] text-white px-8 py-3 rounded-xl font-black uppercase tracking-wider hover:bg-red-500 transition-colors">
                            Go Offline
                        </button>
                    </div>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                        { label: "Today's Earnings", value: '$142.50', sub: '+15% from yesterday', icon: 'payments', iconColor: 'text-green-500' },
                        { label: 'Deliveries Completed', value: '18', sub: 'Target: 25 today', icon: 'package_2', iconColor: 'text-blue-500' },
                        { label: 'Current Rating', value: '4.9/5', sub: 'Top 5% in your area', icon: 'star', iconColor: 'text-primary' },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="border-3 border-[#1c1c0d] shadow-chunky bg-white p-8 rounded-2xl"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <p className="text-sm font-black uppercase tracking-widest text-[#1c1c0d]/40">{stat.label}</p>
                                <span className={`material-symbols-outlined text-3xl ${stat.iconColor} font-bold`}>{stat.icon}</span>
                            </div>
                            <p className="text-5xl font-black">{stat.value.includes('/') ? <>{stat.value.split('/')[0]}<span className="text-2xl">/{stat.value.split('/')[1]}</span></> : stat.value}</p>
                            <p className={`text-sm font-bold mt-2 ${stat.sub.includes('+') ? 'text-green-600' : 'text-[#1c1c0d]/40'}`}>{stat.sub}</p>
                        </motion.div>
                    ))}
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                        <span className="bg-primary p-1 border-2 border-[#1c1c0d] rounded shadow-chunky">
                            <span className="material-symbols-outlined block">delivery_dining</span>
                        </span>
                        Active Order
                    </h3>
                    <div className="border-3 border-[#1c1c0d] shadow-chunky-lg bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[400px]">
                        <div className="md:w-1/2 relative min-h-[300px] border-b-4 md:border-b-0 md:border-r-4 border-[#1c1c0d] bg-slate-100 overflow-hidden">
                            <img
                                alt="Map View"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO4AnyGQ0FAuqqqnPMh6iACmITNLLvZ0n0XuT21kcpu1rc-IHL2YOkavJgnKCtbnt4U9yiJ86aw-y0QM3Ogso0D0AvwI5t96S5PrqsvJ1wt2xWXucBbLhYJoqw7wAI8BpXi5URAuDwsNQ0kbiwVhyDrx9UvpmkpGTncOnZED49xsOXiNs_CwFEnznseReevNpqywZnS8yEGJGrOQH8kWlF2rPuQmx8_h_9R7SCr8yawrUZYk2oDZU-FVL6VioQ0E5LKZhRWOmE90Q"
                            />
                            <div className="absolute inset-0 bg-blue-500/10 pointer-events-none"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="bg-primary border-4 border-[#1c1c0d] p-3 rounded-full shadow-chunky animate-bounce">
                                    <span className="material-symbols-outlined text-3xl font-black">electric_scooter</span>
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 bg-white border-4 border-[#1c1c0d] px-4 py-2 rounded-xl shadow-chunky font-black text-sm">
                                2.4 km to destination
                            </div>
                        </div>
                        <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <span className="bg-green-400 border-2 border-[#1c1c0d] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-chunky-hover">Pickup Ready</span>
                                        <h4 className="text-3xl font-black mt-3">Burger King #402</h4>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-black text-[#1c1c0d]/40 uppercase tracking-widest">Order ID</p>
                                        <p className="text-xl font-bold">#FH-9921</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="size-6 rounded-full border-2 border-[#1c1c0d] bg-primary"></div>
                                            <div className="w-1 flex-1 border-l-4 border-dotted border-[#1c1c0d] my-1"></div>
                                            <div className="size-6 rounded-full border-2 border-[#1c1c0d] bg-red-400"></div>
                                        </div>
                                        <div className="space-y-8">
                                            <div>
                                                <p className="text-xs font-black text-[#1c1c0d]/40 uppercase tracking-widest">Pickup From</p>
                                                <p className="font-bold text-lg">123 Market Street, Downtown</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-black text-[#1c1c0d]/40 uppercase tracking-widest">Drop-off To</p>
                                                <p className="font-bold text-lg">456 Pine Ave, Apartment 4B</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-primary border-4 border-[#1c1c0d] shadow-chunky py-6 rounded-2xl font-black text-2xl uppercase tracking-tighter mt-10 hover:bg-yellow-300 transition-colors flex items-center justify-center gap-4 active:translate-x-1 active:translate-y-1 active:shadow-none">
                                <span className="material-symbols-outlined text-4xl">near_me</span>
                                Start Navigation
                            </button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-black uppercase flex items-center gap-3">
                            <span className="bg-blue-400 p-1 border-2 border-[#1c1c0d] rounded shadow-chunky">
                                <span className="material-symbols-outlined block">history</span>
                            </span>
                            Recent Activity
                        </h3>
                        <button className="font-black text-sm uppercase tracking-widest underline underline-offset-4">View All</button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { title: 'Sushi Zen Garden', time: 'Today • 12:45 PM • 3.2 km', amount: '+$12.40', sub: 'Includes $4.00 Tip', icon: 'fastfood', color: 'bg-amber-100' },
                            { title: 'Pizza Planet', time: 'Today • 11:20 AM • 1.8 km', amount: '+$8.50', sub: 'Base Fare', icon: 'local_pizza', color: 'bg-rose-100' },
                            { title: 'Gelato Dreams', time: 'Yesterday • 8:15 PM • 4.5 km', amount: '+$15.20', sub: 'Double Trip Bonus', icon: 'icecream', color: 'bg-green-100', opacity: 'opacity-80' },
                        ].map((activity, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 5 }}
                                className={`border-3 border-[#1c1c0d] shadow-chunky bg-white p-6 rounded-2xl flex items-center justify-between ${activity.opacity || ''}`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`${activity.color} size-14 border-4 border-[#1c1c0d] rounded-2xl flex items-center justify-center shadow-chunky-sm`}>
                                        <span className="material-symbols-outlined text-3xl">{activity.icon}</span>
                                    </div>
                                    <div>
                                        <h5 className="font-black text-xl text-[#1c1c0d]">{activity.title}</h5>
                                        <p className="text-sm font-bold text-[#1c1c0d]/50">{activity.time}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-black">{activity.amount}</p>
                                    <p className={`text-xs font-bold uppercase tracking-widest ${activity.sub.includes('Tip') || activity.sub.includes('Bonus') ? 'text-green-600' : 'text-[#1c1c0d]/40'}`}>{activity.sub}</p>
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
