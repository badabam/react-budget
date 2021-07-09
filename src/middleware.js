import Actions from './redux/actions'
export const useLocalStorage = store => next => action => {
  const result = next(action)
  const stringifiedState = JSON.stringify(store.getState())
  try {
    window.localStorage.setItem('state', stringifiedState)
  } catch (error) {
    console.warn(error)
  }
  if (action.type === Actions.SUBMIT || action.type === Actions.RESET_ALL) {
    fetch('/state', {
      body: stringifiedState,
      method: 'POST',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => console.log(res))
      .catch(console.warn)
  }
  return result
}
