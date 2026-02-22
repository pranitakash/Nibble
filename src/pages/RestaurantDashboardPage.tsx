import React from 'react';
import { motion } from 'framer-motion';

const RestaurantDashboardPage: React.FC = () => {
    return (
        <div className="bg-background-light text-accent-dark antialiased min-h-screen font-display">
            <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r-4 border-accent-dark z-50 hidden lg:flex flex-col p-6">
                <div className="flex items-center gap-2 mb-12">
                    <div className="bg-primary p-1 rounded-lg border-2 border-accent-dark">
                        <span className="material-symbols-outlined text-accent-dark font-bold">fastfood</span>
                    </div>
                    <span className="text-xl font-black tracking-tight text-accent-dark uppercase">FoodieHero</span>
                </div>
                <nav className="flex-1 space-y-4">
                    <a className="flex items-center gap-3 p-3 font-black bg-primary border-2 border-accent-dark shadow-chunky-sm transition-all" href="#">
                        <span className="material-symbols-outlined">dashboard</span>
                        Dashboard
                    </a>
                    {[
                        { icon: 'list_alt', label: 'Orders' },
                        { icon: 'menu_book', label: 'Menu Editor' },
                        { icon: 'campaign', label: 'Promotions' },
                        { icon: 'analytics', label: 'Analytics' },
                    ].map((item, idx) => (
                        <a key={idx} className="flex items-center gap-3 p-3 font-bold hover:bg-primary/20 rounded-xl transition-all border-2 border-transparent" href="#">
                            <span className="material-symbols-outlined">{item.icon}</span>
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="mt-auto border-4 border-accent-dark p-4 rounded-2xl bg-orange-100 shadow-chunky-sm">
                    <p className="text-xs font-black uppercase mb-1">Store Status</p>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full border border-accent-dark"></div>
                        <span className="font-bold">Accepting Orders</span>
                    </div>
                </div>
            </aside>

            <main className="lg:ml-64 p-6 lg:p-10">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-black mb-2">Welcome Back, Big Kahuna Burger! 🍔</h1>
                        <p className="text-lg font-bold text-accent-dark/60 italic">Your kitchen is on fire today!</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="bg-white border-2 border-accent-dark p-3 rounded-full shadow-chunky-sm hover:translate-y-1 hover:shadow-none transition-all">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="bg-white border-2 border-accent-dark py-2 px-4 rounded-full shadow-chunky-sm flex items-center gap-3">
                            <img
                                alt="Profile"
                                className="w-8 h-8 rounded-full border border-accent-dark bg-primary"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNQhwMFH6ZLz6-8i71CTmAEtGQ5PcDZmFElpkGiIlwcpG1Khf93FX6LdSk92qR_yyBdYf-0Y1X8YqqeXa1IoBMLkSCxrfwNaH5MqsF7SqhQ8usiEsVYO-5PY3Rj41u8fzA2cD_DJ2ud1eVw1q1lwxS-_6HyeknaOjwICB16x_JWTH7XHfw9wgp6WwakWdgfpNXq9OOLL7gGCHq04y5d2wfMibrQx6VV3j3YuYSeVJxJ1nC-eZX6QYYoI-DkqXyYnYHlezX3pTNIdk"
                            />
                            <span className="font-black text-sm">Manager Profile</span>
                        </div>
                    </div>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                        { label: 'Daily Sales', value: '$2,482.00', change: '+12.5%', icon: 'payments', color: 'bg-primary' },
                        { label: 'Active Orders', value: '24', change: 'LIVE', icon: 'restaurant', color: 'bg-blue-400', textColor: 'text-white' },
                        { label: 'New Reviews', value: '48', change: '4.9 AVG', icon: 'star', color: 'bg-pink-400', textColor: 'text-white' },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={`${stat.color} p-8 rounded-3xl border-4 border-accent-dark shadow-chunky transition-transform`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-white p-2 rounded-xl border-2 border-accent-dark">
                                    <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-black ${stat.textColor ? 'bg-white text-accent-dark border-2 border-accent-dark' : 'bg-accent-dark text-white'}`}>
                                    {stat.change}
                                </span>
                            </div>
                            <p className={`text-sm font-black uppercase tracking-wider ${stat.textColor ? 'text-white/80' : 'opacity-60'}`}>{stat.label}</p>
                            <h2 className={`text-4xl font-black ${stat.textColor || ''}`}>{stat.value}</h2>
                        </motion.div>
                    ))}
                </section>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                    <section className="xl:col-span-2">
                        <div className="bg-white border-4 border-accent-dark rounded-3xl overflow-hidden shadow-chunky">
                            <div className="p-6 border-b-4 border-accent-dark flex justify-between items-center bg-orange-50">
                                <h3 className="text-2xl font-black">Current Orders</h3>
                                <button className="font-black text-sm underline hover:text-primary transition-colors">View All History</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-background-light border-b-2 border-accent-dark">
                                            <th className="p-6 font-black uppercase text-xs">Order ID</th>
                                            <th className="p-6 font-black uppercase text-xs">Items</th>
                                            <th className="p-6 font-black uppercase text-xs">Status</th>
                                            <th className="p-6 font-black uppercase text-xs">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y-2 divide-accent-dark/10">
                                        {[
                                            { id: '#FH-9021', time: '12:45 PM', items: '2x Cheeseburger Combo', status: 'Preparing', active: true },
                                            { id: '#FH-9024', time: '12:52 PM', items: '1x Vegan Bowl, 1x Cola', status: 'Ready for Pickup', active: false },
                                            { id: '#FH-9028', time: '01:05 PM', items: '4x Spicy Wings, 1x Fries', status: 'Preparing', active: true },
                                        ].map((order, idx) => (
                                            <tr key={idx}>
                                                <td className="p-6">
                                                    <p className="font-black text-lg">{order.id}</p>
                                                    <p className="text-xs font-bold text-accent-dark/40">{order.time}</p>
                                                </td>
                                                <td className="p-6">
                                                    <span className="font-bold">{order.items}</span>
                                                </td>
                                                <td className="p-6">
                                                    <span className={`inline-block border-2 border-accent-dark px-4 py-1 rounded-full text-xs font-black uppercase ${order.status === 'Ready for Pickup' ? 'bg-green-400' : 'bg-primary'}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="p-6">
                                                    {order.active ? (
                                                        <button className="bg-accent-dark text-white px-4 py-2 rounded-xl font-black text-xs hover:bg-primary hover:text-accent-dark transition-all">Mark Ready</button>
                                                    ) : (
                                                        <button className="bg-white border-2 border-accent-dark text-accent-dark px-4 py-2 rounded-xl font-black text-xs opacity-50 cursor-not-allowed">Waiting...</button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="bg-white border-4 border-accent-dark rounded-3xl p-8 shadow-chunky">
                            <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-red-400">campaign</span>
                                Promotions
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Create Discount', icon: 'add_circle', color: 'bg-primary' },
                                    { label: 'Flash Sale', icon: 'bolt', color: 'bg-white' },
                                    { label: 'Free Delivery Tag', icon: 'local_shipping', color: 'bg-orange-400', textColor: 'text-white' },
                                ].map((promo, idx) => (
                                    <button key={idx} className={`w-full ${promo.color} ${promo.textColor || ''} border-4 border-accent-dark p-4 rounded-2xl shadow-chunky-sm font-black text-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-between`}>
                                        {promo.label}
                                        <span className="material-symbols-outlined">{promo.icon}</span>
                                    </button>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t-2 border-accent-dark/10">
                                <p className="text-xs font-black uppercase mb-4 opacity-40 text-center">Active Campaign</p>
                                <div className="bg-background-light p-4 rounded-2xl border-2 border-accent-dark flex items-center justify-between">
                                    <div>
                                        <p className="font-black">Happy Hour -20%</p>
                                        <p className="text-xs font-bold text-accent-dark/60">Ends in 2h 45m</p>
                                    </div>
                                    <div className="w-10 h-10 bg-green-400 border-2 border-accent-dark rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-sm">check</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-accent-dark text-white rounded-3xl p-8 border-4 border-accent-dark shadow-chunky relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-xl font-black mb-2">Need Support?</h3>
                                <p className="text-sm font-bold opacity-60 mb-6 italic">Our Hero Support is available 24/7 for partners.</p>
                                <button className="bg-primary text-accent-dark px-6 py-2 rounded-full font-black text-sm hover:translate-x-2 transition-transform">
                                    Chat Now
                                </button>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[120px] text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-700">support_agent</span>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="lg:ml-64 p-10 border-t-4 border-accent-dark/5 text-center">
                <p className="text-accent-dark/40 font-bold text-sm">© 2024 FoodieHero Partner Portal • Version 2.0.4-Beta</p>
            </footer>
        </div>
    );
};

export default RestaurantDashboardPage;
