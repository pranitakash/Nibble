import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };
    return (
        <div className="bg-background-light text-accent-dark antialiased">
            {/* Main Hero Section */}
            <main className="min-h-screen flex flex-col lg:flex-row pt-24"
                style={{ background: 'linear-gradient(90deg, #f9f506 50%, #fcfcf8 50%)' }}>

                {/* Left Side: Content */}
                <div className="flex-1 flex items-center px-6 lg:px-20 py-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <div className="inline-block bg-accent-dark text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                            New: 15-Min Delivery in NYC
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-accent-dark mb-8">
                            Fastest Food <span className="bg-white px-2">Delivery.</span> Easy Pickup.
                        </h1>
                        <p className="text-lg lg:text-xl font-medium text-accent-dark/80 mb-10 leading-relaxed">
                            Your favorite meals from local heroes, delivered to your door in a flash. No hidden fees, just great food.
                        </p>

                        {/* Chunky Search Bar */}
                        <div className="relative group">
                            <div className="flex flex-col sm:flex-row items-stretch gap-0 bg-white border-4 border-accent-dark rounded-2xl sm:rounded-full overflow-hidden shadow-chunky transition-transform group-hover:-translate-y-1">
                                <div className="flex items-center px-6 py-4 bg-white border-b-2 sm:border-b-0 sm:border-r-2 border-accent-dark/10 flex-1">
                                    <span className="material-symbols-outlined text-accent-dark/40 mr-3">location_on</span>
                                    <input
                                        className="w-full border-none focus:ring-0 focus:outline-none text-accent-dark font-bold placeholder:text-accent-dark/30 bg-transparent"
                                        placeholder="Enter delivery address"
                                        type="text"
                                    />
                                </div>
                                <button className="bg-primary px-8 py-4 sm:py-2 text-accent-dark font-black text-lg hover:bg-yellow-400 transition-colors border-t-4 sm:border-t-0 sm:border-l-4 border-accent-dark">
                                    Find Food
                                </button>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8 items-center">
                            <div className="flex flex-col">
                                <span className="text-3xl font-black">10k+</span>
                                <span className="text-sm font-bold text-accent-dark/60 uppercase">Restaurants</span>
                            </div>
                            <div className="h-10 w-px bg-accent-dark/10"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black">20min</span>
                                <span className="text-sm font-bold text-accent-dark/60 uppercase">Avg Delivery</span>
                            </div>
                            <div className="h-10 w-px bg-accent-dark/10"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black">4.9/5</span>
                                <span className="text-sm font-bold text-accent-dark/60 uppercase">App Rating</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Mascot and Badges */}
                <div className="flex-1 relative flex items-center justify-center min-h-[500px] lg:min-h-0 overflow-hidden">
                    {/* Floating Elements Background Decoration */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent-dark/5 rounded-full blur-2xl"></div>
                    </div>

                    {/* Mascot Container */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 2, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-10"
                    >
                        <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full border-8 border-accent-dark bg-primary flex items-center justify-center shadow-chunky overflow-hidden group">
                            <img
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4"
                                alt="Delicious Burger"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent-dark/20 to-transparent"></div>
                        </div>

                        {/* Floating Labels */}
                        <div className="absolute -top-6 -right-12 bg-white border-2 border-accent-dark rounded-2xl px-4 py-2 shadow-chunky-sm rotate-12 flex items-center gap-2">
                            <span className="material-symbols-outlined text-red-500">favorite</span>
                            <span className="font-black text-sm">Best Burger 2026</span>
                        </div>
                        <div className="absolute bottom-10 -left-16 bg-white border-2 border-accent-dark rounded-2xl px-4 py-2 shadow-chunky-sm -rotate-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-green-500">eco</span>
                            <span className="font-black text-sm">Eco Packaging</span>
                        </div>
                    </motion.div>

                    {/* Secondary Mascot (Fries) */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [12, 14, 12]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        className="absolute bottom-20 right-10 lg:right-24"
                    >
                        <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-3xl border-4 border-accent-dark bg-white overflow-hidden shadow-chunky rotate-12">
                            <img
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHnMcd2yuIG2PSN3AHQOh7UjCBAkhf4x5JMLUgMkCc3ClZS1fHy6tAms8T0fzcojrtH-5zGgZ2g9RSjcySKatxxxpW9ufq0uRuBXoXwG814YJa-zNpirXcwVfJvvTVUftwEAOIquNk-6c6wdtTdCMSzeNK8jNm5mbLVX8VjGH295CsqUdAFTdwW3xNrZEXTcP7F-dX6fc95jDa_J_fnnxDTNRo-hY9D2Qvpxu3Y0sI1F6549m_nXsA2cXzgHvhoHeIbks0hD5gF5Q"
                                alt="Crispy golden french fries"
                            />
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Popular Categories */}
            <section className="py-20 px-6 lg:px-20 bg-background-light">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl font-black text-accent-dark mb-4">Craving Something?</h2>
                            <p className="text-lg font-medium text-accent-dark/60">Explore the best local spots by category</p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 rounded-full border-2 border-accent-dark flex items-center justify-center hover:bg-primary transition-colors shadow-chunky-sm active:translate-y-1 active:shadow-none">
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 rounded-full border-2 border-accent-dark flex items-center justify-center bg-primary hover:bg-yellow-400 transition-colors shadow-chunky-sm active:translate-y-1 active:shadow-none">
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 pt-4 pb-12 px-2 no-scrollbar scroll-smooth snap-x"
                    >
                        {/* Burger */}
                        <div className="min-w-[160px] md:min-w-[200px] snap-start group cursor-pointer">
                            <div className="bg-primary/10 rounded-3xl border-2 border-accent-dark p-6 transition-all group-hover:-translate-y-2 group-hover:bg-primary group-hover:shadow-chunky">
                                <div className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center mb-4 border-2 border-accent-dark">
                                    <span className="material-symbols-outlined text-4xl">lunch_dining</span>
                                </div>
                                <p className="text-center font-black text-accent-dark">Burgers</p>
                            </div>
                        </div>

                        {/* Pizza */}
                        <div className="min-w-[160px] md:min-w-[200px] snap-start group cursor-pointer">
                            <div className="bg-orange-100 rounded-3xl border-2 border-accent-dark p-6 transition-all group-hover:-translate-y-2 group-hover:bg-orange-400 group-hover:shadow-chunky">
                                <div className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center mb-4 border-2 border-accent-dark">
                                    <span className="material-symbols-outlined text-4xl">local_pizza</span>
                                </div>
                                <p className="text-center font-black text-accent-dark">Pizza</p>
                            </div>
                        </div>

                        {/* Sushi */}
                        <div className="min-w-[160px] md:min-w-[200px] snap-start group cursor-pointer">
                            <div className="bg-red-50 rounded-3xl border-2 border-accent-dark p-6 transition-all group-hover:-translate-y-2 group-hover:bg-red-400 group-hover:shadow-chunky">
                                <div className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center mb-4 border-2 border-accent-dark">
                                    <span className="material-symbols-outlined text-4xl">set_meal</span>
                                </div>
                                <p className="text-center font-black text-accent-dark">Sushi</p>
                            </div>
                        </div>

                        {/* Tacos */}
                        <div className="min-w-[160px] md:min-w-[200px] snap-start group cursor-pointer">
                            <div className="bg-yellow-50 rounded-3xl border-2 border-accent-dark p-6 transition-all group-hover:-translate-y-2 group-hover:bg-yellow-400 group-hover:shadow-chunky">
                                <div className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center mb-4 border-2 border-accent-dark">
                                    <span className="material-symbols-outlined text-4xl">taco</span>
                                </div>
                                <p className="text-center font-black text-accent-dark">Tacos</p>
                            </div>
                        </div>

                        {/* Pasta */}
                        <div className="min-w-[160px] md:min-w-[200px] snap-start group cursor-pointer">
                            <div className="bg-orange-50 rounded-3xl border-2 border-accent-dark p-6 transition-all group-hover:-translate-y-2 group-hover:bg-orange-600 group-hover:shadow-chunky">
                                <div className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center mb-4 border-2 border-accent-dark">
                                    <span className="material-symbols-outlined text-4xl">dinner_dining</span>
                                </div>
                                <p className="text-center font-black text-accent-dark">Pasta</p>
                            </div>
                        </div>

                        {/* Desserts */}
                        <div className="min-w-[160px] md:min-w-[200px] snap-start group cursor-pointer">
                            <div className="bg-pink-100 rounded-3xl border-2 border-accent-dark p-6 transition-all group-hover:-translate-y-2 group-hover:bg-pink-400 group-hover:shadow-chunky">
                                <div className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center mb-4 border-2 border-accent-dark">
                                    <span className="material-symbols-outlined text-4xl">icecream</span>
                                </div>
                                <p className="text-center font-black text-accent-dark">Desserts</p>
                            </div>
                        </div>

                        {/* Asian */}
                        <div className="min-w-[160px] md:min-w-[200px] snap-start group cursor-pointer">
                            <div className="bg-red-100 rounded-3xl border-2 border-accent-dark p-6 transition-all group-hover:-translate-y-2 group-hover:bg-red-500 group-hover:shadow-chunky">
                                <div className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center mb-4 border-2 border-accent-dark">
                                    <span className="material-symbols-outlined text-4xl">ramen_dining</span>
                                </div>
                                <p className="text-center font-black text-accent-dark">Asian</p>
                            </div>
                        </div>

                        {/* Healthy */}
                        <div className="min-w-[160px] md:min-w-[200px] snap-start group cursor-pointer">
                            <div className="bg-green-100 rounded-3xl border-2 border-accent-dark p-6 transition-all group-hover:-translate-y-2 group-hover:bg-green-400 group-hover:shadow-chunky">
                                <div className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center mb-4 border-2 border-accent-dark">
                                    <span className="material-symbols-outlined text-4xl">potted_plant</span>
                                </div>
                                <p className="text-center font-black text-accent-dark">Healthy</p>
                            </div>
                        </div>

                        {/* Drinks */}
                        <div className="min-w-[160px] md:min-w-[200px] snap-start group cursor-pointer">
                            <div className="bg-blue-100 rounded-3xl border-2 border-accent-dark p-6 transition-all group-hover:-translate-y-2 group-hover:bg-blue-400 group-hover:shadow-chunky">
                                <div className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center mb-4 border-2 border-accent-dark">
                                    <span className="material-symbols-outlined text-4xl">local_bar</span>
                                </div>
                                <p className="text-center font-black text-accent-dark">Drinks</p>
                            </div>
                        </div>

                        {/* Bakery */}
                        <div className="min-w-[160px] md:min-w-[200px] snap-start group cursor-pointer">
                            <div className="bg-amber-100 rounded-3xl border-2 border-accent-dark p-6 transition-all group-hover:-translate-y-2 group-hover:bg-amber-400 group-hover:shadow-chunky">
                                <div className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center mb-4 border-2 border-accent-dark">
                                    <span className="material-symbols-outlined text-4xl">bakery_dining</span>
                                </div>
                                <p className="text-center font-black text-accent-dark">Bakery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action for Partners */}
            <section className="px-6 lg:px-20 pb-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-accent-dark rounded-3xl p-10 text-white relative overflow-hidden group shadow-chunky-primary">
                        <div className="relative z-10">
                            <h3 className="text-4xl font-black mb-4">Be a Hero Rider</h3>
                            <p className="text-lg text-white/70 mb-8 max-w-sm leading-relaxed">Earn extra cash on your own schedule. Join our fleet of delivery heroes today.</p>
                            <button className="bg-primary text-accent-dark px-8 py-3 rounded-full font-black hover:translate-x-2 transition-transform border-2 border-transparent hover:border-white shadow-chunky-sm-white">
                                Join the Squad
                            </button>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700">pedal_bike</span>
                    </div>
                    <div className="bg-white border-4 border-accent-dark rounded-3xl p-10 text-accent-dark shadow-chunky relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-4xl font-black mb-4">Boost Sales</h3>
                            <p className="text-lg text-accent-dark/60 mb-8 max-w-sm leading-relaxed">Partner with Nibble and watch your orders skyrocket. We handle the logistics.</p>
                            <button className="bg-accent-dark text-white px-8 py-3 rounded-full font-black hover:translate-x-2 transition-transform shadow-chunky-sm-primary">
                                Add Restaurant
                            </button>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-accent-dark/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">storefront</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
