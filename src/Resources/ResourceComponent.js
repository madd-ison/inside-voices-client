import React from 'react'

function ResourceComponent(props) {
    return (
        <div id='resource'>
            <h3>{props.name}</h3>
            <h3>{props.contact}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default ResourceComponent