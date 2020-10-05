import React from 'react'
import './Resources.css'
import Accordion from '../utils/Accordion'


function Resources() {
    return (
        <section>
            <h1>Find what you need in NYC.</h1>
            <Accordion
                title='Food'
                content="<a href='#'>Link</a>
                    <br />
                    <a href='#'>Another Link</a>"
            />
            <Accordion
                title='Wellness'
                content="OpenPath"
            />
            <Accordion 
                title='Youth'
                content="!!!"
            />
            <Accordion 
                title='Mutual Aid Efforts'
                content='links'
            />
            <Accordion 
                title='LGBTQIA+'
                content="links"
            />
            <Accordion
                title='Housing'
                content="
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
            />
            <Accordion 
                title='*Alternatives to calling the police*'
                content='x'
            />
        </section>
    )
}

export default Resources