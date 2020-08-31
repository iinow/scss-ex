import React from 'react'
import { Header, Section } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Main } from './pages'
import './scss/App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Section/>
        <Switch>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
