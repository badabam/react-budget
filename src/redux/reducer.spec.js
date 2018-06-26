import Actions from '../redux/actions'
import reducer from './reducer'

describe('reducer', () => {
  let state = {
    textValue: 'foo',
    amountValue: 3,
    spendings: [],
  }

  describe('Actions.SUBMIT', () => {
    it('creates a spending and clears input values', () => {
      expect(reducer(state, { type: Actions.SUBMIT })).toEqual({
        ...state,
        textValue: '',
        amountValue: 0,
        spendings: [{ text: 'foo', amount: 3 }],
      })
    })

    it('returns same state on empty amountValue', () => {
      const testState = { ...state, amountValue: 0 }
      expect(reducer(testState, { type: Actions.SUBMIT })).toEqual(testState)
    })

    it('returns same state on empty textValue', () => {
      const testState = { ...state, textValue: '' }
      expect(reducer(testState, { type: Actions.SUBMIT })).toEqual(testState)
    })
  })

  describe('Actions.UPDATE_INPUT', () => {
    const action = {
      type: Actions.UPDATE_INPUT,
      payload: { name: 'foo', value: 3 },
    }

    it('updates input by name', () => {
      expect(reducer(state, action)).toEqual({ ...state, foo: 3 })
    })
  })

  // Add the rest of your tests for actions here
})
