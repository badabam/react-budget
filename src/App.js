import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'

import reducer from './redux/reducer'
import initialState from './redux/initialState'
import { useLocalStorage } from './middleware'

import StartPage from './pages/StartPage'
import SettingsPageView from './containers/SettingsPageView'
import Grid from './components/Grid'

import { overrideLocalState } from './redux/actions'

const Router = window.cordova ? HashRouter : BrowserRouter

const getInitialState = () => {
  let savedState

  try {
    savedState = window.localStorage.getItem('state')
  } catch (error) {
    return initialState
  }

  if (savedState) {
    try {
      console.log('savedState')
      return JSON.parse(savedState)
    } catch (err) {
      console.warn('ERROR: JSON parsing error')
      return initialState
    }
  } else {
    return initialState
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  getInitialState(),
  composeEnhancers(applyMiddleware(useLocalStorage))
)

class App extends Component {
  componentDidMount() {
    if (!window.cordova) {
      this.fetchState()
    }
  }

  fetchState = () => {
    fetch('/state')
      .then(res => res.json())
      .catch(console.log)
      .then(
        state =>
          Object.keys(state).length && store.dispatch(overrideLocalState(state))
      )
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Grid>
            <Route exact path="/" component={StartPage} />
            <Route path="/settings" component={SettingsPageView} />
          </Grid>
        </Router>
      </Provider>
    )
  }
}

export default App
