import React, { Component } from 'react';
import Card from "./Card";
import data from "../data/data";

class Slideshow extends Component {
    constructor(props) {
        super();
        this.state = {
            //set piture images
            properties: data.properties,
            property: data.properties[0]
        }
    }
    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }
    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }
    render() {
        const { properties, property } = this.state;
        return (
            <div className="Slideshow">
                <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button>
                <button onClick={() => this.nextProperty()} disabled={property.index === data.properties.length - 1}>Next</button>
                <div className="page">
                    {/* <section>
                        <img src={logo} className="Slideshow-logo" alt="logo" />
                    </section> */}
                    <div className="cards-slider">
                        <div className="cards-slider-wrapper" style={{
                            'transform': `translateX(-${property.index * (100 / properties.length)}%)`
                        }}>
                            {properties.map(property => <Card property={property} key={property._id} property={property} />)}

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Slideshow;