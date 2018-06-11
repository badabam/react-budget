import { connect } from 'react-redux'
import { updateBudget } from '../actions'
import SettingsPage from '../pages/SettingsPage'

const mapStateToProps = state => ({
  value: state.budget,
})

const mapDispatchToProps = dispatch => ({
  onChange: amount => dispatch(updateBudget(amount)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage)
