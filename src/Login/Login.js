import React from 'react'

function Login() {
    return (
        <form>
            <label>
                Email
                <input 
                    type="text" 
                    name="username"
                    required 
                    />
            </label>
            <label>
                Password
                <input 
                    type="password" 
                    name="password"
                    required/>
            </label>
      </form>
    )
}

export default Login