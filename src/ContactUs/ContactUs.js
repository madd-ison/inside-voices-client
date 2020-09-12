import React from 'react'
import './ContactUs.css'

function ContactUs() {
    return (
        <section>
        <h2>Contact Us</h2>
        <form action="https://formspree.io/mbjprjbq" method="POST" id='contact'>
            <label for='name'>Name</label>
                <input type="text" name="name" />
            <label for='email'>Email</label>
                <input type="email" name="_replyto" />
            <label for='message'>Your message:</label>
                <textarea name='your-message'/>
                <input type="submit" value="Send"/>
        </form>
        </section>
    )
}

export default ContactUs