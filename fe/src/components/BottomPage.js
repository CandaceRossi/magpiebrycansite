import React from "react";

const BottomPage = () => {


    return (
        <div>
            <div className="bottom-page">
                <div className="bottoms-grid">
                    <p>Customer Care</p>
                    <div className="bottoms-list"><a href="">About</a> <a href="">Contact</a> <a href="">Events</a></div>
                </div>
                <div className="bottoms-grid">
                    <p>Find what you're looking for</p>
                    <input style={{marginTop: "15px"}} placeholder="Search products"></input>
                </div>
                <div className="bottoms-grid">
                    <p>Let's get social!</p>
                   <div style={{marginTop: "15px"}}><a href="">IG</a> <a href="">Twitter</a> <a href="">Facebook</a></div>
                </div>
            </div>
        </div>
    )
}

export default BottomPage;