import React from "react";
import './Contact.css';

const Contact = () => {
    return(
        <div className="contact">
            <form className="contact__container" action="https://formspree.io/f/mpzboqnd" method="POST">

                <h2 className="contact__title">Contact Us!</h2>

                <input type="name" placeholder="Name" className="contact__input" required />

                   {/* i'm using the formspree service, so i'm gonna need your mail so you can receive the message written in the page */}

                <input name="email" type="email" placeholder="Email" className="contact__input" required />

                <textarea name="message" className="contact__input contact__input-text" placeholder="Message" required />

                <button type="submit" className="contact__btn">Submit</button>
            </form>
        </div>
    );
}

export default Contact;