// Importing React
import React from 'react';

// importing components.
import Navbar from '../components/Navbar';

// Importing Styles
import "../styles/Header.css";

function Header() {

  return (
		<>

            {/* Header Section */}
			<header className="header--area">
				{/* Navigation Bar */}
				<Navbar />

                {/* Hero Text Section */}
                <div className="hero--section">
                    <h1 className="hero--section-title">
                        Make your life's journey a glamorous with
                        MindPillar's Counselling & Wellness.
                    </h1>
                    <div className="hero--section-text">
                        <p>Telehealth & In-Person counselling in Kampala and Entebbe</p>
                    </div>
                    <div className="hero--button--area">
                        <a href="/schedule-session">Schedule a Session</a>
                    </div>
                </div>

			</header>




		</>
	);

}

export default Header;
