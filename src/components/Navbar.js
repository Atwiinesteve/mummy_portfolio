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
		</>
	);
}

// exporting contacts module.
export default Navbar;
