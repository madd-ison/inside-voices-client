import React, {useState} from 'react'
import TokenService from '../services/token-service'

function Login() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const handleSubmitBasicAuth = e => {
    e.preventDefault()
    try {
        const credentials = {username, password}
        console.log(credentials)
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(credentials)
        )
    } catch (err) {
        console.error(err.message)
    }
  }
    return (
        <form onSubmit={handleSubmitBasicAuth}>
            <label>
                Username
                <input 
                    type="text" 
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required 
                    />
            </label>
            <label>
                Password
                <input 
                    type="password" 
                    name="password"
                    password={password}
                    onChange={e => setPassword(e.target.value)}
                    required/>
            </label>
            <button type='submit'>Login</button>
      </form> 
        )
    }

export default Login