// importing react and other modules.
import React from 'react';

// importing components.
import Navbar from '../../components/Navbar';

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

        </div>
	);
};

// exporting contacts module.
export default Contacts;