import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Specialties from '../components/Specialties';
import StatsBar from '../components/StatsBar';
import WhyChooseUs from '../components/WhyChooseUs';
import HospitalFacilities from '../components/HospitalFacilities';
import CTA from '../components/CTA';
import ReviewsSection from '../components/ReviewsSection';
import Accreditations from '../components/Accreditations';
import Footer from '../components/Footer';

const HomePage = ({ onBookClick }) => {
    return (
        <>
            <Header onBookClick={onBookClick} />
            <main>
                <Hero onBookClick={onBookClick} />
                <StatsBar />
                <Specialties />
                <WhyChooseUs />
                <HospitalFacilities />
                <CTA onBookClick={onBookClick} />
                <ReviewsSection />
                <Accreditations />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
