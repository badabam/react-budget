import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

const StyledHeader = styled('header')`
  grid-row: 1 / auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: cornflowerblue;
  color: white;
  font-size: 1.2em;
  position: relative;
`

const HeaderLink = styled(Link)`
  color: white;
  font-size: 0.8em;
  position: absolute;
`

export default class Header extends Component {
  static defaultProps = {
    link: { left: true },
  }

  render() {
    const { link } = this.props

    const linkPositionStyle = {
      right: link.left ? 'auto' : '10px',
      left: link.left ? '10px' : 'auto',
    }

    return (
      <StyledHeader>
        <HeaderLink style={linkPositionStyle} to={link.url}>
          {link.text}
        </HeaderLink>
        {this.props.children}
      </StyledHeader>
    )
  }
}
