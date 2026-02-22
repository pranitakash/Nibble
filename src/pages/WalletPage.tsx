import React from 'react';
import DashboardHeader from '../components/layout/DashboardHeader';

const WalletPage: React.FC = () => {
    return (
        <div className="flex-1 p-6 lg:p-10 pt-32 lg:pt-32 overflow-y-auto bg-background-light">
            <DashboardHeader
                title="My Wallet"
                subtitle="Your earnings, your control"
                icon="account_balance_wallet"
            />

            <div className="max-w-7xl mx-auto">
                <div className="bg-white border-4 border-accent-dark rounded-[2.5rem] p-12 shadow-chunky text-center italic font-black text-2xl uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-6xl mb-4 block">payments</span>
                    Counting your treasure...
                </div>
            </div>
        </div>
    );
};

export default WalletPage;
