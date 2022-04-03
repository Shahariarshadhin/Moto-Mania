import React from 'react';
import images from '../../../images/coverPic.png';
import './Home.css'

const Home = () => {
    return (
        <div className='hommy'>
            <h2>This is home</h2>

            <div className='home'>
                <div>

                    <h1>Your Next One</h1>
                    <h1>Your Best One</h1>
                    <p>We Will Provide you the best product on the market with different version and color alongside the best price and few more extra warranty times.</p>
                    <p>Your Enjoyment is our Happinesss!!..</p>
                    <button>Live Demo</button>

                </div>
                <div>

                    <img src={images} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Home;