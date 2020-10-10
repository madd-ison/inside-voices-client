import React, {useState} from 'react'
import AuthApiService from '../services/auth-api-service'
import '../App/Buttons.css'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const {username, password} = e.target

      AuthApiService.postUser({
          username: username.value,
          password: password.value,
      }) 
          .then(user => {
              username.value = ''
              password.value = ''
              window.location = '/home'
          })
  } catch (err) {
      console.error(err.message)
  }
}
    return (
      <form
        className='RegistrationForm'
        onSubmit={handleSubmit}
      >
        <div className='username'>
          <label htmlFor='RegistrationForm__user_name'>
            Username
          </label>
          <input
            name='username'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            >
          </input>
        </div>
        <div className='reg-password'>
          <label htmlFor='RegistrationForm__password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            >
          </input>
        </div>
        <button className='big-button' type='submit'>
          Register
        </button>
      </form>
    )
  }
export default Register