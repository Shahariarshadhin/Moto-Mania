import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../images/coverPic.png';
import EachReview from '../../EachReview/EachReview';
import motoCard from '../../hook/useMotoCard';
import './Home.css'

const Home = () => {

    const [moto, setMoto] = motoCard();

    const moto2 = moto.slice(0, 3);

    // const handleReviews = (selectedItem) => {
    //     console.log(selectedItem)

    // }
    return (
        <div className='hommy'>


            <div className='home'>
                <div>


                    <h1>Your Next One</h1>
                    <h1><span className='bisque'>Your Best One</span></h1>
                    <p>We will Provide you the best product on the market with different version and color alongside the best price and few more extra warranty times.</p>
                    <p><b>Your Enjoyment is our Happinesss!!..</b></p>
                    <button className='demo-btn'>Live Demo</button>



                </div>
                <div>

                    <img src={images} alt="" />

                </div>
            </div>

            <h1>Customers Reviews</h1>

            <div className='review-box'>


                {
                    moto2.map(review => <EachReview

                        key={review.id}
                        review={review}
                    // handleReviews={handleReviews}
                    ></EachReview>)
                }
            </div>

            <div className='see-review-btn'>

                <Link to="/reviews">See All Reviews</Link>
            </div>

        </div>
    );
};

export default Home;