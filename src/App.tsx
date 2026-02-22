import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ExploreNavbar from './components/layout/ExploreNavbar';
import LandingPage from './pages/LandingPage';
import DiscoveryPage from './pages/DiscoveryPage';
import MenuPage from './pages/MenuPage';
import CheckoutPage from './pages/CheckoutPage';
import TrackingPage from './pages/TrackingPage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PartnersPage from './pages/PartnersPage';
import RiderLandingPage from './pages/RiderLandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PartnerSignupPage from './pages/PartnerSignupPage';
import PartnerLoginPage from './pages/PartnerLoginPage';
import RiderSignupPage from './pages/RiderSignupPage';
import RiderLoginPage from './pages/RiderLoginPage';
import RestaurantDashboardPage from './pages/RestaurantDashboardPage';
import RiderDashboardPage from './pages/RiderDashboardPage';
import UserDashboardPage from './pages/UserDashboardPage';
import './App.css';

const AppContent = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Routes>
        <Route path="/" element={<><Navbar /><LandingPage /></>} />
        <Route path="/explore" element={<><ExploreNavbar /><DiscoveryPage /></>} />
        <Route path="/restaurant/:id" element={<><ExploreNavbar /><MenuPage /></>} />
        <Route path="/checkout" element={<><ExploreNavbar /><CheckoutPage /></>} />
        <Route path="/tracking" element={<><ExploreNavbar /><TrackingPage /></>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/riders" element={<RiderLandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/partner-signup" element={<PartnerSignupPage />} />
        <Route path="/partner-login" element={<PartnerLoginPage />} />
        <Route path="/rider-signup" element={<RiderSignupPage />} />
        <Route path="/rider-login" element={<RiderLoginPage />} />
        <Route path="/restaurant-dashboard" element={<RestaurantDashboardPage />} />
        <Route path="/rider-dashboard" element={<RiderDashboardPage />} />
        <Route path="/user-dashboard" element={<UserDashboardPage />} />
      </Routes>
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
