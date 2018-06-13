import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { formatShort, formatThousands } from '../helpers'
import Header from '../components/Header'

const getSpendings = state => state.spendings
const getBudget = state => state.budget

const restOfBudget = createSelector(
  getSpendings,
  getBudget,
  (spendings, total) =>
    formatThousands(spendings.reduce((acc, curr) => acc - curr.amount, total))
)

const mapStateToProps = state => ({
  link: { url: '/settings', text: 'Settings' },
  children: `${restOfBudget(state)} / ${formatShort(state.budget)}`,
})

export default connect(mapStateToProps)(Header)
