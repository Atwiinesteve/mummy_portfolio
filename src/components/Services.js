// importing React.
import React from 'react';
import Service from '../others/Service';

// Importing Styles
import "../styles/Services.css";

function Services() {

    // styles
    const styles = {
        width: "50px"
    }

  return (
		<>
			{/* Services Section */}
			<section className="services--area">
				<div className="services--header">
					<h1>services</h1>
                    <hr style={ styles } />
				</div>
				<div className="services--brief--text">
					<p>Some of the Services Available at our Offerings..</p>
				</div>

				{/* All Services */}
				<div className="services">
					<Service
						image="https://images.pexels.com/photos/371285/pexels-photo-371285.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="people holding hands"
						heading="Behavioral Therapy"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					/>
					<Service
						image="https://images.pexels.com/photos/652352/pexels-photo-652352.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="people holding hands"
						heading="Career Guidance"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					/>
					<Service
						image="https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="people holding hands"
						heading="Relationships Counselling"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					/>
					<Service
						image="https://images.pexels.com/photos/984923/pexels-photo-984923.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="people holding hands"
						heading="Couple Counselling"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					/>
				</div>
			</section>
		</>
	);

}

export default Services
