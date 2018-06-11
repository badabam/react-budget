import { connect } from 'react-redux'
import SpendingForm from '../components/SpendingForm'
import { submitForm, updateFormInput } from '../actions'

const mapStateToProps = state => ({
  textValue: state.textValue,
  amountValue: state.amountValue,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(submitForm()),
  onInputChange: spending => dispatch(updateFormInput(spending)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpendingForm)
