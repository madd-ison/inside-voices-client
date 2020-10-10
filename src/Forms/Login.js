import React, {useState} from 'react'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'
import '../App/Buttons.css'

function Login() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const handleSubmitJwtAuth = async e => {
    e.preventDefault()
    try {
        const {username, password} = e.target

        AuthApiService.postLogin({
            username: username.value,
            password: password.value,
        }) 
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                window.location = '/home'
            })
        // TokenService.saveAuthToken(
        //     TokenService.makeBasicAuthToken(username.value, password.value)
        // )
        // username.value = ''
        // password.value=''
    } catch (err) {
        console.error(err.message)
    }
  }
    return (
        <section>
        <form onSubmit={handleSubmitJwtAuth}>
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
            <button className='big-button' type='submit'>Login</button>
      </form> 
      </section>
        )
    }

export default Login