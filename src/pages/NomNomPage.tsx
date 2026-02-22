import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NomNomPage: React.FC = () => {

    const marqueeItems = [
        'BURGERS', 'PIZZA', 'SUSHI', 'TACOS', 'PASTA', 'DESSERTS', 'ASIAN', 'HEALTHY', 'DRINKS', 'BAKERY',
        'BURGERS', 'PIZZA', 'SUSHI', 'TACOS', 'PASTA', 'DESSERTS', 'ASIAN', 'HEALTHY', 'DRINKS', 'BAKERY'
    ];

    const allRestaurants = [
        {
            name: 'Burger Nibble HQ',
            rating: '4.9',
            time: '15-25 min',
            tags: 'Gourmet Burgers • American • Fries',
            delivery: '$2.99 Delivery',
            badge: 'Free item with $20+',
            image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Sushi Blade',
            rating: '4.7',
            time: '20-35 min',
            tags: 'Sushi • Japanese • Healthy',
            delivery: '$3.50 Delivery',
            badge: 'Popular Choice',
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Neon Pizza',
            rating: '4.8',
            time: '10-20 min',
            tags: 'Pizza • Italian • Late Night',
            delivery: '$1.99 Delivery',
            badge: 'New Arrival',
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Taco Thunder',
            rating: '4.5',
            time: '15-25 min',
            tags: 'Tacos • Mexican • Street Food',
            delivery: '$2.50 Delivery',
            badge: 'Under $10',
            image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Pasta Prime',
            rating: '4.6',
            time: '25-40 min',
            tags: 'Pasta • Italian • Family Style',
            delivery: '$3.99 Delivery',
            badge: 'Bestseller',
            image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Green Rocket',
            rating: '4.9',
            time: '10-15 min',
            tags: 'Salads • Bowls • Vegan',
            delivery: 'Free Delivery',
            badge: 'Super Food',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60'
        }
    ];


    return (
        <div className="bg-[#fcfcf8] text-accent-dark antialiased min-h-screen">
            {/* Header Section */}
            <section className="pt-0 pb-0 flex flex-col md:flex-row border-b-4 border-accent-dark">
                <div className="w-full md:w-1/2 bg-primary px-8 lg:px-20 pt-32 lg:pt-40 pb-12 flex flex-col items-end justify-center border-b-4 md:border-b-0 md:border-r-4 border-accent-dark">
                    <div className="w-full max-w-xl">
                        <h1 className="text-6xl md:text-8xl font-black text-accent-dark mb-4 uppercase italic leading-[0.9]">
                            Nom<br />Nom
                        </h1>
                        <p className="text-2xl font-bold text-accent-dark/80 mb-10 max-w-md">
                            The best local flavors, curated just for you. Preview what's cooking.
                        </p>
                        <Link to="/login">
                            <motion.button
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-accent-dark text-white px-12 py-6 rounded-[2rem] font-black text-2xl shadow-chunky transition-all uppercase flex items-center gap-4"
                            >
                                <span className="material-symbols-outlined text-4xl">shopping_cart</span>
                                ORDER NOW
                            </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-white px-8 lg:px-20 pt-32 lg:pt-40 pb-12 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="w-full max-w-xl relative z-10">
                        <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Quick Search</h2>
                        <div className="bg-white border-4 border-accent-dark rounded-[2rem] p-3 shadow-chunky flex flex-col sm:flex-row items-stretch gap-2 transition-transform hover:-translate-y-1">
                            <div className="flex items-center px-4 flex-1">
                                <span className="material-symbols-outlined text-3xl text-accent-dark/30 mr-3">search</span>
                                <input
                                    className="w-full bg-transparent border-none outline-none focus:ring-0 text-xl font-bold text-accent-dark placeholder:text-accent-dark/30"
                                    placeholder="Try 'Sushi' or 'Pizza'..."
                                    type="text"
                                />
                            </div>
                            <button className="bg-primary hover:bg-yellow-400 text-accent-dark px-10 py-5 rounded-[1.5rem] font-black text-xl border-2 border-accent-dark shadow-chunky-sm transition-all uppercase">
                                GO
                            </button>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {['Italian', 'Japanese', 'Healthy', 'Burgers'].map(tag => (
                                <span key={tag} className="px-4 py-2 bg-accent-dark/5 rounded-full text-xs font-black uppercase tracking-widest border border-accent-dark/10">#{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee Section */}
            <div className="bg-accent-dark py-6 overflow-hidden border-b-4 border-accent-dark">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex whitespace-nowrap gap-16"
                >
                    {marqueeItems.map((item, idx) => (
                        <span key={idx} className="text-white text-5xl font-black italic tracking-tighter opacity-40 hover:opacity-100 transition-opacity cursor-default flex items-center gap-8">
                            {item}
                            <span className="material-symbols-outlined text-primary text-2xl">lens</span>
                        </span>
                    ))}
                </motion.div>
            </div>

            <main className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Sneak Peek</h2>
                    <p className="text-xl font-bold text-accent-dark/60">Register to unlock the full menu and place your order.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allRestaurants.map((res) => (
                        <div key={res.name} className="group bg-white border-4 border-accent-dark rounded-[3rem] overflow-hidden shadow-chunky transition-all duration-500">
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    alt={res.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    src={res.image}
                                />
                                <div className="absolute top-6 left-6 flex gap-3">
                                    <div className="bg-primary text-accent-dark px-4 py-1.5 rounded-full text-sm font-black border-2 border-accent-dark shadow-chunky-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base">star</span>
                                        {res.rating}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-accent-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                    <Link to="/login">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-white text-accent-dark px-8 py-4 rounded-2xl font-black text-lg border-2 border-accent-dark shadow-chunky"
                                        >
                                            VIEW MENU
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-black mb-2 text-accent-dark group-hover:text-primary transition-colors">{res.name}</h3>
                                <p className="text-accent-dark/50 font-bold text-sm mb-6">{res.tags}</p>
                                <div className="flex items-center gap-2 text-primary font-black uppercase text-sm italic">
                                    <span>Locked until Login</span>
                                    <span className="material-symbols-outlined text-base">lock</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <Link to="/signup">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-accent-dark px-16 py-8 rounded-[2.5rem] font-black text-3xl shadow-chunky-lg border-4 border-accent-dark transition-all uppercase"
                        >
                            Join Now to Order
                        </motion.button>
                    </Link>
                    <p className="mt-8 font-black text-accent-dark/30 uppercase tracking-[0.2em] text-sm">Create an account in less than 2 minutes</p>
                </div>
            </main>
        </div>
    );
};

export default NomNomPage;
