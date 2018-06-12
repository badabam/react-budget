import React, { Component, createRef } from 'react'
import StyledButton from './StyledButton'
import StyledInput from './StyledInput'
import StyledForm from './StyledForm'
import Cleave from 'cleave.js/react'

const MoneyInput = StyledInput.withComponent(Cleave)

export default class SpendingForm extends Component {
  constructor(props) {
    super(props)
    this.input = createRef()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit()
    this.input.current && this.input.current.focus()
    this.cleave.setRawValue('')
  }

  onMoneyInit = cleave => (this.cleave = cleave)

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
        <MoneyInput
          options={{
            numeral: true,
            numeralDecimalScale: 2,
            prefix: '€ ',
            rawValueTrimPrefix: true,
          }}
          placeholder="Amount"
          onInit={this.onMoneyInit}
          onChange={e => {
            onInputChange({
              name: 'amountValue',
              value: e.target.rawValue,
            })
          }}
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
