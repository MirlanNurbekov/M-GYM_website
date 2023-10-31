import React from "react";
import offerimage from '../images/offer.png';

function MembershipPlans(){
    return(
        <div id='membershipPlans'>
            <div className='offer-img'>
                <img src={offerimage} alt='' />
            </div>
            <div className='about-text'>
            <h1>MembershipPlans</h1>
                <div className='header-btns'>
                    <a href='#' className='header-btn'>JOIN</a>
                </div>
            </div>    
            </div>
    )
}

export default MembershipPlans;