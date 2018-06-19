import { createAction } from 'redux-actions'

const Actions = {
  SUBMIT: 'SUBMIT',
  UPDATE_INPUT: 'UPDATE_INPUT',
  UPDATE_BUDGET: 'UPDATE_BUDGET',
  RESET_ALL: 'RESET_ALL',
  OVERRIDE_LOCAL_STATE: 'OVERRIDE_LOCAL_STATE',
}

export default Actions

export const submitForm = createAction(Actions.SUBMIT)
export const updateFormInput = createAction(Actions.UPDATE_INPUT)
export const updateBudget = createAction(Actions.UPDATE_BUDGET)
export const resetAll = createAction(Actions.RESET_ALL)
export const overrideLocalState = createAction(Actions.OVERRIDE_LOCAL_STATE)
