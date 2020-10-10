import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import '../App/Buttons.css'

function Footer() {
    return (
        <footer>
            <Link to='/contact'><button className='small-button'>Contact Us</button></Link>
        </footer>
    )
}

export default Footer