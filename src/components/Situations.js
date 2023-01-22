// importing react.
import React from "react";

// importing components.
import Situation from "../others/Situation";

// importind styles.
import "../styles/Situations.css";

function Situations() {
	return (
		<>
			<section id="situations--section">
				<div className="situations--header">
					<h2>Situations I can help with..</h2>
					<p>
						MindPillar will provide you with professional support when you feel
						low, anxious or stressed, and it can guide you along a path of
						positive change.
					</p>
				</div>

				<div className="situations--content">
					<Situation
						image="https://cdn-icons-png.flaticon.com/512/4843/4843981.png"
						title="Anxiety"
						text="Together we work in a thorough and interactive way to achieve a shift in thinking so that things that used to make you anxious no longer do."
					/>
					<Situation
						image="https://cdn-icons-png.flaticon.com/512/5377/5377537.png"
						title="Confidence"
						text="Together we work in a thorough and interactive way to achieve a shift in thinking so that things that used to make you anxious no longer do."
					/>
					<Situation
						image="https://cdn-icons-png.flaticon.com/512/4406/4406393.png"
						title="Coaching"
						text="Together we work in a thorough and interactive way to achieve a shift in thinking so that things that used to make you anxious no longer do."
					/>
					<Situation
						image="https://cdn-icons-png.flaticon.com/512/4214/4214058.png"
						title="Creativity"
						text="Together we work in a thorough and interactive way to achieve a shift in thinking so that things that used to make you anxious no longer do."
					/>
					<Situation
						image="https://cdn-icons-png.flaticon.com/512/4939/4939498.png"
						title="Habits"
						text="Together we work in a thorough and interactive way to achieve a shift in thinking so that things that used to make you anxious no longer do."
					/>
					<Situation
						image="https://cdn-icons-png.flaticon.com/512/5377/5377537.png"
						title="Confidence"
						text="Together we work in a thorough and interactive way to achieve a shift in thinking so that things that used to make you anxious no longer do."
					/>
					<Situation
						image="https://cdn-icons-png.flaticon.com/512/4406/4406393.png"
						title="Coaching"
						text="Together we work in a thorough and interactive way to achieve a shift in thinking so that things that used to make you anxious no longer do."
					/>
					<Situation
						image="https://cdn-icons-png.flaticon.com/512/4214/4214058.png"
						title="Creativity"
						text="Together we work in a thorough and interactive way to achieve a shift in thinking so that things that used to make you anxious no longer do."
					/>
					<Situation
						image="https://cdn-icons-png.flaticon.com/512/4939/4939498.png"
						title="Habits"
						text="Together we work in a thorough and interactive way to achieve a shift in thinking so that things that used to make you anxious no longer do."
					/>
				</div>
			</section>
		</>
	);
}

export default Situations;
