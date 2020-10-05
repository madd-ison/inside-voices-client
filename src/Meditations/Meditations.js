import React from 'react'
import './Meditations.css'
import ReactPlayer from 'react-player'
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
        <h2>{audio}</h2>
    )
}

export default Meditations