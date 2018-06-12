import { shallow } from 'enzyme'
import React from 'react'
import Spendings from './Spendings'

describe('Spendings', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Spendings
        spendings={[
          { text: 'foo', amount: '3' },
          { text: 'bar', amount: 5 },
          { text: 'baz', amount: 1 },
        ]}
      />
    )
  })

  it('shows a list of Rows', () => {
    expect(wrapper.children()).toHaveLength(3)
  })

  it('contains the right text in the row', () => {
    expect(
      wrapper
        .childAt(0)
        .childAt(0)
        .text()
    ).toEqual('foo')

    expect(
      wrapper
        .childAt(0)
        .childAt(1)
        .text()
    ).toEqual('3.00')
  })
})
