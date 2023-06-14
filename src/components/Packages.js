// importing react
import React from 'react';

// importing styles
import "../styles/Packages.css";
import BasicPackagePayment from '../payments/BasicPayment';
import StandardPackagePayment from '../payments/StandardPayment';
import PremiumPackagePayment from '../payments/PremiumPaymnet';

// packages component.
function Packages() {

  return (
		<>
			<section id="packages--area">
				<div className="packages--header">
					<h2>Counseling Packages</h2>
				</div>
				<div className="packages--header__text">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse
					</p>
				</div>
				<div className="packages--container">
					{/* basic */}
					<div className="basic">
						<div className="icon">
							<span>
								<img
									className='icon--image'
									width="80px"
									height="80px"
									src="https://cdn-icons-png.flaticon.com/128/835/835369.png"
									alt="standard price"
								/>
							</span>
						</div>
						<div className="package--header">
							<h2>Basic</h2>
							<p>For A Month</p>
						</div>
						<div className="price">
							<span>$27</span>
						</div>
						<div className="package--contents">
							<p>Weekly Health Checkup</p>
							<p>Free Diet Counselling</p>
							<p>Custom Execise Plan</p>
							<p>24/7 Online Health Support</p>
						</div>
						<div className="get--started__btn">
							{/* <button>get started</button> */}
							<BasicPackagePayment />
						</div>
					</div>

					{/* standard */}
					<div className="standard">
						<div className="icon">
							<span>
								<img className='icon--image'
									width="80px"
									height="80px"
									src="https://cdn-icons-png.flaticon.com/128/4547/4547315.png"
									alt="standard price"
								/>
							</span>
						</div>
						<div className="package--header">
							<h2>Standard</h2>
							<p>For A Month</p>
						</div>
						<div className="price">
							<span>$41</span>
						</div>
						<div className="package--contents">
							<p>Weekly Health Checkup</p>
							<p>Free Diet Counselling</p>
							<p>Custom Execise Plan</p>
							<p>24/7 Online Health Support</p>
						</div>
						<div className="get--started__btn">
							{/* <button>get started</button> */}
							<StandardPackagePayment />
						</div>
					</div>

					{/* professional */}
					<div className="professional">
						<div className="icon">
							<span>
								<img className='icon--image'
									width="80px"
									height="80px"
									src="https://cdn-icons-png.flaticon.com/128/2874/2874745.png"
									alt="standard price"
								/>
							</span>
						</div>
						<div className="package--header">
							<h2>Premium</h2>
							<p>For A Month</p>
						</div>
						<div className="price">
							<span>$54</span>
						</div>
						<div className="package--contents">
							<p>Weekly Health Checkup</p>
							<p>Free Diet Counselling</p>
							<p>Custom Execise Plan</p>
							<p>24/7 Online Health Support</p>
						</div>
						<div className="get--started__btn">
							{/* <button>get started</button> */}
							<PremiumPackagePayment />
						</div>
					</div>
				</div>
			</section>
		</>
	);

};

// exporting component.
export default Packages