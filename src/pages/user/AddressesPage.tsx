import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import DashboardNavbar from '../../components/layout/DashboardNavbar';
import DashboardHeader from '../../components/layout/DashboardHeader';

const savedAddresses = [
    { id: 1, label: 'Home', icon: 'home', address: '123 Hero Avenue, Apartment 4B', city: 'Brooklyn, NY 11201', eta: '25-35 mins' },
    { id: 2, label: 'Work', icon: 'work', address: '456 Liberty Street, Floor 12', city: 'Manhattan, NY 10005', eta: '35-50 mins' },
    { id: 3, label: 'Gym', icon: 'fitness_center', address: '789 Fitness Blvd', city: 'Queens, NY 11101', eta: '20-30 mins' },
];

const AddressesPage: React.FC = () => {
    const navItems = [
        { icon: 'receipt_long', label: 'My Orders', href: '/user/orders' },
        { icon: 'favorite', label: 'Favorite Spots', href: '/user/favorites' },
        { icon: 'location_on', label: 'Addresses', href: '/user/addresses', active: true },
    ];

    const logoutButton = (
        <Link to="/">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary border-2 border-accent-dark shadow-chunky-sm px-8 py-3 rounded-full text-xs font-black transition-all uppercase leading-none"
            >
                Logout
            </motion.button>
        </Link>
    );

    const [addresses, setAddresses] = useState(savedAddresses);
    const [showAddForm, setShowAddForm] = useState(false);
    const [defaultId, setDefaultId] = useState(1);
    const [newAddr, setNewAddr] = useState({ label: '', address: '', city: '' });

    const handleAddAddress = () => {
        if (!newAddr.label || !newAddr.address || !newAddr.city) return;
        setAddresses(prev => [...prev, { id: Date.now(), label: newAddr.label, icon: 'location_on', address: newAddr.address, city: newAddr.city, eta: '30-45 mins' }]);
        setNewAddr({ label: '', address: '', city: '' });
        setShowAddForm(false);
    };

    return (
        <div className="bg-background-light text-accent-dark antialiased min-h-screen font-display flex flex-col">
            <DashboardNavbar items={navItems} rightSection={logoutButton} profileName="Nibbler" />

            <main className="flex-1 p-6 lg:p-10 pt-32 lg:pt-32 overflow-y-auto">
                <DashboardHeader title="Manage Addresses" subtitle="Where should we deliver?" icon="location_on" />

                <div className="max-w-4xl mx-auto space-y-6">
                    {addresses.map((addr, idx) => (
                        <motion.div
                            key={addr.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className={`bg-white border-4 rounded-[2rem] p-8 shadow-chunky transition-all relative group ${defaultId === addr.id ? 'border-accent-dark' : 'border-accent-dark/20 hover:border-accent-dark'}`}
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div className="flex items-start gap-6">
                                    <div className={`p-4 rounded-2xl border-2 border-accent-dark shrink-0 ${defaultId === addr.id ? 'bg-primary' : 'bg-accent-dark/5'}`}>
                                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{addr.icon}</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-2xl font-black uppercase tracking-tighter italic">{addr.label}</h3>
                                            {defaultId === addr.id && (
                                                <span className="bg-primary border-2 border-accent-dark px-3 py-0.5 rounded-full text-[10px] font-black uppercase shadow-chunky-sm">Default</span>
                                            )}
                                        </div>
                                        <p className="font-bold text-accent-dark/70">{addr.address}</p>
                                        <p className="font-bold text-accent-dark/50 text-sm">{addr.city}</p>
                                        <div className="mt-3 flex items-center gap-2 text-xs font-black text-green-600 uppercase">
                                            <span className="material-symbols-outlined text-sm">timer</span>
                                            Delivery ETA: {addr.eta}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 shrink-0">
                                    {defaultId !== addr.id && (
                                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                            onClick={() => setDefaultId(addr.id)}
                                            className="text-[10px] font-black uppercase border-2 border-accent-dark px-4 py-2 rounded-full hover:bg-primary transition-colors">
                                            Set Default
                                        </motion.button>
                                    )}
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                        onClick={() => setAddresses(prev => prev.filter(a => a.id !== addr.id))}
                                        className="text-[10px] font-black uppercase border-2 border-red-400 text-red-500 px-4 py-2 rounded-full hover:bg-red-50 transition-colors">
                                        Remove
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <motion.button whileHover={{ scale: 1.01, y: -4 }} whileTap={{ scale: 0.99 }}
                        onClick={() => setShowAddForm(true)}
                        className="w-full bg-white border-4 border-dashed border-accent-dark/30 hover:border-accent-dark hover:shadow-chunky rounded-[2rem] p-8 flex items-center justify-center gap-4 transition-all group">
                        <div className="w-14 h-14 bg-primary rounded-2xl border-2 border-accent-dark flex items-center justify-center shadow-chunky-sm group-hover:rotate-6 transition-transform">
                            <span className="material-symbols-outlined text-2xl font-black">add_location_alt</span>
                        </div>
                        <span className="text-xl font-black uppercase tracking-tighter italic text-accent-dark/50 group-hover:text-accent-dark transition-colors">Add New Address</span>
                    </motion.button>
                </div>
            </main>

            <AnimatePresence>
                {showAddForm && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-accent-dark/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        onClick={(e) => e.target === e.currentTarget && setShowAddForm(false)}>
                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white border-4 border-accent-dark rounded-[2.5rem] p-10 shadow-chunky-lg w-full max-w-lg">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-black uppercase italic tracking-tighter">New Address</h2>
                                <button onClick={() => setShowAddForm(false)} className="material-symbols-outlined text-2xl hover:text-primary transition-colors">close</button>
                            </div>
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest mb-2 text-accent-dark/50">Label (e.g. Home)</label>
                                    <input value={newAddr.label} onChange={e => setNewAddr(p => ({ ...p, label: e.target.value }))}
                                        placeholder="Home, Work, Gym…"
                                        className="w-full border-2 border-accent-dark rounded-2xl px-5 py-4 font-bold focus:outline-none focus:border-primary focus:shadow-chunky-sm transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest mb-2 text-accent-dark/50">Street Address</label>
                                    <input value={newAddr.address} onChange={e => setNewAddr(p => ({ ...p, address: e.target.value }))}
                                        placeholder="123 Main St, Apt 2A"
                                        className="w-full border-2 border-accent-dark rounded-2xl px-5 py-4 font-bold focus:outline-none focus:border-primary focus:shadow-chunky-sm transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest mb-2 text-accent-dark/50">City &amp; ZIP</label>
                                    <input value={newAddr.city} onChange={e => setNewAddr(p => ({ ...p, city: e.target.value }))}
                                        placeholder="Brooklyn, NY 11201"
                                        className="w-full border-2 border-accent-dark rounded-2xl px-5 py-4 font-bold focus:outline-none focus:border-primary focus:shadow-chunky-sm transition-all" />
                                </div>
                            </div>
                            <div className="flex gap-4 mt-8">
                                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleAddAddress}
                                    className="flex-1 bg-primary border-2 border-accent-dark shadow-chunky-sm px-8 py-4 rounded-full font-black uppercase text-sm transition-all">
                                    Save Address
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => setShowAddForm(false)}
                                    className="flex-1 border-2 border-accent-dark px-8 py-4 rounded-full font-black uppercase text-sm hover:bg-accent-dark/5 transition-all">
                                    Cancel
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AddressesPage;
