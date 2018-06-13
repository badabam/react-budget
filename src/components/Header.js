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
    const { url: linkUrl, text: linkText, left: isLinkLeft } = this.props.link

    const linkPositionStyle = {
      right: isLinkLeft ? 'auto' : '10px',
      left: isLinkLeft ? '10px' : 'auto',
    }

    return (
      <StyledHeader>
        {linkUrl &&
          linkText && (
            <HeaderLink style={linkPositionStyle} to={linkUrl}>
              {linkText}
            </HeaderLink>
          )}
        {this.props.children}
      </StyledHeader>
    )
  }
}
