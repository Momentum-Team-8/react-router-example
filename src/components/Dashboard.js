import React, { useEffect, useState } from 'react'
import { requestUser } from '../api'

// I am destructuring my props object by passing a shorthand object
// as an argument to my Dashboard function.
// This is different syntax for const {username, ...} = props
const Dashboard = ({ username, setUsername, setToken, token }) => {
  // after the useEffect runs I want to save my
  // user information to the state of the Dashboard
  const [user, setUser] = useState({})

  useEffect(() => {
    return requestUser(token, username)
    // this promise will extract the data from
    // the api response
      .then(data => {
        setUser(data)
      })
      // re-render the component if the username
      // or token changes
  }, [token, username])

  const handleLogout = () => {
    setUsername('')
    setToken('')
  }

  return (
    <div className='dashboard'>
      <div className='card profile-card'>
        <div className='card-content'>
          <div className='card-content-header'>
            <div className='avatar'>
              <div
                style={{
                  backgroundImage: `url(${user.avatar_url})`
                }}
                id='avatar'
              />
              <h1>Hi, <span className='has-text-primary has-text-weight-bold'>{user.username}</span>!</h1>
            </div>
            <div className='divider' />
            <p className='title'>{user.bio}</p>
          </div>
          <button
            className='button is-primary'
            // no need to use an arrow function to run handleLogout
            // we've taken care of that already!
            onClick={handleLogout}
          >Logout
          </button>
        </div>
      </div>
      <p className='section-header title'>Photo Album</p>
      <div className='image-list'>
        {user.images && user.images.map(i => {
          return (
            <div id='image-list-item' key={i.id}>
              <div
                style={{ backgroundImage: `url(${i.url})` }}
                className='image'
              />
              <p>{i.caption}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard
