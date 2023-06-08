// importing react
import React from 'react';

// importing styles.
import "../others/BookAppointment.css";

// appointment form component.
function BookAppointment() {

	// clean input areas
	const inputCleaner = () => {
		return {
			name: '',
			email: '',
			numbers: '',
			date: '',
			message: ''
		}
	};

    return (
			<>
				<form onSubmit={() => inputCleaner()}
					action="https://formspree.io/f/moqbkyqe"
					className="book--appointment__form"
					method="POST"
				>
					<div className="form--header appointment">
						<h2>Book An Appointment</h2>
					</div>
					<div className="input--area">
						<div className="input--control">
							<input name="name" type="text" placeholder="Name" />
						</div>
						<div className="input--control">
							<input name="email" type="email" placeholder="Email" />
						</div>
						<div className="input--control">
							<input name="subject" type="text" placeholder="Subject" />
						</div>
						<div className="input--control">
							<input name="date" type="date" />
						</div>
					</div>
					<div className="form--header address">
						<h2>Address Details</h2>
					</div>
					<div className="input--area">
						<div className="address--details-1">
							<div className="input--control">
								<input name="address" type="text" placeholder="Your Address" />
							</div>
							<div className="input--control">
								<input name="phone" type="tel" placeholder="Phone" />
							</div>
						</div>
						<div className="address--details-2">
							<div className="input--control">
								<input name="country" type="text" placeholder="Country" />
							</div>
							<div className="input--control">
								<input name="city" type="text" placeholder="City" />
							</div>
						</div>
					</div>
					<button type="submit">submit</button>
				</form>
			</>
		);

};

// exporting component.
export default BookAppointment;
