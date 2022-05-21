import React, { useState} from "react";
import { Link } from "react-scroll/modules";
import Logo from '../images/logo.png'
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => setMenu(!menu);

    return(
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <a href="#">
                        <img src={Logo} className="logo__img" />
                        <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}></Link>
                    </a>
                </div>

                <div className="navbar__icon" onClick={handleClick}>
                    <i className={menu ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'} />
                </div>

               <ul className={menu ? "navbar__list active" : "navbar__list"}>
                    <li className="navbar__list-item" >
                        <a href="/" className="navbar__list-links">
                            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} onClick={handleClick}>Home</Link>
                        </a>
                    </li>
                    <li className="navbar__list-item">
                        <a href="/" className="navbar__list-links">
                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} onClick={handleClick}>About</Link>
                        </a>
                    </li>
                    <li className="navbar__list-item">
                        <a href="/" className="navbar__list-links">
                            <Link activeClass="active" to="offers" spy={true} smooth={true} duration={500} onClick={handleClick}>Offers</Link>
                        </a>
                    </li>
                    <li className="navbar__list-item">
                        <a href="/" className="navbar__list-links">
                            <Link activeClass="active" to="toucan" spy={true} smooth={true} duration={500} onClick={handleClick}>Toucan Barbet</Link>
                        </a>
                    </li>
                    <li className="navbar__list-item">
                        <a href="/" className="navbar__list-links">
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} onClick={handleClick}>Contact</Link>
                        </a>
                    </li>
               </ul>
            </div>
        </div>
    )
}

export default Navbar;