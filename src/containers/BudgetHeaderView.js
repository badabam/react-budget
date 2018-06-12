import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import Header from '../components/Header'
import numeral from 'numeral'

const formatCurrency = num => numeral(num).format('0,0')

const getSpendings = state => state.spendings
const getBudget = state => state.budget

const restOfBudget = createSelector(
  getSpendings,
  getBudget,
  (spendings, total) =>
    formatCurrency(spendings.reduce((acc, curr) => acc - curr.amount, total))
)

const mapStateToProps = state => ({
  link: { url: '/settings', text: 'Settings' },
  children: `${restOfBudget(state)} / ${formatCurrency(state.budget)}`,
})

export default connect(mapStateToProps)(Header)
