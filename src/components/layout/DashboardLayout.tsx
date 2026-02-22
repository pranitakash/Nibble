import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="bg-background-light text-accent-dark antialiased min-h-screen font-display flex flex-col">
            <Outlet />
        </div>
    );
};

export default DashboardLayout;
