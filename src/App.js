import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'

import BudgetHeaderView from './containers/BudgetHeaderView'
import SpendingFormView from './containers/SpendingFormView'
import SpendingsView from './containers/SpendingsView'

import Grid from './components/Grid'

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
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
