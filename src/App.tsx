import React from 'react'
import { Header, Section } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Main, Login, Register, Profiles } from './pages'
import './scss/App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/profile">
            <Profiles />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
