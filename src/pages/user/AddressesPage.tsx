import React from 'react';
import DashboardHeader from '../../components/layout/DashboardHeader';

const AddressesPage: React.FC = () => {
    return (
        <div className="flex-1 p-6 lg:p-10 pt-32 lg:pt-32 overflow-y-auto bg-background-light">
            <DashboardHeader
                title="Manage Addresses"
                subtitle="Where should we deliver?"
                icon="location_on"
            />

            <div className="max-w-7xl mx-auto">
                <div className="bg-white border-4 border-accent-dark rounded-[2.5rem] p-12 shadow-chunky text-center italic font-black text-2xl uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-6xl mb-4 block">home_pin</span>
                    Mapping your locations...
                </div>
            </div>
        </div>
    );
};

export default AddressesPage;
