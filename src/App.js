import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {
  Login,
  SignUp,
  ForgotPassword,
  Dashboard,
  BuyServices,
  MyOrders,
  Wallet,
  Invoices,
  SupportTickets,
  Settings,
  Home,
  Services,
  Pricing,
  HowItWorks,
  About,
  Contact
} from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/services" element={<BuyServices />} />
        <Route path="/dashboard/orders" element={<MyOrders />} />
        <Route path="/dashboard/wallet" element={<Wallet />} />
        <Route path="/dashboard/invoices" element={<Invoices />} />
        <Route path="/dashboard/tickets" element={<SupportTickets />} />
        <Route path="/dashboard/settings" element={<Settings />} />

        {/* Catch-all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
