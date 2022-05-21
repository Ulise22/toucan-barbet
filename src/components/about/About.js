import React from "react";
import about from '../images/about.jpg';
import './About.css';

const About = () => {
    return(
        <div name="about" className="about">
            <div className="container">
                <div className="about__paragraph">
                    <h2>Every travel it's an adventure, give it a try to yours!</h2>
                </div>
                <div className="about__container">
                    <div className="about__container">
                        <div className="about__text">
                            <h1 className="about__text__title">About us</h1>
                            <p className="about__text__p">We are a bird watching agency.</p>
                            <p className="about__text__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt erat non erat pretium tincidunt. Nam molestie tortor venenatis tortor tempus, nec dignissim erat vulputate. Nullam posuere bibendum mauris, ut viverra magna mattis vitae. Phasellus pretium dui sem, vitae gravida erat dapibus sed. Quisque laoreet leo vitae ipsum dapibus pharetra. Proin tempor dui sit amet blandit commodo. Quisque nisl nulla, tempus sed velit vitae, vulputate facilisis velit. Nam sit amet ultricies velit, vel ultrices metus. Nulla dictum leo id ligula tempus, in pellentesque justo varius. Nulla cursus ligula sed tellus egestas porttitor. Integer vitae lorem commodo augue sagittis auctor.</p>
                        </div>
                        <div className="about__img">
                            <img src={about} alt="toucan barbet" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;