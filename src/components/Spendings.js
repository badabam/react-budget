import React, { Component } from 'react'

export default class Spendings extends Component {
  render() {
    return (
      <div style={{ gridRow: 2 }}>
        <ul>
          {this.props.spendings.map((spending, index) => (
            <li key={index}>Mittagessen (7,50)</li>
          ))}
        </ul>
      </div>
    )
  }
}
