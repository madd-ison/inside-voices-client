import React, {useState} from 'react'
import store from '../store'
import {v4 as uuid} from 'uuid'

//signUpUser

function Register() {
const [inputData, setInputData] = useState({username: '', password: ''})

function handleChange(event) {
    const {name, value} = event.target
    setInputData(prevInputData => ({...prevInputData, [name]: value}))
}

function handleSubmit() {
    signUpUser(inputData)
}

const signUpUser = async (user) => {
    const id = uuid()
    store.users.push({...user, id})
    return user
  }
    return (
        <div className='signup-form'>
        <form>
            <label>
                Email
                <input 
                    type="text" 
                    name="username"
                    required 
                    onChange={handleChange}
                    />
            </label>
            <label>
                Password
                <input 
                    type="password" 
                    name="password"
                    required
                    onChange={handleChange} />
            </label>
            <br />
            <label>
                Confirm Password
                <input type="password"  
                        name="confirmPassword"
                        required />
            </label>
                <br />
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
      </div>
        )
    }

export default Register