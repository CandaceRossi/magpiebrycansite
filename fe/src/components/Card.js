import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ property }) => {
    const { index, picture } = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt="item" />
        </div>
    )
}

export default Card;