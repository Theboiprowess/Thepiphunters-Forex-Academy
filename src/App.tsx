import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Marketplace from './pages/Marketplace';
import Pricing from './pages/Pricing';
import AIToolsPage from './pages/AIToolsPage';
import AuthPage from './pages/AuthPage';
import KYCPage from './pages/KYCPage';
import RiskDisclosure from './pages/RiskDisclosure';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BlogPage from './pages/BlogPage';
import EducationPage from './pages/EducationPage';
import AffiliatePage from './pages/AffiliatePage';
import CalendarPage from './pages/CalendarPage';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-brand-black text-brand-light font-sans selection:bg-brand-gold/30">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/ai-tools" element={<AIToolsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/academy" element={<EducationPage />} />
              <Route path="/affiliate" element={<AffiliatePage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/kyc" element={<KYCPage />} />
              <Route path="/risk-disclosure" element={<RiskDisclosure />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <SpeedInsights />
      </Router>
    </AuthProvider>
  );
}
