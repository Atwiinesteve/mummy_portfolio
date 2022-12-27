// import react
import React from 'react'

// importing styles.
import "../others/WorkCard.css";


function WorkCard({ image, title, text, buttonText }) {

    return (

        <>
            <div className="card">
                <img width="90px" src={image} alt="heart" />
                <div className="card--title">
                    <p>{ title }</p>
                </div>
                <div className="card--text">
                    <p>{ text }</p>
                </div>
                <div className="card--button">
                    <button>{ buttonText }</button>
                </div>

            </div> 
        </>

    );

};


export default WorkCard
