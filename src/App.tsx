import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ExploreNavbar from './components/layout/ExploreNavbar';
import CheckoutNavbar from './components/layout/CheckoutNavbar';
import Footer from './components/layout/Footer';
import CheckoutFooter from './components/layout/CheckoutFooter';
import LandingPage from './pages/LandingPage';
import DiscoveryPage from './pages/DiscoveryPage';
import MenuPage from './pages/MenuPage';
import CheckoutPage from './pages/CheckoutPage';
import TrackingPage from './pages/TrackingPage';
import CustomerDashboard from './pages/CustomerDashboard';
import RestaurantDashboard from './pages/RestaurantDashboard';
import RiderDashboard from './pages/RiderDashboard';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const isCheckout = location.pathname === '/checkout';
  const isExploreNavbar = location.pathname.startsWith('/explore') || location.pathname.startsWith('/restaurant/') || location.pathname.startsWith('/tracking/');

  const renderNavbar = () => {
    if (isCheckout) return <CheckoutNavbar />;
    if (isExploreNavbar) return <ExploreNavbar />;
    return <Navbar />;
  };

  return (
    <div className="app-container">
      {renderNavbar()}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<DiscoveryPage />} />
          <Route path="/restaurant/:id" element={<MenuPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/tracking/:id" element={<TrackingPage />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
          <Route path="/restaurant-partner" element={<RestaurantDashboard />} />
          <Route path="/rider" element={<RiderDashboard />} />
          {/* Add other routes here */}
        </Routes>
      </main>
      {isCheckout ? <CheckoutFooter /> : <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
