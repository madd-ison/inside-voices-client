import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className='home'>
                
                <Link to='/journal' style={{color: '#EFE2BA'}}>
                <section><h1>Journal</h1></section>
                </Link>

                <Link to='/meditations' style={{color: '#EFE2BA'}}>
                <section><h1>Meditations</h1></section>
                </Link>

                <Link to='/resources' style={{color: '#EFE2BA'}}>
                <section><h1>Resources</h1></section>
                </Link>
        </div>
    )
}

export default Home