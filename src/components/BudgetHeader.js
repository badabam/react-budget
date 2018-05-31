import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledHeader = styled('header')`
  grid-row: 1 / auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: cornflowerblue;
  color: white;
  font-size: 1.2em;
`
export default class BudgetHeader extends Component {
  render() {
    return <StyledHeader>{this.props.restOfBudget} / 1000</StyledHeader>
  }
}
