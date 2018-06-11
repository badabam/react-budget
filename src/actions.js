import { createAction } from 'redux-actions'

const Actions = {
  SUBMIT: 'SUBMIT',
  UPDATE_INPUT: 'UPDATE_INPUT',
  UPDATE_BUDGET: 'UPDATE_BUDGET',
}

export default Actions

export const submitForm = createAction(Actions.SUBMIT)
export const updateFormInput = createAction(Actions.UPDATE_INPUT)
export const updateBudget = createAction(Actions.UPDATE_BUDGET)
