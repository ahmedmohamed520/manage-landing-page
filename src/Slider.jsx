import React, { useCallback, useEffect, useState } from "react";
import Slide from "./Slide";

import { slides } from "./data";
const Slider = () => {
    const numOfSlides = slides.length;
    const [activeSlide, setActiveSlide] = useState(0);
    const slideClassesHandler = (slideId) => {
        // Current slide is active slide
        if (activeSlide === slideId) return "active-slide";

        // Current Slide is first or last slide
        if (activeSlide === 0 && slideId === numOfSlides - 1) return "prev-slide";
        if (activeSlide === numOfSlides - 1 && slideId === 0) return "next-slide";

        // Goes for the reminded slides
        if (slideId === activeSlide - 1) return "prev-slide";
        if (slideId === activeSlide + 1) return "next-slide";
        if (slideId >= activeSlide - 2 || slideId <= activeSlide - 2) return "slide-invisible";
    };
    const nextSlideHandler = useCallback(() => {
        if (activeSlide + 1 >= numOfSlides) {
            setActiveSlide(0);
        } else setActiveSlide((activeSlide) => activeSlide + 1);
    }, [activeSlide]);

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlideHandler();
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, [nextSlideHandler]);
    return (
        <>
            <div className="slider">
                {/* Slide */}
                {slides.map((slide) => (
                    <Slide key={slide.id} {...slide} slideClassesHandler={slideClassesHandler} />
                ))}
            </div>{" "}
            <div className="slider-circles">
                <div
                    onClick={() => {
                        setActiveSlide(0);
                    }}
                    className={`slider-circle ${activeSlide === 0 && "active-circle"}`}
                ></div>
                <div
                    onClick={() => {
                        setActiveSlide(1);
                    }}
                    className={`slider-circle ${activeSlide === 1 && "active-circle"}`}
                ></div>
                <div
                    onClick={() => {
                        setActiveSlide(2);
                    }}
                    className={`slider-circle ${activeSlide === 2 && "active-circle"}`}
                ></div>
                <div
                    onClick={() => {
                        setActiveSlide(3);
                    }}
                    className={`slider-circle ${activeSlide === 3 && "active-circle"}`}
                ></div>
            </div>
        </>
    );
};

export default Slider;
