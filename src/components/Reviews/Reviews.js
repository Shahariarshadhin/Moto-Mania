import React from 'react';
import useMotoCard from '../hook/useMotoCard';
// import Home from '../Header/Home/Home';
import EachReview from '../EachReview/EachReview';


const Reviews = () => {

    const [moto, setMoto] = useMotoCard();
    return (
        <div>
            <h2>This is review page</h2>

            <div className='review-box'>
                {
                    moto.map(review => <EachReview

                        key={review.id}
                        review={review}
                    ></EachReview>)
                }
            </div>




        </div>
    );
};

export default Reviews;