import Actions from '../redux/actions'
import initialState from '../redux/initialState'

export default (state, action) => {
  switch (action.type) {
    case Actions.OVERRIDE_LOCAL_STATE:
      return { ...action.payload }

    case Actions.SUBMIT:
      if (
        state.amountValue == null ||
        state.amountValue === 0 ||
        state.textValue.trim() === ''
      ) {
        return state
      }
      return {
        ...state,
        spendings: [
          ...state.spendings,
          { text: state.textValue, amount: state.amountValue },
        ],
        textValue: '',
        amountValue: 0,
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
