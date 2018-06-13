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

  it('contains the right texts', () => {
    expect(
      wrapper
        .childAt(0)
        .childAt(0)
        .text()
    ).toEqual('foo')

    const keywords = ['foo', 'bar', 'baz', '3', '5', '1']
    const html = wrapper.html()
    const keywordIsInHtml = k => k => html.includes(k)
    expect(keywords.every(keywordIsInHtml)).toBe(true)
  })
})
