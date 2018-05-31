import React, { Component } from 'react'

export default class LunchButton extends Component {
  render() {
    return (
      <button onClick={this.props.onLunchButtonClick}>
        Mittagessen buchen
      </button>
    )
  }
}
