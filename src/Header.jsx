import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <div className="container">
                <div className="header-content">
                    <div className="header-info">
                        <h1 className="heading-primary">Bring everyone together to build better products.</h1>
                        <p className="text header-text">
                            Manage makes it simple for software teams to play day-today tasks while keeping
                            the longer team goals in view.
                        </p>
                        <button className="btn">Get Started</button>
                    </div>
                    <div className="header-image">
                        {" "}
                        <img
                            src="images/bg-tablet-pattern.svg"
                            alt="tablet pannel"
                            className="header-pattern"
                        />
                        <img
                            src="images/illustration-intro.svg"
                            alt="illustration intro"
                            className="header-illustration"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
