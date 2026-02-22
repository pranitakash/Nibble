import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-cream">
            <Navbar />
            <main className="pt-0">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
