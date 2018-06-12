import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'
import { useLocalStorage } from './middleware'

import StartPage from './pages/StartPage'
import SettingsPageView from './containers/SettingsPageView'
import Grid from './components/Grid'

import numeral from 'numeral'

numeral.register('locale', 'de', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  currency: {
    symbol: '€',
  },
})

numeral.locale('de')
numeral.defaultFormat('0.0,00')
const getInitialState = () => {
  const savedState = localStorage.getItem('state')
  if (savedState) {
    return JSON.parse(savedState)
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
