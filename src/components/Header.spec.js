import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'
import { MemoryRouter } from 'react-router-dom'
import toJson from 'enzyme-to-json'

describe('Header', () => {
  let wrapper
  let link = { url: '/test', text: 'foo' }

  it('renders its children', () => {
    wrapper = shallow(
      <Header>
        <div>Hello</div>
      </Header>
    )
    const innerHtml = wrapper.html()
    expect(innerHtml).toContain('<div>Hello</div>')
  })

  it('renders its links', () => {
    wrapper = shallow(
      // to prevent errors when using Router in the app,
      // we need to wrap our components in MemoryRouter
      <MemoryRouter>
        <Header link={link}>
          <div>World</div>
        </Header>
      </MemoryRouter>
    )
    const innerHtml = wrapper.html()
    expect(innerHtml).toContain('href="/test"')
    expect(innerHtml).toContain('foo</a>')
    expect(innerHtml).toContain('right:10px;left:auto')
  })

  it('renders links also on the left', () => {
    wrapper = shallow(
      // to prevent errors when using Router in the app,
      // we need to wrap our components in MemoryRouter
      <MemoryRouter>
        <Header link={{ ...link, left: true }}>
          <div>World</div>
        </Header>
      </MemoryRouter>
    )
    const innerHtml = wrapper.html()
    expect(innerHtml).toContain('href="/test"')
    expect(innerHtml).toContain('foo</a>')
    expect(innerHtml).toContain('right:auto;left:10px')
  })

  it('keeps it snapshot', () => {
    wrapper = shallow(<Header link={link}>test</Header>)
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.setProps({ link: { ...link, left: true } })
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
