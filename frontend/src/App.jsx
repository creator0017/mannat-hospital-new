import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SpecialistsPage from './pages/SpecialistsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import PatientStoriesPage from './pages/PatientStoriesPage';
import AppointmentForm from './components/AppointmentForm';
import WhatsAppButton from './components/WhatsAppButton';
import PhoneCallButton from './components/PhoneCallButton';
import PopupLeadForm from './components/PopupLeadForm';
import SpineSurgerySeoPage from './pages/departments/SpineSurgerySeoPage';

// SEO Service Pages
import OrthopaedicHospitalPage from './pages/services/OrthopaedicHospitalPage';
import JointReplacementPage from './pages/services/JointReplacementPage';
import ArthroscopyTreatmentPage from './pages/services/ArthroscopyTreatmentPage';
import SpineSurgeonPage from './pages/services/SpineSurgeonPage';
import EndoscopicSpinePage from './pages/services/EndoscopicSpinePage';
import SlipDiscPage from './pages/services/SlipDiscPage';
import PhysiotherapyPage from './pages/services/PhysiotherapyPage';
import BackPainPhysioPage from './pages/services/BackPainPhysioPage';
import PainSpecialistPage from './pages/services/PainSpecialistPage';
import ChronicBackPainPage from './pages/services/ChronicBackPainPage';
import GeneralMedicinePage from './pages/services/GeneralMedicinePage';
import DiabetesTreatmentPage from './pages/services/DiabetesTreatmentPage';
import EmergencyCarePage from './pages/services/EmergencyCarePage';
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
          <Route path="/specialists" element={<SpecialistsPage onBookClick={toggleForm} />} />
          <Route path="/gallery" element={<GalleryPage onBookClick={toggleForm} />} />
          <Route path="/contact" element={<ContactPage onBookClick={toggleForm} />} />
          <Route path="/patient-stories" element={<PatientStoriesPage onBookClick={toggleForm} />} />
          <Route path="/departments/spine-surgery-sundernagar" element={<SpineSurgerySeoPage onBookClick={toggleForm} />} />

          {/* SEO Service Routes */}
          <Route path="/services/orthopaedic-hospital-sundernagar" element={<OrthopaedicHospitalPage onBookClick={toggleForm} />} />
          <Route path="/services/joint-replacement-sundernagar" element={<JointReplacementPage onBookClick={toggleForm} />} />
          <Route path="/services/arthroscopy-treatment-sundernagar" element={<ArthroscopyTreatmentPage onBookClick={toggleForm} />} />
          <Route path="/services/spine-surgeon-sundernagar" element={<SpineSurgeonPage onBookClick={toggleForm} />} />
          <Route path="/services/endoscopic-spine-surgery" element={<EndoscopicSpinePage onBookClick={toggleForm} />} />
          <Route path="/services/slip-disc-treatment-sundernagar" element={<SlipDiscPage onBookClick={toggleForm} />} />
          <Route path="/services/physiotherapy-sundernagar" element={<PhysiotherapyPage onBookClick={toggleForm} />} />
          <Route path="/services/back-pain-physiotherapy" element={<BackPainPhysioPage onBookClick={toggleForm} />} />
          <Route path="/services/pain-specialist-sundernagar" element={<PainSpecialistPage onBookClick={toggleForm} />} />
          <Route path="/services/chronic-back-pain-treatment" element={<ChronicBackPainPage onBookClick={toggleForm} />} />
          <Route path="/services/general-medicine-sundernagar" element={<GeneralMedicinePage onBookClick={toggleForm} />} />
          <Route path="/services/diabetes-treatment-sundernagar" element={<DiabetesTreatmentPage onBookClick={toggleForm} />} />
          <Route path="/services/emergency-trauma-care-sundernagar" element={<EmergencyCarePage onBookClick={toggleForm} />} />
        </Routes>
        <AppointmentForm isOpen={isFormOpen} onClose={toggleForm} />
        <WhatsAppButton />
        <PhoneCallButton />
        <PopupLeadForm />
      </div>
    </Router>
  );
}

export default App;
