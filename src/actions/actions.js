export const onFormSubmit = () => ({
  type: 'SUBMIT',
})

export const updateFormInput = payload => ({
  type: 'UPDATE_INPUT',
  payload,
})
