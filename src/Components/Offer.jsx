import React from "react";
import offerimage from '../images/offer.png';

function Offer(){
    return(
        <div id='offers'>
            <div className='offer-img'>
                <img src={offerimage} alt='' />
            </div>
            <div className='about-text'>
            <h1>A BIG <span>OFFER</span> FOR THIS SUMMER</h1>
                <p>GO OGOGOOGOGO OPEN AND SEE</p>
                <div className='header-btns'>
                    <a href='#' className='header-btn'>JOIN</a>
                </div>
            </div>    
            </div>
    )
}

export default Offer;