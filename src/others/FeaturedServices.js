// Importing react.
import React from 'react'

// Importing styles.
import "../others/FeaturedServices.css";

// importing components.
import Schedule from './Schedule';
import FillForm from './FillForm';

function FeaturedServices() {

  const styles = {
    width: "50px"
  }

  return (

    <>
      
      <section id="featured--services">
        <div className="featured--services--heading">
          <h3>Featured Services</h3> 
          <hr style={styles} />
        </div>
        <div className="featured--services--text">
          <p>
            Individual, Couple & Family Counselling
          </p>
        </div>
        <div className="featured--services--offers">
          <Schedule />
          <FillForm />
        </div>
      </section>

    </>

  )

}

export default FeaturedServices
