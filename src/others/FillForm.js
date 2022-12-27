// importing react.
import React from 'react'

// importing styles.
import "../others/FillForm.css";

function FillForm() {
    
    const styles = {
        margin: "0 0 0 10px"
    }

  return (
		<>
			<div className="fill--form--container" style={styles} >
				<div className="fill--form--header">
					<h3>fill in the desired form now</h3>
					<p>Download and Fill in the form provided.</p>
				</div>
				<form>
					<button>Download</button>
				</form>
				<form>
					<button>Submit</button>
				</form>
			</div>
		</>
	);

};

export default FillForm;
