import React, { Component } from 'react'
import { createStore } from 'redux'

import styled from 'react-emotion'
import { injectGlobal } from 'emotion'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'

import BudgetHeader from './components/BudgetHeader'
import Spendings from './components/Spendings'
import LunchButton from './components/LunchButton'

injectGlobal(`
  body {
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
`)

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Grid = styled('div')`
  display: grid;
  grid-template-rows: 40px auto 40px;
  height: 100vh;
`

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const state = store.getState()
    return (
      <Grid>
        <BudgetHeader restOfBudget={state.restOfBudget} />
        <Spendings spendings={state.spendings} />
        <LunchButton
          onLunchButtonClick={e => store.dispatch({ type: 'ADD_SPENDING' })}
        />
      </Grid>
    )
  }
}

export default App
