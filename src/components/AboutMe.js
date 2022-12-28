// importing react.
import React from "react";

// importing styles.
import "../styles/AboutMe.css";

function AboutMe() {
	return (
		<>
			<section id="about--me">
				<div className="about--content">
					<div className="profile--image">
						<img
							width="80%"
							src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="avatar"
						/>
					</div>
					<div className="profile--text">
						<div className="names">
							<p>hello, I am</p>
							<p>atwiine stephen</p>
						</div>
						<div className="short--desc">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Cursus euismod quis viverra nibh. Aenean et tortor at risus
								mattisullamcorper velit sed ullamcorper morbi.
							</p>
						</div>
						<div className="download--resume">
							<button>download resume</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutMe;
