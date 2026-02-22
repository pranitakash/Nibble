import React from 'react';

const TrackingPage: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen overflow-hidden relative">
            {/* Custom Map Grid Background */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800"
                style={{
                    backgroundImage: 'radial-gradient(#1c1c0d 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    opacity: 0.1
                }}>

                {/* Visual "Paths" on the map */}
                <div className="absolute w-[80%] h-1 bg-slate-900/10 rotate-12"></div>
                <div className="absolute h-[80%] w-1 bg-slate-900/10 -rotate-12"></div>

                {/* Map Markers */}
                <div className="absolute top-[40%] left-[45%] flex flex-col items-center gap-2">
                    <div className="bg-white p-3 border-2 border-slate-900 rounded-2xl shadow-chunky-sm">
                        <span className="material-symbols-outlined text-3xl font-black">restaurant</span>
                    </div>
                    <span className="bg-slate-900 text-white text-[10px] px-2 py-1 rounded-full font-black uppercase">Restaurant</span>
                </div>

                <div className="absolute top-[55%] left-[52%] z-10">
                    <div className="bg-primary p-2 border-2 border-slate-900 rounded-full shadow-chunky-sm animate-bounce">
                        <span className="material-symbols-outlined text-3xl font-black">moped</span>
                    </div>
                </div>

                <div className="absolute top-[65%] left-[60%] flex flex-col items-center gap-2">
                    <div className="bg-white p-3 border-2 border-slate-900 rounded-2xl shadow-chunky-sm">
                        <span className="material-symbols-outlined text-3xl font-black">home</span>
                    </div>
                    <span className="bg-slate-900 text-white text-[10px] px-2 py-1 rounded-full font-black uppercase">You</span>
                </div>
            </div>

            <main className="relative z-20 max-w-7xl mx-auto pt-32 pb-24 px-6 lg:px-12 flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Column: Progress Info */}
                <div className="w-full lg:w-[450px]">
                    <div className="bg-white dark:bg-slate-800 border-4 border-slate-900 rounded-2xl shadow-chunky overflow-hidden">
                        <div className="bg-slate-900 p-6 flex items-center justify-between">
                            <span className="text-white font-black uppercase text-sm tracking-widest">Order #FH-8829</span>
                            <div className="bg-primary px-3 py-1 rounded-full border-2 border-white text-xs font-black text-slate-900 italic">
                                EST: 12 MIN
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center gap-6 mb-8 group">
                                <div className="w-20 h-20 rounded-2xl border-4 border-slate-900 overflow-hidden shadow-chunky-sm group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                                    <img
                                        alt="Rider Portrait"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-black leading-tight text-slate-900 dark:text-white uppercase italic">Rider is picking up your food!</h3>
                                    <p className="text-slate-500 font-bold uppercase tracking-tighter text-sm mt-1">Hero: Marcus J.</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="bg-primary px-3 py-1 rounded-full border-2 border-slate-900 text-[10px] font-black uppercase">Pickup</span>
                                        <span className="font-black text-xl italic">65%</span>
                                    </div>
                                    <div className="w-full h-6 bg-slate-100 dark:bg-slate-700 border-4 border-slate-900 rounded-full overflow-hidden shadow-chunky-sm">
                                        <div className="h-full bg-primary" style={{ width: '65%' }}></div>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 border-t-2 border-dashed border-slate-200 dark:border-slate-700">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-primary border-2 border-slate-900 flex items-center justify-center shadow-chunky-sm">
                                            <span className="material-symbols-outlined text-sm font-black">check</span>
                                        </div>
                                        <span className="font-black text-sm uppercase opacity-40">Order Confirmed</span>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-primary border-2 border-slate-900 flex items-center justify-center shadow-chunky-sm">
                                            <span className="material-symbols-outlined text-sm font-black">check</span>
                                        </div>
                                        <span className="font-black text-sm uppercase opacity-40">Food is being prepared</span>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center shadow-chunky-sm animate-pulse scale-110">
                                            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                                        </div>
                                        <span className="font-black text-sm uppercase underline decoration-primary decoration-4 underline-offset-4">Rider at restaurant</span>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-lg border-2 border-slate-900 shadow-chunky flex items-center justify-center gap-3 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase italic">
                                        <span className="material-symbols-outlined font-black">forum</span>
                                        Contact Rider
                                    </button>
                                    <button className="w-full mt-4 text-[10px] font-black underline hover:text-primary transition-colors uppercase tracking-widest">
                                        Need help with your order?
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Mini Summary */}
                <div className="hidden lg:block w-72">
                    <div className="bg-white dark:bg-slate-800 border-4 border-slate-900 rounded-3xl p-6 shadow-chunky">
                        <h3 className="font-black text-lg mb-6 uppercase tracking-tight underline decoration-primary decoration-4 underline-offset-4 w-fit">Order Summary</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                                <span className="text-xs font-black uppercase">Double Hero Burger</span>
                                <span className="text-xs font-black italic">x1</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2">
                                <span className="text-xs font-black uppercase text-slate-400">Super Fries (L)</span>
                                <span className="text-xs font-black text-slate-400 italic">x1</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2">
                                <span className="text-xs font-black uppercase text-slate-400">Hero Soda</span>
                                <span className="text-xs font-black text-slate-400 italic">x2</span>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t-4 border-slate-900 flex justify-between items-center">
                            <span className="font-black uppercase text-sm tracking-tighter">Total</span>
                            <span className="font-black text-2xl italic">$34.50</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TrackingPage;
