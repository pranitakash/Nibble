import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DashboardNavbar from '../components/layout/DashboardNavbar';
import DashboardHeader from '../components/layout/DashboardHeader';

const RestaurantDashboardPage: React.FC = () => {
    const navItems = [
        { icon: 'menu_book', label: 'Menu Editor', href: '/restaurant/menu-editor' },
    ];

    const storeStatus = (
        <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full border border-accent-dark animate-pulse"></div>
            <span className="text-xs font-black uppercase tracking-widest">Accepting Orders</span>
        </div>
    );

    const actionButtons = (
        <div className="flex items-center gap-2">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-accent-dark shadow-chunky-sm px-8 py-3 rounded-full text-xs font-black transition-all uppercase leading-none"
            >
                Alerts
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
        <div className="bg-background-light text-accent-dark antialiased min-h-screen font-display flex flex-col">
            <DashboardNavbar
                items={navItems}
                statusSection={storeStatus}
                rightSection={actionButtons}
                profileName="Big Kahuna Burger"
            />

            {/* Main Content Area */}
            <main className="flex-1 p-6 lg:p-10 pt-32 lg:pt-32 overflow-y-auto">
                <DashboardHeader
                    title="Big Kahuna Burger"
                    subtitle="Your kitchen is on fire today, Chief!"
                    icon="lunch_dining"
                />

                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { label: 'Daily Sales', value: '$2,482', change: '+12.5%', icon: 'payments', iconColor: 'text-green-500' },
                        { label: 'Active Orders', value: '24', change: 'LIVE', icon: 'restaurant', iconColor: 'text-primary' },
                        { label: 'New Reviews', value: '48', change: '4.9 AVG', icon: 'star', iconColor: 'text-pink-500' },
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
                                    {stat.change}
                                </span>
                            </div>
                            <h2 className="text-6xl font-black italic tracking-tighter mb-1">{stat.value}</h2>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent-dark/40">{stat.label}</p>

                            <div className="absolute -bottom-8 -right-8 size-24 bg-accent-dark/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
                        </motion.div>
                    ))}
                </section>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
                    {/* Orders Table - Standardized Card */}
                    <section className="xl:col-span-2">
                        <div className="bg-white border-4 border-accent-dark rounded-[2.5rem] overflow-hidden shadow-chunky flex flex-col">
                            <div className="p-8 border-b-4 border-accent-dark flex justify-between items-center bg-orange-50 italic">
                                <h3 className="text-3xl font-black tracking-tighter uppercase">Active Kitchen Buzz</h3>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="font-black text-sm uppercase tracking-widest underline underline-offset-8 decoration-primary decoration-4"
                                >
                                    Full History
                                </motion.button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-background-light border-b-4 border-accent-dark font-black uppercase text-[10px] tracking-widest text-accent-dark/40">
                                            <th className="p-8">Order Reveal</th>
                                            <th className="p-8">Flavor Mix</th>
                                            <th className="p-8">Vibe Check</th>
                                            <th className="p-8 text-right">Magic Button</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y-4 divide-accent-dark/5">
                                        {[
                                            { id: '#NB-9021', time: '12:45 PM', items: '2x Cheeseburger Combo', status: 'Preparing', active: true },
                                            { id: '#NB-9024', time: '12:52 PM', items: '1x Vegan Bowl, 1x Cola', status: 'Pickup Ready', active: false },
                                            { id: '#NB-9028', time: '01:05 PM', items: '4x Spicy Wings, 1x Fries', status: 'Preparing', active: true },
                                        ].map((order, idx) => (
                                            <tr key={idx} className="group hover:bg-primary/5 transition-colors">
                                                <td className="p-8">
                                                    <p className="font-black text-2xl italic tracking-tighter">{order.id}</p>
                                                    <p className="text-[10px] font-black text-accent-dark/30 uppercase tracking-widest mt-1">{order.time}</p>
                                                </td>
                                                <td className="p-8">
                                                    <span className="font-bold text-lg">{order.items}</span>
                                                </td>
                                                <td className="p-8">
                                                    <span className={`inline-block border-2 border-accent-dark px-4 py-1 rounded-full text-[10px] font-black uppercase shadow-chunky-sm ${order.status === 'Pickup Ready' ? 'bg-green-400' : 'bg-primary'}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="p-8 text-right">
                                                    {order.active ? (
                                                        <motion.button
                                                            whileHover={{ scale: 1.05, rotate: -2 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="bg-accent-dark text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-accent-dark transition-all border-2 border-transparent hover:border-accent-dark shadow-chunky-sm"
                                                        >
                                                            Mark Ready
                                                        </motion.button>
                                                    ) : (
                                                        <div className="bg-white border-2 border-accent-dark text-accent-dark px-6 py-3 rounded-2xl font-black text-xs opacity-30 italic flex items-center justify-end gap-2">
                                                            Awaiting Rider
                                                            <span className="material-symbols-outlined text-sm animate-spin">moped</span>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-12">
                        {/* Unified Promotion Card */}
                        <div className="bg-white border-4 border-accent-dark rounded-[2.5rem] p-10 shadow-chunky flex flex-col">
                            <h3 className="text-3xl font-black mb-8 flex items-center gap-3 italic tracking-tighter uppercase">
                                <span className="material-symbols-outlined text-red-500 text-4xl font-black">campaign</span>
                                Promotions
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'New Discount', icon: 'add_circle', color: 'bg-primary' },
                                    { label: 'Flash Sale', icon: 'bolt', color: 'bg-white' },
                                    { label: 'Free Delivery', icon: 'local_shipping', color: 'bg-orange-400', textColor: 'text-white' },
                                ].map((promo, idx) => (
                                    <motion.button
                                        key={idx}
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full ${promo.color} ${promo.textColor || ''} border-4 border-accent-dark p-5 rounded-3xl shadow-chunky-sm font-black text-xl hover:shadow-none transition-all flex items-center justify-between group`}
                                    >
                                        <span className="italic tracking-tighter">{promo.label}</span>
                                        <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">{promo.icon}</span>
                                    </motion.button>
                                ))}
                            </div>
                            <div className="mt-10 pt-10 border-t-4 border-accent-dark/5">
                                <p className="text-[10px] font-black uppercase mb-6 opacity-30 tracking-[0.2em] text-center">Active Campaign</p>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-background-light p-6 rounded-3xl border-4 border-accent-dark flex items-center justify-between shadow-chunky-sm"
                                >
                                    <div>
                                        <p className="font-black text-xl italic tracking-tighter">Happy Hour -20%</p>
                                        <p className="text-xs font-bold text-accent-dark/40 uppercase tracking-widest">Ends in 2h 45m</p>
                                    </div>
                                    <div className="w-12 h-12 bg-green-400 border-4 border-accent-dark rounded-full flex items-center justify-center shadow-chunky-sm rotate-12">
                                        <span className="material-symbols-outlined text-white font-black text-xl">check</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Support Card */}
                        <div className="bg-accent-dark text-white rounded-[2.5rem] p-10 border-4 border-accent-dark shadow-chunky relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-2 italic tracking-tighter">Need Hero Support?</h3>
                                <p className="text-lg font-bold opacity-60 mb-8 leading-tight text-white/80">Support is available 24/7 for our Nibble partners.</p>
                                <motion.button
                                    whileHover={{ scale: 1.05, x: 10 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary text-accent-dark px-10 py-4 rounded-full font-black text-lg transition-all flex items-center gap-3 border-2 border-accent-dark shadow-chunky-sm"
                                >
                                    Chat Now
                                    <span className="material-symbols-outlined font-black">arrow_forward</span>
                                </motion.button>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[180px] text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">support_agent</span>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default RestaurantDashboardPage;
