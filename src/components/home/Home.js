import React from "react";
import logo from '../images/logo.png'
import { Link } from "react-scroll/modules";
import './Home.css';

const Home = () => {
    return(
        <div name="home" className="home">
            <div className="home__image">
                <img src={logo} alt="Toucan Bardet" />
            </div>
            <div className="home__texts">
                <h1 className="home__texts__title">Toucan Barbet</h1>
                <p className="home__texts__p">We are the best bird watching agency in the zone.</p>
                <div className="home__btns">
                    <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >
                        <button className="home__btns__1st">Learn More</button> 
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                        <button className="home__btns__2nd">Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;