import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
            <section>
                <Link to='/journal' style={{color: '#fff', textDecoration: 'none' }}><h1>Journal</h1></Link>
            </section>
            
            <section>
                <Link to='/meditations' style={{color: '#000', textDecoration: 'none' }}><h1>Meditations</h1></Link>
            </section>

            <section>
                <Link to='/resources' style={{color: '#fff', textDecoration: 'none' }}><h1>Resources</h1></Link>
            </section>
        </div>
    )
}

export default Home