import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export interface NavItem {
    icon: string;
    label: string;
    href: string;
    active?: boolean;
}

interface DashboardNavbarProps {
    items: NavItem[];
    profileName?: string;
    rightSection?: React.ReactNode;
    statusSection?: React.ReactNode;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ items, statusSection, rightSection, profileName }) => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 px-6 pt-2 pb-4 lg:px-12 transition-all">
            <nav className="max-w-7xl mx-auto flex items-center bg-white/80 backdrop-blur-md border-2 border-accent-dark rounded-full px-4 lg:px-8 py-2 shadow-chunky-sm min-h-[72px] gap-4 lg:gap-12">
                {/* Branding - Shrink-resistant */}
                <Link to="/" className="flex items-center gap-2 shrink-0 group">
                    <div className="bg-primary size-10 rounded-full border-2 border-accent-dark flex items-center justify-center group-hover:rotate-12 transition-transform shadow-chunky-sm">
                        <span className="material-symbols-outlined text-accent-dark font-black text-xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>fastfood</span>
                    </div>
                    <span className="text-xl font-black tracking-tight text-accent-dark hidden sm:block">Nibble</span>
                </Link>

                {/* Navigation Items - Flexible and Scrollable */}
                <div className="flex-1 hidden md:flex items-center justify-center gap-1 xl:gap-8 overflow-x-auto no-scrollbar py-2">
                    {items.map((item, idx) => (
                        <MotionLink
                            key={idx}
                            to={item.href}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95, y: 0 }}
                            className={`text-[11px] xl:text-xs font-bold transition-all py-3 px-5 rounded-full border-2 whitespace-nowrap flex items-center gap-2.5 ${item.active
                                ? 'text-accent-dark border-accent-dark bg-primary shadow-chunky-sm'
                                : 'text-accent-dark border-transparent hover:text-primary'
                                }`}
                        >
                            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>{item.icon}</span>
                            <span>{item.label}</span>
                        </MotionLink>
                    ))}
                </div>

                {/* Right Actions - Compact Clustering */}
                <div className="flex items-center gap-3 lg:gap-6 shrink-0">
                    {/* Compact Location - Hidden on small screens to save space */}
                    <div className="hidden lg:flex items-center gap-1.5 bg-accent-dark/5 px-4 py-2 rounded-full border border-accent-dark/10 max-w-[150px] xl:max-w-xs transition-colors hover:border-accent-dark/30">
                        <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>location_on</span>
                        <span className="text-[10px] font-bold uppercase text-accent-dark/50 truncate tracking-tight">123 Food Street, Manha...</span>
                    </div>

                    {statusSection && (
                        <div className="hidden xl:block text-[11px] font-bold text-accent-dark border-l-2 border-accent-dark/10 pl-6 py-2">
                            {statusSection}
                        </div>
                    )}

                    <div className="flex items-center gap-3 lg:gap-5">
                        {rightSection}

                        {profileName && (
                            <div className="bg-white border-2 border-accent-dark h-11 px-4 rounded-full shadow-chunky-sm flex items-center gap-2 shrink-0">
                                <span className="font-bold text-[10px] tracking-tight max-w-[100px] truncate">{profileName}</span>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default DashboardNavbar;
