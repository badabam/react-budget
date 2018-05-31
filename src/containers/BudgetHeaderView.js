import { connect } from 'react-redux'
import BudgetHeader from '../components/BudgetHeader'

const mapStateToProps = state => ({
  restOfBudget: state.spendings.reduce((acc, curr) => acc - curr.amount, 1000),
})

export default connect(mapStateToProps)(BudgetHeader)
