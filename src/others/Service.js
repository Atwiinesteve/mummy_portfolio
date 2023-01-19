// Importing React
import React from 'react'

// Importing styles.
import "../others/Service.css";

// service component
function Service({ image, alt, heading, text }) {

    return (
			<>
				<div className="service">
					<div className="service--image">
						<img width="50px" height="50px" src={image} alt={alt} />
					</div>
					<div className="service--text--area">
						<div className="service--heading">
							<h2>{heading}</h2>
						</div>
						<div className="service--text">
							<p>{text}</p>
						</div>
						<div className="service--link">
							<a href="/learn-more">Learn more  &rarr; </a>
						</div>
					</div>
				</div>
			</>
		);

}

export default Service
