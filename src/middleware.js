import Actions from './actions'
export const useLocalStorage = store => next => action => {
  const result = next(action)
  const stringifiedState = JSON.stringify(store.getState())
  localStorage.setItem('state', stringifiedState)
  if (action.type === Actions.SUBMIT || action.type === Actions.RESET_ALL) {
    console.log('middleware', stringifiedState)
    fetch('/state', {
      body: stringifiedState,
      method: 'POST',
      headers: { 'content-type': 'application/json' },
    }).then(res => console.log(res))
  }
  return result
}
