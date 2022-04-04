import React from 'react';
import './EachReview.css'

const EachReview = (props) => {
    const { name, review, ratings } = props.review;
    return (
        <div className='review-section'>
            <h3>Name : {name} </h3>
            <p><b>Review :</b> {review}</p>
            <p><b>Ratings :</b> {ratings}</p>
        </div>
    );
};

export default EachReview;