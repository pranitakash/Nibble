import React, { useState } from 'react';
import RewardsPopup from '../components/ui/RewardsPopup';

const CustomerDashboard: React.FC = () => {
    const [showRewards, setShowRewards] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-accent-dark flex">
            {/* Rewards Popup */}
            <RewardsPopup
                isOpen={showRewards}
                onClose={() => setShowRewards(false)}
            />

            {/* Sidebar Navigation */}
            <aside className="w-20 lg:w-72 border-r-4 border-accent-dark bg-white h-screen sticky top-0 flex flex-col items-center lg:items-start py-10 px-4">
                <div className="mb-12 flex items-center gap-2">
                    <div className="bg-primary p-1 rounded-lg border border-accent-dark">
                        <span className="material-symbols-outlined text-accent-dark font-bold">fastfood</span>
                    </div>
                </div>
                <nav className="flex-1 w-full space-y-4">
                    <div className="w-full flex items-center gap-3 p-3 bg-primary border-4 border-accent-dark rounded-2xl shadow-chunky-sm cursor-pointer lg:px-6">
                        <span className="material-symbols-outlined font-black">dashboard</span>
                        <span className="hidden lg:block font-black uppercase text-sm">Dashboard</span>
                    </div>
                    {/* Trigger for Rewards Popup (Mock for verification) */}
                    <div
                        onClick={() => setShowRewards(true)}
                        className="w-full flex items-center gap-3 p-3 hover:bg-yellow-100 rounded-2xl cursor-pointer lg:px-6 transition-colors group border-2 border-transparent hover:border-primary"
                    >
                        <span className="material-symbols-outlined font-black text-yellow-500 animate-bounce">emoji_events</span>
                        <span className="hidden lg:block font-black text-yellow-600 uppercase text-sm">Claim Rewards</span>
                    </div>
                    <div className="w-full flex items-center gap-3 p-3 hover:bg-slate-100 rounded-2xl cursor-pointer lg:px-6 transition-colors">
                        <span className="material-symbols-outlined font-black opacity-40">receipt_long</span>
                        <span className="hidden lg:block font-bold text-accent-dark/40 uppercase text-sm">Orders</span>
                    </div>
                    <div className="w-full flex items-center gap-3 p-3 hover:bg-slate-100 rounded-2xl cursor-pointer lg:px-6 transition-colors">
                        <span className="material-symbols-outlined font-black opacity-40">favorite</span>
                        <span className="hidden lg:block font-bold text-accent-dark/40 uppercase text-sm">Favorites</span>
                    </div>
                    <div className="w-full flex items-center gap-3 p-3 hover:bg-slate-100 rounded-2xl cursor-pointer lg:px-6 transition-colors">
                        <span className="material-symbols-outlined font-black opacity-40">settings</span>
                        <span className="hidden lg:block font-bold text-accent-dark/40 uppercase text-sm">Settings</span>
                    </div>
                </nav>
                <div className="mt-auto w-full">
                    <div className="flex items-center gap-3 p-3 hover:bg-red-50 rounded-2xl cursor-pointer lg:px-6 transition-colors group">
                        <span className="material-symbols-outlined font-black text-red-500">logout</span>
                        <span className="hidden lg:block font-bold text-red-500 uppercase text-sm">Logout</span>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 lg:p-12 overflow-y-auto pt-28">
                <div className="max-w-6xl mx-auto">
                    <header className="mb-12">
                        <h1 className="text-4xl lg:text-5xl font-black text-accent-dark mb-2 uppercase italic">Welcome back, Hero! 🦸‍♂️</h1>
                        <p className="text-lg font-medium text-accent-dark/40 italic">Your loyalty level is growing. Keep ordering to level up!</p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Loyalty Card */}
                        <section className="lg:col-span-2 bg-primary border-4 border-accent-dark rounded-[2.5rem] p-8 shadow-chunky relative overflow-hidden group">
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="size-16 rounded-2xl bg-white border-2 border-accent-dark flex items-center justify-center shadow-chunky-sm rotate-3 group-hover:rotate-0 transition-transform">
                                            <span className="material-symbols-outlined text-4xl font-black text-yellow-500 fill-yellow-500">star</span>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-black uppercase tracking-tight">Gold Hero</h3>
                                            <p className="text-sm font-bold opacity-60">XP Progress: 85%</p>
                                        </div>
                                    </div>
                                    <span className="bg-accent-dark text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest border-2 border-white">Level 12</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between font-black text-xs uppercase tracking-tighter">
                                        <span>850 / 1000 XP</span>
                                        <span>150 XP to Platinum</span>
                                    </div>
                                    <div className="w-full h-8 bg-white border-4 border-accent-dark rounded-full overflow-hidden shadow-chunky-sm p-1">
                                        <div className="h-full bg-accent-dark rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <p className="mt-8 font-black text-sm uppercase italic underline decoration-white decoration-4 underline-offset-4">Next Perk: 15% off your next 3 orders!</p>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[240px] text-white/20 -rotate-12 group-hover:rotate-0 transition-all duration-1000">military_tech</span>
                        </section>

                        {/* Recent Order Summary */}
                        <section className="bg-white border-4 border-accent-dark rounded-[2.5rem] p-8 shadow-chunky">
                            <h3 className="text-2xl font-black uppercase mb-8 border-b-4 border-primary pb-2 w-fit">Quick Stats</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-orange-100 border-2 border-accent-dark flex items-center justify-center font-black">24</div>
                                    <span className="font-bold text-accent-dark/60 uppercase text-xs tracking-widest">Orders this month</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-green-100 border-2 border-accent-dark flex items-center justify-center font-black">$42</div>
                                    <span className="font-bold text-accent-dark/60 uppercase text-xs tracking-widest">Hero Savings</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-blue-100 border-2 border-accent-dark flex items-center justify-center font-black">12</div>
                                    <span className="font-bold text-accent-dark/60 uppercase text-xs tracking-widest">Active Rewards</span>
                                </div>
                            </div>
                        </section>

                        {/* Order History */}
                        <section className="lg:col-span-3">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-black uppercase tracking-tight">Recent Orders</h3>
                                <button className="text-sm font-black underline hover:text-primary transition-colors uppercase">View All</button>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-white border-4 border-accent-dark rounded-3xl p-6 shadow-chunky hover:-translate-y-1 transition-transform group">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                            <div className="flex items-center gap-6">
                                                <div className="size-20 rounded-2xl border-4 border-accent-dark overflow-hidden shrink-0 shadow-chunky-sm group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                                                    <img
                                                        alt="Restaurant"
                                                        className="w-full h-full object-cover"
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcjjvDIiZaTPVxRF-xI-ZUpAt4VvnqWYBwcwkhP4Gr9-b2pVbLp9YDBNCWnKhz3BPkFhriUR_amPAxIkhSTG4khN9S-eMJtGzxEsglJGgkASDdGxyisPs8P_QLaX7CbqaTpY_H0PxaO-eE7OsqLbHx4UCksM6NJKkb1rFrt232KgdzZJ2NUXkVN0Rx-yFEC8xF5Vjh529fk1CDfecWO_Er3zRXKMyjXmk-p2hswRL5TKz55MsqQBEbd4_gk_IBAgacSgZ6cLnyF74"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <h4 className="text-xl font-black uppercase">Burger Hero HQ</h4>
                                                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-black border border-green-200 uppercase">Delivered</span>
                                                    </div>
                                                    <p className="text-sm font-bold text-accent-dark/40 uppercase tracking-tighter italic">Yesterday • 3 Items • $24.50</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <button className="text-[10px] font-black underline hover:text-primary transition-colors uppercase tracking-widest">View Receipt</button>
                                                <button className="bg-primary px-6 py-2 rounded-full border-2 border-accent-dark shadow-chunky-sm font-black text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase italic">
                                                    Reorder
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Referral Section */}
                        <section className="lg:col-span-3 bg-accent-dark rounded-3xl p-10 text-white relative overflow-hidden group">
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div>
                                    <h3 className="text-4xl font-black mb-2 uppercase italic tracking-tighter">Refer a Friend</h3>
                                    <p className="text-lg text-white/60 font-medium italic">Give $10, Get $10. Share the hero spirit!</p>
                                </div>
                                <div className="flex items-center gap-4 bg-white/10 p-2 rounded-2xl border-2 border-white/20 backdrop-blur-md">
                                    <code className="text-primary font-black px-4 text-xl tracking-widest">NIBBLE-HERO-99</code>
                                    <button className="bg-primary text-accent-dark px-6 py-2 rounded-xl font-black text-sm hover:bg-white transition-colors uppercase border-2 border-transparent">Copy</button>
                                </div>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700">card_giftcard</span>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CustomerDashboard;
