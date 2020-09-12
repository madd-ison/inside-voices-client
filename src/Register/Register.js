import React from 'react'
import './Register.css'

function Register() {
    return (
        <div className='signup-form'>
        <form>
            <label>
                Email
                <input 
                    type="text" 
                    name="username"
                    required />
            </label>
            <label>
                Password
                <input 
                    type="password" 
                    name="password"
                    required />
            </label>
            <br />
            <label>
                Confirm Password
                <input type="password"  
                        name="confirmPassword"
                        required />
            </label>
                <br />
            <button type="submit">Sign Up</button>
      </form>
      </div>
        )
    }

export default Register