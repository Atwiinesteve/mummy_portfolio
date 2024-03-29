// importing react and other modules.
import React from "react";

// importing components.

// imporing styles.
import "../styles/Navbar.css";

// contacts model
function Navbar() {
	return (
		<>
			{/* Header component */}
			{/* Navigation Bar */}
			<nav className="navigation--bar">
				{/* Logo */}
				<div className="logo--area">
					<img
						width="40px"
						height="40px"
						src="https://cdn-icons-png.flaticon.com/128/2913/2913008.png"
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
							<a href="#about--me">about</a>
						</li>
						<li className="navigation--link">
							<a href="#services--area">services</a>
						</li>
						<li className="navigation--link">
							<a href="#packages--area">packages</a>
						</li>
						<li className="navigation--link">
							<a href="#contact--form--area">contacts</a>
						</li>
						<li className="navigation--link">
							<a href="#featured--services">schedule consultation</a>
						</li>
					</ul>
					<div className="navigation--link">
						<i className="fa-solid fa-bars"></i>
					</div>
				</div>
			</nav>
		</>
	);
}

// exporting contacts module.
export default Navbar;
