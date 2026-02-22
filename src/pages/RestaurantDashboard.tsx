import React from 'react';

const RestaurantDashboard: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-accent-dark flex">
            {/* Sidebar */}
            <aside className="w-20 lg:w-72 border-r-4 border-accent-dark bg-white h-screen sticky top-0 flex flex-col items-center lg:items-start py-10 px-4">
                <div className="mb-12">
                    <div className="bg-primary p-2 rounded-xl border-2 border-accent-dark shadow-chunky-sm">
                        <span className="material-symbols-outlined text-accent-dark font-black text-3xl">fastfood</span>
                    </div>
                </div>
                <nav className="flex-1 w-full space-y-2">
                    <a className="flex items-center gap-3 p-3 font-black bg-primary border-2 border-accent-dark rounded-xl shadow-chunky-sm transition-all lg:px-6" href="#">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="hidden lg:block text-sm uppercase">Dashboard</span>
                    </a>
                    <a className="flex items-center gap-3 p-3 font-bold text-accent-dark/40 hover:bg-slate-50 hover:text-accent-dark rounded-xl transition-all lg:px-6" href="#">
                        <span className="material-symbols-outlined">shopping_bag</span>
                        <span className="hidden lg:block text-sm uppercase">Orders</span>
                    </a>
                    <a className="flex items-center gap-3 p-3 font-bold text-accent-dark/40 hover:bg-slate-50 hover:text-accent-dark rounded-xl transition-all lg:px-6" href="#">
                        <span className="material-symbols-outlined">restaurant_menu</span>
                        <span className="hidden lg:block text-sm uppercase">Menu</span>
                    </a>
                    <a className="flex items-center gap-3 p-3 font-bold text-accent-dark/40 hover:bg-slate-50 hover:text-accent-dark rounded-xl transition-all lg:px-6" href="#">
                        <span className="material-symbols-outlined">analytics</span>
                        <span className="hidden lg:block text-sm uppercase">Analytics</span>
                    </a>
                </nav>
                <div className="mt-auto w-full space-y-4">
                    <div className="bg-green-100 border-2 border-green-600 p-2 rounded-xl flex items-center justify-center gap-2 lg:px-4">
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                        <span className="hidden lg:block text-[10px] font-black text-green-600 uppercase">Live</span>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 lg:p-12 overflow-y-auto pt-28">
                <div className="max-w-7xl mx-auto">
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl font-black mb-2 uppercase italic tracking-tighter decoration-primary decoration-8 underline underline-offset-8">Welcome Back, Big Kahuna Burger! 🍔</h1>
                            <p className="text-lg font-bold text-accent-dark/40 italic">You have 8 active orders and 1 high-priority prep.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-white border-2 border-accent-dark p-3 rounded-xl shadow-chunky-sm hover:translate-y-1 hover:shadow-none transition-all">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <button className="bg-white border-2 border-accent-dark p-3 rounded-xl shadow-chunky-sm hover:translate-y-1 hover:shadow-none transition-all">
                                <span className="material-symbols-outlined">settings</span>
                            </button>
                        </div>
                    </header>

                    {/* Performance Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white border-4 border-accent-dark rounded-3xl p-6 shadow-chunky">
                            <p className="text-xs font-black text-accent-dark/40 uppercase mb-2 tracking-widest">Today's Sales</p>
                            <h3 className="text-4xl font-black mb-2">$1,240.50</h3>
                            <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                +12% vs yesterday
                            </div>
                        </div>
                        <div className="bg-white border-4 border-accent-dark rounded-3xl p-6 shadow-chunky">
                            <p className="text-xs font-black text-accent-dark/40 uppercase mb-2 tracking-widest">Active Orders</p>
                            <h3 className="text-4xl font-black mb-2 italic">8</h3>
                            <p className="text-xs font-bold text-accent-dark/60 uppercase">Average prep time: 14m</p>
                        </div>
                        <div className="bg-white border-4 border-accent-dark rounded-3xl p-6 shadow-chunky">
                            <p className="text-xs font-black text-accent-dark/40 uppercase mb-2 tracking-widest">Store Rating</p>
                            <h3 className="text-4xl font-black mb-2">★ 4.9</h3>
                            <p className="text-xs font-bold text-accent-dark/60 uppercase">24 new reviews today</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Active Orders List */}
                        <section className="lg:col-span-2 bg-white border-4 border-accent-dark rounded-3xl p-8 shadow-chunky">
                            <h3 className="text-2xl font-black mb-6 uppercase flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">pending_actions</span>
                                Active Orders
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b-4 border-accent-dark">
                                            <th className="pb-4 font-black uppercase text-xs">Order</th>
                                            <th className="pb-4 font-black uppercase text-xs">Details</th>
                                            <th className="pb-4 font-black uppercase text-xs">Status</th>
                                            <th className="pb-4 font-black uppercase text-xs text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y-2 divide-slate-100">
                                        {[
                                            { id: '#8829', items: '2x Hero Burger, 1x Fries', status: 'Preparing', time: '5m' },
                                            { id: '#8830', items: '1x Veggie Wrap, 1x Coke', status: 'Ready', time: 'Now' },
                                            { id: '#8831', items: '3x Smash Burger', status: 'Incoming', time: '12m' },
                                        ].map((order) => (
                                            <tr key={order.id} className="group">
                                                <td className="py-6 font-black text-sm">{order.id}</td>
                                                <td className="py-6">
                                                    <p className="font-bold text-xs uppercase text-accent-dark/70">{order.items}</p>
                                                    <p className="text-[10px] font-bold text-accent-dark/30 mt-1 italic uppercase">ETA: {order.time}</p>
                                                </td>
                                                <td className="py-6">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black border-2 border-accent-dark uppercase ${order.status === 'Ready' ? 'bg-green-100' :
                                                            order.status === 'Preparing' ? 'bg-primary' : 'bg-slate-100'
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="py-6 text-right">
                                                    <button className="bg-accent-dark text-white px-4 py-2 rounded-xl font-black text-xs hover:bg-primary hover:text-accent-dark transition-all hover:translate-y-1 uppercase italic">
                                                        {order.status === 'Ready' ? 'Hand Over' : 'Mark Ready'}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Recent Promotions */}
                        <section className="bg-white border-4 border-accent-dark rounded-3xl p-8 shadow-chunky h-fit lg:sticky lg:top-32">
                            <h3 className="text-2xl font-black mb-6 uppercase flex items-center gap-2 italic">
                                <span className="material-symbols-outlined text-red-500">campaign</span>
                                Promotions
                            </h3>
                            <div className="space-y-4 mb-8">
                                <div className="border-2 border-dashed border-accent-dark/20 p-4 rounded-2xl relative group hover:border-accent-dark transition-all bg-accent-cream">
                                    <p className="text-xs font-black uppercase mb-1 underline decoration-primary decoration-2">Hero Happy Hour 🍻</p>
                                    <p className="text-[10px] font-bold text-accent-dark/60">Active: 4 PM - 7 PM</p>
                                    <div className="absolute top-4 right-4 text-green-600 flex items-center gap-1">
                                        <div className="size-2 bg-green-600 rounded-full"></div>
                                        <span className="text-[8px] font-black uppercase">Live</span>
                                    </div>
                                </div>
                                <div className="border-2 border-accent-dark/10 p-4 rounded-2xl group hover:border-accent-dark transition-all">
                                    <p className="text-xs font-black uppercase mb-1">Weekend Smash 🍔</p>
                                    <p className="text-[10px] font-bold text-accent-dark/40 italic">Upcoming: Sat, 10 AM</p>
                                </div>
                            </div>
                            <button className="w-full bg-primary border-2 border-accent-dark py-4 rounded-2xl font-black uppercase text-sm shadow-chunky-sm hover:translate-y-1 hover:shadow-none transition-all">
                                Create Promotion
                            </button>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RestaurantDashboard;
