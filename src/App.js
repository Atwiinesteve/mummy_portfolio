// importing modules
import React from "react";

// Importing Styles
import './App.css';

// Importing Components
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import HowIWork from './components/HowIWork';
import Services from './components/Services';
import Packages from "./components/Packages";
import Situations from './components/Situations';
// import FeaturedServices from './others/FeaturedServices';
import LetsTalk from './components/LetsTalk';
import WevaGatYou from './components/WevaGatYou';
import ContactForm from './components/ContactForm';
import Footer from "./components/Footer";


// Main App Component
function App() {

  return (

    <div className="main--container">

      {/* Header and Hero Section */}
      <Header />

      {/* About Me Section */}
      <AboutMe />

      {/* Services Section */}
      <Services />

      {/* Featured Services Setion */}
      {/* <FeaturedServices /> */}

      {/* Situations I help with */}
      <Situations />

      {/* Packages for payment */}
      <Packages />

      {/* How I Work */}
      <HowIWork />

      {/* Let's Talk */}
      <LetsTalk />

      {/* Contact Form */}
      <ContactForm />

      {/* Why Section */}

      {/* About Company/Person */}

      {/* Services and Specialities */}

      {/* We've got you */}
      <WevaGatYou />

      {/* Footer Section */}
      <Footer />
      
    </div>

  );

}

// exporting module.
export default App;
