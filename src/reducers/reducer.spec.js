import Actions from '../actions'
import reducer from './reducer'

describe('reducer', () => {
  let state = {
    textValue: 'foo',
    amountValue: 'bar',
    spendings: [],
  }

  describe('Actions.SUBMIT', () => {
    it('creates a spending and clears input values', () => {
      expect(reducer(state, { type: Actions.SUBMIT })).toEqual({
        ...state,
        textValue: '',
        amountValue: '',
        spendings: [{ text: 'foo', amount: 'bar' }],
      })
    })

    it('returns same state on empty amountValue', () => {
      const testState = { ...state, amountValue: '  ' }
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
      payload: { name: 'foo', value: 'bar' },
    }

    it('updates input by name', () => {
      expect(reducer(state, action)).toEqual({ ...state, foo: 'bar' })
    })
  })

  // Add the rest of your tests for actions here
})
