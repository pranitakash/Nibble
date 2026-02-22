import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DashboardNavbar from '../../components/layout/DashboardNavbar';
import DashboardHeader from '../../components/layout/DashboardHeader';

const orders = [
    { id: '#NB-1091', restaurant: 'The Burger Barons', date: 'Oct 24, 2023 · 12:45 PM', items: '2× Baron Burger, 1× Large Fries, 1× Coke', total: '$34.20', status: 'Delivered', statusColor: 'bg-green-400', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4' },
    { id: '#NB-1088', restaurant: 'Pizza Planet', date: 'Oct 22, 2023 · 07:12 PM', items: '1× Large Pepperoni, 1× Garlic Knots', total: '$28.50', status: 'Delivered', statusColor: 'bg-green-400', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHnMcd2yuIG2PSN3AHQOh7UjCBAkhf4x5JMLUgMkCc3ClZS1fHy6tAms8T0fzcojrtH-5zGgZ2g9RSjcySKatxxxpW9ufq0uRuBXoXwG814YJa-zNpirXcwVfJvvTVUftwEAOIquNk-6c6wdtTdCMSzeNK8jNm5mbLVX8VjGH295CsqUdAFTdwW3xNrZEXTcP7F-dX6fc95jDa_J_fnnxDTNRo-hY9D2Qvpxu3Y0sI1F6549m_nXsA2cXzgHvhoHeIbks0hD5gF5Q' },
    { id: '#NB-1075', restaurant: 'Noodle House Central', date: 'Oct 18, 2023 · 01:30 PM', items: '1× Ramen Deluxe, 1× Spring Rolls', total: '$22.10', status: 'Cancelled', statusColor: 'bg-red-400', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4' },
    { id: '#NB-1050', restaurant: 'Sushi Sensei', date: 'Oct 10, 2023 · 08:00 PM', items: '10× Nigiri Mix, 1× Miso Soup', total: '$41.00', status: 'Delivered', statusColor: 'bg-green-400', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHnMcd2yuIG2PSN3AHQOh7UjCBAkhf4x5JMLUgMkCc3ClZS1fHy6tAms8T0fzcojrtH-5zGgZ2g9RSjcySKatxxxpW9ufq0uRuBXoXwG814YJa-zNpirXcwVfJvvTVUftwEAOIquNk-6c6wdtTdCMSzeNK8jNm5mbLVX8VjGH295CsqUdAFTdwW3xNrZEXTcP7F-dX6fc95jDa_J_fnnxDTNRo-hY9D2Qvpxu3Y0sI1F6549m_nXsA2cXzgHvhoHeIbks0hD5gF5Q' },
    { id: '#NB-1032', restaurant: 'Tacos El Loco', date: 'Sep 30, 2023 · 06:45 PM', items: '4× Street Tacos, 1× Horchata', total: '$18.75', status: 'Delivered', statusColor: 'bg-green-400', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4' },
];

const filters = ['All', 'Delivered', 'Cancelled'];

const OrdersPage: React.FC = () => {
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

    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? orders : orders.filter(o => o.status === active);

    return (
        <div className="bg-background-light text-accent-dark antialiased min-h-screen font-display flex flex-col">
            <DashboardNavbar items={navItems} rightSection={logoutButton} profileName="Nibbler" />

            <main className="flex-1 p-6 lg:p-10 pt-32 lg:pt-32 overflow-y-auto">
                <DashboardHeader title="My Orders" subtitle="Your hunger history" icon="receipt_long" />

                <div className="max-w-4xl mx-auto">
                    <div className="flex gap-3 mb-8 flex-wrap">
                        {filters.map(f => (
                            <motion.button key={f} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActive(f)}
                                className={`px-6 py-3 rounded-full font-black text-sm uppercase transition-all border-2 ${active === f ? 'bg-primary border-accent-dark shadow-chunky-sm' : 'bg-white border-accent-dark/20 hover:border-accent-dark'}`}>
                                {f}
                            </motion.button>
                        ))}
                    </div>

                    <div className="space-y-6">
                        {filtered.map((order, idx) => (
                            <motion.div key={order.id}
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.07 }}
                                whileHover={{ x: 6 }}
                                className="bg-white border-4 border-accent-dark rounded-[2rem] p-6 shadow-chunky group">
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <div className="w-full sm:w-32 h-32 rounded-[1.5rem] border-4 border-accent-dark overflow-hidden shrink-0 shadow-chunky-sm">
                                        <img src={order.img} alt={order.restaurant} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-start justify-between gap-3 flex-wrap">
                                                <div>
                                                    <h3 className="text-2xl font-black italic tracking-tighter">{order.restaurant}</h3>
                                                    <p className="text-xs font-black uppercase tracking-widest text-accent-dark/40 mt-1">{order.date}</p>
                                                </div>
                                                <span className={`${order.statusColor} border-2 border-accent-dark px-4 py-1 rounded-full text-[10px] font-black uppercase shadow-chunky-sm shrink-0`}>{order.status}</span>
                                            </div>
                                            <p className="font-bold text-accent-dark/60 mt-3 text-sm leading-relaxed">{order.items}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-accent-dark/40">Order {order.id}</p>
                                                <p className="text-3xl font-black italic tracking-tighter">{order.total}</p>
                                            </div>
                                            {order.status === 'Delivered' && (
                                                <motion.button whileHover={{ scale: 1.05, rotate: -2 }} whileTap={{ scale: 0.95 }}
                                                    className="bg-primary border-2 border-accent-dark shadow-chunky-sm px-8 py-3 rounded-full font-black text-sm uppercase transition-all">
                                                    Reorder
                                                </motion.button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OrdersPage;
