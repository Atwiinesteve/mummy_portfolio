// importing react and other modules.
import React from "react";
import { Link } from "react-router-dom";


// payments model
function Success() {
	return (
		<>
			<h1>Payment Successful</h1>
            <button>
                <Link to={'/'}>back to home</Link>
            </button>
		</>
	);
}

// exporting Success module.
export default Success;