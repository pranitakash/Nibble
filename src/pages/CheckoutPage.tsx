import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';




const savedAddresses = [
    {
        id: 1,
        label: 'Home',
        address: '123 Hero Avenue, Apartment 4B',
        city: 'Brooklyn, NY 11201',
        eta: '25-35 mins',
    },
    {
        id: 2,
        label: 'Work',
        address: '456 Liberty Street, Floor 12',
        city: 'Manhattan, NY 10005',
        eta: '35-50 mins',
    },
    {
        id: 3,
        label: 'Gym',
        address: '789 Fitness Blvd',
        city: 'Queens, NY 11101',
        eta: '20-30 mins',
    },
];

const CheckoutPage: React.FC = () => {
    const [selectedPayment, setSelectedPayment] = useState<string>('credit');
    const [showAddressPopup, setShowAddressPopup] = useState(false);
    const [selectedAddressId, setSelectedAddressId] = useState<number>(1);
    const [pendingAddressId, setPendingAddressId] = useState<number>(1);

    const activeAddress = savedAddresses.find(a => a.id === selectedAddressId)!;

    const orderItems = [
        { name: 'Mighty Hero Burger', price: 14.50, qty: 1 },
        { name: 'Golden Fries (L)', price: 4.99, qty: 1 },
        { name: 'Vanilla Shake', price: 5.50, qty: 1 },
    ];

    const paymentMethods = [
        { id: 'credit', label: 'Credit Card', sub: '**** 4242', icon: 'credit_card' },
        { id: 'wallet', label: 'Digital Wallet', sub: 'Quick Pay', icon: 'account_balance_wallet' },
        { id: 'cash', label: 'Cash', sub: 'Pay at door', icon: 'payments' },
    ];

    const handleConfirmAddress = () => {
        setSelectedAddressId(pendingAddressId);
        setShowAddressPopup(false);
    };

    return (
        <div className="bg-background-light text-accent-dark antialiased min-h-screen">
            {/* Yellow Accent Strip */}
            <div className="fixed left-10 top-0 bottom-0 w-3 bg-[#f9f506] -z-10 hidden lg:block"></div>

            <main className="max-w-7xl mx-auto pt-20 pb-24 px-6 lg:px-12">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl lg:text-6xl font-black text-accent-dark uppercase italic">Review & Pay</h1>
                    <p className="text-lg font-medium text-accent-dark/60 mt-2 italic">Your feast is just a click away.</p>
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
                                <button
                                    onClick={() => {
                                        setPendingAddressId(selectedAddressId);
                                        setShowAddressPopup(true);
                                    }}
                                    className="text-sm font-black underline hover:text-primary transition-colors uppercase"
                                >
                                    Change
                                </button>
                            </div>
                            <div className="bg-background-light border-2 border-accent-dark/10 rounded-2xl p-6 relative overflow-hidden group hover:border-accent-dark transition-all">
                                <p className="font-black text-lg mb-1 uppercase underline decoration-primary decoration-4 underline-offset-4 w-fit">{activeAddress.label}</p>
                                <p className="text-accent-dark/70 font-medium">{activeAddress.address}</p>
                                <p className="text-accent-dark/70 font-medium">{activeAddress.city}</p>
                                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-green-600 uppercase">
                                    <span className="material-symbols-outlined text-sm">timer</span>
                                    Estimated Arrival: {activeAddress.eta}
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
                                {paymentMethods.map((method) => {
                                    const isSelected = selectedPayment === method.id;
                                    return (
                                        <button
                                            key={method.id}
                                            onClick={() => setSelectedPayment(method.id)}
                                            className={`relative text-left cursor-pointer rounded-2xl p-4 transition-all hover:-translate-y-1 ${isSelected
                                                ? 'border-4 border-accent-dark bg-primary shadow-chunky-sm'
                                                : 'border-2 border-accent-dark/10 bg-white hover:border-accent-dark hover:shadow-chunky-sm'
                                                }`}
                                        >
                                            <div className="flex flex-col h-full justify-between min-h-[80px]">
                                                <span className={`material-symbols-outlined text-4xl mb-3 ${isSelected ? 'text-accent-dark' : 'opacity-40'}`}>{method.icon}</span>
                                                <div>
                                                    <p className={`font-black text-sm uppercase ${!isSelected && 'text-accent-dark/40'}`}>{method.label}</p>
                                                    <p className={`text-[10px] font-bold ${isSelected ? 'opacity-60' : 'opacity-0'}`}>{method.sub}</p>
                                                </div>
                                            </div>
                                            {isSelected && (
                                                <div className="absolute top-3 right-3">
                                                    <span className="material-symbols-outlined text-accent-dark">check_circle</span>
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </section>
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-4">
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
                            <a
                                href="/explore"
                                className="mt-4 w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-accent-dark/20 text-sm font-black text-accent-dark/50 hover:border-accent-dark hover:text-accent-dark hover:bg-accent-dark/5 transition-all uppercase"
                            >
                                <span className="material-symbols-outlined text-base">arrow_back</span>
                                Cancel & Explore
                            </a>
                        </section>
                    </div>
                </div>
            </main>

            <AnimatePresence>
                {showAddressPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-accent-dark/40 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setShowAddressPopup(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white border-4 border-accent-dark rounded-3xl p-6 max-w-md w-full shadow-chunky relative max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close */}
                            <button
                                onClick={() => setShowAddressPopup(false)}
                                className="absolute top-5 right-5 text-accent-dark/30 hover:text-accent-dark transition-colors"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>

                            <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-1">Choose Address</h3>
                            <p className="text-xs font-bold text-accent-dark/50 mb-5 uppercase">Select a saved address or add a new one</p>

                            {/* Scrollable address list */}
                            <div className="space-y-3 mb-4 overflow-y-auto flex-1 pr-1">
                                {savedAddresses.map((addr) => {
                                    const isPending = pendingAddressId === addr.id;
                                    return (
                                        <button
                                            key={addr.id}
                                            onClick={() => setPendingAddressId(addr.id)}
                                            className={`w-full text-left p-4 rounded-xl border-2 transition-all hover:-translate-y-0.5 ${isPending
                                                ? 'border-accent-dark bg-primary shadow-chunky-sm'
                                                : 'border-accent-dark/10 bg-background-light hover:border-accent-dark'
                                                }`}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <p className={`font-black text-xs uppercase underline decoration-primary decoration-4 underline-offset-2 w-fit mb-0.5 ${!isPending && 'decoration-accent-dark/20'}`}>{addr.label}</p>
                                                    <p className="text-xs text-accent-dark/70 font-medium">{addr.address}</p>
                                                    <p className="text-xs text-accent-dark/70 font-medium">{addr.city}</p>
                                                    <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-bold text-green-600 uppercase">
                                                        <span className="material-symbols-outlined text-[12px]">timer</span>
                                                        ETA: {addr.eta}
                                                    </div>
                                                </div>
                                                {isPending && (
                                                    <span className="material-symbols-outlined text-accent-dark mt-0.5">check_circle</span>
                                                )}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Add New Address */}
                            <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-dashed border-accent-dark/20 hover:border-accent-dark hover:bg-primary/10 transition-all font-black text-xs uppercase mb-5 text-accent-dark/50 hover:text-accent-dark">
                                <span className="material-symbols-outlined text-base">add_circle</span>
                                Add New Address
                            </button>

                            <button
                                onClick={handleConfirmAddress}
                                className="w-full bg-primary border-4 border-accent-dark py-4 rounded-2xl text-lg font-black shadow-chunky-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95 uppercase"
                            >
                                Confirm Address
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CheckoutPage;
