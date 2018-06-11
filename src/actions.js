import { createAction } from 'redux-actions'

const Actions = {
  SUBMIT: 'SUBMIT',
  UPDATE_INPUT: 'UPDATE_INPUT',
}

export default Actions

export const submitForm = createAction(Actions.SUBMIT)
export const updateFormInput = createAction(Actions.UPDATE_INPUT)
