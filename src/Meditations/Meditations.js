import React from 'react'
import {Link} from 'react-router-dom'
import './Meditations.css'
import store from '../store'
import Audio from '../Audio/Audio'

function Meditations() {
    const audio = store.meditations.map(audio => 
        <Audio 
            key={audio.med_id} 
            type={audio.type} 
            title={audio.title}
            author={audio.author}
            audio={audio.file} /> )
    return (
        <div>
        <div id='back'>
            <Link to='/home'>
                <button className='small-button'>Back</button>
                </Link>
        </div>
            {audio}
        </div>
    )
}

export default Meditations