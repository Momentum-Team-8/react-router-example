import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import 'bulma/css/bulma.css'
import '../App.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { requestLogin } from '../api.js'

const Login = ({ setAuthToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const history = useHistory()

  function handleSubmit (e) {
    e.preventDefault()
    // here I am making a fake api call to
    // authenticate my user
    requestLogin(username, password)
      .then((data) => {
        if (data && data.auth_token) {
          setAuthToken(username, data.auth_token)
          history.push('/')
        }
      })
      .catch((error) => {
        setErrors(error.message)
      })
  }

  return (
    <>
      <div className='logo'>
        <p
          className='has-text-primary has-text-centered'
        >
          Pug.ly
        </p>
        <i className='fas fa-paw' />
      </div>
      {/* Show the user a validation error if there is one */}
      {errors &&
        <p>{errors}</p>}
      <form className='form' onSubmit={handleSubmit}>
        <label className='label'>Username</label>
        <input
          className='input'
          type='text'
          placeholder='email@domain.com or janedoge123'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className='label'>Password</label>
        <input
          className='input'
          type='password'
          // using state to pass a value to this attribute
          // makes this a controlled component
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div id='form-buttons'>
          <button
            className='button is-primary'
            type='submit'
          >Login
          </button>
          <span>New to Pug.ly? &nbsp; <a className='has-text-primary' onClick={() => history.push('/signup')}>Register Now</a></span>
        </div>
      </form>
    </>
  )
}

export default Login
