import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DiscoveryPage: React.FC = () => {
    const [selectedCuisine, setSelectedCuisine] = useState<string>('Pizza');
    const [selectedSort, setSelectedSort] = useState<string>('Rating');
    const [isCuisineModalOpen, setIsCuisineModalOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);

    const cuisines = [
        { name: 'Pizza', icon: '🍕', category: 'local_pizza', color: 'bg-orange-100', hoverColor: 'group-hover:bg-orange-400' },
        { name: 'Burgers', icon: '🍔', category: 'lunch_dining', color: 'bg-primary/10', hoverColor: 'group-hover:bg-primary' },
        { name: 'Sushi', icon: '🍣', category: 'set_meal', color: 'bg-red-50', hoverColor: 'group-hover:bg-red-400' },
        { name: 'Tacos', icon: '🌮', category: 'taco', color: 'bg-yellow-50', hoverColor: 'group-hover:bg-yellow-400' },
        { name: 'Pasta', icon: '🍝', category: 'dinner_dining', color: 'bg-orange-50', hoverColor: 'group-hover:bg-orange-600' },
        { name: 'Desserts', icon: '🍰', category: 'icecream', color: 'bg-pink-100', hoverColor: 'group-hover:bg-pink-400' },
        { name: 'Asian', icon: '🍜', category: 'ramen_dining', color: 'bg-red-100', hoverColor: 'group-hover:bg-red-500' },
        { name: 'Healthy', icon: '🥗', category: 'potted_plant', color: 'bg-green-100', hoverColor: 'group-hover:bg-green-400' },
        { name: 'Drinks', icon: '🍹', category: 'local_bar', color: 'bg-blue-100', hoverColor: 'group-hover:bg-blue-400' },
        { name: 'Bakery', icon: '🥐', category: 'bakery_dining', color: 'bg-amber-100', hoverColor: 'group-hover:bg-amber-400' },
    ];

    const allRestaurants = [
        {
            name: 'Burger Hero HQ',
            rating: '★ 4.9',
            time: '15-25 min',
            tags: 'Gourmet Burgers • American • Fries',
            delivery: '$2.99 Delivery',
            badge: 'Free item with $20+',
            image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Sushi Blade',
            rating: '★ 4.7',
            time: '20-35 min',
            tags: 'Sushi • Japanese • Healthy',
            delivery: '$3.50 Delivery',
            badge: 'Popular Choice',
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Neon Pizza',
            rating: '★ 4.8',
            time: '10-20 min',
            tags: 'Pizza • Italian • Late Night',
            delivery: '$1.99 Delivery',
            badge: 'New Arrival',
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Taco Thunder',
            rating: '★ 4.5',
            time: '15-25 min',
            tags: 'Tacos • Mexican • Street Food',
            delivery: '$2.50 Delivery',
            badge: 'Under $10',
            image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Pasta Prime',
            rating: '★ 4.6',
            time: '25-40 min',
            tags: 'Pasta • Italian • Family Style',
            delivery: '$3.99 Delivery',
            badge: 'Bestseller',
            image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Green Rocket',
            rating: '★ 4.9',
            time: '10-15 min',
            tags: 'Salads • Bowls • Vegan',
            delivery: 'Free Delivery',
            badge: 'Super Food',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Wok King',
            rating: '★ 4.8',
            time: '15-30 min',
            tags: 'Chinese • Stir Fry • Dim Sum',
            delivery: '$2.99 Delivery',
            badge: 'Top Rated',
            image: 'https://images.unsplash.com/photo-1512058560366-cd2427ed56f3?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Curry Quest',
            rating: '★ 4.7',
            time: '30-45 min',
            tags: 'Indian • Curry • Naan',
            delivery: '$4.50 Delivery',
            badge: 'Family Feast',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7ed9d42339?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Healthy Bowls Ltd.',
            rating: '★ 4.9',
            time: '15-20 min',
            tags: 'Salads • Bowls • Organic',
            delivery: 'Free Delivery',
            badge: 'Organic',
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'BBQ Barn',
            rating: '★ 4.8',
            time: '20-30 min',
            tags: 'BBQ • Ribs • Southern',
            delivery: '$3.99 Delivery',
            badge: 'Smoky Good',
            image: 'https://images.unsplash.com/photo-1529193591184-b1d58b3fffc9?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Pho Master',
            rating: '★ 4.6',
            time: '15-25 min',
            tags: 'Vietnamese • Pho • Noodle Soup',
            delivery: '$2.50 Delivery',
            badge: 'Best Soup',
            image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Dim Sum Garden',
            rating: '★ 4.7',
            time: '20-35 min',
            tags: 'Chinese • Dim Sum • Tea House',
            delivery: '$3.00 Delivery',
            badge: 'Traditional',
            image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'The Bagel Shop',
            rating: '★ 4.5',
            time: '10-20 min',
            tags: 'Bakery • Bagels • Breakfast',
            delivery: '$1.50 Delivery',
            badge: 'Fresh Daily',
            image: 'https://images.unsplash.com/photo-1585476281137-04707ccd0133?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Gelato Heaven',
            rating: '★ 4.9',
            time: '10-15 min',
            tags: 'Desserts • Ice Cream • Italian',
            delivery: '$2.00 Delivery',
            badge: 'Sweet Treats',
            image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Poke Station',
            rating: '★ 4.7',
            time: '15-20 min',
            tags: 'Seafood • Poke Bowls • Hawaiian',
            delivery: '$2.99 Delivery',
            badge: 'Fresh Fish',
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Crepe Corner',
            rating: '★ 4.6',
            time: '15-30 min',
            tags: 'French • Crepes • Sweet & Savory',
            delivery: '$2.50 Delivery',
            badge: 'Classic French',
            image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Steakhouse Prime',
            rating: '★ 4.8',
            time: '40-60 min',
            tags: 'Steakhouse • Grill • Luxury',
            delivery: '$5.99 Delivery',
            badge: 'Fine Dining',
            image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Donut World',
            rating: '★ 4.4',
            time: '10-15 min',
            tags: 'Desserts • Donuts • Bakery',
            delivery: '$1.99 Delivery',
            badge: 'Sugar Rush',
            image: 'https://images.unsplash.com/photo-1527324688151-0e627063f2b1?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Wings & Rings',
            rating: '★ 4.5',
            time: '20-30 min',
            tags: 'Wings • Fast Food • American',
            delivery: '$2.99 Delivery',
            badge: 'Game Day',
            image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Smoothie Bar',
            rating: '★ 4.7',
            time: '10-15 min',
            tags: 'Drinks • Smoothies • Healthy',
            delivery: 'Free Delivery',
            badge: 'Fruit Power',
            image: 'https://images.unsplash.com/photo-1502741126161-bbfdf7ff1831?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'The Curry House',
            rating: '★ 4.6',
            time: '30-45 min',
            tags: 'Indian • Spicy • Rice Bowls',
            delivery: '$3.50 Delivery',
            badge: 'Spice King',
            image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Burrito Bandit',
            rating: '★ 4.8',
            time: '15-25 min',
            tags: 'Mexican • Burritos • Fast Food',
            delivery: '$1.99 Delivery',
            badge: 'Huge Portions',
            image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa82?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Vegan Delights',
            rating: '★ 4.9',
            time: '20-30 min',
            tags: 'Vegan • Plant Based • Healthy',
            delivery: 'Free Delivery',
            badge: 'Eco Friendly',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Ramen Express',
            rating: '★ 4.7',
            time: '15-25 min',
            tags: 'Japanese • Ramen • Quick Service',
            delivery: '$2.50 Delivery',
            badge: 'Popular',
            image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Tapas Time',
            rating: '★ 4.6',
            time: '25-40 min',
            tags: 'Spanish • Tapas • Wine Bar',
            delivery: '$4.00 Delivery',
            badge: 'Sharing Platter',
            image: 'https://images.unsplash.com/photo-1515443961218-a5136d888be7?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'The Salad Box',
            rating: '★ 4.5',
            time: '10-20 min',
            tags: 'Salads • Fresh • Quick Lunch',
            delivery: '$1.50 Delivery',
            badge: 'Light Option',
            image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Bakery Bliss',
            rating: '★ 4.9',
            time: '10-15 min',
            tags: 'Bakery • Cakes • Pastries',
            delivery: '$2.00 Delivery',
            badge: 'Artisan',
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Juice Junction',
            rating: '★ 4.7',
            time: '10-20 min',
            tags: 'Drinks • Raw Juice • Healthy',
            delivery: '$1.99 Delivery',
            badge: 'Detox',
            image: 'https://images.unsplash.com/photo-1622597467827-4acb017a7bcc?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'Pasta Palace',
            rating: '★ 4.8',
            time: '20-35 min',
            tags: 'Pasta • Homemade • Italian',
            delivery: '$3.00 Delivery',
            badge: 'Authentic',
            image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&auto=format&fit=crop&q=60'
        },
        {
            name: 'The Burger Joint',
            rating: '★ 4.6',
            time: '15-25 min',
            tags: 'Burgers • Classic • American',
            delivery: '$2.50 Delivery',
            badge: 'Classic',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60'
        },
    ];

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 6, allRestaurants.length));
    };

    return (
        <div className="bg-[#fcfcf8] text-accent-dark antialiased min-h-screen">
            {/* Header Section */}
            <section className="pt-32 pb-0 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-primary px-8 lg:px-20 py-16 flex flex-col items-end justify-center">
                    <div className="w-full max-w-xl">
                        <h1 className="text-5xl md:text-7xl font-black text-accent-dark mb-4 uppercase italic leading-none">
                            Hungry?
                        </h1>
                        <p className="text-xl font-bold text-accent-dark/80">
                            Find the best local heroes near you.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-[#fcfcf8] px-8 lg:px-20 py-16 flex flex-col justify-center">
                    <div className="w-full max-w-xl">
                        <div className="bg-white border-4 border-accent-dark rounded-2xl p-2 shadow-chunky flex items-center gap-2 transition-transform hover:-translate-y-1">
                            <div className="pl-4 text-accent-dark/30">
                                <span className="material-symbols-outlined text-3xl">search</span>
                            </div>
                            <input
                                className="flex-1 bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-xl font-bold text-accent-dark placeholder:text-accent-dark/30"
                                placeholder="Search for sushi, burgers..."
                                type="text"
                            />
                            <button className="bg-primary hover:bg-yellow-400 text-accent-dark px-10 py-4 rounded-xl font-black text-xl border-2 border-accent-dark shadow-chunky-sm transition-all active:translate-x-1 active:translate-y-1 active:shadow-none uppercase">
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6 lg:px-20 py-20">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="md:sticky md:top-10 flex flex-col gap-6">
                            <div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-accent-dark">CUISINES</h3>
                                <div className="flex flex-col gap-3">
                                    {cuisines.slice(0, 5).map((c) => (
                                        <button
                                            key={c.name}
                                            onClick={() => setSelectedCuisine(c.name)}
                                            className={`flex items-center gap-4 px-6 py-4 rounded-2xl border-2 border-accent-dark font-black transition-all active:scale-95 ${selectedCuisine === c.name
                                                    ? 'bg-primary text-accent-dark -translate-y-1 shadow-chunky-sm'
                                                    : 'bg-white text-accent-dark hover:-translate-y-1 shadow-chunky-sm'
                                                }`}
                                        >
                                            <span className="text-2xl">{c.icon}</span>
                                            <span>{c.name}</span>
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setIsCuisineModalOpen(true)}
                                        className="text-sm font-black text-accent-dark/40 hover:text-primary transition-colors flex items-center gap-2 px-2 mt-2 uppercase italic tracking-tighter"
                                    >
                                        <span className="material-symbols-outlined text-xl">add_circle</span>
                                        MORE CUISINES
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-accent-dark">QUICK SORT</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Rating', 'Time', 'Popular'].map((method) => (
                                        <button
                                            key={method}
                                            onClick={() => setSelectedSort(method)}
                                            className={`px-6 py-2 rounded-full text-xs font-black uppercase border-2 border-accent-dark transition-all active:scale-95 ${selectedSort === method
                                                    ? 'bg-primary text-accent-dark shadow-chunky-sm'
                                                    : 'bg-white text-accent-dark hover:bg-accent-dark/5'
                                                }`}
                                        >
                                            {method}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Results Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-accent-dark">Popular Nearby</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {allRestaurants.slice(0, visibleCount).map((res) => (
                                <div key={res.name} className="group bg-white border-4 border-accent-dark rounded-[2.5rem] overflow-hidden shadow-chunky hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            alt={res.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            src={res.image}
                                        />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <div className="bg-primary text-accent-dark px-3 py-1 rounded-full text-xs font-black border-2 border-accent-dark shadow-chunky-sm">
                                                {res.rating}
                                            </div>
                                            <div className="bg-white text-accent-dark px-3 py-1 rounded-full text-xs font-black border-2 border-accent-dark shadow-chunky-sm">
                                                {res.time}
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 right-4 bg-accent-dark text-white px-3 py-1 rounded-full text-xs font-bold">
                                            {res.delivery}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-black mb-1 text-accent-dark group-hover:text-primary transition-colors">{res.name}</h3>
                                        <p className="text-accent-dark/50 font-bold text-sm mb-6">{res.tags}</p>
                                        <div className="flex justify-between items-center pt-6 border-t-2 border-accent-dark/5">
                                            <span className="bg-primary/10 text-accent-dark px-4 py-1 rounded-full text-xs font-bold border-2 border-accent-dark/10">
                                                {res.badge}
                                            </span>
                                            <span className="material-symbols-outlined text-primary font-black group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-20 flex flex-col items-center gap-6 w-full">
                            {visibleCount < allRestaurants.length ? (
                                <button
                                    onClick={loadMore}
                                    className="bg-white text-accent-dark px-12 py-5 rounded-2xl font-black text-xl border-2 border-accent-dark shadow-chunky transition-all hover:bg-primary active:translate-x-1 active:translate-y-1 active:shadow-none uppercase"
                                >
                                    Load More Heroes
                                </button>
                            ) : (
                                <div className="py-10 text-center">
                                    <p className="text-2xl font-black text-accent-dark/30 uppercase italic tracking-tighter">
                                        That's all for now
                                    </p>
                                    <div className="w-12 h-1 bg-accent-dark/10 mx-auto mt-4 rounded-full"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* More Cuisines Modal */}
            <AnimatePresence>
                {isCuisineModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-accent-dark/40 backdrop-blur-sm flex items-center justify-center p-6"
                        onClick={() => setIsCuisineModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white border-4 border-accent-dark rounded-[3rem] p-10 max-w-4xl w-full shadow-chunky relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsCuisineModalOpen(false)}
                                className="absolute top-8 right-8 text-accent-dark/30 hover:text-accent-dark transition-colors"
                            >
                                <span className="material-symbols-outlined text-3xl">close</span>
                            </button>

                            <h3 className="text-4xl font-black mb-10 uppercase italic tracking-tighter text-accent-dark">CUISINES</h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                                {cuisines.map((c) => (
                                    <div
                                        key={c.name}
                                        onClick={() => {
                                            setSelectedCuisine(c.name);
                                            setIsCuisineModalOpen(false);
                                        }}
                                        className="group cursor-pointer"
                                    >
                                        <div className={`${c.color} rounded-3xl border-2 border-accent-dark p-6 transition-all group-hover:-translate-y-2 ${c.hoverColor} group-hover:shadow-chunky-sm`}>
                                            <div className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center mb-4 border-2 border-accent-dark">
                                                <span className="material-symbols-outlined text-4xl text-accent-dark">{c.category}</span>
                                            </div>
                                            <p className="text-center font-black text-accent-dark text-sm">{c.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DiscoveryPage;
