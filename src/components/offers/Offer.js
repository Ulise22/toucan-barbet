import React from "react";
import './Offer.css';

const Offer = (props) => {
    return(
        <div className="offer">
            <div className="offer__image">
                <img src={props.image} alt="sales" />
            </div>
            <div className="offer__text">
                <h2> {props.title} </h2>
                <p> {props.prom1} </p>
                <p> {props.prom2} </p>
                <p> {props.prom3} </p>
            </div>
            <div className="offer__bottom">
                <p className="offer__bottom__p"> ${props.price} </p>
                <button className="offer__bottom__btn">Buy</button>
            </div>
        </div>
    )
}

export default Offer;