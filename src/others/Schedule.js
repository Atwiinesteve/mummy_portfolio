// importing react
import React from 'react'

// importing styles.
import "../others/Schedule.css";

function Schedule() {

  return (

    <>
      
      <div className="schedule--container">
        <div className="schedule--header">
            <h3>schedule an in-personal meeting now</h3>
            <p>Schedule an appointment with the therapist</p>
        </div>
        <form>
            <div className="input--control meeting--date">
                <input type="date" />
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>

    </>

  );

};

export default Schedule;
