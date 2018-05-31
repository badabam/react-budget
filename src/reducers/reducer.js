export default (state, action) => {
  switch (action.type) {
    case 'SUBMIT':
      if (state.amountValue.trim() === '' || state.textValue.trim() === '') {
        return state
      }
      return {
        ...state,
        spendings: [
          ...state.spendings,
          { text: state.textValue, amount: state.amountValue },
        ],
        restOfBudget: state.restOfBudget - state.amountValue,
        textValue: '',
        amountValue: '',
      }

    case 'UPDATE_INPUT':
      const { name, value } = action.payload
      return { ...state, [name]: value }

    default:
      return state
  }
}
