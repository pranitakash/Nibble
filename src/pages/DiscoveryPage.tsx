import React from 'react';

const DiscoveryPage: React.FC = () => {
    const restaurants = [
        {
            name: 'Burger Hero HQ',
            rating: '★ 4.9',
            time: '15-25 min',
            tags: 'Gourmet Burgers • American • Fries',
            delivery: '$2.99 Delivery',
            badge: 'Free item with $20+',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcjjvDIiZaTPVxRF-xI-ZUpAt4VvnqWYBwcwkhP4Gr9-b2pVbLp9YDBNCWnKhz3BPkFhriUR_amPAxIkhSTG4khN9S-eMJtGzxEsglJGgkASDdGxyisPs8P_QLaX7CbqaTpY_H0PxaO-eE7OsqLbHx4UCksM6NJKkb1rFrt232KgdzZJ2NUXkVN0Rx-yFEC8xF5Vjh529fk1CDfecWO_Er3zRXKMyjXmk-p2hswRL5TKz55MsqQBEbd4_gk_IBAgacSgZ6cLnyF74'
        },
        {
            name: 'Sushi Blade',
            rating: '★ 4.7',
            time: '20-35 min',
            tags: 'Sushi • Japanese • Healthy',
            delivery: '$3.50 Delivery',
            badge: 'Popular Choice',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDazYi7jqkVBdCMrrc9cMkSqTcBr8NC4pLyFfzpHzfDIFAfP0pvAOAx1e99YXpkkgqWYKQ2a5-WUL1BJnpwXZxuUDdsmIWKCksKnReGbw9_v8B89RVWfpSccrmqPp1PRRiQsrDRO2IQGPFUlkb2NKBxFqTwWiuT0BT02My8uvwLu979-Jz1b4gADYOkU-8olkpu_7Qx9JzGqEBk92TN_u5OtITF9D0jzKCGV5cqoCOubpMCbfNZT44FG7CnTE1TAaa53Z7DdXjLrXY'
        },
        {
            name: 'Neon Pizza',
            rating: '★ 4.8',
            time: '10-20 min',
            tags: 'Pizza • Italian • Late Night',
            delivery: '$1.99 Delivery',
            badge: 'New Arrival',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANJtqILuwYrPyIPvsRNCzTXT_iok9FK_JbcdDOzWzeq2oETu0-RCWLxkYDQiLiwId2Y-4TQXzGxLEqlEkApJXErVKmVpxyoJTCEU2fpW9N7FVibh5Dx3gxZ7PkP-W7DRlgZui-JFs8hER8ZErnwIF1wpNLR_aEilhmthw_0p6I8ZranZMAb2Khf5G_bZiWx2IPtkqio3HZtvLWRT_ZTPH2vtesSwJ0nx6FP9eN1noWZ-oZDv0bZeaAL8rfEL5R68R1xLbhAwmRs0M'
        },
        {
            name: 'Taco Thunder',
            rating: '★ 4.5',
            time: '15-25 min',
            tags: 'Tacos • Mexican • Street Food',
            delivery: '$2.50 Delivery',
            badge: 'Under $10',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvQhx9Hl8L5b3ubIYKYHHRn-NFK3Tv8BEoNU9NYFQ0s584CuiA98RhtLdwIJTBVPSJ5PwU2OuwbM54DLf8j8xnNikSxlRkP86MF1-k8TdyT8nEzCZj-1LhWn12q5WeRMKlupPWeBWuwC3Iy8e-qax4ALJv7Kf5qUGsAXrE6Eveo-lqxa5fade9NmLEUCixImFtjSy6kcQpwBJlUXWMBfdwxSvoWZhJAoCLl_9GBrzkql74s8fkHKqxVwzSRrty1vlv6DVWeZfsYyY'
        },
        {
            name: 'Pasta Prime',
            rating: '★ 4.6',
            time: '25-40 min',
            tags: 'Pasta • Italian • Family Style',
            delivery: '$3.99 Delivery',
            badge: 'Bestseller',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtMB-opmau9jZEe8QIkT_TABKkw2NwQgyxeEH-pdZqpD_1IP5d6FLJRCU_1_xYFADuYmnklf3GhhImkxux477Gj_AwplxHbWkSK83DBi5nX-2qWg67tWKKg9-Yw0RdPFPbIIm56xWCexcP4Ixx3J1xuGVcW0qUprCnuf6xTtYoa7zjH5HC2Xm2JT6nno58vYV6cMykExxwkDElXaMBaG7ssjev24XmHoubLAe2IMOV_nU6vrS_0ZQTjub1LYwMjDbui3E9sNqqDyw'
        },
        {
            name: 'Green Rocket',
            rating: '★ 4.9',
            time: '10-15 min',
            tags: 'Salads • Bowls • Vegan',
            delivery: 'Free Delivery',
            badge: 'Super Food',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKic_GJHO8qwTOdcDMuoF7Wucc5qnvEeedRqOeRMmdHs7s8_Il2T84tRAJFFziHHIu66ZG2yivR87YcbT_oGEJBgTtrUjMou1s57Fjk1I0kZxYWp0DXEsBEGzRC52JU76_xqgwTGndSv9yy2ywErEbkbWspS1egOF6bdiAAfsBMGcixHeKtSaF1D6FMDhAywg9LW79z94fRY1Aadnsa1cqtxnmPywlYdQaaB-R9MfjQwQssQfg4W3m1un4C7M11_RkikWJ4tBsddg'
        },
    ];

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
                        <div className="bg-white border-4 border-accent-dark rounded-2xl p-2 shadow-chunky flex items-center gap-2 group transition-transform hover:-translate-y-1">
                            <div className="pl-4 text-accent-dark/30">
                                <span className="material-symbols-outlined text-3xl">search</span>
                            </div>
                            <input
                                className="flex-1 bg-transparent border-none focus:ring-0 text-xl font-bold text-accent-dark placeholder:text-accent-dark/30"
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
                        <div className="md:sticky md:top-32 flex flex-col gap-8">
                            <div>
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-accent-dark">Cuisines</h3>
                                <div className="flex flex-col gap-4">
                                    <button className="flex items-center gap-4 bg-primary px-6 py-4 rounded-2xl border-2 border-accent-dark shadow-chunky-sm font-black text-accent-dark group hover:-translate-y-1 transition-transform">
                                        <span className="text-2xl">🍕</span>
                                        <span>Pizza</span>
                                    </button>
                                    <button className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border-2 border-accent-dark shadow-chunky-sm font-black text-accent-dark group hover:-translate-y-1 transition-transform">
                                        <span className="text-2xl">🍔</span>
                                        <span>Burgers</span>
                                    </button>
                                    <button className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border-2 border-accent-dark shadow-chunky-sm font-black text-accent-dark group hover:-translate-y-1 transition-transform">
                                        <span className="text-2xl">🍣</span>
                                        <span>Sushi</span>
                                    </button>
                                    <button className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border-2 border-accent-dark shadow-chunky-sm font-black text-accent-dark group hover:-translate-y-1 transition-transform">
                                        <span className="text-2xl">🌮</span>
                                        <span>Tacos</span>
                                    </button>
                                    <button className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border-2 border-accent-dark shadow-chunky-sm font-black text-accent-dark group hover:-translate-y-1 transition-transform">
                                        <span className="text-2xl">🥗</span>
                                        <span>Salads</span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-accent-dark">Quick Sort</h3>
                                <div className="flex flex-wrap gap-2">
                                    <button className="bg-accent-dark/5 px-4 py-2 rounded-full text-xs font-black uppercase border-2 border-accent-dark">Rating</button>
                                    <button className="bg-white px-4 py-2 rounded-full text-xs font-black uppercase border-2 border-accent-dark">Time</button>
                                    <button className="bg-white px-4 py-2 rounded-full text-xs font-black uppercase border-2 border-accent-dark">Popular</button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Results Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-accent-dark">Popular Nearby <span className="text-primary bg-accent-dark px-3 rounded-xl">(124)</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {restaurants.map((res) => (
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
                        <div className="mt-20 flex justify-center">
                            <button className="bg-accent-dark text-white px-12 py-5 rounded-2xl font-black text-xl border-2 border-accent-dark shadow-chunky transition-all hover:bg-slate-800 active:translate-x-1 active:translate-y-1 active:shadow-none uppercase">
                                Load More Heroes
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DiscoveryPage;
