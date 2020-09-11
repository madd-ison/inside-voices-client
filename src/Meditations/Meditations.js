import React from 'react'
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
        <h1>{audio}</h1>
    )
}

export default Meditations