export default (state, action) => {
  switch (action.type) {
    case 'INIT':
      return { ...state, initialized: true }
    case 'ADD_SPENDING':
      return {
        ...state,
        spendings: [...state.spendings, { text: 'Mittagessen', sum: '7.50' }],
        restOfBudget: state.restOfBudget - 7.5,
      }
    default:
      return state
  }
}
