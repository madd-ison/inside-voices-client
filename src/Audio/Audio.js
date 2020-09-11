import React from 'react'

function Audio(props) {
    return (
        <div className='meditation'>
            <section id='audio'>
            <h1>{props.title} {props.author === null ? null : `: ${props.author}`}</h1>
            <h3>{props.type} meditation</h3>
            </section>
        </div>
    )
}

export default Audio