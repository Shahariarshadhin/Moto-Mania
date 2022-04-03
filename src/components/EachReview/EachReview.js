import React from 'react';

const EachReview = (props) => {
    const { name, review, ratings } = props.review;
    return (
        <div>
            <h3>Name :{name} </h3>
            <h4>Review : {review}</h4>
            <h4>Ratings :{ratings}</h4>
        </div>
    );
};

export default EachReview;