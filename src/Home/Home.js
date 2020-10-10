import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <section>
                <Link to='/journal' style={{color: '#fff'}}><h1>Journal</h1></Link>
            </section>
            
            <section>
                <Link to='/meditations' style={{color: '#000'}}><h1>Meditations</h1></Link>
            </section>

            <section>
                <Link to='/resources' style={{color: '#fff'}}><h1>Resources</h1></Link>
            </section>
        </div>
    )
}

export default Home