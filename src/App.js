import React, { Component } from 'react'
import '../src/App.css'
import Nav from '../src/components/Nav'
import Home from './containers/Home'
import ProjectsPage from './containers/ProjectsPage'
import BeatsPage from './containers/BeatsPage'
import AudioPage from './containers/AudioPage'
import ProjectPage from './components/ProjectPage'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/projects/:id' component={ ProjectPage }/>
          <Route exact path='/projects' component={ ProjectsPage }/>
          <Route exact path='/beats' component={ BeatsPage }/>
          <Route exact path='/audio' component={ AudioPage }/>
          <Route exact path='/' component={ Home }/>
          <Redirect from="*" to={ "/" }/>
        </Switch>
      </div>
    )};
}

export default App;