export default (state, action) => {
  switch (action.type) {
    case 'INIT':
      return { ...state, initialized: true }
  }

  return state
}
