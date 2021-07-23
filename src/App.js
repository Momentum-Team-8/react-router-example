import useLocalStorageState from 'use-local-storage-state'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import 'bulma/css/bulma.css'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'

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
      <Router>
        <Switch>
          <Route
            path='/login'
            component={() =>
              <Login setAuthToken={setAuthToken} />}
          />
          <Route
            path='/signup'
            component={() => <Signup />}
          />
          <Route
            exact path='/' component={() => <Dashboard
              username={username}
              setUsername={setUsername}
              setToken={setToken}
              token={token}
                                            />}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
