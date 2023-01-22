// importing react
import React from 'react';

// importing styles.
import "../others/BookAppointment.css";

// appointment form component.
function BookAppointment() {

  return (

    <>
      
        <form>
            <div className="form--header">
                <h2>Book An Appointment</h2>
            </div>
            <div className="input--area">
                <div className="input--control">
                    <input type="text" placeholder="Name" />
                </div>
                <div className="input--control">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input--control">
                    <input type="text" placeholder="Subject" />
                </div>
                <div className="input--control">
                    <input type="date" placeholder="Subject" />
                </div>
            </div>
            <div className="form--header">
                <h2>Address Details</h2>
            </div>
            <div className="input--area">
                <div className="address--details-1">
                    <div className="input--control">
                        <input type="text" placeholder="Your Address" />
                    </div>
                    <div className="input--control">
                        <input type="text" placeholder="City" />
                    </div>
                </div>
                <div className="address--details-2">
                    <div className="input--control">
                        <input type="text" placeholder="State" />
                    </div>
                    <div className="input--control">
                        <input type="text" placeholder="Postal Code" />
                    </div>
                </div>
            </div>
        </form>

    </>

  );

};

// exporting component.
export default BookAppointment;
