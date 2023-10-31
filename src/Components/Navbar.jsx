import React, {useState} from 'react';
import logosighn from '../images/Mgym.png';
import logo from '../images/logogym.png';
import {Link} from 'react-scroll';


function Navbar(){

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={nav? "nav active" : "nav"}>
            <Link to='main' className='logo' smooth={true} duration={2000} >
                <br></br>
                <img src={logosighn} alt=''/>
                <br></br>
                <img src={logo} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                
                <li><Link to='features' smooth={true} duration={1000} >Features</Link></li>
                <li><Link to='offers' smooth={true} duration={1000} >Offers</Link></li>
                <li><Link to='about' smooth={true} duration={1000} >About</Link></li>
                <li><Link to='contact' smooth={true} duration={1000} >Contact</Link></li>
                <li><Link to='test' smooth={true} duration={1000} >TEST</Link></li>
                <li><Link to='test' smooth={true} duration={1000} >TEST</Link></li>
                <li><Link to='membershipPlans' smooth={true} duration={1000} >Membership Plans</Link></li>
            </ul>
        </nav>
        
    )
}

export default Navbar;