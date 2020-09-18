import React, {useState, useContext} from 'react'
import {Context} from '../Context'

function Login() {
//const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')

    return (
        <form>
            <label>
                Email
                <input 
                    type="text" 
                    name="username"
                    // onChange={() => setEmail()}
                    required 
                    />
            </label>
            <label>
                Password
                <input 
                    type="password" 
                    name="password"
                    // onChange={() => setPassword}
                    required/>
            </label>
      </form>
    )
}

export default Login