import Actions from '../actions'
import { handleActions } from 'redux-actions'

export default handleActions(
  {
    [Actions.SUBMIT]: (state, action) => {
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
    },
    [Actions.UPDATE_INPUT]: (state, action) => {
      const { name, value } = action.payload
      return { ...state, [name]: value }
    },

    [Actions.UPDATE_BUDGET]: (state, action) => {
      return { ...state, budget: action.payload }
    },
  },
  {}
)
