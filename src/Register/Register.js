import React from 'react'
import {Link, Route} from 'react-router-dom'
import './Register.css'

class Register extends React.Component {

    handleSubmit(event) {
        event.preventDefault()
    }
    
    render() {
    return (
        <div className='signup-form'>
        <form onSubmit={this.handleSubmit}>
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
                <input type="submit" value="Submit" />
      </form>
      </div>
        )
    }
}

export default Register