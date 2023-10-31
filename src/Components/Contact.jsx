import React from 'react';

function Contact(){
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form>
                <input type='text' placeholder='Full Name'/>
                <input type='eamil' placeholder='E-mail'/>
                <textarea placeholder='Message' name='message'></textarea>
                <input type='submit' value='SEND'/>
            </form>
        </div>
    )
}

export default Contact;

//<imput type='text' placeholder='Full Name' required />
//<imput type='email' placeholder='Email' required />
//<imput type='submit' value='Send' />