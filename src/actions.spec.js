import { shallow, mount } from 'enzyme'
import Actions, {
  submitForm,
  updateFormInput,
  updateBudget,
  resetAll,
} from './actions'
import toJson from 'enzyme-to-json'

describe('actions', () => {
  it('creates the SUBMIT action', () => {
    expect(submitForm()).toEqual({ type: Actions.SUBMIT })
  })

  it('creates the UPDATE_INPUT action', () => {
    expect(updateFormInput()).toEqual({ type: Actions.UPDATE_INPUT })
  })

  it('creates the UPDATE_BUDGET action', () => {
    expect(updateBudget()).toEqual({ type: Actions.UPDATE_BUDGET })
  })

  it('creates the SUBMIT action', () => {
    expect(resetAll()).toEqual({ type: Actions.RESET_ALL })
  })
})
