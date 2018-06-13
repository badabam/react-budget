import React, { Component } from 'react'
import styled from 'react-emotion'
import { formatThousands } from '../helpers'

const StyledList = styled('section')`
  grid-row: 2;
  padding: 20px;
  overflow-y: scroll;
`
const Row = styled('div')`
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 0 10px 14px 0;
`

export default class Spendings extends Component {
  render() {
    return (
      <StyledList>
        {this.props.spendings.map((spending, index) => (
          <Row key={index}>
            <span>{spending.text}</span>
            <span>{formatThousands(spending.amount)}</span>
          </Row>
        ))}
      </StyledList>
    )
  }
}
