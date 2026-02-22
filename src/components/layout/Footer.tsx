import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t-4 border-accent-dark pt-20 pb-10 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-primary p-1 rounded-lg border border-accent-dark">
                                <span className="material-symbols-outlined text-accent-dark font-bold">fastfood</span>
                            </div>
                            <span className="text-2xl font-black tracking-tight text-accent-dark">FoodieHero</span>
                        </div>
                        <p className="text-accent-dark/60 font-medium mb-6">Redefining how you eat, one delivery at a time. The world's first hero-powered delivery platform.</p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full border-2 border-accent-dark flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-xl">share</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-accent-dark flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-xl">public</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-black text-xl mb-6">Quick Links</h4>
                        <ul className="space-y-4 font-bold text-accent-dark/60">
                            <li><a className="hover:text-accent-dark transition-colors" href="#">Find Restaurants</a></li>
                            <li><a className="hover:text-accent-dark transition-colors" href="#">Become a Rider</a></li>
                            <li><a className="hover:text-accent-dark transition-colors" href="#">Partner With Us</a></li>
                            <li><a className="hover:text-accent-dark transition-colors" href="#">FoodieHero For Business</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black text-xl mb-6">Support</h4>
                        <ul className="space-y-4 font-bold text-accent-dark/60">
                            <li><a className="hover:text-accent-dark transition-colors" href="#">Help Center</a></li>
                            <li><a className="hover:text-accent-dark transition-colors" href="#">Contact Us</a></li>
                            <li><a className="hover:text-accent-dark transition-colors" href="#">Refund Policy</a></li>
                            <li><a className="hover:text-accent-dark transition-colors" href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black text-xl mb-6">Get the App</h4>
                        <div className="space-y-4">
                            <div className="bg-accent-dark text-white rounded-xl p-3 border-2 border-accent-dark flex items-center gap-3 cursor-pointer hover:bg-white hover:text-accent-dark transition-all group">
                                <span className="material-symbols-outlined text-3xl group-hover:text-accent-dark transition-colors">phone_iphone</span>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-white/60 group-hover:text-accent-dark/60 transition-colors">Download on the</p>
                                    <p className="text-sm font-black group-hover:text-accent-dark transition-colors">App Store</p>
                                </div>
                            </div>
                            <div className="bg-accent-dark text-white rounded-xl p-3 border-2 border-accent-dark flex items-center gap-3 cursor-pointer hover:bg-white hover:text-accent-dark transition-all group">
                                <span className="material-symbols-outlined text-3xl group-hover:text-accent-dark transition-colors">shop</span>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-white/60 group-hover:text-accent-dark/60 transition-colors">Get it on</p>
                                    <p className="text-sm font-black group-hover:text-accent-dark transition-colors">Google Play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t-2 border-accent-dark/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-accent-dark/40 font-bold text-sm">© 2024 FoodieHero Inc. All rights reserved.</p>
                    <div className="flex gap-8 text-sm font-bold text-accent-dark/40">
                        <a className="hover:text-accent-dark" href="#">Privacy</a>
                        <a className="hover:text-accent-dark" href="#">Cookies</a>
                        <a className="hover:text-accent-dark" href="#">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
