// importing react
import React from "react";

// importing styles.

// Appointment Image component.
function AppointmentImage() {
	const styles = {
		marginTop: "2rem",
		objectFit: "cover"
	}
	return (
		<>
			<img
				style={styles}
				width="400px"
				height="560px"
				src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
				alt="doctor"
			/>
		</>
	);
}

// exporting appointment image component.
export default AppointmentImage;
