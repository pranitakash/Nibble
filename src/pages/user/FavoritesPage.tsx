import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DashboardNavbar from '../../components/layout/DashboardNavbar';
import DashboardHeader from '../../components/layout/DashboardHeader';

const favorites = [
    { id: 1, name: 'The Burger Barons', cuisine: 'American · Burgers', rating: 4.9, orders: 14, time: '25-35 min', priceRange: '$$', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4' },
    { id: 2, name: 'Pizza Planet', cuisine: 'Italian · Pizza', rating: 4.7, orders: 9, time: '35-50 min', priceRange: '$$', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHnMcd2yuIG2PSN3AHQOh7UjCBAkhf4x5JMLUgMkCc3ClZS1fHy6tAms8T0fzcojrtH-5zGgZ2g9RSjcySKatxxxpW9ufq0uRuBXoXwG814YJa-zNpirXcwVfJvvTVUftwEAOIquNk-6c6wdtTdCMSzeNK8jNm5mbLVX8VjGH295CsqUdAFTdwW3xNrZEXTcP7F-dX6fc95jDa_J_fnnxDTNRo-hY9D2Qvpxu3Y0sI1F6549m_nXsA2cXzgHvhoHeIbks0hD5gF5Q' },
    { id: 3, name: 'Sushi Sensei', cuisine: 'Japanese · Sushi', rating: 4.8, orders: 6, time: '40-55 min', priceRange: '$$$', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4' },
    { id: 4, name: 'Noodle House Central', cuisine: 'Asian · Noodles', rating: 4.6, orders: 5, time: '30-40 min', priceRange: '$', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHnMcd2yuIG2PSN3AHQOh7UjCBAkhf4x5JMLUgMkCc3ClZS1fHy6tAms8T0fzcojrtH-5zGgZ2g9RSjcySKatxxxpW9ufq0uRuBXoXwG814YJa-zNpirXcwVfJvvTVUftwEAOIquNk-6c6wdtTdCMSzeNK8jNm5mbLVX8VjGH295CsqUdAFTdwW3xNrZEXTcP7F-dX6fc95jDa_J_fnnxDTNRo-hY9D2Qvpxu3Y0sI1F6549m_nXsA2cXzgHvhoHeIbks0hD5gF5Q' },
];

const FavoritesPage: React.FC = () => {
    const navItems = [
        { icon: 'receipt_long', label: 'My Orders', href: '/user/orders' },
        { icon: 'favorite', label: 'Favorite Spots', href: '/user/favorites', active: true },
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

            <main className="flex-1 p-6 lg:p-10 pt-32 lg:pt-32 overflow-y-auto">
                <DashboardHeader title="Favorite Spots" subtitle="The places you keep coming back to" icon="favorite" />

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {favorites.map((rest, idx) => (
                        <motion.div key={rest.id}
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.09 }}
                            whileHover={{ y: -8 }}
                            className="bg-white border-4 border-accent-dark rounded-[2rem] overflow-hidden shadow-chunky group">
                            <div className="relative h-48 overflow-hidden">
                                <img src={rest.img} alt={rest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-accent-dark/60 to-transparent" />
                                <div className="absolute top-4 right-4 bg-white border-2 border-accent-dark rounded-full p-2 shadow-chunky-sm">
                                    <span className="material-symbols-outlined text-red-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-primary border-2 border-accent-dark px-3 py-1 rounded-full text-[10px] font-black uppercase shadow-chunky-sm">
                                    {rest.orders}× ordered
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-2xl font-black italic tracking-tighter leading-none">{rest.name}</h3>
                                        <p className="text-sm font-bold text-accent-dark/50 mt-1">{rest.cuisine}</p>
                                    </div>
                                    <span className="text-sm font-black text-accent-dark/40">{rest.priceRange}</span>
                                </div>
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="font-black text-sm">{rest.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-accent-dark/50">
                                        <span className="material-symbols-outlined text-sm">timer</span>
                                        <span className="font-bold text-sm">{rest.time}</span>
                                    </div>
                                </div>
                                <Link to="/explore">
                                    <motion.button whileHover={{ scale: 1.03, rotate: -1 }} whileTap={{ scale: 0.97 }}
                                        className="w-full bg-primary border-2 border-accent-dark shadow-chunky-sm py-3 rounded-full font-black text-sm uppercase transition-all">
                                        Order Again
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default FavoritesPage;
