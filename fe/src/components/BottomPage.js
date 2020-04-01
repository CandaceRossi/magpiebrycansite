import React from "react";

const BottomPage = () => {


    return (
        <div>
            <div className="bottom-page">
                <div className="bottom-grid">
                    <p>Customer Care</p>
                    <span><a>About</a> <a>Contact</a> <a>Events</a></span>
                </div>
                <div className="bottom-grid">
                    <p>Find what your'e looking for</p>
                    <input placeholder="Search products"></input>
                </div>
                <div className="bottom-grid">
                    <p>Let's get social!</p>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default BottomPage;