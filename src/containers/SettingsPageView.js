import { connect } from 'react-redux'
import { updateBudget, resetAll } from '../redux/actions'
import SettingsPage from '../pages/SettingsPage'

const mapStateToProps = state => ({
  value: state.budget,
})

const mapDispatchToProps = dispatch => ({
  onChange: amount => dispatch(updateBudget(amount)),
  onReset: () => dispatch(resetAll()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage)
