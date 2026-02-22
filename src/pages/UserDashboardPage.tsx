import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DashboardNavbar from '../components/layout/DashboardNavbar';
import DashboardHeader from '../components/layout/DashboardHeader';

const UserDashboardPage: React.FC = () => {
    const navItems = [
        { icon: 'receipt_long', label: 'My Orders', href: '/user/orders', active: true },
        { icon: 'favorite', label: 'Favorite Spots', href: '/user/favorites' },
        { icon: 'location_on', label: 'Addresses', href: '/user/addresses' },
    ];

    const logoutButton = (
        <Link to="/">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary border-2 border-accent-dark shadow-chunky-sm px-8 py-3 rounded-full text-xs font-black transition-all uppercase leading-none"
            >
                Logout
            </motion.button>
        </Link>
    );

    return (
        <div className="bg-background-light text-accent-dark antialiased min-h-screen font-display flex flex-col">
            <DashboardNavbar items={navItems} rightSection={logoutButton} profileName="Nibbler" />

            {/* Main Content Area */}
            <main className="flex-1 p-6 lg:p-10 pt-32 lg:pt-32 overflow-y-auto">
                <DashboardHeader
                    title="Welcome Back, Nibbler!"
                    subtitle="Hungry for another adventure?"
                    icon="person_celebrate"
                    extraActions={
                        <div className="bg-white border-4 border-accent-dark rounded-[2.5rem] p-8 shadow-chunky w-full md:w-96 relative overflow-hidden">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <span className="text-xs font-black uppercase tracking-widest text-accent-dark/40">Loyalty Status</span>
                                    <h3 className="text-2xl font-black">Level 12</h3>
                                </div>
                                <div className="bg-primary p-3 rounded-2xl border-2 border-accent-dark shadow-chunky-sm">
                                    <span className="material-symbols-outlined text-3xl font-black">workspace_premium</span>
                                </div>
                            </div>
                            <div className="relative h-6 bg-accent-dark/10 rounded-full overflow-hidden border-2 border-accent-dark">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '75%' }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="absolute top-0 left-0 h-full bg-primary border-r-2 border-accent-dark"
                                ></motion.div>
                            </div>
                            <div className="flex justify-between items-center mt-3 font-black text-xs uppercase tracking-tighter text-accent-dark/60">
                                <span>1,250 / 2,000 pts</span>
                                <span className="text-accent-dark/40 italic">Next: Super Nibbler</span>
                            </div>
                        </div>
                    }
                />

                <div className="max-w-7xl mx-auto">
                    {/* Unified Stats Grid at Top */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            { icon: 'stars', value: '42', label: 'Orders this Year', iconColor: 'text-primary' },
                            { icon: 'favorite', value: '12', label: 'Saved Restaurants', iconColor: 'text-red-500' },
                            { icon: 'savings', value: '$124', label: 'Saved with Nibble Pro', iconColor: 'text-green-500' },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-[2.5rem] p-8 border-4 border-accent-dark shadow-chunky transition-transform relative overflow-hidden group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-accent-dark/5 p-4 rounded-2xl border-2 border-accent-dark shadow-chunky-sm group-hover:bg-primary transition-colors flex items-center justify-center">
                                        <span className={`material-symbols-outlined ${stat.iconColor} text-4xl`} style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>{stat.icon}</span>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-accent-dark/30">Lifetime Impact</span>
                                </div>
                                <h4 className="text-6xl font-black mb-2 tracking-tighter italic">{stat.value}</h4>
                                <p className="text-xs font-black uppercase tracking-widest text-accent-dark/40">{stat.label}</p>

                                {/* Geometric accent */}
                                <div className="absolute -bottom-8 -right-8 size-24 bg-accent-dark/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                            </motion.div>
                        ))}
                    </section>
                    {/* ... (rest of the content) */}

                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Recent Orders</h2>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="font-black text-sm uppercase tracking-widest underline underline-offset-8 decoration-primary decoration-4"
                        >
                            View All History
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                        {[
                            { title: 'The Burger Barons', time: 'Oct 24, 2023 • 12:45 PM', items: '2x Baron Burger, 1x Large Fries, 1x Coke', amount: '$34.20', status: 'Delivered', statusColor: 'bg-green-400', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4' },
                            { title: 'Pizza Planet', time: 'Oct 26, 2023 • 07:12 PM', items: '1x Large Pepperoni, 1x Garlic Knots', amount: '$28.50', status: 'Processing', statusColor: 'bg-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHnMcd2yuIG2PSN3AHQOh7UjCBAkhf4x5JMLUgMkCc3ClZS1fHy6tAms8T0fzcojrtH-5zGgZ2g9RSjcySKatxxxpW9ufq0uRuBXoXwG814YJa-zNpirXcwVfJvvTVUftwEAOIquNk-6c6wdtTdCMSzeNK8jNm5mbLVX8VjGH295CsqUdAFTdwW3xNrZEXTcP7F-dX6fc95jDa_J_fnnxDTNRo-hY9D2Qvpxu3Y0sI1F6549m_nXsA2cXzgHvhoHeIbks0hD5gF5Q' },
                        ].map((order, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 10 }}
                                className="bg-white border-4 border-accent-dark rounded-[2.5rem] p-8 shadow-chunky group"
                            >
                                <div className="flex flex-col sm:flex-row gap-8">
                                    <div className="w-full sm:w-40 h-40 rounded-[2rem] border-4 border-accent-dark overflow-hidden shrink-0 bg-[#fcfcf8] shadow-chunky-sm">
                                        <img
                                            alt={order.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            src={order.img}
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <h4 className="text-3xl font-black italic tracking-tighter leading-none">{order.title}</h4>
                                                <span className={`${order.statusColor} px-4 py-1 rounded-full text-[10px] font-black border-2 border-accent-dark uppercase shadow-chunky-sm`}>{order.status}</span>
                                            </div>
                                            <p className="text-sm font-black text-accent-dark/40 mt-3 uppercase tracking-widest">{order.time}</p>
                                            <p className="text-lg font-bold mt-2 leading-tight">{order.items}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-6">
                                            <span className="text-3xl font-black italic tracking-tighter">{order.amount}</span>
                                            <motion.button
                                                whileHover={{ scale: 1.05, rotate: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-primary px-8 py-3 rounded-full border-4 border-accent-dark shadow-chunky-sm font-black text-sm uppercase transition-all"
                                            >
                                                Reorder
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Refer Container */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="mt-16 bg-accent-dark text-white border-4 border-accent-dark rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group shadow-chunky"
                    >
                        <div className="relative z-10 max-w-xl text-center md:text-left">
                            <h3 className="text-4xl lg:text-5xl font-black mb-4 flex flex-col md:flex-row items-center gap-4 italic tracking-tighter">
                                Refer a friend, get $10!
                                <span className="material-symbols-outlined text-4xl text-primary animate-pulse">payments</span>
                            </h3>
                            <p className="text-xl font-bold text-white/60 mb-8 leading-relaxed">Spread the nibble love and earn rewards for every hungry hero you recruit. Your wallet will thank you!</p>
                            <motion.button
                                whileHover={{ scale: 1.05, x: 10 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-accent-dark px-12 py-5 rounded-full font-black text-xl shadow-chunky flex items-center justify-center gap-3 transition-all mx-auto md:mx-0 border-2 border-accent-dark"
                            >
                                Get Your Secret Link
                                <span className="material-symbols-outlined font-black">arrow_forward</span>
                            </motion.button>
                        </div>
                        <div className="relative z-10 w-64 h-64 flex items-center justify-center shrink-0">
                            <div className="bg-white/10 w-48 h-48 rounded-[3rem] border-4 border-white/20 flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500 relative">
                                <span className="material-symbols-outlined text-[100px] text-primary">emoji_events</span>
                                <div className="absolute -top-4 -right-4 bg-primary text-accent-dark w-12 h-12 rounded-full border-4 border-accent-dark flex items-center justify-center font-black animate-bounce">$</div>
                            </div>
                        </div>
                        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-700 blur-3xl"></div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default UserDashboardPage;
