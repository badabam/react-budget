import React from 'react'
import SpendingForm from './SpendingForm'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('SpendingForm', () => {
  let wrapper
  let submitFunc

  beforeEach(() => {
    submitFunc = jest.fn()
    wrapper = shallow(
      <SpendingForm textValue="foo" amountValue={3} onSubmit={submitFunc} />
    )
  })

  describe('visuals', () => {
    beforeEach(() => {
      wrapper = mount(
        <SpendingForm textValue="foo" amountValue={3} onSubmit={submitFunc} />
      )
    })

    it('has two inputs', () => {
      expect(wrapper.find('input').length).toBe(2)
    })

    it('has one button', () => {
      expect(wrapper.find('button').length).toBe(1)
    })
  })

  describe('prop changes', () => {
    it('updates its textValue', () => {
      expect(toJson(wrapper)).toMatchSnapshot()
      wrapper.setProps({ textValue: 'bar' })
      expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('updates its amountValue', () => {
      expect(toJson(wrapper)).toMatchSnapshot()
      wrapper.setProps({ inputValue: 1000 })
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
})
