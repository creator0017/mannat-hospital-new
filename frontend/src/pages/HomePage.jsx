import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Specialties from '../components/Specialties';
import Story from '../components/Story';
import CTA from '../components/CTA';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';

const HomePage = ({ onBookClick }) => {
    return (
        <>
            <Header onBookClick={onBookClick} />
            <main>
                <Hero onBookClick={onBookClick} />
                <Specialties />
                <Story />
                <CTA onBookClick={onBookClick} />
                <ReviewsSection />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
