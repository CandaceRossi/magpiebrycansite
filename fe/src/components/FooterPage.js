import React from "react";

const FooterPage = () => {


    return (
        <div>
            <div className="footer-page">
                <div className="footer-grid">
                    <span><a href="">PRIVACY POLICY</a> <a href="">TERMS AND CONDITIONS</a> <a href="">FAQS</a></span>
                </div>
                <div className="footer-grid">
                    <p>© 2020 Magpie Designs All Rights Reserved.</p>
                    <p>Handcrafted by Advanced Studios</p>
                </div>
                <div className="footer-grid">
                    <p>Visa Mastercard</p>
                    {/* <span></span> */}
                </div>
            </div>
        </div>
    )
}

export default FooterPage;