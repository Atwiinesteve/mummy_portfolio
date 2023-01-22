// importing react and other modules.
import React from 'react';

// importing components.
import Navbar from '../../components/Navbar';
import Location from '../../others/Location';
import Footer from '../../components/Footer';

// imporing styles.
import "../contacts/Contacts.css";

// contacts model
function Contacts() {

  return (
		<div id="contacts--area">
			{/* Navbar  */}
			<Navbar />

			<section className="hero--area">
				<h1>Contact us</h1>
				<div className="links">
					<a href="/">home</a> <span></span> <p>Contacts</p>
				</div>
			</section>

			<section className="contacts__info">
				<div className="phone__area">
					<div className="icon">
						<span>
							<i className="fa fa-phone"></i>
						</span>
					</div>
					<div className="header">
						<h2>Phone</h2>
					</div>
					<div className="text">
						<p>
							We will be happy to assist you.Please call us, we will work with
							you, not for you
						</p>
					</div>
					<div className="number">
						<p>(+265) 772965708</p>
					</div>
				</div>
				<div className="email__area">
					<div className="icon">
						<span>
							<i className="fa fa-envelope"></i>{" "}
						</span>
					</div>
					<div className="header">
						<h2>Email</h2>
					</div>
					<div className="text">
						<p>
							We will be happy to assist you.Please mail us, we will work with
							you, not for you
						</p>
					</div>
					<div className="email">
						<p>stephenkiiza123@gmail.com</p>
					</div>
				</div>
				<div className="address__area">
					<div className="icon">
						<span>
							<i className="fa fa-map"></i>{" "}
						</span>
					</div>
					<div className="header">
						<h2>Address</h2>
					</div>
					<div className="text">
						<p>P.O box 1612,Collins street</p> <p> Victoria 8007, Australia</p>
					</div>
					<div className="map-info">
						<p>View On Google map</p>
					</div>
				</div>
			</section>

			<section className="contacts-form">
				<form action="https://formspree.io/f/moqbkyqe" method="POST" autoCapitalize="none">
					<div className="form--header">
						<h2>Get In Touch</h2>
					</div>
					<div className="form--header__text">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
							ipsum suspendisse
						</p>
					</div>
					<div className="input__areas">
						<div className="input--area">
							<label htmlFor="full names">
								Your Full Names<sup>*</sup>
							</label>
							<input type="text" />
						</div>
						<div className="input--area">
							<label htmlFor="email address">
								Your Email Address<sup>*</sup>
							</label>
							<input type="email" />
						</div>
						<div className="input--area">
							<label htmlFor="phone number">
								Your Phone Number<sup>*</sup>
							</label>
							<input type="tel" />
						</div>
						<div className="input--area textarea">
							<label htmlFor="message">
								Your Message<sup>*</sup>
							</label>
							<textarea cols="30" rows="10"></textarea>
						</div>
					</div>
					<div className="button">
						<button>send message</button>
					</div>
				</form>
			</section>

			<section id="google--maps" style={{ marginTop: "3rem" }}>
				<Location />
			</section>

			{/* Footer Section */}
			<Footer />
		</div>
	);
};

// exporting contacts module.
export default Contacts;