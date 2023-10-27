import React from 'react';

function Contact(){
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form>
            
                <textarea placeholder='Name' name='message'></textarea>
                <textarea placeholder='Email' name='message'></textarea>
                <textarea placeholder='Message' name='message'></textarea>
                <div className='header-btns'>
                    <a href='#' className='header-btn'>SEND</a>
                </div>
            </form>
        </div>
    )
}

export default Contact;

//<imput type='text' placeholder='Full Name' required />
//<imput type='email' placeholder='Email' required />
//<imput type='submit' value='Send' />