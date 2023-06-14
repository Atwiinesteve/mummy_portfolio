// importing react and other modules.
import React from "react";
import { Link } from "react-router-dom";


// payments model
function Cancel() {
	return (
		<>
			<h1>Payment Cancelled by user</h1>
            <button>
                <Link to={'/'}>back to home</Link>
            </button>
		</>
	);
}

// exporting Cancel module.
export default Cancel;
