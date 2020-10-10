import React from 'react'
import ReactPlayer from 'react-player'
import './Audio.css'

function Audio(props) {
    return (
        <div className='meditation'>
            <section id='audio'>
                <h3>'{props.title}' {props.author === null ? null : `: ${props.author}`}</h3>
                <p>{props.type} Meditation</p>
                <ReactPlayer className='react-player' controls url={props.audio}/>
            </section>
        </div>
    )
}

export default Audio