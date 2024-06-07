import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";

// Import page components
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import AccountPage from "./components/pages/AccountPage";
import BrowsePage from "./components/pages/BrowsePage";
import DiscoverPage from "./components/pages/DiscoverPage";
import ProductPage from "./components/pages/ProductPage";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";
import RewardPage from "./components/pages/RewardPage";
import SellerDashboard from "./components/pages/SellerDashboard"; // Implement access control
import AdminDashboard from "./components/pages/AdminDashboard"; // Implement access control

function App() {
  return (
    <div className="app">
      <Router>
        <div className="side-content">
          <Sidebar />
        </div>
        <div className="main-content">
          {/* <Navbar /> */}
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/reward" element={<RewardPage />} />
              <Route path="/seller/dashboard" element={<SellerDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
