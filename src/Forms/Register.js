import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'

export default class Register extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, nickname, username, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      full_name: full_name.value,
      nickname: nickname.value,
    })
      .then(user => {
        full_name.value = ''
        nickname.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
    console.log(username.value)
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name
          </label>
          <input
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name'>
          </input>
        </div>
        <div className='username'>
          <label htmlFor='RegistrationForm__user_name'>
            Username
          </label>
          <input
            name='username'
            type='text'
            required
            id='RegistrationForm__username'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </input>
        </div>
        <div className='nickname'>
          <label htmlFor='RegistrationForm__nickname'>
            Nickname
          </label>
          <input
            name='nickname'
            type='text'
            required
            id='RegistrationForm__nick_name'>
          </input>
        </div>
        <button type='submit'>
          Register
        </button>
      </form>
    )
  }
}