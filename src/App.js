import useLocalStorageState from 'use-local-storage-state'

import './App.css'
import 'bulma/css/bulma.css'

import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App () {
  // I am using a library called use-local-storage-stage to store
  // my username and token in local storage. This will keep me
  // logged in between sessions.
  const [username, setUsername] = useLocalStorageState('username', '')
  const [token, setToken] = useLocalStorageState('token', '')

  function setAuthToken (username, token) {
    setUsername(username)
    setToken(token)
  }

  return (
    <div className='
      container
      is-flex
      is-flex-direction-column
      is-align-items-center
      is-justify-content-center'
    >
      {/* I am checking for a token which for the purpose
      of this App means my user is logged in */}
      {token
        ? <Dashboard
            setToken={setToken}
            setUsername={setUsername}
            token={token}
            username={username}
          />
        : <Login setAuthToken={setAuthToken} />}
    </div>
  )
}

export default App
