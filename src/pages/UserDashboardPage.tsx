import React from 'react';
import { motion } from 'framer-motion';

const UserDashboardPage: React.FC = () => {
    return (
        <div className="bg-[#fcfcf8] text-accent-dark antialiased min-h-screen font-display flex flex-col md:flex-row">
            <aside className="w-full md:w-24 lg:w-32 bg-white border-b-4 md:border-b-0 md:border-r-4 border-accent-dark flex md:flex-col items-center py-4 md:py-8 sticky top-0 md:h-screen z-50">
                <div className="bg-primary p-2 rounded-xl border-2 border-accent-dark mb-0 md:mb-12 ml-6 md:ml-0">
                    <span className="material-symbols-outlined text-accent-dark font-bold text-3xl">fastfood</span>
                </div>
                <nav className="flex md:flex-col gap-4 md:gap-8 flex-1 justify-center md:justify-start ml-auto mr-auto md:ml-0 md:mr-0">
                    <a className="group relative" href="#">
                        <div className="bg-primary text-accent-dark border-2 border-accent-dark shadow-chunky-sm w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-all">
                            <span className="material-symbols-outlined text-2xl lg:text-3xl">receipt_long</span>
                        </div>
                        <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-accent-dark text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity hidden md:block">My Orders</span>
                    </a>
                    {[
                        { icon: 'favorite', label: 'Favorite Spots' },
                        { icon: 'location_on', label: 'Addresses' },
                        { icon: 'settings', label: 'Settings' },
                    ].map((item, idx) => (
                        <a key={idx} className="group relative" href="#">
                            <div className="bg-white text-accent-dark/40 border-2 border-transparent hover:border-accent-dark hover:text-accent-dark w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-all">
                                <span className="material-symbols-outlined text-2xl lg:text-3xl">{item.icon}</span>
                            </div>
                            <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-accent-dark text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity hidden md:block">{item.label}</span>
                        </a>
                    ))}
                </nav>
                <button className="bg-white text-accent-dark/40 border-2 border-transparent hover:border-accent-dark hover:text-accent-dark w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mt-auto mb-0 md:mb-0 mr-6 md:mr-0 transition-all">
                    <span className="material-symbols-outlined text-2xl lg:text-3xl">logout</span>
                </button>
            </aside>

            <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
                <header className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-black text-accent-dark mb-2">Welcome back, Hero! 🦸‍♂️</h1>
                        <p className="text-lg font-bold text-accent-dark/60">Hungry for another adventure?</p>
                    </div>
                    <div className="bg-white border-4 border-accent-dark rounded-3xl p-6 shadow-chunky w-full md:w-96 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <span className="text-xs font-black uppercase tracking-widest text-accent-dark/40">Loyalty Status</span>
                                <h3 className="text-xl font-black">Hero Level 12</h3>
                            </div>
                            <div className="bg-primary p-2 rounded-xl border-2 border-accent-dark">
                                <span className="material-symbols-outlined text-3xl font-bold">workspace_premium</span>
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
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-xs font-bold">1,250 / 2,000 pts</span>
                            <span className="text-xs font-bold text-accent-dark/60">Next: Super Hero</span>
                        </div>
                    </div>
                </header>

                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-black">Recent Orders</h2>
                        <button className="text-sm font-black underline decoration-primary decoration-4 underline-offset-4 hover:text-primary transition-colors">View All Orders</button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {[
                            { title: 'The Burger Barons', time: 'Ordered on Oct 24, 2023 • 12:45 PM', items: '2x Baron Burger, 1x Large Fries, 1x Coke', amount: '$34.20', status: 'Delivered', statusColor: 'bg-green-100 text-green-700 border-green-700', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4' },
                            { title: 'Pizza Planet', time: 'Ordered on Oct 26, 2023 • 07:12 PM', items: '1x Large Pepperoni, 1x Garlic Knots', amount: '$28.50', status: 'Processing', statusColor: 'bg-blue-100 text-blue-700 border-blue-700', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHnMcd2yuIG2PSN3AHQOh7UjCBAkhf4x5JMLUgMkCc3ClZS1fHy6tAms8T0fzcojrtH-5zGgZ2g9RSjcySKatxxxpW9ufq0uRuBXoXwG814YJa-zNpirXcwVfJvvTVUftwEAOIquNk-6c6wdtTdCMSzeNK8jNm5mbLVX8VjGH295CsqUdAFTdwW3xNrZEXTcP7F-dX6fc95jDa_J_fnnxDTNRo-hY9D2Qvpxu3Y0sI1F6549m_nXsA2cXzgHvhoHeIbks0hD5gF5Q' },
                        ].map((order, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white border-4 border-accent-dark rounded-3xl p-6 shadow-chunky group"
                            >
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl border-4 border-accent-dark overflow-hidden shrink-0 bg-[#fcfcf8]">
                                        <img
                                            alt={order.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            src={order.img}
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <h4 className="text-2xl font-black leading-none">{order.title}</h4>
                                                <span className={`${order.statusColor} px-3 py-1 rounded-full text-xs font-black border uppercase`}>{order.status}</span>
                                            </div>
                                            <p className="text-sm font-bold text-accent-dark/60 mt-2">{order.time}</p>
                                            <p className="text-sm font-medium mt-1">{order.items}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <span className="text-xl font-black">{order.amount}</span>
                                            <button className="bg-primary px-6 py-2 rounded-full border-2 border-accent-dark shadow-chunky-sm font-black text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                                                Reorder
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {[
                            { icon: 'stars', value: '42', label: 'Total Orders this Year', color: 'bg-accent-dark text-white', iconColor: 'text-primary' },
                            { icon: 'favorite', value: '12', label: 'Saved Restaurants', color: 'bg-white text-accent-dark', iconColor: 'text-red-500' },
                            { icon: 'savings', value: '$124', label: 'Saved with Hero Pro', color: 'bg-primary text-accent-dark', iconColor: 'text-accent-dark/80' },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className={`${stat.color} rounded-3xl p-8 border-4 border-accent-dark shadow-chunky-sm`}
                            >
                                <span className={`material-symbols-outlined ${stat.iconColor} text-4xl mb-4`}>{stat.icon}</span>
                                <h4 className="text-3xl font-black mb-2">{stat.value}</h4>
                                <p className={`font-bold ${stat.color.includes('white') ? 'text-accent-dark/60' : 'text-white/60'}`}>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="mt-12 bg-white border-4 border-accent-dark rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-chunky"
                    >
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black mb-2">Refer a friend, get $10! 💸</h3>
                            <p className="text-lg font-bold text-accent-dark/60 mb-6">Spread the love and earn rewards for every hero you recruit.</p>
                            <button className="bg-accent-dark text-white px-8 py-3 rounded-full font-black hover:translate-x-2 transition-transform shadow-chunky-sm flex items-center gap-2">
                                Get Your Link
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                        <div className="relative z-10 w-48 h-48 flex items-center justify-center">
                            <div className="bg-primary w-32 h-32 rounded-full border-4 border-accent-dark flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <span className="material-symbols-outlined text-6xl">emoji_events</span>
                            </div>
                        </div>
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default UserDashboardPage;
