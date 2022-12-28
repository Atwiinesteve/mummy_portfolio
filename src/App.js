// Importing Styles
import './App.css';

// Importing Components
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import HowIWork from './components/HowIWork';
import Services from './components/Services';
import Situations from './components/Situations';
import FeaturedServices from './others/FeaturedServices';
import LetsTalk from './components/LetsTalk';


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
      <FeaturedServices />

      {/* Situations I help with */}
      <Situations />

      {/* How I Work */}
      <HowIWork />

      {/* Let's Talk */}
      <LetsTalk />

      {/* Why Section */}

      {/* About Company/Person */}

      {/* Services and Specialities */}

      {/* Counsellor's Information */}

      {/* Footer Section */}
      
    </div>

  );

}

export default App;
