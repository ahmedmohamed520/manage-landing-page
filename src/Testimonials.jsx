import React from "react";
import Slider from "./Slider";

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2 className="heading-secondary ">What they've said</h2>
            <Slider />
            <img src="images/bg-tablet-pattern.svg" alt="pattern" className="testimonial-pattern" />

            <button className="btn">Get Started</button>
        </section>
    );
};

export default Testimonials;
