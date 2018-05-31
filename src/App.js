import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { injectGlobal } from 'emotion'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'

import BudgetHeaderView from './containers/BudgetHeaderView'
import SpendingFormView from './containers/SpendingFormView'
import SpendingsView from './containers/SpendingsView'

import Grid from './components/Grid'

injectGlobal(`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    height: 100%;
    overflow: hidden;
    font-family: sans-serif;
    font-size: 100%;
  }
`)

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const state = store.getState()

    return (
      <Provider store={store}>
        <Grid>
          <BudgetHeaderView />
          <SpendingsView />
          <SpendingFormView />
        </Grid>
      </Provider>
    )
  }
}

export default App
