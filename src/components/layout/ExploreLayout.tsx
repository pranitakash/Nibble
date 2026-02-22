import { Outlet } from 'react-router-dom';
import ExploreNavbar from './ExploreNavbar';
import Footer from './Footer';

const ExploreLayout = () => {
    return (
        <div className="min-h-screen bg-cream">
            <ExploreNavbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default ExploreLayout;
