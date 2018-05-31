import React, { Component } from 'react'
import { createStore } from 'redux'

import { injectGlobal } from 'emotion'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'
import { onFormSubmit, updateFormInput } from './actions/actions'

import BudgetHeader from './components/BudgetHeader'
import Grid from './components/Grid'
import SpendingForm from './components/SpendingForm'
import Spendings from './components/Spendings'

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
    const dispatch = actionCreator => payload =>
      store.dispatch(actionCreator(payload))

    return (
      <Grid>
        <BudgetHeader restOfBudget={state.restOfBudget} />
        <Spendings spendings={state.spendings} />
        <SpendingForm
          textValue={state.textValue}
          amountValue={state.amountValue}
          onSubmit={dispatch(onFormSubmit)}
          updateFormInput={dispatch(updateFormInput)}
        />
      </Grid>
    )
  }
}

export default App
