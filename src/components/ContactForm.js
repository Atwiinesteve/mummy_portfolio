// importing react.
import React from 'react';

// importing react styles.
import "../styles/ContactForm.css";

// contact form component.
function ContactForm() {

    return (

        <>
            
            <section id="contact--form--area">
                <div className="contact--form--header">
                    <h1>Don't wait longer. Start forging your own path today.</h1>
                </div>
                <form autoComplete="off" >
                    <div className="input--control">
                        <label htmlFor='names'>full names</label><br/>
                        <input type="text" />
                    </div>
                    <div className="input--control">
                        <label>email</label><br/>
                        <input type="email" />
                    </div>
                    <div className="input--control">
                        <label>contact number</label><br/>
                        <input type="tel" />
                    </div>
                    <div className="input--control">
                        <label>message</label><br/>
                        <textarea cols="30" rows="10"></textarea>
                    </div>
                    <div className="submit--button">
                        <button type="submit" >send</button>
                    </div>
                </form>
            </section>

        </>

    );

}

export default ContactForm;
