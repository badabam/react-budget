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
  right: ${props => (props.left ? 'auto' : '10px')};
  left: ${props => (props.left ? '10px' : 'auto')};
`

export default class Header extends Component {
  render() {
    const { link } = this.props
    return (
      <StyledHeader>
        <HeaderLink left={link.left} to={link.url}>
          {link.text}
        </HeaderLink>
        {this.props.children}
      </StyledHeader>
    )
  }
}
