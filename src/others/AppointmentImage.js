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
				src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHN5Y2hvbG9neSUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
				alt="doctor"
			/>
		</>
	);
}

// exporting appointment image component.
export default AppointmentImage;
