import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    {/* Socials */}
                    <div className="footer-socials">
                        <div className="logo">manage</div>
                        <div className="social-icons">
                            <a href="/" className="social-icon">
                                <img src="images/icon-facebook.svg" alt="facebook" />
                            </a>
                            <a href="/" className="social-icon">
                                <img src="images/icon-youtube.svg" alt="youtube" />
                            </a>
                            <a href="/" className="social-icon">
                                <img src="images/icon-twitter.svg" alt="twitter" />
                            </a>
                            <a href="/" className="social-icon">
                                <img src="images/icon-pinterest.svg" alt="pinterest" />
                            </a>
                            <a href="/" className="social-icon">
                                <img src="images/icon-instagram.svg" alt="instagram" />
                            </a>
                        </div>
                    </div>
                    {/* Links */}
                    <div className="footer-links">
                        <a href="/" className="footer-link">
                            Home
                        </a>
                        <a href="/" className="footer-link">
                            Pricing
                        </a>
                        <a href="/" className="footer-link">
                            Products
                        </a>
                        <a href="/" className="footer-link">
                            About Us
                        </a>
                    </div>
                    <div className="footer-links">
                        <a href="/" className="footer-link">
                            Careers
                        </a>
                        <a href="/" className="footer-link">
                            Community
                        </a>
                        <a href="/" className="footer-link">
                            Privacy Policy
                        </a>
                    </div>
                    <div className="copyrights">
                        <form className="footer-form">
                            <input placeholder="Updates in your inbox..." type="email" />
                            <button className="btn">Go</button>
                        </form>
                        <p>Copyright 2020. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
