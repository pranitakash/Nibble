import React from 'react';

const CheckoutPage: React.FC = () => {
    const orderItems = [
        { name: 'Mighty Hero Burger', price: 14.50, qty: 1 },
        { name: 'Golden Fries (L)', price: 4.99, qty: 1 },
        { name: 'Vanilla Shake', price: 5.50, qty: 1 },
    ];

    return (
        <div className="bg-background-light text-accent-dark antialiased min-h-screen">
            {/* Yellow Accent Strip */}
            <div className="fixed left-10 top-0 bottom-0 w-3 bg-[#f9f506] -z-10 hidden lg:block"></div>

            <main className="max-w-7xl mx-auto pt-32 pb-24 px-6 lg:px-12">
                <div className="mb-12">
                    <h1 className="text-4xl lg:text-6xl font-black text-accent-dark uppercase italic">Review & Pay</h1>
                    <p className="text-lg font-medium text-accent-dark/60 mt-2 italic">Almost there, hero! Your feast is just a click away.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Delivery Address Section */}
                        <section className="bg-white border-4 border-accent-dark rounded-3xl p-8 shadow-chunky">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary border-2 border-accent-dark flex items-center justify-center shadow-chunky-sm">
                                        <span className="material-symbols-outlined font-bold">location_on</span>
                                    </div>
                                    <h2 className="text-2xl font-black uppercase tracking-tight">Delivery Address</h2>
                                </div>
                                <button className="text-sm font-black underline hover:text-primary transition-colors uppercase">Change</button>
                            </div>
                            <div className="bg-background-light border-2 border-accent-dark/10 rounded-2xl p-6 relative overflow-hidden group hover:border-accent-dark transition-all">
                                <p className="font-black text-lg mb-1 uppercase uppercase underline decoration-primary decoration-4 underline-offset-4 w-fit">Home</p>
                                <p className="text-accent-dark/70 font-medium">123 Hero Avenue, Apartment 4B</p>
                                <p className="text-accent-dark/70 font-medium">Brooklyn, NY 11201</p>
                                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-green-600 uppercase">
                                    <span className="material-symbols-outlined text-sm">timer</span>
                                    Estimated Arrival: 25-35 mins
                                </div>
                            </div>
                        </section>

                        {/* Payment Method Section */}
                        <section className="bg-white border-4 border-accent-dark rounded-3xl p-8 shadow-chunky">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-primary border-2 border-accent-dark flex items-center justify-center shadow-chunky-sm">
                                    <span className="material-symbols-outlined font-bold">payments</span>
                                </div>
                                <h2 className="text-2xl font-black uppercase tracking-tight">Payment Method</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="relative group cursor-pointer border-4 border-accent-dark rounded-2xl p-4 bg-primary shadow-chunky-sm transition-transform hover:-translate-y-1">
                                    <div className="flex flex-col h-full justify-between">
                                        <span className="material-symbols-outlined text-4xl mb-4">credit_card</span>
                                        <div>
                                            <p className="font-black text-sm uppercase">Credit Card</p>
                                            <p className="text-[10px] font-bold opacity-60">**** 4242</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="material-symbols-outlined text-accent-dark">check_circle</span>
                                    </div>
                                </div>
                                <div className="relative group cursor-pointer border-2 border-accent-dark/10 rounded-2xl p-4 hover:border-accent-dark hover:shadow-chunky-sm transition-all hover:-translate-y-1">
                                    <div className="flex flex-col h-full justify-between">
                                        <span className="material-symbols-outlined text-4xl mb-4 opacity-40 group-hover:opacity-100">account_balance_wallet</span>
                                        <div>
                                            <p className="font-black text-sm text-accent-dark/40 group-hover:text-accent-dark uppercase">Digital Wallet</p>
                                            <p className="text-[10px] font-bold opacity-0 group-hover:opacity-40 uppercase">Quick Pay</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group cursor-pointer border-2 border-accent-dark/10 rounded-2xl p-4 hover:border-accent-dark hover:shadow-chunky-sm transition-all hover:-translate-y-1">
                                    <div className="flex flex-col h-full justify-between">
                                        <span className="material-symbols-outlined text-4xl mb-4 opacity-40 group-hover:opacity-100">payments</span>
                                        <div>
                                            <p className="font-black text-sm text-accent-dark/40 group-hover:text-accent-dark uppercase">Cash</p>
                                            <p className="text-[10px] font-bold opacity-0 group-hover:opacity-40 uppercase">Pay at door</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        {/* Order Summary Card */}
                        <section className="bg-white border-4 border-accent-dark rounded-3xl p-8 shadow-chunky sticky top-32">
                            <h2 className="text-2xl font-black uppercase mb-6 flex items-center justify-between gap-2 tracking-tight">
                                Order Summary
                                <span className="bg-accent-dark text-primary text-[10px] px-2 py-1 rounded-full uppercase">3 Items</span>
                            </h2>
                            <div className="space-y-4 mb-8">
                                {orderItems.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center group">
                                        <div className="flex items-center gap-3">
                                            <span className="font-black text-accent-dark">{item.qty}×</span>
                                            <span className="font-bold text-accent-dark/70 group-hover:text-accent-dark transition-colors">{item.name}</span>
                                        </div>
                                        <span className="font-black">${item.price.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t-2 border-dashed border-accent-dark/20 pt-6 space-y-3">
                                <div className="flex justify-between text-sm font-bold text-accent-dark/60 uppercase">
                                    <span>Subtotal</span>
                                    <span>$24.99</span>
                                </div>
                                <div className="flex justify-between text-sm font-bold text-accent-dark/60 uppercase">
                                    <span>Delivery Fee</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="flex justify-between text-sm font-bold text-accent-dark/60 uppercase">
                                    <span>Service Fee</span>
                                    <span>$2.50</span>
                                </div>
                                <div className="flex justify-between items-center text-2xl font-black text-accent-dark pt-2 uppercase">
                                    <span>Total</span>
                                    <span className="text-3xl">${(24.99 + 2.50).toFixed(2)}</span>
                                </div>
                            </div>
                            <button className="w-full mt-10 bg-primary border-4 border-accent-dark py-6 rounded-2xl text-2xl font-black shadow-chunky hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95 uppercase">
                                PLACE ORDER
                            </button>
                            <p className="text-center text-[10px] font-bold text-accent-dark/40 mt-4 px-4 uppercase tracking-wider">
                                By placing your order you agree to Nibble's Terms of Service
                            </p>
                        </section>

                        {/* Mascot Section */}
                        <div className="relative flex items-end justify-center pt-12 pb-4">
                            <div className="relative">
                                <div className="absolute -top-16 -right-12 bg-white border-2 border-accent-dark rounded-2xl px-4 py-2 shadow-chunky-sm rotate-6 z-20">
                                    <p className="font-black text-sm whitespace-nowrap uppercase">Almost there, hero!</p>
                                    <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-b-2 border-r-2 border-accent-dark rotate-45"></div>
                                </div>
                                <div className="w-32 h-32 bg-primary rounded-full border-4 border-accent-dark shadow-chunky-sm flex items-center justify-center overflow-hidden">
                                    <img
                                        alt="Playful Mascot"
                                        className="w-24 h-24 object-contain"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTvQpV9EXMZPoDOu076LqQ6zQtFRYxuO8IEd0JYqDsrmcibI--k7qhUi4zpY_nKhFEde8j8wDBHNiNK9U6zEtI7I7G_Cd_ccxBq94ifV-84V5T4bD_Vhy8DcJVX6vL1kP5MXQoz9ghJ3fRoHGy8ACOWybr3zMsuCUEzELZJOEm3vPfpsh4XNMKzcyrt8HP8sVktJ6Jk2tKRt7Nb6UrhcyZHzSNhTyqWCmCyjtvCiRfwdgeq32FFPNmH43iaGQBMysFPqzm7_H5Dp4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CheckoutPage;
