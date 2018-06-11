import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import Header from '../components/Header'

const getSpendings = state => state.spendings
const restOfBudget = createSelector(getSpendings, spendings =>
  spendings.reduce((acc, curr) => acc - curr.amount, 1000)
)

const mapStateToProps = state => ({
  link: { url: '/settings', text: 'Settings' },
  children: `${restOfBudget(state)} / 1000`,
})

export default connect(mapStateToProps)(Header)
