import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__space"></div>
            <div className="footer__container">

                <ul className="footer__contact">
                    <li>tunombre@gmail.com</li>
                    <li>+54 11 1111 1111</li>
                </ul>

                <ul className="footer__social">
                    <h2>Contact</h2>
                    <li>
                        <a href="https:www.facebook.com" target="_blank">
                            <i className="fab fa-facebook" /> Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https:www.twitter.com" target="_blank">
                            <i className="fab fa-twitter" /> Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https:www.instagram.com" target="_blank">
                            <i className="fab fa-instagram" /> Instagram
                        </a>
                    </li>
                    <li>
                        {/* Replace it with your mail */}
                        <a href="mailto:ulimontenegro23@gmail.com" target="_blank">
                            <i className="fas fa-envelope" /> Mail
                        </a>
                    </li>
                </ul>

            </div>

            <div className="footer__copy">
                <h3>Copyright © 2022 Toucan Barbet Birds Expeditions </h3>
            </div>
        </div>
    )
}

export default Footer;