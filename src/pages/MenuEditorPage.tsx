import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardHeader from '../components/layout/DashboardHeader';

const categories = ['Burgers', 'Sides', 'Drinks', 'Desserts'];

const initialItems = [
    { id: 1, name: 'Baron Burger', category: 'Burgers', price: 14.50, desc: 'Double smash patty, American cheese, secret sauce, pickles', available: true },
    { id: 2, name: 'Cheese Stack', category: 'Burgers', price: 16.00, desc: 'Triple patty, cheddar avalanche, caramelised onions', available: true },
    { id: 3, name: 'Golden Fries (L)', category: 'Sides', price: 4.99, desc: 'Hand-cut fries, seasoned with our signature spice blend', available: true },
    { id: 4, name: 'Onion Rings', category: 'Sides', price: 5.50, desc: 'Beer-battered rings, crispy and golden', available: false },
    { id: 5, name: 'Vanilla Shake', category: 'Drinks', price: 5.50, desc: 'Hand-spun vanilla milkshake, whipped cream', available: true },
    { id: 6, name: 'Cola', category: 'Drinks', price: 2.50, desc: 'Classic cola, iced and refreshing', available: true },
    { id: 7, name: 'Brownie Bites', category: 'Desserts', price: 6.00, desc: 'Warm chocolate brownie bites with vanilla ice cream', available: true },
];

const blank = { name: '', category: 'Burgers', price: '', desc: '', available: true };

const MenuEditorPage: React.FC = () => {
    const [items, setItems] = useState(initialItems);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState<typeof blank & { id?: number }>(blank);
    const [editingId, setEditingId] = useState<number | null>(null);

    const displayed = activeCategory ? items.filter(i => i.category === activeCategory) : items;

    const openAdd = () => { setForm(blank); setEditingId(null); setShowForm(true); };
    const openEdit = (item: typeof initialItems[0]) => {
        setForm({ ...item, price: String(item.price) });
        setEditingId(item.id);
        setShowForm(true);
    };

    const handleSave = () => {
        if (!form.name || !form.price) return;
        if (editingId !== null) {
            setItems(prev => prev.map(i => i.id === editingId ? { ...i, ...form, price: parseFloat(String(form.price)) } : i));
        } else {
            setItems(prev => [...prev, { id: Date.now(), ...form, price: parseFloat(String(form.price)) }]);
        }
        setShowForm(false);
    };

    const toggleAvailable = (id: number) => setItems(prev => prev.map(i => i.id === id ? { ...i, available: !i.available } : i));
    const deleteItem = (id: number) => setItems(prev => prev.filter(i => i.id !== id));

    return (
        <div className="flex-1 p-6 lg:p-10 pt-32 lg:pt-32 overflow-y-auto bg-background-light min-h-screen">
            <DashboardHeader title="Menu Editor" subtitle="Manage your culinary masterpieces" icon="menu_book" />

            <div className="max-w-5xl mx-auto">
                {/* Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex flex-wrap gap-3">
                        <motion.button
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(null)}
                            className={`px-5 py-2.5 rounded-full font-black text-xs uppercase border-2 transition-all ${!activeCategory ? 'bg-primary border-accent-dark shadow-chunky-sm' : 'bg-white border-accent-dark/20 hover:border-accent-dark'}`}
                        >All</motion.button>
                        {categories.map(cat => (
                            <motion.button
                                key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full font-black text-xs uppercase border-2 transition-all ${activeCategory === cat ? 'bg-primary border-accent-dark shadow-chunky-sm' : 'bg-white border-accent-dark/20 hover:border-accent-dark'}`}
                            >{cat}</motion.button>
                        ))}
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={openAdd}
                        className="flex items-center gap-2 bg-accent-dark text-white border-2 border-accent-dark px-6 py-3 rounded-full font-black text-sm uppercase shadow-chunky-sm transition-all"
                    >
                        <span className="material-symbols-outlined text-sm">add</span>
                        Add Item
                    </motion.button>
                </div>

                {/* Items grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {displayed.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.06 }}
                            className={`bg-white border-4 rounded-[2rem] p-6 shadow-chunky transition-all ${item.available ? 'border-accent-dark' : 'border-accent-dark/20 opacity-60'}`}
                        >
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="text-xl font-black italic tracking-tighter truncate">{item.name}</h3>
                                        <span className={`text-[9px] font-black uppercase border-2 px-2 py-0.5 rounded-full shrink-0 ${item.available ? 'border-green-500 text-green-600 bg-green-50' : 'border-red-400 text-red-500 bg-red-50'}`}>
                                            {item.available ? 'Available' : 'Unavailable'}
                                        </span>
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-widest text-accent-dark/40 mt-1">{item.category}</p>
                                    <p className="text-sm font-medium text-accent-dark/60 mt-2 leading-snug line-clamp-2">{item.desc}</p>
                                </div>
                                <span className="text-2xl font-black italic tracking-tighter shrink-0">${item.price.toFixed(2)}</span>
                            </div>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    onClick={() => openEdit(item)}
                                    className="flex items-center gap-1 border-2 border-accent-dark px-4 py-2 rounded-full text-[10px] font-black uppercase hover:bg-primary transition-all">
                                    <span className="material-symbols-outlined text-sm">edit</span>Edit
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    onClick={() => toggleAvailable(item.id)}
                                    className="flex items-center gap-1 border-2 border-accent-dark/30 hover:border-accent-dark px-4 py-2 rounded-full text-[10px] font-black uppercase transition-all">
                                    <span className="material-symbols-outlined text-sm">{item.available ? 'visibility_off' : 'visibility'}</span>
                                    {item.available ? 'Hide' : 'Show'}
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    onClick={() => deleteItem(item.id)}
                                    className="flex items-center gap-1 border-2 border-red-300 text-red-500 hover:bg-red-50 px-4 py-2 rounded-full text-[10px] font-black uppercase transition-all">
                                    <span className="material-symbols-outlined text-sm">delete</span>Delete
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Add / Edit Modal */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-accent-dark/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        onClick={e => e.target === e.currentTarget && setShowForm(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white border-4 border-accent-dark rounded-[2.5rem] p-10 shadow-chunky-lg w-full max-w-lg max-h-[90vh] overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-black uppercase italic tracking-tighter">{editingId ? 'Edit Item' : 'New Item'}</h2>
                                <button onClick={() => setShowForm(false)} className="material-symbols-outlined text-2xl hover:text-primary transition-colors">close</button>
                            </div>
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest mb-2 text-accent-dark/50">Item Name</label>
                                    <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                                        placeholder="e.g. Crispy Chicken Burger"
                                        className="w-full border-2 border-accent-dark rounded-2xl px-5 py-4 font-bold focus:outline-none focus:border-primary focus:shadow-chunky-sm transition-all" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest mb-2 text-accent-dark/50">Category</label>
                                        <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
                                            className="w-full border-2 border-accent-dark rounded-2xl px-5 py-4 font-bold focus:outline-none focus:border-primary transition-all bg-white">
                                            {categories.map(c => <option key={c}>{c}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest mb-2 text-accent-dark/50">Price ($)</label>
                                        <input type="number" step="0.01" value={form.price} onChange={e => setForm(p => ({ ...p, price: e.target.value }))}
                                            placeholder="0.00"
                                            className="w-full border-2 border-accent-dark rounded-2xl px-5 py-4 font-bold focus:outline-none focus:border-primary focus:shadow-chunky-sm transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest mb-2 text-accent-dark/50">Description</label>
                                    <textarea rows={3} value={form.desc} onChange={e => setForm(p => ({ ...p, desc: e.target.value }))}
                                        placeholder="Describe the dish…"
                                        className="w-full border-2 border-accent-dark rounded-2xl px-5 py-4 font-bold focus:outline-none focus:border-primary focus:shadow-chunky-sm transition-all resize-none" />
                                </div>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-12 h-6 rounded-full border-2 border-accent-dark transition-colors ${form.available ? 'bg-primary' : 'bg-accent-dark/10'}`}
                                        onClick={() => setForm(p => ({ ...p, available: !p.available }))}>
                                        <div className={`w-5 h-5 bg-accent-dark rounded-full m-0.5 transition-transform ${form.available ? 'translate-x-5' : 'translate-x-0'}`} />
                                    </div>
                                    <span className="font-black text-sm uppercase tracking-widest">Available on menu</span>
                                </label>
                            </div>
                            <div className="flex gap-4 mt-8">
                                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                    onClick={handleSave}
                                    className="flex-1 bg-primary border-2 border-accent-dark shadow-chunky-sm px-8 py-4 rounded-full font-black uppercase text-sm transition-all">
                                    {editingId ? 'Update Item' : 'Add to Menu'}
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                    onClick={() => setShowForm(false)}
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

export default MenuEditorPage;
