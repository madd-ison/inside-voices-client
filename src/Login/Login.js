import React from 'react'
import './Login.css'

function Login() {
    return (
    <div className='login-form'>
        <form>
            <label>
                Email
            <input type="text" name="email" />
            </label>

            <br />

            <label>
                Password
            <input type="text" name="password" />
            </label>

            <br />

            <input type="submit" value="Log In" />
        </form>
    </div>
    )
}

export default Login