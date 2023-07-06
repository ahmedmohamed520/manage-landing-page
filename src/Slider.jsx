import React from "react";

const Slider = () => {
    return (
        <div className="slider">
            {/* Slide */}
            <div className="slide">
                <img src="images/avatar-anisha.png" alt="person" className="slide-img" />
                <h4 className="slide-heading">Anisha Li</h4>
                <p className="text">
                    Manage has supercharged our team’s workflow. The ability to maintain visibility on larger
                    milestones at all times keeps everyone motivated.
                </p>
            </div>
            {/* Slide */}
            <div className="slide">
                <img src="images/avatar-anisha.png" alt="person" className="slide-img" />
                <h4 className="slide-heading">Ali Bravo</h4>
                <p className="text">
                    We have been able to cancel so many other subscriptions since using Manage. There is no
                    more cross-channel confusion and everyone is much more focused.
                </p>
            </div>
            {/* Slide */}
            <div className="slide">
                <img src="images/avatar-anisha.png" alt="person" className="slide-img" />
                <h4 className="slide-heading">Richard Watts</h4>
                <p className="text">
                    Manage allows us to provide structure and process. It keeps us organized and focused. I
                    can’t stop recommending them to everyone I talk to!
                </p>
            </div>
            {/* Slide */}
            <div className="slide">
                <img src="images/avatar-anisha.png" alt="person" className="slide-img" />
                <h4 className="slide-heading">Shanai Gough</h4>
                <p className="text">
                    Their software allows us to track, manage and collaborate on our projects from anywhere.
                    It keeps the whole team in-sync without being intrusive.
                </p>
            </div>
        </div>
    );
};

export default Slider;
