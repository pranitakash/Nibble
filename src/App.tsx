import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ExploreLayout from './components/layout/ExploreLayout';
import DashboardLayout from './components/layout/DashboardLayout';
import LandingPage from './pages/LandingPage';
import DiscoveryPage from './pages/DiscoveryPage';
import NomNomPage from './pages/NomNomPage';
import MenuPage from './pages/MenuPage';
import CheckoutPage from './pages/CheckoutPage';
import TrackingPage from './pages/TrackingPage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
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
    <Routes>
      {/* Main Layout (Navbar + Footer) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="riders" element={<RiderLandingPage />} />
        <Route path="nomnom" element={<NomNomPage />} />
      </Route>

      {/* Explore Layout (ExploreNavbar + Footer) */}
      <Route element={<ExploreLayout />}>
        <Route path="explore" element={<DiscoveryPage />} />
        <Route path="restaurant/:id" element={<MenuPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Route>

      {/* Dashboards (Common background/base) */}
      <Route element={<DashboardLayout />}>
        <Route path="dashboard" element={<UserDashboardPage />} />
        <Route path="restaurant-dashboard" element={<RestaurantDashboardPage />} />
        <Route path="rider-dashboard" element={<RiderDashboardPage />} />
        <Route path="user-dashboard" element={<UserDashboardPage />} />
      </Route>

      {/* Auth Pages (Clean/Full Screen) */}
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="partner-signup" element={<PartnerSignupPage />} />
      <Route path="partner-login" element={<PartnerLoginPage />} />
      <Route path="rider-signup" element={<RiderSignupPage />} />
      <Route path="rider-login" element={<RiderLoginPage />} />
    </Routes>
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
