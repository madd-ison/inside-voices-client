import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <Link to='/contact'><button>Contact Us</button></Link>
        </footer>
    )
}

export default Footer