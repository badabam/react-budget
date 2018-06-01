import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import BudgetHeader from '../components/BudgetHeader'

const getSpendings = state => state.spendings
const restOfBudget = createSelector(getSpendings, spendings =>
  spendings.reduce((acc, curr) => acc - curr.amount, 1000)
)

const mapStateToProps = state => ({
  restOfBudget: restOfBudget(state),
})

export default connect(mapStateToProps)(BudgetHeader)
