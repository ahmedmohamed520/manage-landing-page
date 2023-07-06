import React from "react";

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="features-container">
                    <div className="features-info">
                        <h2 className="heading-secondary">What's different about Manage?</h2>
                        <p className="text features-text">
                            Manage provides all the functionality your team needs, without the complexity. Our
                            software is tailor-made for modern digital product teams.
                        </p>
                    </div>
                    <div className="features-list">
                        {/* Feature */}
                        <div className="feature">
                            <div className="feature-header">
                                <div className="feature-num">01</div>
                                <h3 className="heading-tertiary">Track company-wide progress</h3>
                            </div>
                            <div className="feature-body">
                                <p className="text feature-text">
                                    See how your day-to-day tasks fit into wider vision. Go from tracking
                                    progress at the milestone level all the way done to the smallest of
                                    details. Never lose sight of the bigger picture again.
                                </p>
                            </div>
                        </div>
                        {/* Feature */}
                        <div className="feature">
                            <div className="feature-header">
                                <div className="feature-num">02</div>

                                <h3 className="heading-tertiary">Advanced built-in reports</h3>
                            </div>
                            <div className="feature-body">
                                <p className="text feature-text">
                                    Set internal delivery estimates and track progress toward company goals.
                                    Our customisable dashboard helps you build out the reports you need to
                                    keep key stakeholders informed.
                                </p>
                            </div>
                        </div>
                        {/* Feature */}
                        <div className="feature">
                            {" "}
                            <div className="feature-header">
                                <div className="feature-num">03</div>
                                <h3 className="heading-tertiary">Everything you need in one place</h3>
                            </div>
                            <div className="feature-body">
                                <p className="text feature-text">
                                    Stop jumping from one service to another communicate, tore files, track
                                    tasks and share documents. Manage offers on all-in-one team productivity
                                    solution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
