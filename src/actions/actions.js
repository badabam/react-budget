import { createAction } from 'redux-actions'

const Actions = {
  SUBMIT: Symbol(),
  UPDATE_INPUT: Symbol(),
}

export default Actions

export const onFormSubmit = createAction(Actions.SUBMIT)
export const updateFormInput = createAction(Actions.UPDATE_INPUT)
