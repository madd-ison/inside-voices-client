import React from 'react'
import TokenService from '../services/token-service'
import '../App/Buttons.css'

function Logout() {
    const handleLogoutClick = () => {
            TokenService.clearAuthToken()
            window.location = '/'
        }
    return <button className='small-button' onClick={handleLogoutClick}>Logout</button>
}

export default Logout