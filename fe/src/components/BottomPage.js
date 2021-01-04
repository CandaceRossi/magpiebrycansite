import React from "react";

const BottomPage = () => {


    return (
        <div>
            <div className="bottom-page">
                <div className="bottoms-grid">
                    <p>Customer Care</p>
                    <div><a href="">About</a> <a href="">Contact</a> <a href="">Events</a></div>
                </div>
                <div className="bottoms-grid">
                    <p>Find what your'e looking for</p>
                    <input placeholder="Search products"></input>
                </div>
                <div className="bottoms-grid">
                    <p>Let's get social!</p>
                    {/* <span></span> */}
                </div>
            </div>
        </div>
    )
}

export default BottomPage;