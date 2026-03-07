import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ServicesPage from './pages/ServicesPage';
import SpecialistsPage from './pages/SpecialistsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import PatientStoriesPage from './pages/PatientStoriesPage';
import AppointmentForm from './components/AppointmentForm';
import WhatsAppButton from './components/WhatsAppButton';
import PhoneCallButton from './components/PhoneCallButton';


// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  return (
    <Router>
      <ScrollToTop />
      <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
        <Routes>
          <Route path="/" element={<HomePage onBookClick={toggleForm} />} />
          <Route path="/about" element={<AboutPage onBookClick={toggleForm} />} />
          <Route path="/facilities" element={<FacilitiesPage onBookClick={toggleForm} />} />
          <Route path="/services" element={<ServicesPage onBookClick={toggleForm} />} />
          <Route path="/specialists" element={<SpecialistsPage onBookClick={toggleForm} />} />
          <Route path="/gallery" element={<GalleryPage onBookClick={toggleForm} />} />
          <Route path="/contact" element={<ContactPage onBookClick={toggleForm} />} />
          <Route path="/patient-stories" element={<PatientStoriesPage onBookClick={toggleForm} />} />
        </Routes>
        <AppointmentForm isOpen={isFormOpen} onClose={toggleForm} />
        <WhatsAppButton />
        <PhoneCallButton />
      </div>
    </Router>
  );
}

export default App;
