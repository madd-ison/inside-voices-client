import React from 'react'
import './ContactUs.css'

function ContactUs() {
    return (
        <section>
        <h2>Contact Us</h2>
        <form action="https://formspree.io/mbjprjbq" method="POST" id='contact'>
            <label for='name'>Name</label>
                <input type="text" name="name" />
                <br />
            <label for='email'>Email</label>
                <input type="email" name="_replyto" />
                <br />
            <label for='message'>Your message:</label>
                <textarea className='styled-textarea' name='your-message'/>
                <br />
                <button className='small-button' type="submit">Send</button>
        </form>
        </section>
    )
}

export default ContactUs