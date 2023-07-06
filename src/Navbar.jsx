import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-container">
                    <div className="logo">
                        <img src="images/logo.svg" alt="logo" />
                    </div>
                    <div className={`nav-menu ${isMenuOpen && "show"}`}>
                        <div className="overlay"></div>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Product
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Careers
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Community
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn">Get Started</button>
                    <div onClick={toggleMenuHandler} className="nav-toggler">
                        <img
                            src="images/icon-hamburger.svg"
                            alt="menu opener"
                            className={`${!isMenuOpen && "show"}`}
                        />
                        <img
                            src="images/icon-close.svg"
                            alt="menu opener"
                            className={`${isMenuOpen && "show"}`}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
