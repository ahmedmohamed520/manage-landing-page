import React from "react";

const Slide = ({ id, image, title, text, slideClassesHandler }) => {
    return (
        <div className={`slide ${slideClassesHandler(id)}`}>
            <img src={image} alt={title} className="slide-img" />
            <h4 className="slide-heading">{title}</h4>
            <p className="text">{text}</p>
        </div>
    );
};

export default Slide;
