import React, { Component } from 'react'

export default class LunchButton extends Component {
  render() {
    return (
      <button style={{ gridRow: 3 }} onClick={this.props.onLunchButtonClick}>
        Mittagessen buchen
      </button>
    )
  }
}
