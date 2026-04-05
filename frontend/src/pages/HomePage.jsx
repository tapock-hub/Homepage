import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectDescription from '../components/ProjectDescription';
import FunctionalityPresentation from '../components/FunctionalityPresentation';
import PrototypeSection from '../components/PrototypeSection';
import TechnicalRequirements from '../components/TechnicalRequirements';
import SponsorInterview from '../components/SponsorInterview';
import AboutAuthors from '../components/AboutAuthors';
import AdditionalInfo from '../components/AdditionalInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProjectDescription />
      <FunctionalityPresentation />
      <PrototypeSection />
      <TechnicalRequirements />
      <SponsorInterview />
      <AboutAuthors />
      <AdditionalInfo />
      <Footer />
    </div>
  );
};

export default HomePage;
