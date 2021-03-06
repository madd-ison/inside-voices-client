import React from 'react'
import './LandingPage.css'
import Register from '../Forms/Register'
import journal from '../img/journal.png'
import resources from '../img/resources.png'
import meditations from '../img/meditations.png'

function LandingPage(props) {
    return (
        <div className='about-us'>
            <section>
                <h1>Check In On <em>You</em>.</h1>
                <img src={journal} alt='journal page' />
                <p>Record moments of inspiration, 
                    reflect on daily thoughts and accomplishments, 
                    track your growth, and tell yourself what you need to hear.
                </p>
            </section>

            <section>
                <h1>Go Within.</h1>
                <img src={meditations} alt='meditations page' />
                <p>Experience healthy moments of stillness.</p>
            </section>

            <section>
                <h1>NYC Resources</h1>
                <img src={resources} alt='resources' />
                <p>Inside Voices helps you connect with the community that wants 
                    you to experience joy. Find an ever-growing list of free food fridges, 
                    local aid funds, and low cost mental health care.
                </p>
            </section>

            <section>
                <h1>Let's take care of each other.</h1>
                <p>Sign up for a free account here:</p>
                <Register onSubmit={props.onSubmit} />
            </section>

        </div>
    )
}

export default LandingPage