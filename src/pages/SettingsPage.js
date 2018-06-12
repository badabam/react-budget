import React from 'react'
import styled from 'react-emotion'
import Header from '../components/Header'
import StyledInput from '../components/StyledInput'
import StyledButton from '../components/StyledButton'

const link = { url: '/', text: 'Back', left: true }

const Label = styled('label')`
  display: block;
  margin: 0 0 10px;
`

const Padding = styled('div')`
  padding: 20px;
`

export default class SettingsPage extends React.Component {
  onChange = e => this.props.onChange(e.target.value)

  render() {
    return (
      <React.Fragment>
        <Header link={link}>Settings</Header>
        <Padding>
          <Label>Budget:</Label>
          <StyledInput
            type="number"
            value={this.props.value}
            onChange={this.onChange}
          />
        </Padding>
        <Padding>
          <Label>Reset:</Label>
          <StyledButton onClick={this.props.onReset}>Reset App</StyledButton>
        </Padding>
      </React.Fragment>
    )
  }
}
