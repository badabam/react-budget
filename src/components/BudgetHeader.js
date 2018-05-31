import React, { Component } from 'react'

export default class BudgetHeader extends Component {
  render() {
    return <div>{this.props.restOfBudget} / 1000</div>
  }
}
