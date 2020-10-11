import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className='home'>
                
                <Link to='/journal' style={{color: '#EFE2BA'}}>
                <button className='big-button'><h1>Journal</h1></button>
                </Link>
                <br />
                <Link to='/meditations' style={{color: '#EFE2BA'}}>
                <button className='big-button'><h1>Meditations</h1></button>
                </Link>
                <br />
                <Link to='/resources' style={{color: '#EFE2BA'}}>
                <button className='big-button'><h1>Resources</h1></button>
                </Link>
        </div>
    )
}

export default Home