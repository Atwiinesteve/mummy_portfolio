// importing react.
import React from 'react';

// importing styles.
import "../styles/Footer.css";

// footer component.
function Footer() {

  return (
		<>
			<footer id="footer--area">
				<div className="footer">
					{/* short summary */}
					<div className="summary">
						<div className="logo">
							<span className="icon">
								<img
									width="60px" 
									height="60px"
									src="https://cdn-icons-png.flaticon.com/128/2913/2913008.png"
									alt="logo"
								/>
							</span>
							<p className="logo">MindPillar</p>
						</div>
						<div className="short--text">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod incididunt ut labore et dolore maliqua. Quis ipsum
								suspendisse ultrices gravida.
							</p>
						</div>
						<div className="icon-links">
							<span>
								<i className="fa fa-facebook"></i>
							</span>
							<span>
								<i className="fa fa-twitter"></i>
							</span>
							<span>
								<i className="fa fa-instagram"></i>
							</span>
							<span>
								<i className="fa fa-pinterest"></i>
							</span>
						</div>
					</div>

					{/* quick links */}
					<div className="quick__links">
						<div className="quick__links__header">
							<h3>Quick Links</h3>
						</div>
						<div className="q__links">
							<ul>
								<li>
									&gt; &emsp;
									<a href="/about">about</a>
								</li>
								<li>
									&gt; &emsp;
									<a href="/services">services</a>
								</li>
								<li>
									&gt; &emsp;
									<a href="/programs">programs</a>
								</li>
								<li>
									&gt; &emsp;
									<a href="/contacts">contacts</a>
								</li>
							</ul>
						</div>
					</div>

					{/* explore area */}
					<div className="explore">
						<div className="explore__links__header">
							<h3>Explore</h3>
						</div>
						<div className="e__links">
							<ul>
								<li>
									&gt; &emsp;
									<a href="/appointment">make an appointment</a>
								</li>
								<li>
									&gt; &emsp;
									<a href="/stories">stories</a>
								</li>
								<li>
									&gt; &emsp;
									<a href="/courses">courses</a>
								</li>
								<li>
									&gt; &emsp;
									<a href="/career">career</a>
								</li>
							</ul>
						</div>
					</div>

					{/* get in touch area */}
					<div className="get--in_touch">
						<div className="get-in-touch__header">
							<h3>Get in Touch</h3>
						</div>
						<div className="get-in-touch__text">
							<p>Subscribe Our Newsletter To Get Our Latest Updated News!</p>
						</div>
						<div className="get--in--touch__form">
							<form>
								<div className="input--area">
									<input type="email" placeholder="Your Email.." />
									<button>
										<i className="fa fa-send"></i>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>

				{/* Copy rights */}
				<div className="copyrights">
					<p>All Rights Reserved | MindPillar &copy; 2023 </p>
				</div>
			</footer>
		</>
	);

};

// exporting Footer component
export default Footer;