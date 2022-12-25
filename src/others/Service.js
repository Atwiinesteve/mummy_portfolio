// Importing React
import React from 'react'

// Importing styles.
import "../others/Service.css";

// service component
function Service({ image, alt, heading, text }) {

    const styles = {
        objectFit: "cover" 
    }

    return (
			<>
				<div className="service">
					<div className="service--image">
						<img
							width="355px"
							height="355px"
							style={styles}
							src={image}
							alt={alt}
						/>
					</div>
					<div className="service--text--area">
						<div className="service--heading">
							<h2>{heading}</h2>
						</div>
						<div className="service--text">
							<p>{text}</p>
						</div>
					</div>
				</div>
			</>
		);

}

export default Service
