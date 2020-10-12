import React from 'react'
import './ContactUs.css'

function ContactUs() {
    return (
        <section>
        <h2>Contact Us</h2>
        <form action="https://formspree.io/mbjprjbq" method="POST" id='contact'>
            <label htmlFor='name'>Name</label>
                <input id='user-name' type="text" name="name" />
                <br />
            <label htmlFor='email'>Email</label>
                <input id='user-email' type="email" name="_replyto" />
                <br />
            <label htmlFor='message'>Your message:</label>
                <textarea id='user-message' className='styled-textarea' name='your-message'/>
                <br />
                <button className='small-button' type="submit">Send</button>
        </form>
        </section>
    )
}

export default ContactUs