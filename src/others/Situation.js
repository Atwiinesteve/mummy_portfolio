// import react.
import React from "react";

// importing styles.
import "../others/Situation.css";

function Situation({ image, title, text }) {
	return (
		<>
			<div className="situation--card">
				<div className="card--header">
					<img width="50px" src={image} alt="cloud" />
					<h3>{title}</h3>
				</div>
				<div className="card--content">
					<p>{text}</p>
				</div>
			</div>
		</>
	);
}

export default Situation;
