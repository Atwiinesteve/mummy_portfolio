// importing react.
import React from "react";

// importing components.
import WorkCard from "../others/WorkCard";

// importing styles.
import "../styles/HowIWork.css";

function HowIWork() {
	return (
		<>
			<section id="how--it--works">
                <div className="how--it--works--header">
                    <h2>how it works</h2>
                </div>
                <div className="cards--section">
                    <WorkCard
                        image="https://cdn-icons-png.flaticon.com/512/4056/4056974.png"
                        title="evidence-based care"
                        text="Cognitive Behavior Therapy/ Narrative Theory Grounded in current data-driven research Experienced Top-Tier Talent"
                        buttonText="about me"
                    />
                    <WorkCard
                        image="https://cdn-icons-png.flaticon.com/512/2098/2098313.png"
                        title="personalised treatment plans"
                        text="Tailored to your needs and outcome-based Stay accountable and focused on your goals Track your progress along the way"
                        buttonText="start"
                    />
                    <WorkCard
                        image="https://cdn-icons-png.flaticon.com/512/3781/3781731.png"
                        title="human centered"
                        text="Smart technology that is efficient, easy to use and protects your privacy HIPPA compliant tele-health, home visits or office visits"
                        buttonText="book an appointment"
                    />
                </div>
			</section>
		</>
	);
}

export default HowIWork;
