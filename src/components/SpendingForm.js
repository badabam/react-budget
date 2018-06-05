import React, { Component, createRef } from 'react'
import StyledButton from './StyledButton'
import StyledInput from './StyledInput'
import StyledForm from './StyledForm'

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
    const { textValue, amountValue, onInputChange } = this.props

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledInput
          placeholder="Name"
          onChange={e =>
            onInputChange({
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
            onInputChange({
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
