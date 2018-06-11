import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'
import { useLocalStorage } from './middleware'

import StartPage from './pages/StartPage'
import SettingsPageView from './containers/SettingsPageView'
import Grid from './components/Grid'

const getInitialState = () => {
  const savedState = localStorage.getItem('state')
  if (savedState) {
    return JSON.parse(savedState)
  } else {
    return initialState
  }
}

const store = createStore(
  reducer,
  getInitialState(),
  applyMiddleware(useLocalStorage),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
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
