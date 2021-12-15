import React, { Component } from 'react';
import Card from "./Card";
import data2 from "../datas/data2";

class Slideshow extends Component {
    constructor(props) {
        super();
        this.state = {
            //set piture images
            properties: data2.properties,
            property: data2.properties[0]
        }
    }
    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: data2.properties[newIndex]
        })
    }
    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: data2.properties[newIndex]
        })
    }
    render() {
        const { properties, property } = this.state;
        return (
            <div className="slideshow">
               
                <div className="page">
                 <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button>
                <button onClick={() => this.nextProperty()} disabled={property.index === data2.properties.length - 1}>Next</button>
                          </div>
                    {/* <section>
                        <img src={logo} className="Slideshow-logo" alt="logo" />
                    </section> */}
                    <div className="cards-slider">
                        <div className="cards-slider-wrapper" style={{
                            'transform': `translateX(-${property.index * (100 / properties.length)}%)`
                        }}>
                            {properties.map(property => <Card property={property} key={property._id} />)}

                        </div>
             

                </div>
            </div>
        )
    }
}
export default Slideshow;