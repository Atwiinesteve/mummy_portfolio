// Importing React
import React from 'react';

// Importing Styles
import "../styles/Header.css";

function Header() {

  return (
		<>

            {/* Header Section */}
			<header className="header--area">
				{/* Navigation Bar */}
				<nav className="navigation--bar">
					{/* Logo */}
					<div className="logo--area">
						<img
							width="50px"
							height="50px"
							src="https://img.icons8.com/cotton/512/bright-mind.png"
							alt="logo"
							className="logo--image"
						/>
						<div className="logo--text">
							<p>The MindPillar</p>
						</div>
					</div>

					{/* Navigation Menu */}
					<div className="navigation--menu">
						<ul className="navigation--links">
							<li className="navigation--link">
								<a href="/">home</a>
							</li>
							<li className="navigation--link">
								<a href="/about">about</a>
							</li>
							<li className="navigation--link">
								<a href="/services">services</a>
							</li>
							<li className="navigation--link">
								<a href="/contacts">contacts</a>
							</li>
							<li className="navigation--link">
								<a href="/schedule-consultation">schedule consultation</a>
							</li>
						</ul>
					</div>
				</nav>

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
