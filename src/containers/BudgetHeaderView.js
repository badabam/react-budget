import { connect } from 'react-redux'
import BudgetHeader from '../components/BudgetHeader'

const mapStateToProps = state => ({
  restOfBudget: state.restOfBudget,
})

export default connect(mapStateToProps)(BudgetHeader)
