import React from 'react';

interface DashboardHeaderProps {
    title: string;
    subtitle: string;
    icon?: string;
    profileName?: string;
    profileImg?: string;
    extraActions?: React.ReactNode;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
    title,
    subtitle,
    icon,
    profileName,
    profileImg,
    extraActions
}) => {
    return (
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
                <h1 className="text-4xl lg:text-5xl font-black mb-2 flex items-center gap-3 italic tracking-tighter">
                    {title}
                    {icon && <span className="material-symbols-outlined text-4xl lg:text-5xl text-primary animate-bounce">{icon}</span>}
                </h1>
                <p className="text-xl font-bold text-accent-dark/60 italic">{subtitle}</p>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
                {extraActions}

                {profileName && (
                    <div className="bg-white border-4 border-accent-dark py-2 pl-4 pr-2 rounded-full shadow-chunky-sm flex items-center gap-4">
                        <span className="font-black text-sm uppercase tracking-tighter">{profileName}</span>
                        {profileImg && (
                            <img
                                alt="Profile"
                                className="w-10 h-10 rounded-full border-2 border-accent-dark bg-primary shadow-chunky-sm"
                                src={profileImg}
                            />
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default DashboardHeader;
