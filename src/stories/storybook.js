import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../components/Header'
import SpendingForm from '../components/SpendingForm'

storiesOf('Header', module)
  .add('link on the right', () => (
    <Router>
      <Header link={{ url: '#', text: 'Link' }}>Hello world</Header>
    </Router>
  ))
  .add('link on the left', () => (
    <Router>
      <Header link={{ url: '#', text: 'Link', left: true }}>Hello world</Header>
    </Router>
  ))

storiesOf('SpendingForm', module).add('default', () => (
  <SpendingForm textValue={'text'} amountValue={'999'} onInputChange={action} />
))
