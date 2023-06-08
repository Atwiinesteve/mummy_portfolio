// importing React.
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// importing components.
import Service from '../others/Service';

// Importing Styles
import "../styles/Services.css";

function Services() {

    // styles
    const styles = {
        width: "50px"
    }

	// carousel settings
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		rtl: true,
	};

  return (
		<>
			{/* Services Section */}
			<section className="services--area">
				<div className="services--header">
					<h1>Services Provided</h1>
					<hr style={styles} />
				</div>
				<div className="services--brief--text">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio a
						reiciendis sit aperiam sint saepe ut laudantium eos quo facere.
						Deleniti saepe accusamus similique
					</p>
				</div>

				{/* All Services */}
				<div className="services">
					<Slider {...settings}>
						<Service
							image="https://cdn-icons-png.flaticon.com/128/7145/7145099.png"
							alt="icon"
							heading="Stress Therapy"
							text="Esint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
						/>
						<Service
							image="https://cdn-icons-png.flaticon.com/128/3997/3997728.png"
							alt="icon"
							heading="Depression Therapy"
							text="Esint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
						/>
						<Service
							image="https://cdn-icons-png.flaticon.com/128/2909/2909829.png"
							alt="icon"
							heading="Individual Therapy"
							text="Esint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
						/>
						<Service
							image="https://cdn-icons-png.flaticon.com/128/168/168478.png"
							alt="icon"
							heading="Couples Therapy"
							text="Esint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
						/>
						<Service
							image="https://cdn-icons-png.flaticon.com/128/3997/3997728.png"
							alt="icon"
							heading="Teenage Therapy"
							text="Esint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
						/>
						<Service
							image="https://cdn-icons-png.flaticon.com/128/7081/7081252.png"
							alt="icon"
							heading="Child Therapy"
							text="Esint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
						/>
					</Slider>
				</div>
			</section>
		</>
	);

}

export default Services
