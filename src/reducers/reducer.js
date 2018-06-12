import Actions from '../actions'
import initialState from '../reducers/initialState'

export default (state, action) => {
  switch (action.type) {
    case Actions.SUBMIT:
      if (state.amountValue.trim() === '' || state.textValue.trim() === '') {
        return state
      }
      return {
        ...state,
        spendings: [
          ...state.spendings,
          { text: state.textValue, amount: state.amountValue },
        ],
        textValue: '',
        amountValue: '',
      }
    case Actions.UPDATE_INPUT:
      const { name, value } = action.payload
      return { ...state, [name]: value }

    case Actions.UPDATE_BUDGET:
      return { ...state, budget: action.payload }

    case Actions.RESET_ALL:
      return { ...initialState }

    default:
      return state
  }
}
