import React from 'react';
import {v4 as uuidv4 } from "uuid";

const Rating = ({value, text, color}) => {
    return (
        <div>
            {[1,2,3,4,5].map(rate => <span
            key={uuidv4()}>
                <i
                style={{color}}
                className={
                    value + 1 === rate + 0.5
                    ? "fa-solid fa-star-half-stroke"
                    : value >= rate
                    ? "fa-solid fa-star"
                    : "fa-regular fa-star"
                }
                >
                </i>
            </span>)}
            <span className='ms-3 fw-bold'>{text && text}</span>
        </div>
    );
};

Rating.defaultProps = {
    color: "#FFA41C"
}

export default Rating;