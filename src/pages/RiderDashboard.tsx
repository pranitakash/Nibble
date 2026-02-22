import React, { useState } from 'react';

const RiderDashboard: React.FC = () => {
    const [isOnline, setIsOnline] = useState(true);

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-accent-dark flex">
            {/* Sidebar (Partial/Condensed for Rider) */}
            <aside className="w-20 border-r-4 border-accent-dark bg-white h-screen sticky top-0 flex flex-col items-center py-10 px-4">
                <div className="mb-12">
                    <div className="bg-primary p-2 rounded-xl border-2 border-accent-dark shadow-chunky-sm">
                        <span className="material-symbols-outlined text-accent-dark font-black text-2xl">moped</span>
                    </div>
                </div>
                <nav className="flex-1 w-full space-y-4">
                    <div className="w-full flex items-center justify-center p-3 bg-primary border-4 border-accent-dark rounded-2xl shadow-chunky-sm cursor-pointer">
                        <span className="material-symbols-outlined font-black">sports_motorsports</span>
                    </div>
                    <div className="w-full flex items-center justify-center p-3 hover:bg-slate-100 rounded-2xl cursor-pointer transition-colors">
                        <span className="material-symbols-outlined font-black opacity-40">history</span>
                    </div>
                    <div className="w-full flex items-center justify-center p-3 hover:bg-slate-100 rounded-2xl cursor-pointer transition-colors">
                        <span className="material-symbols-outlined font-black opacity-40">account_balance_wallet</span>
                    </div>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 lg:p-12 overflow-y-auto pt-28">
                <div className="max-w-5xl mx-auto">
                    <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                        <div className="flex items-center gap-6">
                            <div className="size-24 rounded-3xl border-4 border-accent-dark overflow-hidden shadow-chunky group">
                                <img
                                    alt="Rider Avatar"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4"
                                />
                            </div>
                            <div>
                                <h1 className="text-4xl font-black uppercase italic tracking-tighter">Hero Marcus 🏍️</h1>
                                <p className="text-lg font-bold text-accent-dark/40 italic">Level 8 Rider • ★ 4.9 Rating</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOnline(!isOnline)}
                            className={`px-8 py-4 rounded-2xl border-4 border-accent-dark shadow-chunky font-black text-xl flex items-center gap-3 transition-all active:translate-x-1 active:translate-y-1 active:shadow-none uppercase italic ${isOnline ? 'bg-primary text-accent-dark' : 'bg-slate-200 text-slate-400'
                                }`}
                        >
                            <div className={`size-3 rounded-full ${isOnline ? 'bg-green-600 animate-pulse' : 'bg-slate-400'}`}></div>
                            {isOnline ? 'On Duty' : 'Off Duty'}
                        </button>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Earnings Card */}
                        <section className="bg-primary border-4 border-accent-dark rounded-[2.5rem] p-8 shadow-chunky relative overflow-hidden group">
                            <div className="relative z-10">
                                <p className="text-xs font-black uppercase tracking-widest mb-2">Today's Earnings</p>
                                <h2 className="text-6xl font-black mb-6 uppercase italic">$148.20</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white border-2 border-accent-dark rounded-2xl p-4 shadow-chunky-sm">
                                        <p className="text-[10px] font-black uppercase opacity-40">Orders</p>
                                        <p className="text-2xl font-black italic">12</p>
                                    </div>
                                    <div className="bg-white border-2 border-accent-dark rounded-2xl p-4 shadow-chunky-sm">
                                        <p className="text-[10px] font-black uppercase opacity-40">Tips</p>
                                        <p className="text-2xl font-black italic">$32.00</p>
                                    </div>
                                </div>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-white/20 rotate-12">payments</span>
                        </section>

                        {/* Active Delivery */}
                        <section className="bg-white border-4 border-accent-dark rounded-[2.5rem] p-8 shadow-chunky">
                            <div className="flex items-center justify-between mb-8">
                                <span className="bg-accent-dark text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-white">Active Delivery</span>
                                <span className="text-xs font-bold text-accent-dark/40 uppercase">8m away</span>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="size-4 rounded-full border-2 border-accent-dark bg-primary"></div>
                                        <div className="w-1 flex-1 border-r-4 border-dotted border-accent-dark/20 h-8"></div>
                                        <div className="size-4 rounded-full border-2 border-accent-dark"></div>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-[10px] font-black text-accent-dark/40 uppercase">Pickup from</p>
                                            <h4 className="font-black text-xl uppercase italic">Burger Hero HQ</h4>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-accent-dark/40 uppercase">Drop off at</p>
                                            <h4 className="font-black text-xl uppercase italic">123 Hero Avenue</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <button className="flex-1 bg-accent-dark text-white py-4 rounded-2xl font-black border-4 border-accent-dark shadow-chunky-sm hover:translate-y-1 hover:shadow-none transition-all uppercase italic">
                                        Navigate
                                    </button>
                                    <button className="size-16 rounded-2xl border-4 border-accent-dark flex items-center justify-center hover:bg-primary transition-colors shadow-chunky-sm active:translate-y-1 active:shadow-none">
                                        <span className="material-symbols-outlined font-black">call</span>
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Performance Grid */}
                        <section className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white border-4 border-accent-dark rounded-3xl p-6 shadow-chunky flex flex-col justify-center items-center text-center">
                                <p className="text-[10px] font-black text-accent-dark/40 uppercase tracking-widest mb-2">Acceptance</p>
                                <h3 className="text-4xl font-black italic">98%</h3>
                            </div>
                            <div className="bg-white border-4 border-accent-dark rounded-3xl p-6 shadow-chunky flex flex-col justify-center items-center text-center">
                                <p className="text-[10px] font-black text-accent-dark/40 uppercase tracking-widest mb-2">Rating</p>
                                <h3 className="text-4xl font-black italic">★ 4.9</h3>
                            </div>
                            <div className="bg-white border-4 border-accent-dark rounded-3xl p-6 shadow-chunky flex flex-col justify-center items-center text-center">
                                <p className="text-[10px] font-black text-accent-dark/40 uppercase tracking-widest mb-2">On Time</p>
                                <h3 className="text-4xl font-black italic">96%</h3>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RiderDashboard;
