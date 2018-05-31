import React, { Component } from 'react'
import { createStore } from 'redux'

import reducer from './reducers/reducer'
import initialState from './reducers/initialState'
import { init } from './actions/actions'

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
    store.dispatch(init())
  }

  render() {
    const state = store.getState()
    return <div>App {state.initialized && '(ready)'}</div>
  }
}

export default App
