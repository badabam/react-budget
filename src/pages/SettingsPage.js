import React from 'react'
import Header from '../components/Header'

const link = { url: '/', text: 'Back', left: true }
export default function SettingsPage() {
  return (
    <React.Fragment>
      <Header link={link}>Settings</Header>
    </React.Fragment>
  )
}
