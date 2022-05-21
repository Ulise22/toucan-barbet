import React from "react";
import Offer from "./Offer";
import offer1 from './../images/offer1.jpg';
import offer2 from './../images/offer2.jpg';
import offer3 from './../images/offer3.jpg';
import './Offers.css';

const Offers = () => {
    //1st offer
    const title1 = "The First Offer";
    const prom1 = ["offer1", "offer2", "offer3"];
    const price1 = 10;

    //2nd offer
    const title2 = "The Second Offer";
    const prom2 = ["offer1", "offer2", "offer3"];
    const price2 = 100;

    //3rd offer
    const title3 = "The Third Offer";
    const prom3 = ["offer1", "offer2", "offer3"];
    const price3 = 1000;

    return(
        <div name="offers" className="offers">
            <div className="container">
                <div className="offers__title">
                    <h1>Our current offers</h1>
                </div>
                <div className="offers__targets">
                    <div>
                    <Offer image={offer1} title={title1} prom1={prom1[0]} prom2={prom1[1]} prom3={prom1[2]} price={price1} />
                    </div>
                    <div>
                    <Offer image={offer2} title={title2} prom1={prom2[0]} prom2={prom2[1]} prom3={prom2[2]} price={price2} />
                    </div>
                    <div>
                    <Offer image={offer3} title={title3} prom1={prom3[0]} prom2={prom3[1]} prom3={prom3[2]} price={price3} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Offers;