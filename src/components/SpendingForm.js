import React, { Component, createRef } from 'react'
import styled from 'react-emotion'
import StyledButton from './StyledButton'
import StyledInput from './StyledInput'

const StyledForm = styled('form')`
  grid-row: 3;
  padding: 0 10px 20px;
  display: grid;
  grid-gap: 10px;
`

export default class SpendingForm extends Component {
  constructor(props) {
    super(props)
    this.input = createRef()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit()
    this.input.current && this.input.current.focus()
  }

  render() {
    const { textValue, amountValue, updateFormInput } = this.props

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledInput
          placeholder="Name"
          onChange={e =>
            updateFormInput({
              name: 'textValue',
              value: e.target.value,
            })
          }
          innerRef={this.input}
          value={textValue}
        />
        <StyledInput
          placeholder="Amount"
          type="number"
          onChange={e =>
            updateFormInput({
              name: 'amountValue',
              value: e.target.value,
            })
          }
          value={amountValue}
        />
        <StyledButton
          disabled={textValue.trim() === '' || amountValue.trim() === ''}
        >
          Spend
        </StyledButton>
      </StyledForm>
    )
  }
}
