import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface MenuItem {
    id: number;
    name: string;
    price: number;
    qty: number;
    image: string;
    description: string;
}

const MenuPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('Popular');
    const [showToast, setShowToast] = useState<string | null>(null);
    const [bag] = useState<MenuItem[]>([
        {
            id: 1,
            name: 'Double Smash Hero',
            price: 12.50,
            qty: 1,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0O3ZV1uTu8L8qSt5p30XTNTIjcfF1lp2Txuzkymia8Tx1Ag9TpXl8xuuFxAB5ftydpPhLMu2dPkDkKq08NoLn7G0CktbLzZwoc24cRkajipO7QlwEbUOe7JzjxPhRLniAcRHAdiOY71WHm4aAbGIG47q2Iebsw4j0wPRlzehGhdl4qdX901K_bvK_4t8SGNJU1BJTjfXski3ir0eCEMAtZQ4OJ9pq6UuwP32xfQ0jhwCcJ9hYzL1eUkLEQ-8pfI0VwS6sF-4KZN0',
            description: 'Extra Hero Sauce, No Onion'
        },
        {
            id: 2,
            name: 'Atomic Loaded Fries',
            price: 6.00,
            qty: 1,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxYg_o6EA9kT9UOqBr-uy5cZeYjFGvCcxkViQNBzZzBH4SnA0AtAD3Fq144x0lL2KLshrVsExQwMql9iPgt6385fjl5qDuPD2yJdGcGN1JQjAFo7H1Kb4L5kWK6PpglJCS-O0CEKB2TkrPHhSyxOXB3oMCYSI8JDKg5AVjfIHFLJlads0FgAzWFEaPtaHbMcZ56cj40z6YiQJ25LN4LpYCBrMzbbDw4QBSIQMFMhGQxTX-5fOP_TadNarWu9zI4XH5EEeYuAN7P6s',
            description: 'Standard'
        },
    ]);

    const menuItems: MenuItem[] = [
        {
            id: 1,
            name: 'Double Smash Hero',
            price: 12.50,
            description: 'Two 100% grass-fed beef patties, secret hero sauce, and melted cheddar.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd7oms54l44K6PXQ7YCbgz56YUblVpmiMyuRvRL9Z-7aZRW5W5itSubbejbpD2Qzhf9yT-yo2pzMjyxarAeb8edMkK6vl7DstjFsrEGUd3T5RZHCfOI1TNQmFnsVd4hNMvXy95JkLMEgFyGsWn2iwF3EN_GaJ0_ZkoJhT6Un0muuQmVPeeGutCRL_n2zEANshmjbsHKkNpgObVjB_r_1X7qzEL9H9Hx9WJ9KR4HLiL23grYscERLfDH8uCgJkG7Ko5ERbn_ZuaYJc',
            qty: 0
        },
        {
            id: 2,
            name: 'Atomic Loaded Fries',
            price: 6.00,
            description: 'Crispy golden fries topped with jalapeños, crispy onions, and cheese rain.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_csJmT6DvFexTENTJQC3FkWX1n7jcoAWS_CuCsfDuEzUM5Zdk6ErhKot2yvHr39iLJ4eKtWN54v29iiaRLnq1uGIYBzZBfmJQB770P1bqWKQN3WsHCSfGPwPfFCQzQKtUQcuRyY1Byy9U6-2EfSEpBXPEMhwSk-860HusMGt5BHTih40bPUVVg9ciQXg7x6iI_tT71JPwZpidqOCY-xOyhaWcIfHqXcOJ8IiNlLqmAkyq4b_ndgcQfgDx28vSfTB1Z6JaOneohco',
            qty: 0
        },
        {
            id: 3,
            name: 'Galaxy Vanilla Shake',
            price: 8.50,
            description: 'Thick Madagascar vanilla bean shake topped with edible glitter stars.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBmugReUbNqvzjSihPPTTnehKR4_XUSoaoo6YWimgqNS3Cg6XJwgWdCNC1Os0Ku-csC2AcTL_o_NuxmC2SNXRtj0AvGzshdDUvTbcEy2hMFrhgqwGjYf1sSYpx3P-GOpXd13fIieT7u1FULsQ7IG1jnDVOEHFgzsklC8zCLpb3SU4HmrOMSn502EPgmG8bSD4VDSizbw9nA186jklnq7mi3ziz9e5AGH-oRejHfjYVhxMArV6URZ-ZIcyEBnmyW_4Cuo20CxL0LeY',
            qty: 0
        },
        {
            id: 4,
            name: 'Green Guardian',
            price: 14.00,
            description: 'Plant-based powerhouse patty with avocado smash and sprouts.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb-VfuTErP28zfex3HZPvWEweaYGxw5daAWww4pv5rx7C_IVQGhhJDpQM2awGBQb8RX_pXRluWgoRXp0JCYNIUuL3GDC_jtvk_-fQ2ly0TwX3ESKjaSLd-M2Uir665B74PrG-sMPZ9dHgI7yEba4-k4huK-Ba8GMlGVVmLPyIIzGkKTCV-4p_OorUSunvNInoVjzZovV9iDOT5OKPivKAaSNT3kuROxs3Pf87OajzoW11QuzucSri-1lD8ZnzSjjou7jX21O0WsOc',
            qty: 0
        },
    ];

    const subtotal = bag.reduce((acc, item) => acc + (item.price * item.qty), 0);

    const categories = ['Popular', 'Smash Burgers', 'Hero Sides', 'Super Shakes'];

    const handleAddToCart = (itemName: string) => {
        setShowToast(itemName);
        setTimeout(() => setShowToast(null), 3000);
    };

    return (
        <div className="bg-background-light text-accent-dark min-h-screen">
            <main className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-6 py-10 pt-28">
                <div className="flex-1">
                    <div className="mb-12">
                        <div className="flex items-end gap-6 mb-6">
                            <img
                                alt="Restaurant Mascot"
                                className="w-32 h-32 object-contain bg-primary rounded-3xl border-4 border-slate-900 shadow-chunky-sm"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBNImvC5h7duWtKDLPsFPMyStcyiRW0xCqkXO1mRNqQ3rIxKwlFrcAcXvC-p3eLyaD9sa91A-FCGQdiQ5hB3TXqsfnJl_SA5ybzkZttSosjtYgWV1WJrUyViLp5ty_AhqeslitRAdKGpg_Dsy8rkwSIJ1k3nnqxkH-ofA4XuPr-ELWOLUkXtphYoumXHpr3k_-FfNJpnEYF0HI-8ZhFuAq3i7symBkNn494y7JUDjBEdNi9YBClb3KFVDHlVAqTUVRTdyvmQ4NKR8"
                            />
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-slate-900 text-primary text-[10px] font-black uppercase px-3 py-1 rounded-full">Legendary</span>
                                    <div className="flex items-center gap-1 text-orange-500">
                                        <span className="material-symbols-outlined text-sm fill-orange-500">star</span>
                                        <span className="font-bold">4.9 (500+)</span>
                                    </div>
                                </div>
                                <h2 className="text-5xl font-black mb-2 uppercase">The Hero Burger</h2>
                                <p className="text-accent-dark/60 font-bold italic">Burgers • American • High-Energy Fuel</p>
                            </div>
                        </div>
                        <div className="flex gap-4 overflow-x-auto py-4 custom-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-8 py-3 rounded-full font-black border-2 border-slate-900 transition-all whitespace-nowrap active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${activeCategory === cat
                                        ? 'bg-primary text-slate-900 shadow-chunky-sm'
                                        : 'bg-white text-slate-900 hover:shadow-chunky-sm hover:-translate-y-0.5'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {menuItems.map((item) => (
                            <div key={item.id} className="bg-white border-4 border-slate-900 rounded-2xl overflow-hidden group shadow-chunky-sm hover:shadow-chunky transition-all">
                                <div className="relative h-48">
                                    <img alt={item.name} className="w-full h-full object-cover border-b-4 border-slate-900" src={item.image} />
                                    <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full border-2 border-slate-900 font-black text-sm">${item.price.toFixed(2)}</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-black mb-2 underline decoration-primary decoration-4 underline-offset-4">{item.name}</h3>
                                    <p className="text-accent-dark/60 text-sm font-bold mb-6">{item.description}</p>
                                    <button
                                        onClick={() => handleAddToCart(item.name)}
                                        className="w-full bg-primary hover:bg-green-500 hover:text-white text-slate-900 py-3 rounded-full font-black border-2 border-slate-900 shadow-chunky-sm flex items-center justify-center gap-2 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                                    >
                                        <span className="material-symbols-outlined">add_circle</span>
                                        ADD TO HERO BAG
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar Bag */}
                <aside className="w-full lg:w-96 lg:sticky lg:top-28 h-fit">
                    <div className="bg-white border-4 border-slate-900 rounded-3xl overflow-hidden shadow-chunky flex flex-col">
                        <div className="bg-primary p-6 border-b-4 border-slate-900">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-slate-900">
                                    <span className="material-symbols-outlined font-black">shopping_basket</span>
                                    <h3 className="text-2xl font-black uppercase tracking-tight">Hero Bag</h3>
                                </div>
                                <span className="bg-slate-900 text-white size-8 rounded-full flex items-center justify-center font-black text-sm border-2 border-white">{bag.length}</span>
                            </div>
                        </div>
                        <div className="p-6 space-y-6 max-h-[400px] overflow-y-auto custom-scrollbar">
                            {bag.map((item) => (
                                <div key={item.id} className="flex gap-4 group">
                                    <div className="size-16 rounded-xl border-2 border-slate-900 overflow-hidden shrink-0 shadow-chunky-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
                                        <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-black text-sm leading-tight uppercase">{item.name}</h4>
                                            <span className="font-black text-sm">${item.price.toFixed(2)}</span>
                                        </div>
                                        <p className="text-[10px] text-accent-dark/60 font-bold mb-2 italic">{item.description}</p>
                                        <div className="flex items-center gap-3">
                                            <button className="size-6 rounded-md border-2 border-slate-900 flex items-center justify-center hover:bg-primary transition-all active:scale-90 active:translate-y-0.5 text-slate-900">
                                                <span className="material-symbols-outlined text-xs font-black">remove</span>
                                            </button>
                                            <span className="font-black text-sm">{item.qty}</span>
                                            <button className="size-6 rounded-md border-2 border-slate-900 flex items-center justify-center hover:bg-primary transition-all active:scale-90 active:translate-y-0.5 text-slate-900">
                                                <span className="material-symbols-outlined text-xs font-black">add</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 bg-slate-50 border-t-4 border-slate-900 space-y-2">
                            <div className="flex justify-between font-bold text-accent-dark/60">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-accent-dark/60">
                                <div className="flex items-center gap-1">
                                    <span>Hero Delivery</span>
                                    <span className="material-symbols-outlined text-sm">info</span>
                                </div>
                                <span className="text-green-500 font-black">FREE</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 mt-2 border-t-2 border-accent-dark/10">
                                <span className="text-xl font-black uppercase">Total</span>
                                <span className="text-3xl font-black">${subtotal.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <button className="w-full bg-white hover:bg-primary text-slate-900 py-6 rounded-2xl font-black text-xl border-4 border-slate-900 shadow-chunky transition-all active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-3 group">
                                CHECKOUT NOW
                                <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <p className="text-center text-[10px] font-bold text-slate-400 mt-4 uppercase tracking-widest">Est. Delivery Time: 12-18 Mins</p>
                        </div>
                    </div>
                    <div className="mt-6 bg-accent-cream border-2 border-slate-900 border-dashed rounded-2xl p-4 flex items-center gap-4">
                        <div className="size-12 bg-primary rounded-full border-2 border-slate-900 flex items-center justify-center shrink-0 shadow-chunky-sm">
                            <span className="material-symbols-outlined text-slate-900">confirmation_number</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-black text-slate-900 uppercase">HERO10 Applied!</p>
                            <p className="text-[10px] font-bold text-accent-dark/60 uppercase">You've unlocked free delivery for this order.</p>
                        </div>
                    </div>
                </aside>
            </main>

            {/* Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100]"
                    >
                        <div className="bg-slate-900 text-white border-2 border-white px-8 py-4 rounded-2xl shadow-chunky flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            <span className="font-black uppercase tracking-tight">{showToast} added to bag!</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MenuPage;
