import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Specialties from '../components/Specialties';
import StatsBar from '../components/StatsBar';
import CTA from '../components/CTA';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';

const HomePage = ({ onBookClick }) => {
    return (
        <>
            <Header onBookClick={onBookClick} />
            <main>
                <Hero onBookClick={onBookClick} />
                <StatsBar />
                <Specialties />
                <CTA onBookClick={onBookClick} />
                <ReviewsSection />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
