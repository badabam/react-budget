import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'

import StartPage from './pages/StartPage'
import SettingsPageView from './containers/SettingsPageView'
import Grid from './components/Grid'

const reduxDevToolsOptions = {}
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(reduxDevToolsOptions)
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
