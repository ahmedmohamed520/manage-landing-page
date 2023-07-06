import React, { useState } from "react";

function ValidateEmail(value) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (value.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

const Footer = () => {
    const [emailInputValue, setEmailInputValue] = useState("");
    const [inputError, setInputError] = useState("");

    const inputChangeHandler = (e) => {
        setEmailInputValue(e.target.value);
    };
    const validateEmail = () => {
        setInputError("");
        if (emailInputValue.trim().length === 0) setInputError("Email should not be empty.");
        if (!ValidateEmail(emailInputValue)) setInputError("Please enter a valid email.");
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (!inputError) {
            setEmailInputValue("");
        }
    };
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
                    <div className="footer-links-container">
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
                    </div>

                    <div className="copyrights">
                        <form onSubmit={submitHandler} className={`footer-form ${inputError && "error"}`}>
                            <div className="form-group">
                                <input
                                    value={emailInputValue}
                                    onChange={inputChangeHandler}
                                    onBlur={validateEmail}
                                    placeholder="Updates in your inbox..."
                                    type="email"
                                />
                                {inputError && <span>{inputError}</span>}
                            </div>

                            <button onClick={validateEmail} className="btn">
                                Go
                            </button>
                        </form>
                        <p>Copyright 2020. All Rights Reserved</p>
                    </div>
                    <p className="mob-copyrights">Copyright 2020. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
